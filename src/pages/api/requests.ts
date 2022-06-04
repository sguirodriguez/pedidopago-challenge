import axios from 'axios'

const URL_TOTALS_AGENTS = 'https://pp-api-desafio.herokuapp.com/agents'
const URL_DETAILS_AGENT = 'https://pp-api-desafio.herokuapp.com/agent/'
const URL_TOTALS_RESPONSABILITIES = 'https://pp-api-desafio.herokuapp.com/roles'
const URL_DETAILS_RESPONSABILITY = 'https://pp-api-desafio.herokuapp.com/role/'

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

type ResponseTotalsResponsabilities = {
  roles?:Array<{
    agents_quantity:number
    department:string
    name:string
  }> 
}

export const getTotalsEmployes = async (): Promise<ResponseTotalsEmployes> => {
  const { data, status } = await axios.get(`${URL_TOTALS_AGENTS}`)
  if (status !== 200) {
    return { items:[] }
  }
  return data
}

export const getDetailsEmploye = async (id: number)=> {
  const { data, status } = await axios.get(`${URL_DETAILS_AGENT}${id}`)
  if (status !== 200) {
    return
  }
  return data
}

export const getTotalsResponsabilities = async ():Promise<ResponseTotalsResponsabilities> => {
  const { data, status } = await axios.get(`${URL_TOTALS_RESPONSABILITIES}`)

  if (status !== 200) {
    return { roles:[] }
  }
  return data
}

export const getDetailsResponsability = async (id: number) => {
  const { data, status } = await axios.get(`${URL_DETAILS_RESPONSABILITY}${id}`)
  if (status !== 200) {
    return
  }
  return data
}
