import Navbar from './Navbar'
import Footer from './Footer'

import Head from 'next/head'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <title>PokeNext - ITS Tecnologia Criativa - &copy;</title>
      </Head>
      <Navbar />
      <main className="main-container">{children}</main>
      <Footer />
    </>
  )
}
