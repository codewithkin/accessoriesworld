import { NextRequest, NextResponse } from "next/server";

export async function POST (request: NextRequest) {
    try {

    } catch (e) {
        console.log("An error occured while generating receipt: ", e);

        return NextResponse.json({
            message: "An error occured while generating receipt"
        },{
            status: 500
        })
    }
}