import styled from '@emotion/styled'
import Stack from '@mui/material/Stack'
import { textDefault } from '../../styles/global'
import Select from '@mui/material/Select'
import { colors } from '../../styles/global'
import TableContainer from '@mui/material/TableContainer'
import Paper from '@mui/material/Paper'

export const Container = styled.div`
  .head-table {
    border-top-width: 0px;
    border-bottom-width: 1px;
    border-left-width: 1px;
    border-right-width: 1px;
    border-style: solid;
    border-color: ${colors.tableBorderColor};
    border-radius: 8px 8px 0px 0px;
    font-size: 2rem;
  }
`

export const ContainerTable = styled(TableContainer)`
  max-height: 520px;

  @media (max-width: 1910px) {
    max-height: 380px;
  }
`

export const ContainerPaper = styled(Paper)`
  width: 100%;
  overflow: hidden;
  border-top-width: 1px;
  border-bottom-width: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
  border-color: ${colors.tableBorderColor};
  border-radius: 8px 8px 0px 0px;
`

export const TableTitle = styled(textDefault)`
  font-size: 1.2rem;
  font-weight: 600;
  line-height: 1.68rem;
  color: ${colors.textColor};
`

export const TableDescription = styled(textDefault)`
  font-size: 1.2rem;
  line-height: 1.68rem;
  color: ${colors.textColor};
`

export const FooterPagination = styled(Stack)`
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 40px;
`

export const FooterLeft = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
`
export const FooterTitle = styled(textDefault)`
  font-size: 1.6rem;
  line-height: 2.4rem;
`
export const SelectRowsPerPage = styled(Select)`
  height: 30px;
  border-color: ${colors.tableBorderColor};
  border-radius: 8px;
  border-width: 2px;
`
