import React, { useState } from 'react'
import Input from '../../components/input/input.components'
import {
  Container,
  IconInput,
  TitleTable,
  MarginHorizontal,
} from './listEmployes.styles'
import DataTable from '../DataTable/dataTable.components'

const ListEmployes = () => {
  const [searchNameOrCpf, setSearchNameOrCpf] = useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchNameOrCpf(event.target.value)
  }

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
      <DataTable />
    </Container>
  )
}
export default ListEmployes
