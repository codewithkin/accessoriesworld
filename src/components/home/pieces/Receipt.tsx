import { formatCurrency } from "@/components/reusable/secondary/CartDrawer";
import { Receipt as ReceiptType } from "@prisma/client";
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
    </article>
  );
}

export default Receipt;
