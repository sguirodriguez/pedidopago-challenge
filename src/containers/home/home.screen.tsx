import React from 'react'
import {
  Title,
  DashboardBox,
  BoxTable,
  TabTitle,
  TabItem,
  TitleMobile,
  SelectTab,
  MoreVertIconTable,
} from './home.styles'
import Layout from '../../components/layout/layout.components'
import Tabs from '@mui/material/Tabs'
import Box from '@mui/material/Box'
import { colors } from '../../styles/global'
import ListEmployes from '../../components/listEmployes/listEmployes.components'
import ListResponsabilities from '../../components/listResponsibilities/listResponsibilities.components'
import ModalComponent from '../../components/modal/modal.components'
import Skeleton from '@mui/material/Skeleton'
import Stack from '@mui/material/Stack'

type HomeProps = {
  handlers: {
    loading: boolean
    totalEmployes: Array<{
      agent_id: number
      branch: string
      department: string
      image: string
      name: string
      role: string
      status: string
    }>
    totalResponsabilities: Array<{
      agents_quantity: number
      departament: string
      name: string
    }>
    tabIndex: number
    isModalVisible: boolean
    setIsModalVisible: (prev: boolean) => boolean
    handleChange: (event: React.SyntheticEvent, newValue: number) => void
    handleFunction: (value: number) => void
    translatorTabLabel: (index: number, text: string) => any
  }
}

const HomeScreen: React.FC<HomeProps> = ({ handlers }) => {
  const {
    totalEmployes,
    totalResponsabilities,
    loading,
    tabIndex,
    isModalVisible,
    setIsModalVisible,
    handleChange,
    handleFunction,
    translatorTabLabel,
  } = handlers

  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    }
  }

  return (
    <Layout
      contentStyle={{
        display: 'flex',
        flexDirection: 'column',
        gap: 24,
      }}
    >
      {loading ? (
        <Stack
          spacing={1}
          style={{ justifyContent: 'center', alignItems: 'center' }}
        >
          <Skeleton variant="text" width={'90%'} height={60} />

          <Skeleton variant="rectangular" width={'90%'} height={540} />
        </Stack>
      ) : (
        <>
          <>
            <Title>Organização</Title>
            <TitleMobile>Colaboradores</TitleMobile>
          </>

          <DashboardBox>
            <BoxTable>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs
                  value={tabIndex}
                  onChange={handleChange}
                  TabIndicatorProps={{
                    style: { background: colors.primaryColor },
                  }}
                >
                  <TabItem
                    label={translatorTabLabel(tabIndex, 'Colaboradores')}
                    {...a11yProps(0)}
                  />
                  <TabItem
                    label={translatorTabLabel(tabIndex == 0 ? 1 : 0, 'Cargos')}
                    {...a11yProps(1)}
                  />
                </Tabs>
              </Box>
            </BoxTable>

            <SelectTab onClick={() => setIsModalVisible(true)}>
              <TabTitle>{tabIndex == 0 ? 'Colaboradores' : 'Cargos'}</TabTitle>
              <MoreVertIconTable />
            </SelectTab>

            {tabIndex == 0 ? (
              <ListEmployes totalEmployes={totalEmployes} />
            ) : (
              <ListResponsabilities
                totalResponsabilities={totalResponsabilities}
              />
            )}
          </DashboardBox>
          <ModalComponent
            setIsModalVisible={setIsModalVisible}
            isModalVisible={isModalVisible}
            listMode={'CHANGETAB'}
            handleFunction={handleFunction}
          />
        </>
      )}
    </Layout>
  )
}

export default HomeScreen
