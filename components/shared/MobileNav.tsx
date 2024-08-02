import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Image from "next/image"
import image from '@/public/assets/menu.svg'
import image1 from '@/public/assets/logo.png'
import NavItems from "./NavItems"
import { Separator } from "@radix-ui/react-separator"


  

const MobileNav = () => {
  return (
    <nav className="md-hidden">
        <Sheet>
            <SheetTrigger className="align-middle">
                <Image
                    src={image}
                    alt="menu"
                    width={24}
                    height={24}
                    className="cursor-"
                />
            </SheetTrigger>
            <SheetContent className="flex flex-col gap-6 bg-white md:hidden">
                <Image
                    src={image1}
                    alt="menu"
                    width={128}
                    height={38}
                />
                <Separator className="border border-gray-50" />
                <NavItems />

            </SheetContent>
        </Sheet>
    </nav>
  )
}

export default MobileNav