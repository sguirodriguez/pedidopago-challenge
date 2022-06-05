import { useRouter } from 'next/router'
import React from 'react'
import Layout from '../../components/layout/layout.components'
import {
  Title,
  ContainerGoBack,
  ContainerIcon,
  DashboardBox,
  TitleDashboard,
  SubTitleDashboard,
  ContainerAvatarAndName,
  NameAndEmail,
  MarginHorizontal,
  MarginHorizontalTable,
  ContainerPersonalDetails,
  Column,
  ColumnTitle,
  ColumnValue,
  ColumnInfo,
  ColumnAvatar,
  DataOrganizational,
  Data,
  DataItem,
  DataTitle,
} from './detailsEmployes.styles'
import Link from 'next/link'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import Avatar from '@mui/material/Avatar'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

type DetailsEmployeScreenProps = {
  handlers: {
    detailsEmploye: {
      id: number
      name: string
      birth_date: string
      image: string
      department: string
      branch: string
      role: string
      status: string
      email: string
      phone: {
        ddd: string
        ddi: string
        number: string
      }
      document: {
        type: string
        number: string
      }
    }
  }
}

const DetailsEmployeScreen: React.FC<DetailsEmployeScreenProps> = ({
  handlers,
}) => {
  const { detailsEmploye } = handlers
  const router = useRouter()
  const { id } = router.query
  return (
    <>
      <Layout>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          <Link href={`/`}>
            <ContainerGoBack>
              <ContainerIcon>
                <ArrowBackIcon style={{ fontSize: 20 }} />
              </ContainerIcon>
              <Title>Detalhes do colaborador</Title>
            </ContainerGoBack>
          </Link>

          <DashboardBox>
            <ContainerAvatarAndName>
              <Avatar
                src="/broken-image.jpg"
                style={{ width: 80, height: 80 }}
              />
              <NameAndEmail>
                <TitleDashboard>{detailsEmploye?.name}</TitleDashboard>
                <SubTitleDashboard>{detailsEmploye?.email}</SubTitleDashboard>
              </NameAndEmail>
            </ContainerAvatarAndName>

            <MarginHorizontal />
            <TitleDashboard>Informações pessoais</TitleDashboard>
            <MarginHorizontalTable />

            <ContainerPersonalDetails>
              <Column>
                <ColumnAvatar>Avatar</ColumnAvatar>
                <ColumnInfo>
                  <ColumnTitle>{detailsEmploye?.document.type}</ColumnTitle>
                  <ColumnValue>{detailsEmploye?.document.number}</ColumnValue>
                </ColumnInfo>
              </Column>
              <Column>
                <ColumnAvatar>Avatar</ColumnAvatar>
                <ColumnInfo>
                  <ColumnTitle>Telefone</ColumnTitle>
                  <ColumnValue>
                    {`${detailsEmploye?.phone.ddi}+` +
                      ' ' +
                      detailsEmploye?.phone.ddd +
                      ' ' +
                      detailsEmploye?.phone.number}
                  </ColumnValue>
                </ColumnInfo>
              </Column>
              <Column>
                <ColumnAvatar>Avatar</ColumnAvatar>
                <ColumnInfo>
                  <ColumnTitle>Nascimento</ColumnTitle>
                  <ColumnValue>{detailsEmploye?.birth_date}</ColumnValue>
                </ColumnInfo>
              </Column>
            </ContainerPersonalDetails>

            <MarginHorizontal />

            <DataOrganizational>
              <TitleDashboard>Dados Organizacionais</TitleDashboard>
              <Data>
                <DataItem>
                  <DataTitle>{detailsEmploye?.department}</DataTitle>
                  <ExpandMoreIcon style={{ fontSize: 18 }} />
                </DataItem>
                <DataItem>
                  <DataTitle>{detailsEmploye?.role}</DataTitle>
                  <ExpandMoreIcon style={{ fontSize: 18 }} />
                </DataItem>
                <DataItem>
                  <DataTitle>Unidade 1</DataTitle>
                  <ExpandMoreIcon style={{ fontSize: 18 }} />
                </DataItem>
                <DataItem>
                  <DataTitle>{detailsEmploye?.status}</DataTitle>
                  <ExpandMoreIcon style={{ fontSize: 18 }} />
                </DataItem>
              </Data>
            </DataOrganizational>
          </DashboardBox>
        </div>
      </Layout>
    </>
  )
}

export default DetailsEmployeScreen
