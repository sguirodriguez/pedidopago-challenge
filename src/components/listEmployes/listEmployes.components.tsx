import React, { useEffect, useState } from 'react'
import Input from '../../components/input/input.components'
import {
  Container,
  IconInput,
  TitleTable,
  MarginHorizontal,
} from './listEmployes.styles'
import DataTable from '../itemsInTable/itemsInTable.components'

type Column = Array<{
  id: 'name' | 'department' | 'responsibility' | 'unity' | 'status' | 'action'
  label: string
  minWidth: number
  align: 'right' | 'left' | 'center'
}>

type FilteredByName = Array<{
  agent_id: number
  branch: string
  department: string
  image: string
  name: string
  role: string
  status: string
}>

type ListEmployesProps = {
  totalEmployes: Array<{
    agent_id: number
    branch: string
    department: string
    image: string
    name: string
    role: string
    status: string
  }>
}
const ListEmployes = ({ totalEmployes }: ListEmployesProps) => {
  const [searchNameOrCpf, setSearchNameOrCpf] = useState('')
  const [filteredByName, setFilteredByName] = useState<FilteredByName>()
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const filterName = totalEmployes?.filter(item =>
      String(item.name)
        ?.toLowerCase()
        ?.includes(String(event.target.value).toLowerCase())
    )

    setFilteredByName(filterName)
    setSearchNameOrCpf(event.target.value)
  }

  const columns: Column = [
    { id: 'name', label: 'Nome', minWidth: 170, align: 'left' },
    { id: 'department', label: 'Departamento', minWidth: 80, align: 'left' },
    { id: 'responsibility', label: 'Cargo', minWidth: 80, align: 'left' },
    { id: 'unity', label: 'Unidade', minWidth: 80, align: 'left' },
    { id: 'status', label: 'Status', minWidth: 80, align: 'center' },
    { id: 'action', label: '', minWidth: 50, align: 'left' },
  ]

  function createData(
    name: any,
    department: number | string,
    responsibility: number | string,
    unity: number | string,
    status: number | string,
    action: any
  ) {
    return { name, department, responsibility, unity, status, action }
  }

  const arrayForRows = filteredByName ? filteredByName : totalEmployes

  const rows = arrayForRows?.map(item => {
    return createData(
      [item.name, item.image],
      item.department,
      item.role,
      'Quartel General',
      item.status,
      item.agent_id
    )
  })

  useEffect(() => {}, [filteredByName])

  return (
    <Container>
      <Input
        labelText="Pesquisar Por"
        placeholderText="Pesquise por nome ou cpf"
        handleChange={handleChange}
        icon={<IconInput />}
      />
      <MarginHorizontal />
      <TitleTable>Listagem de colaboradores</TitleTable>
      <MarginHorizontal />

      <DataTable rows={rows} columns={columns} listMode="LISTEMPLOYES" avatar />
    </Container>
  )
}
export default ListEmployes
