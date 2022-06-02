import React, { useState } from 'react'
import Input from '../../components/input/input.components'
import { IconInput, TitleTable } from './listEmployes.styles'
import DataTable from '../DataTable/dataTable.components'

const ListEmployes = () => {
  const [searchNameOrCpf, setSearchNameOrCpf] = useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchNameOrCpf(event.target.value)
  }

  return (
    <div style={{ paddingTop: 10 }}>
      <Input
        labelText="Pesquisar Por"
        placeholderText="Pesquise por nome ou cpf"
        handleChange={handleChange}
        icon={<IconInput />}
      />
      <TitleTable>Listagem de colaboradores</TitleTable>
      <div style={{ paddingTop: 10 }}></div>
      <DataTable />
    </div>
  )
}
export default ListEmployes
