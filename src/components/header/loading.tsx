export default function Loading() {
  return (
    <header className="sticky top-5 mt-5 flex items-center justify-between gap-40 bg-gray-600 px-5 py-4 lg:top-10 lg:mt-10 lg:px-11 lg:py-7">
      <div className="animate-pulse bg-gray-900 lg:h-[17px] lg:w-[177px]"></div>
      <nav className="flex-1 animate-pulse bg-gray-900 py-2"></nav>
    </header>
  )
}
