import React, { useEffect, useState } from 'react'
import Input from '../../components/input/input.components'
import {
  Container,
  IconInput,
  TitleTable,
  MarginHorizontal,
} from './listResponsibilities.styles'
import DataTable from '../itemsInTable/itemsInTable.components'

type Column = Array<{
  id:
    | 'name'
    | 'department'
    | 'responsibility'
    | 'unity'
    | 'status'
    | 'action'
    | 'agents_quantity'
  label: string
  minWidth: number
  align: 'right' | 'left' | 'center'
}>

type FilteredByName = Array<{
  agents_quantity: number
  departament: string
  name: string
}>

type ListEmployesProps = {
  totalResponsabilities: Array<{
    agents_quantity: number
    departament: string
    name: string
  }>
}
const ListResponsabilities = ({ totalResponsabilities }: ListEmployesProps) => {
  const [searchNameOrCpf, setSearchNameOrCpf] = useState('')
  const [filteredByName, setFilteredByName] = useState<FilteredByName>()
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const filterName = totalResponsabilities?.filter(item =>
      String(item.name)
        ?.toLowerCase()
        ?.includes(String(event.target.value).toLowerCase())
    )

    setFilteredByName(filterName)
    setSearchNameOrCpf(event.target.value)
  }

  const columns: Column = [
    { id: 'name', label: 'Cargo', minWidth: 140, align: 'left' },
    { id: 'department', label: 'Departamento', minWidth: 80, align: 'left' },
    {
      id: 'agents_quantity',
      label: 'Colaboradores',
      minWidth: 80,
      align: 'left',
    },
    { id: 'action', label: '', minWidth: 20, align: 'right' },
  ]

  function createData(
    name: string,
    department: string,
    agents_quantity: number,
    action: string
  ) {
    return { name, department, agents_quantity, action }
  }

  const arrayForRows = filteredByName ? filteredByName : totalResponsabilities

  const rows = arrayForRows?.map(item => {
    return createData(
      item.name,
      item.departament,
      item.agents_quantity,
      item.name
    )
  })

  useEffect(() => {}, [filteredByName])

  return (
    <Container>
      <Input
        labelText="Pesquisar Por"
        placeholderText="Pesquise por cargos"
        handleChange={handleChange}
        icon={<IconInput />}
      />
      <MarginHorizontal />
      <TitleTable>Listagem de cargos</TitleTable>
      <MarginHorizontal />

      <DataTable
        rows={rows}
        columns={columns}
        listMode="LISTRESPONSIBILITIES"
      />
    </Container>
  )
}
export default ListResponsabilities
