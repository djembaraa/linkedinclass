import { Facebook, Twitter, Instagram } from "lucide-react";
import { MotionWrap } from "../MotionWrap";

export default function Footer() {
  return (
    <footer className="border-t pl-6 pr-6">
      <MotionWrap className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-600 mb-4 md:mb-0">email@belajarlinedin.com</p>
        <div className="flex space-x-4">
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
    </footer>
  );
}
