import styled from '@emotion/styled'
import { textDefault, colors } from '../../styles/global'
import Button from '@mui/material/Button'
import TableHead from '@mui/material/TableHead'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: 1910px) {
    gap: 10px;
  }
`

export const GoBack = styled(Button)`
  display: flex;
  width: 100%;
  justify-content: flex-start;
`

export const Title = styled(textDefault)`
  font-weight: 600;
  font-size: 3.2rem;
  line-height: 32px;
  text-transform: capitalize;

  @media (max-width: 576px) {
    font-size: 2rem;
    line-height: 2.32px;
  }
  @media (max-width: 300px) {
    font-size: 1.5rem;
    line-height: 1.32px;
  }
`
export const ContainerGoBack = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`

export const ContainerIcon = styled.div`
  width: 36px;
  height: 36px;
  background-color: ${colors.gray};
  border-radius: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const DashboardBox = styled.div`
  height: 600px;
  width: 100%;
  background-color: ${colors.white};
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(165, 171, 179, 0.16);
  padding: 40px 24px;
  overflow: auto;
  @media (max-width: 1910px) {
    height: 550px;
    padding: 40px 24px;
    margin-bottom: 20px;
  }

  @media (max-width: 668px) {
    height: 670px;
    padding: 40px 24px;
    margin-bottom: 20px;
  }

  @media (max-width: 606px) {
    height: 760px;
    padding: 40px 24px;
    margin-bottom: 20px;
  }

  @media (max-width: 576px) {
    height: 830px;
    padding: 40px 24px;
    margin-bottom: 20px;
  }
`

export const TableHeaderItem = styled(TableCell)`
  width: 100px;
  &. ${tableCellClasses.head} {
    background-color: theme.palette.common.white;
    color: ${colors.textColor};
  }

  @media (max-width: 350px) {
    width: 10px;
  }
`

export const TableHeaderItemName = styled(TableCell)`
  width: 100%;
  &. ${tableCellClasses.head} {
    background-color: theme.palette.common.white;
    color: ${colors.textColor};
  }
`

export const TitleDashboard = styled(textDefault)`
  font-weight: 600;
  font-size: 1.6rem;
  line-height: 100%;
`
export const MarginHorizontalTable = styled.div`
  margin-top: 42px;

  @media (max-width: 1910px) {
    margin-top: 24px;
  }
`

export const ContainerTable = styled.div`
  .table-container {
    border-top-width: 0px;
    border-bottom-width: 0px;
    border-left-width: 0px;
    border-right-width: 0px;
    border-style: solid;
    border-color: white;
  }
`

export const ContainerDataGroup = styled.div`
  display: flex;
  height: 56;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
`

export const DataGroupItem = styled.div`
  flex: 1;
  flex-shrink: 1;
  flex-grow: 1;
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 8px;
  border: 2px solid ${colors.tableBorderColor};

  @media (max-width: 576px) {
    flex-basis: 100%;
  }
`

export const DataGroupText = styled(textDefault)`
  font-size: 1.6rem;
  line-height: 2.4rem;
  font-weight: 500;
  color: ${colors.textColor};
`
export const TableHeader = styled(TableHead)`
  border: 1px solid ${colors.tableBorderColor};
`
export const TextTableHeader = styled(textDefault)`
  font-size: 1.2rem;
  font-weight: 600;
  line-eight: 1.68px;
`
export const TextTableBody = styled(textDefault)`
  font-size: 1.2rem;
  line-eight: 1.68px;
  color: ${colors.textTableBodyColor};
`
