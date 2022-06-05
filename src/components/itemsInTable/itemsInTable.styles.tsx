import styled from '@emotion/styled'
import Stack from '@mui/material/Stack'
import { textDefault } from '../../styles/global'
import Select from '@mui/material/Select'
import { colors } from '../../styles/global'
import TableContainer from '@mui/material/TableContainer'
import Paper from '@mui/material/Paper'
import TableCell from '@mui/material/TableCell'
import Button from '@mui/material/Button'

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

export const ContainerAccordion = styled.div`
  width: 100%;
  height: 400px;
  display: none;

  @media (max-width: 570px) {
    display: flex;
    flex-direction: column;
    gap: 8px;
    height: 100%;
    max-height: 1000px;
    overflow: auto;
  }
`

export const ButtonShowMore = styled(Button)`
  margin-top: 10px;
  width: 100%;
  height: 52px;
  border-color: ${colors.borderButtonAccordionColor};
  color: ${colors.primaryColor};
  display: flex;
  justify-content: center;
  align-items: center;
  border-width: 2px;
  gap: 10px;
`
export const TextShowMore = styled(textDefault)`
  font-size: 1.6rem;
  line-height: 2.4rem;
  font-weight: 600;
  text-transform: capitalize;
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

  @media (max-width: 570px) {
    display: none;
  }
`

export const ContainerTable = styled(TableContainer)`
  max-height: 530px;

  @media (max-width: 1910px) {
    max-height: 330px;
  }

  @media (max-width: 1200px) {
    max-height: 310px;
  }
`

export const HeaderTable = styled(TableCell)`
  border-width: 0px;
  height: 49px;
`

export const Row = styled(TableCell)`
  height: 65px;
`

export const AvatarAndText = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
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

export const Status = styled.div`
  width: 72px;
  height: 24px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.statusColor};
  font-size: 1.4rem;
  line-height: 1.624rem;
  font-weight: 500;
  font-family: 'Poppins', sans-serif;
`

export const StatusInactive = styled(Status)`
  background-color: ${colors.statusColorInactive};
`
