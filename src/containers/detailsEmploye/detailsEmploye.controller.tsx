import React, { useState, useEffect } from 'react'
import DetailsEmployeScreen from './detailsEmployes.screen'
import { getDetailsEmploye } from '../../pages/api/requests'
import { useRouter } from 'next/router'

type DetailsEmploye = {
  id: number
  name: string
  birth_date: string
  image: string
  department: string
  branch: string
  role: string
  status: string
  email: string
  phone: {
    ddd: string
    ddi: string
    number: string
  }
  document: {
    type: string
    number: string
  }
}

const DetailsEmployeController: React.FC = () => {
  const [loading, setLoading] = useState(false)
  const [detailsEmploye, setDetailsEmploye] = useState<DetailsEmploye>()
  const router = useRouter()
  const { id } = router.query

  useEffect(() => {
    requestDetailsEmploye()
  }, [])

  const requestDetailsEmploye = async () => {
    setLoading(true)
    const response = await getDetailsEmploye()
    setLoading(false)
    const { agent } = response
    setDetailsEmploye(agent)
  }

  const handlers: any = {
    detailsEmploye,
    loading,
  }

  return <DetailsEmployeScreen handlers={handlers} />
}

export default DetailsEmployeController
