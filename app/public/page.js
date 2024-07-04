import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import HomeBanner from "@/public/Images/banners/homeBanner.png"

import { FaLongArrowAltRight } from "react-icons/fa";
import OurMedicalServices from "@/app/public/components/homePage/OurMedicalServices";
import Doctors from "@/app/public/components/homePage/Doctors";

export default function Home() {
  return (
    <div className="container">
      <div className="flex mb-16">
        <div className="w-full text-center md:text-start md:w-2/4 mt-28">
          <h1 className="font-bold text-5xl text-dark">We care 
            <p className="text-primary">about your health</p>
          </h1>
          <h4 className="my-5 text-gray-500 leading-relaxed md:max-w-[500px]">In the heart of the bustling metropolis lies a sanctuary
of healing, where the pulses of compassion beats in tandem with the rhythm of life. 
Welcome to <span className="text-primary">GENOCARE IN.</span>  where the  corridors echo with 
whispers of hope and the walls breathe stories of belief.</h4>
          <Link href="/book-appointment"><Button className="my-3 text-[15px]">Book Appointment <span className="mx-2 text-xl"><FaLongArrowAltRight /></span></Button></Link>
          <p>Become a member of our hospital community? <Link href="/sign-up" className="text-primary">Sign up</Link></p>
        </div>
        <div className="hidden md:block w-2/4">
          <Image src={HomeBanner} alt="banner" width={600} height={600} objectFit="cover" />
        </div>
      </div>
      <OurMedicalServices />
      <Doctors />
    </div>
  );
}
