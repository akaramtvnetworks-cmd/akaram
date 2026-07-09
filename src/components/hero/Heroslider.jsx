import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Play, Plus, Star } from "lucide-react";
import featured from "../../data/featured";

function HeroSlider() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % featured.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? featured.length - 1 : prev - 1
    );
  };

  const movie = featured[current];

  return (
    <section className="relative h-screen overflow-hidden">

      {/* Background */}
      <AnimatePresence mode="wait">
        <motion.div
          key={movie.id}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${movie.image})`,
          }}
        />
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />

      <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-20 flex items-center h-full max-w-7xl mx-auto px-10">

        <motion.div
          key={movie.id}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          className="max-w-xl"
        >

          <span className="bg-red-600 px-4 py-1 rounded-full text-sm font-semibold">
            AKARAM ORIGINAL
          </span>

          <h1 className="text-7xl font-black mt-6 mb-5">
            {movie.title}
          </h1>

          <div className="flex gap-5 text-gray-300 mb-6">

            <span className="flex items-center gap-1 text-yellow-400">
              <Star size={18} fill="currentColor" />
              {movie.rating}
            </span>

            <span>{movie.year}</span>

            <span>{movie.genre}</span>

            <span>{movie.duration}</span>

          </div>

          <p className="text-lg text-gray-300 leading-8 mb-8">
            {movie.description}
          </p>

          <div className="flex gap-4">

            <button className="bg-red-600 hover:bg-red-700 transition px-8 py-4 rounded-xl flex items-center gap-3 font-semibold">

              <Play size={22} fill="white" />

              Watch Now

            </button>

            <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 px-8 py-4 rounded-xl flex items-center gap-3">

              <Plus size={22} />

              My List

            </button>

          </div>

        </motion.div>

      </div>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-8 top-1/2 -translate-y-1/2 z-30 bg-black/50 hover:bg-black/80 w-14 h-14 rounded-full flex items-center justify-center"
      >
        <ChevronLeft size={30} />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-8 top-1/2 -translate-y-1/2 z-30 bg-black/50 hover:bg-black/80 w-14 h-14 rounded-full flex items-center justify-center"
      >
        <ChevronRight size={30} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3 z-30">

        {featured.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition ${
              current === index
                ? "bg-red-600 w-8"
                : "bg-gray-500"
            }`}
          />
        ))}

      </div>

    </section>
  );
}

export default HeroSlider;