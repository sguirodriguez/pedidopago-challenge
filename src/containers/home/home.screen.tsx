import {
  Title,
  DashboardBox,
  BoxTable,
  TabTitle,
  TabItem,
  TitleMobile,
  SelectTab,
} from './home.styles'
import Layout from '../../components/layout/layout.components'
import React, { useState } from 'react'
import Tabs from '@mui/material/Tabs'
import Box from '@mui/material/Box'
import { colors } from '../../styles/global'
import ListEmployes from '../../components/listEmployes/listEmployes.components'
import ListResponsabilities from '../../components/listResponsibilities/listResponsibilities.components'
import MenuItem from '@mui/material/MenuItem'

type HomeProps = {
  handlers: {
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
  }
}

const HomeScreen: React.FC<HomeProps> = ({ handlers }) => {
  const { totalEmployes, totalResponsabilities } = handlers
  const [tabIndex, setTabIndex] = useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabIndex(newValue)
  }

  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    }
  }

  const translatorTabLabel = (index: number, text: string) => {
    const translatorTab = {
      0: <TabTitle>{text}</TabTitle>,
      1: <TabTitle style={{ color: colors.gray }}>{text}</TabTitle>,
    }

    return translatorTab[index as keyof typeof translatorTab]
  }

  return (
    <Layout
      contentStyle={{
        display: 'flex',
        flexDirection: 'column',
        gap: 24,
      }}
    >
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

        <SelectTab
          value={String(tabIndex)}
          onChange={(event: any) => setTabIndex(Number(event.target.value))}
          SelectDisplayProps={{ className: 'box-items' }}
          autoWidth
        >
          <MenuItem value={0}>Colaboradores</MenuItem>
          <MenuItem value={1}>Cargos</MenuItem>
        </SelectTab>

        {tabIndex == 0 ? (
          <ListEmployes totalEmployes={totalEmployes} />
        ) : (
          <ListResponsabilities totalResponsabilities={totalResponsabilities} />
        )}
      </DashboardBox>
    </Layout>
  )
}

export default HomeScreen
