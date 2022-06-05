import type { NextPage } from 'next'
import Head from 'next/head'
import RolersAndPermissions from '../../containers/rolesAndPermissions/rolesAndPermissions.controller'

const Roles: NextPage = () => {
  return (
    <>
      <Head>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
        </style>
      </Head>
      <RolersAndPermissions />
    </>
  )
}

export default Roles
