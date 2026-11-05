function Navbar({ searchKeyword, setSearchKeyword }) {
  return (
    <header className="mb-6 space-y-4">

      {/* Top Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-900 font-heading font-bold text-amber-100 shadow-md">
            KS
          </div>

          <div>
            <h1 className="font-heading text-lg font-extrabold tracking-tight text-amber-950">
              Kedai Kopi Senja
            </h1>

            <p className="flex items-center gap-1 text-xs font-medium text-amber-800/70">
              <span>📍</span> Makassar, Indonesia
            </p>
          </div>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-stone-200 bg-white text-stone-600 shadow-sm transition hover:bg-stone-50"
        >
          🔔
        </button>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <input
          type="text"
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
          placeholder="Cari kopi, teh, atau makanan..."
          className="w-full rounded-full border border-stone-200 bg-white py-3 pl-11 pr-4 text-sm text-stone-800 placeholder-stone-400 shadow-sm outline-none transition focus:border-amber-700 focus:ring-2 focus:ring-amber-700/20"
        />

        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400">
          🔍
        </span>
      </div>

    </header>
  );
}

export default Navbar;
