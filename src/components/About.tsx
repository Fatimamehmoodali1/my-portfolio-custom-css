'use client'
import Image from "next/image";
import { UserInfo } from "@/constants/constants";
import { HeaderItems } from "@/constants/constants";

export default function About() {
  return (
    <section id={HeaderItems.about.page} className="py-16 pt-24">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row text-center md:text-start items-center">
        <div className="m-4 md:ml-20 sm:ml-12 w-full md:w-1/2">
          <h1 className="text-4xl md:text-5xl my-6 font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-950 to-purple-700">
            About Me
          </h1>
          <h2 className="text-2xl my-4">Get to know me!</h2>
          <p>
            Hello, I&apos;m Fatima Mehmood Ali. I began my programming journey in 2022 when I enrolled in a Computer Science course (CIT). I was thrilled to achieve an A1 grade in my course, which motivated me to further pursue my passion for technology.
            <br />
            <br />
            Since then, I have been diving deeper into programming and web development. My goal is to build impactful projects and continue learning as I grow in the tech field. I am excited to apply my skills and create innovative solutions, one project at a time.
          </p>
        </div>

        <div className="flex flex-col justify-center items-center mt-8 md:mt-0 text-center">
          <Image
            src="/images/student.jpeg"
            alt="profile"
            width={300}
            height={300}
            className="m-auto"
          />
          <div className="mt-6 w-3/4">
            <h1 className="text-2xl m-2 p-2 font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-950 to-purple-700">
              My Skills
            </h1>
            {/* Check if skills exist before rendering */}
            {UserInfo.skills && UserInfo.skills.length > 0 ? (
              UserInfo.skills.map((skill, index) => (
                <span key={index} className="bg-gray-300 m-1 p-1 text-sm inline-block rounded-md">
                  {skill}
                </span>
              ))
            ) : (
              <p className="text-gray-500">No skills listed yet.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
