import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { Dialog, DialogTrigger } from '../ui/dialog'
import { ShoppingCart } from 'lucide-react'

function DesktopNavbar() {
  const links = [{
    id: 1,
    title: "Home",
    href: "/"
  },
  {
    id: 2,
    title: "Products",
    href: "/products"
  },
  {
    id: 3,
    title: "About",
    href: "/about"
  },
  {
    id: 4,
    title: "Contact",
    href: "/contact"
  }
]

  return (
    <nav className="flex items-center justify-between w-full py-4 px-12">
        <h1 className='text-2xl text-red-500 font-semibold'>Accessories World</h1>

        <article className="flex gap-4 items-center justify-center">
    {
      links.map((link: {title: string, href: string, id: number}) => (
        <Button className='text-md text-slate-700 hover:font-semibold font-medium' key={link.id} variant="link" asChild>
          <Link href={link.href}>
          {link.title}
          </Link>
        </Button>
      ))
    }
        </article>

        <Dialog>
          <DialogTrigger asChild>
            <Button type='button' variant="ghost">
              <ShoppingCart />
            </Button>
          </DialogTrigger>
        </Dialog>
    </nav>
  )
}

export default DesktopNavbar
