function Home() {
  return (
    <div className="bg-[#070707] text-white min-h-screen">

      {/* HERO */}

      <section className="relative h-screen flex items-center justify-center overflow-hidden">

        <img
          src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1600"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent"></div>

        <div className="relative max-w-7xl mx-auto px-8">

          <h1 className="text-7xl font-bold text-yellow-400 mb-6">
            AKARAM
          </h1>

          <h2 className="text-4xl font-semibold mb-5">
            ஒவ்வொரு படைப்புக்கும் ஒரு தொடக்கம்.
          </h2>

          <p className="text-xl text-gray-300 max-w-2xl mb-10">
            Movies • Programs • Music • News • Podcasts • Creator Hub
          </p>

          <div className="flex gap-5">

            <button className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold hover:scale-105 duration-300">
              Explore
            </button>

            <button className="border border-white px-8 py-4 rounded-xl hover:bg-white hover:text-black duration-300">
              Become a Creator
            </button>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Home;