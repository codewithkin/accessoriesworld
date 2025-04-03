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
