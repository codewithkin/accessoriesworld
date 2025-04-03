import { formatCurrency } from "@/components/reusable/secondary/CartDrawer";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Product, Receipt as ReceiptType } from "@prisma/client";
import { CheckCheckIcon } from "lucide-react";
import React from "react";

function Receipt({ receipt }: { receipt: any }) {
  return (
    <article className="rounded-xl shadow-md bg-white py-4 px-4 md:px-12 border border-purple-200">
      <article className="flex flex-col gap-4 items-center">
        {/* Branding */}
        <article className="flex flex-col gap-2 items-center">
          <h3 className="text-2xl mt-4 font-semibold text-red-500">
            Accessories World
          </h3>
          <p className="text-md text-slate-400 text-center text-center">
            Home of the best accessories in Mutare
          </p>
        </article>

        <article className="bg-slate-100 rounded-full p-4">
          <CheckCheckIcon className="text-green-500" size={28} />
        </article>

        <h4 className="text-xl font-semibold">Payment successful</h4>

        <h2 className="text-center">
          We have received your payment of{" "}
          <span className="font-semibold">
            {formatCurrency(receipt.totalAmount)}
          </span>
        </h2>
      </article>

      {/* Details */}
      <article className="flex flex-col gap-4 w-full my-8">
        <Label className="text-lg">Items bought</Label>

        <article className="flex flex-col gap-2 w-full">
          {receipt.products.map((product: Product) => {
            return (
              <article
                key={product.name}
                className="flex justify-between items-center w-full"
              >
                <h3 className="text-md font-medium">{product.name}</h3>
                <p>{formatCurrency(product.price)}</p>
              </article>
            );
          })}
        </article>

        <article className="flex justify-between items-center w-full">
          <h3 className="text-lg font-medium">Total</h3>
          <p>{formatCurrency(receipt.totalAmount)}</p>
        </article>
      </article>

      {/* Download button */}
      <Button className="w-full" variant="default">
        Download Receipt
      </Button>

      <article className="flex flex-col text-center my-4 justify-center">
        <p className="text-md text-slate-400 text-center">Mutare CBD</p>
        <p className="text-md text-slate-400 text-center">Africa Mall Room Number 4</p>
        <p className="text-md text-slate-400 text-center">(Coming from Robots)</p>
      </article>
    </article>
  );
}

export default Receipt;
