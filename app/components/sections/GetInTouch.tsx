import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone } from "lucide-react";
import { MotionWrap } from "../MotionWrap";

export default function GetInTouch() {
  return (
    <section id="contact" className="py-20 bg-gray-50 pl-6 pr-6">
      <div className="container mx-auto px-4">
        <MotionWrap className="text-center mb-12">
          <h2 className="text-3xl font-bold">Get In Touch</h2>
        </MotionWrap>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <MotionWrap className="space-y-4">
            <p className="text-lg text-gray-600">
              We are here to help you navigate your creative journey. Reach out
              for any questions, support, or feedback.
            </p>
            <div className="flex items-center space-x-3 pt-4">
              <Phone className="h-5 w-5 text-blue-600" />
              <span className="text-gray-700">081282160934</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-blue-600" />
              <span className="text-gray-700">email@belajarlinedin.com</span>
            </div>
          </MotionWrap>

          {/* Contact Form */}
          <MotionWrap delay={0.2}>
            <form className="space-y-4 bg-white p-8 rounded-lg shadow-md">
              <div>
                <Label htmlFor="fullname">Full Name</Label>
                <Input id="fullname" placeholder="Enter your name" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Type your message here ..."
                />
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <Label htmlFor="terms" className="text-sm font-normal">
                  I have read the User & Privacy Policy
                </Label>
              </div>
              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700"
              >
                Send Message
              </Button>
            </form>
          </MotionWrap>
        </div>
      </div>
    </section>
  );
}
