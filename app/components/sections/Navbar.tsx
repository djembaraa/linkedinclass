import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

// Pastikan link ini sudah benar untuk routing antar halaman
const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#classes", label: "Classes" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#" className="flex items-center space-x-3">
          <img
            src="/image/vector-education-logo.png"
            alt="Belajar LinkedIn"
            className="h-10 w-auto"
          />
          <span className="font-bold text-xl text-[#0055DF]">
            Belajar LinkedIn
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative text-gray-600 hover:text-blue-600 transition-colors duration-300
                         after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full 
                         after:h-[2px] after:bg-blue-600 after:scale-x-0 
                         hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-center"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile Navigation (VERSI BERSIH) */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full">
              <SheetHeader>
                <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
                <SheetDescription className="sr-only">
                  A list of navigation links for the site.
                </SheetDescription>
              </SheetHeader>
              <nav className="flex flex-col items-center justify-center h-full space-y-4 -mt-8">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-2xl text-gray-700 hover:text-blue-600 transition-colors py-2"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
