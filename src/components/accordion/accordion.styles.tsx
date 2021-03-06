import styled from '@emotion/styled'
import { textDefault } from '../../styles/global'
import { colors } from '../../styles/global'
import AccordionDetails from '@mui/material/AccordionDetails'
import Button from '@mui/material/Button'
import Accordion from '@mui/material/Accordion'

export const Container = styled(Accordion)`
  border: 1px solid ${colors.gray};
  box-shadow: none;
`

export const Summary = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: none;
  gap: 10px;
`
export const AvatarAndName = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
`

export const Title = styled(textDefault)`
  font-weight: 700;
  font-size: 1.2rem;
  line-height: 1.68rem;
  color: ${colors.textColor};
`
export const DetailsAccordion = styled(AccordionDetails)`
  height: 60px;
  display: flex;
  flex-direction: row;
  padding-top: 0;
  padding-bottom: 0;
`
export const DetailsLeft = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  gap: 2px;
`
export const DetailsRight = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  gap: 2px;
`
export const Text = styled(Title)`
  font-weight: 400;
`

export const ButtonAccordion = styled(Button)`
  width: 100%;
  height: 52px;
  border-color: ${colors.borderButtonAccordionColor};
  color: ${colors.primaryColor};
  display: flex;
  justify-content: center;
  align-items: center;
  border-width: 2px;
  gap: 10px;
`
export const TextAccordion = styled(textDefault)`
  font-size: 1.6rem;
  line-height: 2.4rem;
  font-weight: 600;
  text-transform: capitalize;
`

export const Status = styled.div`
  width: 72px;
  height: 24px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.statusColor};
  font-size: 1.4rem;
  line-height: 1.624rem;
  font-weight: 500;
  font-family: 'Poppins', sans-serif;
`

export const StatusInactive = styled(Status)`
  background-color: ${colors.statusColorInactive};
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const ItemToolTip = styled(Button)`
  width: 300px;
  height: 66px;
  display: flex;
  flexdirection: row;
  justify-content: flex-start;
  gap: 10px;
`
export const TitleToolTipe = styled(textDefault)`
  font-size: 1.6rem;
  line-eight: 2.4rem;
  font-weight: 500;
  color: ${colors.textColor};
  text-transform: capitalize;
`
