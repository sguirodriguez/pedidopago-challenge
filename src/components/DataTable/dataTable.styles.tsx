import styled from '@emotion/styled'
import Stack from '@mui/material/Stack'
import { textDefault } from '../../styles/global'

export const FooterPagination = styled(Stack)`
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const FooterLeft = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
`
export const FooterTitle = styled(textDefault)`
  font-size: 1.4rem;
  line-height: 2.4rem;
`
