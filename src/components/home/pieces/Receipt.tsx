import { formatCurrency } from "@/components/reusable/secondary/CartDrawer";
import { Label } from "@/components/ui/label";
import { Product, Receipt as ReceiptType } from "@prisma/client";
import { CheckCheckIcon } from "lucide-react";
import React from "react";

function Receipt({ receipt }: { receipt: any }) {
  return (
    <article className="rounded-xl shadow-md bg-white p-4 border border-purple-200">
      <article className="flex flex-col gap-4 items-center">
        <article className="bg-slate-100 rounded-full p-4">
          <CheckCheckIcon className="text-green-500" size={28} />
        </article>

        <h4 className="text-xl font-semibold">Payment successful</h4>

        <h2>
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
    </article>
  );
}

export default Receipt;
