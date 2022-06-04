import HomeScreen from './home.screen'
import React, { useEffect, useState } from 'react'
import {
  getTotalsEmployes,
  getTotalsResponsabilities,
} from '../../pages/api/requests'

type TotalsEmployes = Array<{
  agent_id: number
  branch: string
  department: string
  image: string
  name: string
  role: string
  status: string
}>

type TotalsResponsabilities = Array<{
  agents_quantity: number
  department: string
  name: string
}>

type Handlers = {
  totalEmployes: Array<{
    agent_id: number
    branch: string
    department: string
    image: string
    name: string
    role: string
    status: string
  }>
  totalResponsabilities: Array<{
    agents_quantity: number
    department: string
    name: string
  }>
}

const HomeController: React.FC = () => {
  const [totalEmployes, setTotalEmployes] = useState<TotalsEmployes>()
  const [totalResponsabilities, setTotalResponsabilities] =
    useState<TotalsResponsabilities>()

  const requestTotalsEmployes = async () => {
    const response = await getTotalsEmployes()
    const { items } = response
    setTotalEmployes(items)
  }

  const requestTotalsResponsabilities = async () => {
    const response = await getTotalsResponsabilities()
    const { roles } = response
    setTotalResponsabilities(roles)
  }

  useEffect(() => {
    requestTotalsEmployes()
    requestTotalsResponsabilities()
  }, [])

  const handlers: Handlers | any = {
    totalEmployes,
    totalResponsabilities,
  }

  return <HomeScreen handlers={handlers} />
}

export default HomeController
