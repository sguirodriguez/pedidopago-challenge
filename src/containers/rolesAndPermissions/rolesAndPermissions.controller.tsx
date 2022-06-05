import React, { useState, useEffect } from 'react'
import RolesAndPermissionsScreen from './rolesAndPermissions.screen'
import { getDetailsResponsability } from '../../pages/api/requests'
import { useRouter } from 'next/router'

type DetailsRole = {
  role?: {
    name: string
    department: string
    grouprules: Array<{
      role: string
      permissions: Array<[string]>
    }>
  }
}

const RolesAndPermissionsController: React.FC = () => {
  const [detailsResponsability, setDetailsResponsability] = useState<
    DetailsRole | {}
  >()
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const { id } = router.query

  useEffect(() => {
    requestDetailsResponsability()
  }, [])

  const requestDetailsResponsability = async () => {
    setLoading(true)
    const response = await getDetailsResponsability()
    setLoading(false)
    const { role } = response
    setDetailsResponsability(role)
  }

  const handlers: any = {
    detailsResponsability,
    loading,
  }

  return <RolesAndPermissionsScreen handlers={handlers} />
}

export default RolesAndPermissionsController
