import { Badge } from '@/components/ui/badge'
import React from 'react'

function Receipt() {
  return (
    <section className="section md:px-20 px-4 min-h-screen">
        <article className="flex justify-center items-center flex-col gap-2">
            <Badge className='rounded-full p-2'>Accessories world</Badge>
            <h2 className='font-semibold text-green-500 text-2xl md:text-5xl'>Thank you for your purchase !</h2>
            <p className="text-slate-500">
                You can download your receipt to collect your order in-store
            </p>
        </article>
    </section>
  )
}

export default Receipt
