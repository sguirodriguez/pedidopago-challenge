import React, { useState } from 'react'
import Input from '../../components/input/input.components'
import { IconInput } from './listEmployes.styles'

const ListEmployes = () => {
  const [searchNameOrCpf, setSearchNameOrCpf] = useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('ta vindo-->', event.target.value)
    setSearchNameOrCpf(event.target.value)
  }

  return (
    <div>
      <Input
        labelText="Pesquisar Por"
        placeholderText="Pesquise por nome ou cpf"
        handleChange={handleChange}
        icon={<IconInput />}
      />
    </div>
  )
}
export default ListEmployes
