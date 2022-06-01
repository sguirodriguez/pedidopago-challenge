import type { NextPage } from 'next'
import HomeController from '../containers/home/home.controller'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
        </style>
      </Head>
      <HomeController />
    </>
  )
}

export default Home
