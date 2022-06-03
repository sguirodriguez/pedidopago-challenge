import styled from '@emotion/styled'
import { textDefault } from '../../styles/global'
import { colors } from '../../styles/global'
import AccordionDetails from '@mui/material/AccordionDetails'

export const Summary = styled.div`
  display: flex;
  flex-direction: column;
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
