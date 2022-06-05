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
  const router = useRouter()
  const { id } = router.query

  useEffect(() => {
    requestDetailsResponsability()
  }, [])

  const requestDetailsResponsability = async () => {
    const response = await getDetailsResponsability()
    const { role } = response
    setDetailsResponsability(role)
  }

  const handlers: any = {
    detailsResponsability,
  }

  return <RolesAndPermissionsScreen handlers={handlers} />
}

export default RolesAndPermissionsController
