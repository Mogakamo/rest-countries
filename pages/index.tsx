import Head from 'next/head'
import Navbar from '../components/Navbar'
import DarkmodeSwitch from '../components/DarkmodeSwitch'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="">
          <Navbar />
        </div>
      </main>
    </div>
  )
}
