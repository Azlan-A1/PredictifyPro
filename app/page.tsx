import Hero from "@/app/Hero/page1";
import About from "@/app/About/page";
import Pricing from "@/app/Pricing/page";
import Footer from "@/components/Footer/page";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import User from "@/components/User";

export default async function Home() {
  const session = await getServerSession(authOptions);


  return (
    <div>
      <Hero />
      <Footer />
      <Link className={buttonVariants()}href='/admin'>
        Open My Admin
      </Link>

      <h2>Client Session</h2>
      <User />
      <h2>Server Session</h2>
      {JSON.stringify(session)}


    </div>
  )
}
