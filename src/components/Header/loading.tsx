export default function Loading() {
  return (
    <header className="bg-gray-600 flex items-center gap-40 justify-between sticky top-5 lg:top-10 mt-5 lg:mt-10 px-5 lg:px-11 py-4 lg:py-7">
      <div className="bg-gray-900 lg:w-[177px] lg:h-[17px] animate-pulse"></div>
      <nav className="bg-gray-900 flex-1 py-2 animate-pulse"></nav>
    </header>
  )
}
