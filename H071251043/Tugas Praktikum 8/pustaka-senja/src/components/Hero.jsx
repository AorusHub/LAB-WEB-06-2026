export default function Hero({ nama, slogan, lokasi, jamBuka }) {
  return (
    <section className="rounded-xl bg-[url('/hero.jpeg')] bg-cover bg-center">

      <div className="rounded-xl bg-black/50 px-6 py-16 text-center">

        <h1 className="text-4xl font-bold text-white">{nama}</h1>
        <p className="mt-3 text-lg text-slate-100">{slogan}</p>
        <p className="mt-4 text-sm text-slate-200">
          {lokasi} | {jamBuka}
        </p>
        
      </div>

    </section>
  );
}