// importing modules
import Image from "next/image";

// importing assets
import airbnbLogo from "@/public/airbnb-logo.png";

export default function Navbar() {
  return (
    <nav className="shadow-lg flex justify-right flex-wrap content-center p-4">
      <Image src={airbnbLogo} className="max-w-[100px]" alt="airbnb logo" />
    </nav>
  )
}
