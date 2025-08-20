import { Card, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { MotionWrap } from "../MotionWrap";

const featuresData = [
  {
    title: "Optimized LinkedIn Profile",
    image: "/image/optimized.jpg",
  },
  { title: "Job Hunting Strategies", image: "/image/job.jpg" },
  { title: "Networking Tips", image: "/image/networking.jpg" },
];

export default function Features() {
  return (
    <section id="classes" className="py-20 bg-gray-50 pl-6 pr-6">
      <div className="container mx-auto px-4">
        <MotionWrap className="text-center mb-12">
          <h2 className="text-3xl font-bold">Features</h2>
        </MotionWrap>
        <div className="grid md:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => (
            <MotionWrap key={feature.title} delay={index * 0.2}>
              {/* 👇 Perubahan besar ada di dalam komponen Card ini 👇 */}
              <Card className="relative overflow-hidden h-72 group">
                {/* 1. Gambar sebagai Latar Belakang Absolut */}
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={400}
                  height={500}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* 2. Lapisan Gradien untuk Keterbacaan Teks */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

                {/* 3. Konten Teks di Atas Gambar */}
                <div className="relative h-full flex flex-col justify-end p-6">
                  <CardTitle className="text-white text-lg">
                    {feature.title}
                  </CardTitle>
                </div>
              </Card>
            </MotionWrap>
          ))}
        </div>
      </div>
    </section>
  );
}
