'use client'
import Image from "next/image";
import { HeaderItems, UserInfo } from "@/constants/constants";
import { FaChevronDown } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';

export default function Intro() {

  return (
    <section id={HeaderItems.home.page}
      className="h-screen flex flex-col text-center justify-center items-center md:flex-row md:text-start"
    >
      <div>
        <Image
          src={"/images/student.jpeg"}
          alt=""
          width={300}
          height={300}
          className="rounded-full shadow-2xl mt-10"
        />
      </div>
      <div className={'md:ml-20 sm:ml-12 md:w-1/2'}>
        {/* <h1 className={'text-7xl uppercase hidden md:block'}>Software Developer</h1> */}
        <h1 className="md:text-6xl text-4xl md:block font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-950 to-purple-700 ">Hello I am</h1>
        {/* <h1 className={'text-2xl mt-5 md:text-3xl'}>
                    Hi, I&#39;m <span className={'text-red-600 text-3xl md:text-4xl'}>Fatima Mehmood Ali</span>!
                </h1> */}
        <h1 className="text-2xl mt-5 md:text-4xl"><span className="font-bold text-black text-2xl md:text-4xl">Fatima Mehmood Ali</span></h1>
        <p className={'mt-4 mb-4'}>
         Welcome to my portfolio! I'm Fatima Mehmood Ali, a passionate beginner in web development. I'm excited to share my journey with you as I explore the world of technology and design. Here, you'll find my projects and ideas as I learn and grow in this amazing field. Thank you for visiting!
        </p>
        <ScrollLink
          to={HeaderItems.projects.page}
          className={'bg-pink-900 rounded text-neutral-100 flex w-28 h-10 m-auto items-center justify-center md:m-0'}
          spy={true}
          smooth={true}
        >
          Projects <FaChevronDown className={'ml-2'} />
        </ScrollLink>
      </div>
    </section>
  )
}





