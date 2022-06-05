import HomeScreen from './home.screen'
import React, { useEffect, useState } from 'react'
import {
  getTotalsEmployes,
  getTotalsResponsabilities,
} from '../../pages/api/requests'
import { TabTitle } from './home.styles'
import { colors } from '../../styles/global'

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
  departament: string
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
  const [loading, setLoading] = useState(false)
  const [tabIndex, setTabIndex] = useState(0)
  const [isModalVisible, setIsModalVisible] = useState(false)

  const requestTotalsEmployes = async () => {
    setLoading(true)
    const response = await getTotalsEmployes()
    setLoading(false)
    const { items } = response
    setTotalEmployes(items)
  }

  const requestTotalsResponsabilities = async () => {
    const response = await getTotalsResponsabilities()
    const { roles } = response
    setTotalResponsabilities(roles)
  }

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabIndex(newValue)
  }

  const handleFunction = (value: number) => {
    setTabIndex(value)
  }

  const translatorTabLabel = (index: number, text: string) => {
    const translatorTab = {
      0: <TabTitle>{text}</TabTitle>,
      1: <TabTitle style={{ color: colors.gray }}>{text}</TabTitle>,
    }

    return translatorTab[index as keyof typeof translatorTab]
  }

  useEffect(() => {
    requestTotalsEmployes()
    requestTotalsResponsabilities()
  }, [])

  const handlers: Handlers | any = {
    totalEmployes,
    totalResponsabilities,
    loading,
    tabIndex,
    setTabIndex,
    isModalVisible,
    setIsModalVisible,
    handleChange,
    handleFunction,
    translatorTabLabel,
  }

  return <HomeScreen handlers={handlers} />
}

export default HomeController
