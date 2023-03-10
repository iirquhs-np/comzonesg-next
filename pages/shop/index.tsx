import Head from 'next/head'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
// import styles from '../styles/Home.module.css'

import { Poppins } from '@next/font/google'
const font = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
})
export default function Home() {
  return (
    <>
      <Head>
        <title>COMZONE.SG - Shop</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={font.className}>
        <div className={'flex flex-col min-h-screen'}>
          <Navbar />

          <section>
            <h1>this is SHOP section</h1>
          </section>
          <section>
            <h1>this is another section</h1>
          </section>
          <section>
            <h1>this is another section</h1>
          </section>

          <Footer/>
        </div>
      </main>
    </>
  );
}
