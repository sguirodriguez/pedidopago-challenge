import React from 'react'
import { useRouter } from 'next/router'
import Layout from '../../components/layout/layout.components'
import {
  Content,
  Title,
  ContainerGoBack,
  ContainerIcon,
  DashboardBox,
  TitleDashboard,
  MarginHorizontalTable,
  GoBack,
  ContainerDataGroup,
  DataGroupItem,
  DataGroupText,
  TableHeader,
  TextTableHeader,
  ContainerTable,
  TextTableBody,
  TableHeaderItem,
  TableHeaderItemName,
} from './rolesAndPermissions.styles'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { colors } from '../../styles/global'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableContainer from '@mui/material/TableContainer'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Checkbox from '@mui/material/Checkbox'
import Skeleton from '@mui/material/Skeleton'
import Stack from '@mui/material/Stack'

const label = { inputProps: { 'aria-label': 'Checkbox demo' } }

type DetailsRolesScreenProps = {
  handlers: {
    loading: boolean
    detailsResponsability?: {
      name: string
      department: string
      grouprules: Array<{
        role: string
        permissions: Array<[string]>
      }>
    }
    rows: any
  }
}

const RolesAndPermissionsScreen: React.FC<DetailsRolesScreenProps> = ({
  handlers,
}) => {
  const { detailsResponsability, loading, rows } = handlers
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

            <Skeleton variant="rectangular" width={'90%'} height={540} />
          </Stack>
        ) : (
          <Content
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 10,
            }}
          >
            <GoBack onClick={() => router.push('/')}>
              <ContainerGoBack>
                <ContainerIcon>
                  <ArrowBackIcon
                    style={{ fontSize: 20, color: colors.black }}
                  />
                </ContainerIcon>
                <Title>Cargos e permissões</Title>
              </ContainerGoBack>
            </GoBack>
            <DashboardBox>
              <TitleDashboard>Dados do cargo</TitleDashboard>
              <MarginHorizontalTable />
              <ContainerDataGroup>
                <DataGroupItem>
                  <DataGroupText>
                    {detailsResponsability?.department}
                  </DataGroupText>
                </DataGroupItem>
                <DataGroupItem>
                  <DataGroupText>{detailsResponsability?.name}</DataGroupText>
                </DataGroupItem>
              </ContainerDataGroup>
              <MarginHorizontalTable />
              <TitleDashboard>Listagem de permissões</TitleDashboard>
              <MarginHorizontalTable />

              <ContainerTable>
                <Paper
                  variant="outlined"
                  className="table-container"
                  style={{ width: '100' }}
                >
                  <TableContainer style={{ borderRadius: 8, width: '100%' }}>
                    <Table sx={{ maxWidth: 700 }}>
                      <TableHeader>
                        <TableRow>
                          <TableHeaderItemName align="left">
                            <TextTableHeader>Cargo</TextTableHeader>
                          </TableHeaderItemName>
                          <TableHeaderItem align="left">
                            <TextTableHeader>Ler</TextTableHeader>
                          </TableHeaderItem>
                          <TableHeaderItem align="left">
                            <TextTableHeader>Editor</TextTableHeader>
                          </TableHeaderItem>
                          <TableHeaderItem align="left">
                            <TextTableHeader>Excluir</TextTableHeader>
                          </TableHeaderItem>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {rows?.map((row: any) => (
                          <TableRow className="table-container" key={row.name}>
                            <TableHeaderItem align="left">
                              <TextTableBody>{row?.name}</TextTableBody>
                            </TableHeaderItem>
                            <TableHeaderItem align="left">
                              {row?.calories ? (
                                <Checkbox
                                  sx={{
                                    '& .MuiSvgIcon-root': {
                                      fontSize: 15,
                                      color: colors.primaryColor,
                                    },
                                  }}
                                  defaultChecked
                                />
                              ) : (
                                <Checkbox {...label} disabled />
                              )}
                            </TableHeaderItem>
                            <TableHeaderItem align="left">
                              {row?.fat ? (
                                <Checkbox
                                  sx={{
                                    '& .MuiSvgIcon-root': {
                                      fontSize: 15,
                                      color: colors.primaryColor,
                                    },
                                  }}
                                  defaultChecked
                                />
                              ) : (
                                <Checkbox {...label} disabled />
                              )}
                            </TableHeaderItem>
                            <TableHeaderItem align="left">
                              {row?.carbs ? (
                                <Checkbox
                                  sx={{
                                    '& .MuiSvgIcon-root': {
                                      fontSize: 15,
                                      color: colors.primaryColor,
                                    },
                                  }}
                                  defaultChecked
                                />
                              ) : (
                                <Checkbox {...label} disabled />
                              )}
                            </TableHeaderItem>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Paper>
              </ContainerTable>
            </DashboardBox>
          </Content>
        )}
      </Layout>
    </>
  )
}

export default RolesAndPermissionsScreen
