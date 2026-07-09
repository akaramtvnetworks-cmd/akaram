import { Play, Plus, Star } from "lucide-react";

function Hero() {
  return (
    <section
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1920&q=80')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>

      {/* Bottom fade */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center h-full max-w-7xl mx-auto px-8">
        <div className="max-w-2xl">

          <span className="inline-block bg-red-600 px-4 py-1 rounded-full text-sm font-semibold mb-5">
            AKARAM ORIGINAL
          </span>

          <h1 className="text-6xl md:text-7xl font-extrabold mb-6">
            GOAT
          </h1>

          <div className="flex items-center gap-6 text-gray-300 mb-6">
            <span className="flex items-center gap-1 text-yellow-400">
              <Star size={18} fill="currentColor" />
              9.1
            </span>

            <span>2025</span>

            <span>Tamil</span>

            <span>Action</span>

            <span>2h 48m</span>
          </div>

          <p className="text-lg md:text-xl leading-8 text-gray-300 mb-8">
            An elite intelligence officer is pulled into his most dangerous
            mission, where loyalty, sacrifice, and survival collide in an
            explosive battle against a powerful enemy.
          </p>

          <div className="flex gap-4">

            <button className="flex items-center gap-3 bg-red-600 hover:bg-red-700 transition px-8 py-4 rounded-lg font-semibold text-lg">
              <Play size={22} fill="white" />
              Watch Now
            </button>

            <button className="flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition px-8 py-4 rounded-lg font-semibold text-lg">
              <Plus size={22} />
              My List
            </button>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;