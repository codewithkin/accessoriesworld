import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Your AccessoriesWorld receipt",
  description: "Download or view your accessoriesworld receipt",
};

function Receipts({ children }: Readonly<{ children: ReactNode }>) {
  return <>{children}</>;
}

export default Receipts;
