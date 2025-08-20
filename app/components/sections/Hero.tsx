"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Lottie from "lottie-react"; // Import Lottie
import animationData from "../../../public/animations/hero-animation.json"; // Import file animasi

export default function Hero() {
  return (
    <section id="home" className="pt-6 lg:pt-16 md:pt-18 pl-6 pr-6">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-6 items-center">
        {/* Text Content */}
        <div className="space-y-6 text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
          >
            Unlock Your Career Potential with LinkedIn
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600"
          >
            Aktif mempelajari strategi personal branding dan networking guna
            membangun reputasi profesional serta memperluas koneksi, sehingga
            peluang mendapatkan pekerjaan lebih cepat tercapai.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Join the Class
            </Button>
          </motion.div>
        </div>

        {/* Lottie Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          {/* 👇 Komponen Image diganti dengan Lottie 👇 */}
          <Lottie animationData={animationData} loop={true} />
        </motion.div>
      </div>
    </section>
  );
}
