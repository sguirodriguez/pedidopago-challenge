import styled from '@emotion/styled'
import { colors, textDefault } from '../../styles/global'
import Tab from '@mui/material/Tab'

export const Title = styled(textDefault)`
  font-weight: 600;
  font-size: 3.2rem;
  line-height: 32px;
`

export const Dashboard = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${colors.white};
  border-radius: 8px;
  box-shadow: 5px 5px 10px 0px rgba(165, 171, 179, 0.16);
  padding: 40px 24px;

  @media (max-width: 1910px) {
    padding: 10px 24px 10px 24px;
  }
`

export const TabTitle = styled(textDefault)`
  font-size: 1.4rem;
  line-eight: 1.4rem;
  font-weight: 600;
  text-transform: capitalize;
`

export const TabItem = styled(Tab)`
  width: 196px;
`
