import styled from '@emotion/styled'
import Button from '@mui/material/Button'
import { textDefault, colors } from '../../styles/global'

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
