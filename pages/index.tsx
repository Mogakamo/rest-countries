import Head from 'next/head'
import Navbar from '../components/Navbar'
import SearchBar from '../components/Search'

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
        <div className='flex py-8 px-24'>
          <SearchBar />
        </div>
      </main>
    </div>
  )
}
