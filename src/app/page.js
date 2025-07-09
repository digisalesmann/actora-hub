export default function Home() {
  return (
    <section className="min-h-screen bg-[#0a001a] text-white flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Welcome to Actora Labs
      </h1>
      <p className="text-lg md:text-xl text-purple-300 max-w-xl mb-6">
        Discover. Earn. Level up in the Monad ecosystem.
      </p>
      <div className="flex space-x-4">
        <a href="/alpha" className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-purple-200 transition">
          Join Alpha
        </a>
        <a href="/app" className="bg-[#7c3aed] text-white px-6 py-3 rounded-full font-medium hover:bg-[#9b4dff] transition">
          Launch App
        </a>
      </div>
    </section>
  )
}
