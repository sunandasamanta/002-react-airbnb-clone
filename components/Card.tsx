// importing modules
import Image from "next/image"

// importing assets
import katieZaferes from "@/public/katie-zaferes.png";
import star from "@/public/star.png";

export default function Card() {
  return (
    <div className="relative w-max text-xs p-2">
      <div className="absolute bg-white p-1 text-xs m-2 rounded">SOLD OUT</div>
      <Image src={katieZaferes} className="rounded w-44" alt="katie zaferes" />
      <div className="flex items-center gap-1 my-1">
        <Image src={star} className="w-4" alt="star" />
        <p className="">5.0</p>
        <p className="text-gray-400 flex items-center">(6) <div className="w-0.5 h-0.5 rounded-full bg-gray-400"></div> USA</p>
      </div>
      <div className="mb-1">Life lessons with Katie Zaferes</div>
      <div className=""><span className="font-bold">From $136</span> / person</div>
    </div>
  )
}
