import Head from 'next/head'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
// import styles from '../styles/Home.module.css'

import { Poppins } from '@next/font/google'
const font = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
})


export default function Rewards() {
  return (
    <>
      <Head>
        <title>COMZONE.SG - Rewards</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={font.className}>
        <Navbar />
        <h1>Rewards</h1>
        <section>

        </section>
        <Footer />
      </main>
    </>
  )
}