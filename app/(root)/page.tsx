import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import image from '@/public/assets/ads.jpg'

export default function Home() {
  return (
    <>
     <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
      <div className="wrapper grid  grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
        <div className="flex flex-col justify-center gap-8">
          <h1 className="h1-bold"> Let Your Event To Be Fascinating By Orans!</h1>
          <p className="p-regular-20 md:p-regular-24">Easy Joining and Booking for your interesting event in the country by Orans</p>
          <Button size="lg" asChild className="button w-full am:w-fit bg-orange-400 ac:bg-orange-600 hover:bg-orange-600 active:bg-orange-700 ">
              <Link href="#Event">
                Find Now
              </Link>
          </Button>
        </div>

        <Image
            src={image}
            alt="menu"
            width={1000}
            height={100}
            className="max-h[70vh] object-contain object-center 2xl:max-h-[50vh]"
          />
      </div>
      </section> 
        <section id="events" className="wrapper my-8 flex flex-col gap-8 md:gap-12">
          <h2 className="h2-bold">Popular Events</h2>
          <div className="flex w-full flex-col gap-5 md:flex-row">
            Search
            CategoryFilter
          </div>
        </section>
    </>
  )
}
