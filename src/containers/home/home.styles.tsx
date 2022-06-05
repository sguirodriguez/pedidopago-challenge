import styled from '@emotion/styled'
import { colors, textDefault } from '../../styles/global'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import { Button } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert'

export const Title = styled(textDefault)`
  font-weight: 600;
  font-size: 3.2rem;
  line-height: 32px;

  @media (max-width: 576px) {
    display: none;
  }
`

export const TitleMobile = styled(textDefault)`
  font-weight: 600;
  font-size: 2.4rem;
  line-height: 2.4rem;
  display: none;

  @media (max-width: 576px) {
    display: block;
  }
`

export const DashboardBox = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${colors.white};
  border-radius: 8px;
  box-shadow: 5px 5px 10px 0px rgba(165, 171, 179, 0.16);
  padding: 40px 24px;
  overflow-x: hidden;
  overflow-y: auto;

  @media (max-width: 1910px) {
    padding: 10px 24px 10px 24px;
  }

  @media (max-width: 576px) {
    padding: 5px 14px 5px 14px;
    overflow-x: visible;
    overflow-y: visible;
    height: 1300px;
  }
`
export const BoxTable = styled(Box)`
  width: 100%;

  @media (max-width: 576px) {
    display: none;
  }
`
export const SelectTab = styled(Button)`
  width: 100%;
  display: none;

  @media (max-width: 576px) {
    height: 56px;
    padding: 20px;
    border: 2px solid ${colors.tableBorderColor};
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`
export const MoreVertIconTable = styled(MoreVertIcon)`
  width: 22px;
  height: 22px;
  color: ${colors.iconTableColor};
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
