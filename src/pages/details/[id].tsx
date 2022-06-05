import type { NextPage } from 'next'
import Head from 'next/head'
import DetailsEmployeController from '../../containers/detailsEmploye/detailsEmploye.controller'

const Details: NextPage = () => {
  return (
    <>
      <Head>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
        </style>
      </Head>
      <DetailsEmployeController />
    </>
  )
}

export default Details
