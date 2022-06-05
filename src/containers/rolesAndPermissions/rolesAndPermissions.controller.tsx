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
    DetailsRole | any
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

  const newArrayForRows = detailsResponsability?.grouprules?.map(
    (item: any) => {
      let newMap: any = []

      const mapping = item?.permissions?.map((mapingNewValue: any) => {
        newMap.push(mapingNewValue)
      })
      let read = ''
      let write = ''
      let deleted = ''
      const newFilter = newMap?.filter((value: any, index: any) => {
        if (value == 'read') {
          read = value
          return
        }
        if (value == 'write') {
          write = value
          return
        }
        if (value == 'delete') {
          deleted = value
          return
        }
      })

      const newArray = {
        role: item.role,
        read,
        write,
        deleted,
      }
      return newArray
    }
  )

  function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number
  ) {
    return { name, calories, fat, carbs }
  }

  const rows = newArrayForRows?.map((item: any) =>
    createData(item?.role, item.read, item.write, item.deleted)
  )

  const handlers: any = {
    detailsResponsability,
    loading,
    rows,
  }

  return <RolesAndPermissionsScreen handlers={handlers} />
}

export default RolesAndPermissionsController
