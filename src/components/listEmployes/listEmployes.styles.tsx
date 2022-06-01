import styled from '@emotion/styled'
import { textDefault } from '../../styles/global'
import SearchIcon from '@mui/icons-material/Search'
import { colors } from '../../styles/global'

export const textLabel = styled(textDefault)`
  font-weight: 500;
  font-size: 1.4rem;
`
export const IconInput = styled(SearchIcon)`
  height: 18px;
  width: 18px;
  color: ${colors.inputIcon};
  margin-right: 10px;
`
