"use client";
import { Badge } from '@/components/ui/badge'
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import axios from "axios";
import { Skeleton } from '@/components/ui/skeleton';

function Receipt() {
    // Get the receipt's id
    const { id } = useParams(); // Access the dynamic ID

    // Get the receipt's data
    const {data: receipt, isLoading: loading} = useQuery({
        queryKey: ["receipt"],
        queryFn: async () => {
            // Get the receipt's data
            const response = await axios.get(`/api/receipt?id=${id}`);

            return response.data;
        }
    })

    console.log("Receipt: ", receipt);

  return (
    <section className="section md:px-20 px-4 min-h-screen">
        <article className="flex justify-center items-center flex-col gap-2 text-center">
            <Badge className='rounded-full p-2'>Accessories world</Badge>
            <h2 className='font-semibold text-green-500 text-3xl md:text-5xl'>Thank you for your purchase !</h2>
            <p className="text-slate-500">
                You can download your receipt to collect your order in-store
            </p>
        </article>

        <article className="flex flex-col justify-center items-center gap-4 w-full mt-8">
            {
                loading ?
                <Skeleton className='w-full md:w-120 h-200 rounded-xl shadow-lg bg-slate-100' /> :
                <h2>Hello</h2>
            }
        </article>
    </section>
  )
}

export default Receipt
