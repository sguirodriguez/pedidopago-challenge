import axios from 'axios'

const URL_TOTALS_AGENTS = 'https://pp-api-desafio.herokuapp.com/agents'
const URL_DETAILS_AGENT = 'https://pp-api-desafio.herokuapp.com/agent/1'
const URL_TOTALS_RESPONSABILITIES = 'https://pp-api-desafio.herokuapp.com/roles'
const URL_DETAILS_RESPONSABILITY = 'https://pp-api-desafio.herokuapp.com/role/1'

type ResponseTotalsEmployes = {
  items?: Array<{
    agent_id: number
    branch: string
    department: string
    image: string
    name: string
    role: string
    status: string
  }>
}

type ReponseDetailsEmploye = {
  agent?: {
    id: number
    name: string
    birth_date: string
    image: string
    department: string
    branch: string
    role: string
    status: string
    email:string
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
}

type ResponseTotalsResponsabilities = {
  roles?: Array<{
    agents_quantity: number
    departament: string
    name: string
  }>
}

type ResponseDetailsResponsability = {
  role?: {
    name: string
    department: string
    grouprules: 
      Array<{
        role: string
        permissions: Array<[string]>
      }>
    } | {}
}

export const getTotalsEmployes = async (): Promise<ResponseTotalsEmployes> => {
  const { data, status } = await axios.get(`${URL_TOTALS_AGENTS}`)

  if (status !== 200) {
    return { items: [] }
  }
  return data
}

export const getDetailsEmploye = async (): Promise<
  ReponseDetailsEmploye 
> => {
  const { data, status } = await axios.get(`${URL_DETAILS_AGENT}`)
  if (status !== 200) {
    return {  }
  }
  return data
}

export const getTotalsResponsabilities =
  async (): Promise<ResponseTotalsResponsabilities> => {
    const { data, status } = await axios.get(`${URL_TOTALS_RESPONSABILITIES}`)

    if (status !== 200) {
      return { roles: [] }
    }
    return data
  }

export const getDetailsResponsability = async ():Promise<ResponseDetailsResponsability > => {
  const { data, status } = await axios.get(`${URL_DETAILS_RESPONSABILITY}`)
  if (status !== 200) {
    return { role: {} }
  }
  return data
}
