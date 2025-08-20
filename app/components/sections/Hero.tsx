"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import animationData from "../../../public/animations/hero-animation.json";

export default function Hero() {
  return (
    <section
      id="home"
      className="pt-24 sm:pt-28 md:pt-16 lg:pt-20 px-4 sm:px-6min-h-screen flex items-center pt-24 sm:pt-28 md:pt-16 lg:pt-20 px-4 sm:px-6 pr-6 pl-6"
    >
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Text Content */}
        <div className="space-y-6 text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-relaxed"
          >
            <span className="font-bold text-[#0055DF]">
              Belajar LinkedIn Class
            </span>{" "}
            – Unlock Your Career Potential with LinkedIn
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-gray-600 leading-relaxed"
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
          className="mt-8 md:mt-0"
        >
          <Lottie animationData={animationData} loop={true} />
        </motion.div>
      </div>
    </section>
  );
}
