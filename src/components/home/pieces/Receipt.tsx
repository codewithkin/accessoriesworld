"use client";
import { formatCurrency } from "@/components/reusable/secondary/CartDrawer";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Product, Receipt as ReceiptType } from "@prisma/client";
import { CheckCheckIcon } from "lucide-react";
import { format } from "date-fns";
import html2canvas from "html2canvas";

function Receipt({ receipt }: { receipt: any }) {
  const handleDownloadReceipt = () => {
    const element = document.getElementById("receipt-container");
    if (element) {
      html2canvas(element, { scale: 3 }).then((canvas) => {
        const imageData = canvas.toDataURL("image/png");
        const link = document.createElement("a");
        link.href = imageData;
        link.download = "receipt.png";
        link.click();
      });
    }
  };

  return (
    <article
      id="receipt-container"
      className="rounded-xl shadow-md bg-white py-4 px-4 md:px-12 border border-purple-200"
    >
      <article className="flex flex-col gap-8 items-center">
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

      {/* Customer details */}
      <article className="w-full flex flex-col gap-8 items-center mt-4">
        <article className="w-full flex justify-between items-center">
          <h3 className="text-lg font-semibold text-slate-500">
            Customer Name:{" "}
          </h3>
          <h3>{receipt.customerName}</h3>
        </article>
        <article className="w-full flex justify-between items-center">
          <h3 className="text-lg font-semibold text-slate-500">Address: </h3>
          <h3>{receipt.customerAddress}</h3>
        </article>
      </article>

      {/* Order Details */}
      <article className="flex flex-col gap-8 w-full my-8">
        <article className="flex flex-col gap-8">
          <article className="w-full flex justify-between items-center">
            <h3 className="text-lg font-semibold text-slate-500">
              Order number:{" "}
            </h3>
            <p className="text-sm">{receipt.id}</p>
          </article>
          <article className="w-full flex justify-between items-center">
            <h3 className="text-lg font-semibold text-slate-500">Date: </h3>
            <p className="text-sm">
              {format(receipt.createdAt, "d MMMM yyyy")}
            </p>
          </article>
          <article className="flex flex-col gap-8">
            <Label className="text-lg">Items bought</Label>

            <article className="flex flex-col gap-2 w-full">
              {receipt.products.map((product: Product) => {
                return (
                  <article
                    key={product.name}
                    className="flex justify-between items-center w-full"
                  >
                    <h3 className="text-md font-medium text-slate-400">
                      {product.name}
                    </h3>
                    <p>{formatCurrency(product.price)}</p>
                  </article>
                );
              })}
            </article>
          </article>
        </article>

        <article className="flex justify-between items-center w-full">
          <h3 className="text-lg font-medium">Total</h3>
          <p>{formatCurrency(receipt.totalAmount)}</p>
        </article>
      </article>

      {/* Download button */}
      <Button
        className="w-full"
        variant="default"
        onClick={handleDownloadReceipt}
      >
        Download Receipt
      </Button>

      <article className="flex flex-col text-center my-4 justify-center">
        <p className="text-md text-slate-400 text-center">Mutare CBD</p>
        <p className="text-md text-slate-400 text-center">
          Africa Mall Room Number 4
        </p>
        <p className="text-md text-slate-400 text-center">
          (Coming from Robots)
        </p>
      </article>
    </article>
  );
}

export default Receipt;
