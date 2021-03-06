import styled from '@emotion/styled'
import Button from '@mui/material/Button'
import Popover from '@mui/material/Popover'
import { textDefault, colors } from '../../styles/global'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import Link from 'next/link'

export const ButtonAction = styled(Button)`
  width: 10px;
  height: 20px;
`

export const ToolTip = styled(Popover)`
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ItemToolTip = styled(Button)`
  width: 300px;
  height: 66px;
  display: flex;
  flexdirection: row;
  justify-content: flex-start;
  gap: 10px;
  padding: 10px;
`
export const ItemToolTipLink = styled(Link)`
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
export const MoreVertIconTable = styled(MoreVertIcon)`
  width: 22px;
  height: 22px;
  color: ${colors.iconTableColor};
`
