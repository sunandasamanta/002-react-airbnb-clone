
// importing modules
import Image from "next/image";
import Link from "next/link";

// importing components
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
    </main>
  );
}
