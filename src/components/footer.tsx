import { UserInfo } from "@/constants/constants"; // Ensure this is correct path
import { FaGithub, FaTwitterSquare } from 'react-icons/fa'; // Importing icons
import { GrLinkedin } from "react-icons/gr";


export default function Footer() {
  return (
    <footer className="bg-pink-900 text-black py-8 w-full z-10">
      <div className="container mx-auto text-center">
        <h3 className="text-xl font-semibold">Connect with Me</h3>
        <div className="mt-4">
          {/* Check if UserInfo.socialLinks is available and then map them */}
          <a
            href={UserInfo.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 text-lg hover:text-gray-400"
          >
            <FaGithub size={24} className="inline-block" />
          </a>
          <a
            href={UserInfo.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 text-lg hover:text-gray-400"
          >
            <GrLinkedin size={24} className="inline-block" />
          </a>
          <a
            href={UserInfo.socialLinks.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 text-lg hover:text-gray-400"
          >
            <FaTwitterSquare size={24} className="inline-block" />
          </a>
        </div>
        <p className="mt-4 text-sm">© 2024 Fatima Mehmood Ali. All rights reserved.</p>
      </div>
    </footer>
  );
}

