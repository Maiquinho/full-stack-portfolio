import { Banner } from './components/Banner'
import { Header } from './components/Header'

export default function Home() {
  return (
    <main className="flex flex-col h-screen w-[1120px] m-auto">
      <Header />
      <Banner />
    </main>
  )
}
