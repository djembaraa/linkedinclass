import { Facebook, Twitter, Instagram } from "lucide-react";
import { MotionWrap } from "../MotionWrap";

export default function Footer() {
  return (
    <footer className="border-t pl-6 pr-6">
      <MotionWrap className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center">
        {/* Kiri: Email */}
        <div className="flex-1 text-left">
          <p className="text-gray-600">email@belajarlinedin.com</p>
        </div>

        {/* Credit */}
        <div className="flex-1 text-center">
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

        {/* Kanan: Sosial Media */}
        <div className="flex-1 flex justify-end space-x-4">
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
