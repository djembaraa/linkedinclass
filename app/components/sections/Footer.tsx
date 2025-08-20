import { Facebook, Twitter, Instagram } from "lucide-react";
import { MotionWrap } from "../MotionWrap";

export default function Footer() {
  return (
    <footer className="border-t pl-6 pr-6">
      <MotionWrap className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
        {/* Email */}
        <p className="text-gray-600 mb-4 md:mb-0">email@belajarlinedin.com</p>

        {/* Social Media */}
        <div className="flex space-x-4 mb-4 md:mb-0">
          <a href="#" className="text-gray-500 hover:text-blue-600">
            <Facebook />
          </a>
          <a href="#" className="text-gray-500 hover:text-blue-600">
            <Twitter />
          </a>
          <a href="#" className="text-gray-500 hover:text-blue-600">
            <Instagram />
          </a>
        </div>
      </MotionWrap>

      {/* Credit */}
      <div className="text-center pb-4">
        <p className="text-gray-500 text-sm">
          Made by{" "}
          <a
            href="https://djembaraa-djembaraas-projects.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Djembar Arafat
          </a>
        </p>
      </div>
    </footer>
  );
}
