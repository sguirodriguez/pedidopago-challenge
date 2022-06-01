import styled from '@emotion/styled'
import { colors, textDefault } from '../../styles/global'

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
  padding: 30px 24px 30px 24px;
`

export const TabTitle = styled(textDefault)`
  font-size: 1.4rem;
  line-eight: 1.4rem;
  font-weight: 600;
  text-transform: capitalize;
`
