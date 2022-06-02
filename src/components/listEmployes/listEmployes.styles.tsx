import styled from '@emotion/styled'
import { textDefault } from '../../styles/global'
import SearchIcon from '@mui/icons-material/Search'
import { colors } from '../../styles/global'

export const IconInput = styled(SearchIcon)`
  height: 18px;
  width: 18px;
  color: ${colors.inputIcon};
  margin-right: 10px;
`
export const TitleTable = styled(textDefault)`
  font-weight: 600;
  font-size: 1.6rem;
  line-height: 1.6rem;
`
