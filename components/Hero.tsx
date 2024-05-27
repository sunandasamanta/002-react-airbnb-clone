// importing modules
import Image from "next/image"

//importing assets
import photoGrid from "@/public/photo-grid.png"

export default function Hero() {
    return (
        <section className="p-20 flex flex-col">
            <Image src={photoGrid} className="self-center max-w-[50rem]" alt="photo grid" />
            <h1 className="my-4
             font-semibold text-4xl">
                Online Experiences
            </h1>
            <p className="text-md ">
                Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </p>
        </section>
    )
}
