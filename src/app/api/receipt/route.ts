import { prisma } from "@/prisma";
import { Product } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    // Get the products from the response body
    const body = await request.json();

    const cart: Product[] = JSON.parse(body.cart);
    const customerName: string = body.customerName;
    const customerAddress: string = body.customerAddress;
    const totalAmount: number = parseInt(body.totalAmount);

    // Create a new receipt in the db
    const receipt = await prisma.receipt.create({
      data: {
        products: cart,
        customerName,
        customerAddress,
        totalAmount,
      },
    });

    return NextResponse.json({
      receipt,
    });
  } catch (e) {
    console.log("An error occured while generating receipt: ", e);

    return NextResponse.json(
      {
        message: "An error occured while generating receipt",
      },
      {
        status: 500,
      },
    );
  }
}

// Get a specific receipt
export async function GET(request: NextRequest) {
  try {
    // Get the receipt's id
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      console.log("Receipt id was not provided");

      return NextResponse.json(
        {
          message: "Receipt id was not provided",
        },
        { status: 500 },
      );
    }

    // Get the receipt's data
    const receipt = await prisma.receipt.findUnique({
      where: {
        id: id,
      },
    });

    return NextResponse.json(receipt);
  } catch (e) {
    console.log("An error occured while fetching receipt's data: ", e);

    return NextResponse.json(
      {
        message: "An error occured",
      },
      { status: 500 },
    );
  }
}
