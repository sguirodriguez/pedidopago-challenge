import styled from '@emotion/styled'
import { textDefault, colors } from '../../styles/global'
import Layout from '../../components/layout/layout.components'
import Button from '@mui/material/Button'

export const LayoutModified = styled(Layout)`
  display: flex;
  flex-direction: column;
  gap: 28px;
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

  @media (max-width: 1910px) {
    height: 540px;
    padding: 40px 24px;
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
export const ContainerAvatarAndName = styled.div`
  display: flex;
  flex-direction: row;
  height: 82px;
  align-items: center;
  gap: 24px;
`

export const NameAndEmail = styled.div`
  display: flex;
  flex-direction: column;
`

export const TitleDashboard = styled(textDefault)`
  font-weight: 600;
  font-size: 1.8rem;
  line-height: 150%;

  @media (max-width: 306px) {
    font-size: 1.2rem;
    line-height: 150%;
  }
`
export const SubTitleDashboard = styled(textDefault)`
  font-size: 1.4rem;
  line-height: 120%;
  color: ${colors.textColor};
`
export const MarginHorizontal = styled.div`
  margin-top: 42px;

  @media (max-width: 1910px) {
    margin-top: 21px;
  }
`
export const MarginHorizontalTable = styled.div`
  margin-top: 24px;

  @media (max-width: 1910px) {
    margin-top: 12px;
  }
`

export const ContainerPersonalDetails = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex-shrink: 1;
  flex-grow: 1;
  flex-basis: 290px;
  gap: 24px;

  @media (max-width: 576px) {
    gap: 8px;
  }
`
export const Column = styled.div`
  display: flex;
  flex: 1;
  flex-grow: 1;
  flex-basis: 150px;
  flex-direction: row;
  align-items: center;
  height: 70px;
  padding: 16px;
  border-radius: 8px;
  background-color: ${colors.backgroundColumnInfo};
  border: 2px solid ${colors.tableBorderColor};
  gap: 8px;

  @media (max-width: 576px) {
    flex-basis: 100%;
  }
`
export const ColumnInfo = styled.div`
  display: flex;
  flex-direction: column;
`

export const ColumnTitle = styled(textDefault)`
  font-size: 1.2rem;
  line-height: 120%;
  color: ${colors.textColor};
`
export const ColumnValue = styled(textDefault)`
  font-weight: bold;
  font-size: 1.4rem;
  line-height: 100%;
  color: ${colors.textColor};
`

export const ColumnAvatar = styled.div`
  width: 38px;
  height: 38px;
  border-radius: 19px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.tableBorderColor};
`

export const DataOrganizational = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 235px;
  border: 2px solid ${colors.gray};
  border-radius: 8px;
  padding: 20px 20px;
  @media (max-width: 668px) {
    height: 380px;
  }
  @media (max-width: 666px) {
    height: 380px;
  }
`
export const Data = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
  width: 100%;
  height: 120px;
`
export const DataItem = styled.div`
  flex: 1;
  flex-shrink: 1;
  flex-basis: 250px;
  background-color: ${colors.backgroundColumnInfo};
  border-radius: 8px;
  padding: 20px;
  border: 2px solid ${colors.tableBorderColor};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const DataTitle = styled(textDefault)`
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 2.4rem;
  color: ${colors.dataTitleColor};
`
