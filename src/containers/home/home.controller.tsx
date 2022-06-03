import HomeScreen from './home.screen'
import React, { useEffect, useState } from 'react'
import { getTotalsEmployes } from '../../pages/api/requests'

const HomeController: React.FC = () => {
  const [totalEmployes, setTotalEmployes] = useState({})

  const requestTotalsEmployes = async () => {
    const response = await getTotalsEmployes()
    setTotalEmployes(response)
  }

  useEffect(() => {
    requestTotalsEmployes()
  }, [])

  const handlers = {
    totalEmployes,
  }

  return <HomeScreen handlers={handlers} />
}

export default HomeController
