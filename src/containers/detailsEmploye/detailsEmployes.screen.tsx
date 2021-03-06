import React from 'react'
import { useRouter } from 'next/router'
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
  GoBack,
} from './detailsEmployes.styles'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import Avatar from '@mui/material/Avatar'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { colors } from '../../styles/global'
import ArticleIcon from '@mui/icons-material/Article'
import PhoneIcon from '@mui/icons-material/Phone'
import DateRangeIcon from '@mui/icons-material/DateRange'
import Skeleton from '@mui/material/Skeleton'
import Stack from '@mui/material/Stack'

type DetailsEmployeScreenProps = {
  handlers: {
    loading: boolean
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
    date: string
  }
}

const DetailsEmployeScreen: React.FC<DetailsEmployeScreenProps> = ({
  handlers,
}) => {
  const { detailsEmploye, loading, date } = handlers
  const router = useRouter() // router para pegar id recebido pela tabela e tambem redirecionar

  return (
    <>
      <Layout>
        {loading ? (
          <Stack
            spacing={1}
            style={{ justifyContent: 'center', alignItems: 'center' }}
          >
            <Skeleton variant="text" width={'90%'} height={60} />
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                width: '90%',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Skeleton variant="circular" width={80} height={80} />
              <Skeleton variant="text" width={'90%'} height={80} />
            </div>
            <Skeleton variant="rectangular" width={'90%'} height={370} />
          </Stack>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
            <GoBack onClick={() => router.push('/')}>
              <ContainerGoBack>
                <ContainerIcon>
                  <ArrowBackIcon
                    style={{ fontSize: 20, color: colors.black }}
                  />
                </ContainerIcon>
                <Title>Detalhes do colaborador</Title>
              </ContainerGoBack>
            </GoBack>

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
              <TitleDashboard>Informa????es pessoais</TitleDashboard>
              <MarginHorizontalTable />

              <ContainerPersonalDetails>
                <Column>
                  <ColumnAvatar>
                    <ArticleIcon />
                  </ColumnAvatar>
                  <ColumnInfo>
                    <ColumnTitle>{detailsEmploye?.document.type}</ColumnTitle>
                    <ColumnValue>{detailsEmploye?.document.number}</ColumnValue>
                  </ColumnInfo>
                </Column>
                <Column>
                  <ColumnAvatar>
                    <PhoneIcon />
                  </ColumnAvatar>
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
                  <ColumnAvatar>
                    <DateRangeIcon />
                  </ColumnAvatar>
                  <ColumnInfo>
                    <ColumnTitle>Nascimento</ColumnTitle>
                    <ColumnValue>{date}</ColumnValue>
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
                    <DataTitle>
                      {detailsEmploye?.status == 'active' ? 'Ativo' : 'Inativo'}
                    </DataTitle>
                    <ExpandMoreIcon style={{ fontSize: 18 }} />
                  </DataItem>
                </Data>
              </DataOrganizational>
            </DashboardBox>
          </div>
        )}
      </Layout>
    </>
  )
}

export default DetailsEmployeScreen
