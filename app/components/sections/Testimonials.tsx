import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { MotionWrap } from "../MotionWrap";

const testimonialsData = [
  {
    quote:
      "Setelah ikut kelas ini, profile LinkedIn saya jadi lebih profesional",
    name: "Andi - Mahasiswa",
  },
  {
    quote: "Saya mendapatkan banyak wawasan baru setelah ikut kelas ini",
    name: "Budi - Fresh Graduate",
  },
  {
    quote: "Kelas asyik dan banyak hal baru yang saya ketahui dari networking",
    name: "Citra - Karyawan",
  },
];

export default function Testimonials() {
  return (
    <section id="about" className="py-20 pl-6 pr-6">
      <div className="container mx-auto px-4">
        <MotionWrap className="text-center mb-12">
          <h2 className="text-3xl font-bold">Testimonials</h2>
        </MotionWrap>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <MotionWrap key={testimonial.name} delay={index * 0.2}>
              <Card className="p-6 h-full">
                <CardContent className="p-0 flex flex-col justify-between h-full">
                  <p className="italic">&ldquo;{testimonial.quote}&rdquo;</p>
                  <div className="flex items-center mt-auto">
                    <Image
                      src={`/image/16320.jpg`}
                      alt={testimonial.name}
                      width={37}
                      height={37}
                      className="rounded-full mr-3"
                      unoptimized
                    />
                    <p className="font-semibold">{testimonial.name}</p>
                  </div>
                </CardContent>
              </Card>
            </MotionWrap>
          ))}
        </div>
      </div>
    </section>
  );
}
