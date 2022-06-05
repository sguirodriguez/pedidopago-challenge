import React, { useState } from 'react'
import AccordionSummary from '@mui/material/AccordionSummary'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Avatar from '@mui/material/Avatar'
import { Summary } from './accordion.styles'
import {
  Container,
  AvatarAndName,
  Title,
  DetailsAccordion,
  DetailsLeft,
  DetailsRight,
  Text,
  ButtonAccordion,
  TextAccordion,
  Status,
  StatusInactive,
} from './accordion.styles'
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined'
import ModalComponent from '../modal/modal.components'

type column = {
  id:
    | 'name'
    | 'department'
    | 'responsibility'
    | 'unity'
    | 'status'
    | 'action'
    | 'agents_quantity'
  label: string
  minWidth: number
  align: 'right' | 'left' | 'center'
}
interface AccordionProps {
  row: {
    name: Array<[string, string]> | string
    department: number | string
    responsibility: number | string
    unity: number | string
    status: number | string
    agents_quantity: number
    action: any
  }
  columns?: column[]
  listMode?: 'LISTEMPLOYES' | 'LISTRESPONSIBILITIES' | 'DEFAULT'
}

const AccordionComponent = ({
  row,
  columns,
  listMode = 'LISTEMPLOYES',
}: AccordionProps) => {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const translatorStatus = (value: string) => {
    const translator = {
      inactive: <StatusInactive>Inativo</StatusInactive>,
      active: <Status>Ativo</Status>,
    }

    if (!value) {
      return <StatusInactive>Inativo</StatusInactive>
    }

    return translator[value as keyof typeof translator]
  }

  const translatorColumnsForEmployes = (nameColumn: string) => {
    const translator = {
      name: (
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Summary>
            <Title className="title-summary">Nome completo</Title>
            <AvatarAndName>
              <Avatar
                src={row?.name[1].toString()}
                style={{ width: 32, height: 32 }}
              />
              <Title>{row?.name[0]}</Title>
            </AvatarAndName>
          </Summary>
        </AccordionSummary>
      ),
      department: (
        <>
          <DetailsAccordion>
            <DetailsLeft>
              <Title>Departamento</Title>
              <Text>{row.department}</Text>
            </DetailsLeft>

            <DetailsRight>
              <Title>Cargo</Title>
              <Text>{row.responsibility}</Text>
            </DetailsRight>
          </DetailsAccordion>
          <DetailsAccordion>
            <DetailsLeft>
              <Title>Unidade</Title>
              <Text>123456789</Text>
            </DetailsLeft>
            <DetailsRight>
              <Title>Unidade</Title>
              <Text>Quartel General</Text>
            </DetailsRight>
          </DetailsAccordion>
        </>
      ),
      status: (
        <DetailsAccordion style={{ flexDirection: 'column' }}>
          <Title>Status</Title>
          <Text>{translatorStatus(String(row.status))}</Text>
        </DetailsAccordion>
      ),
    }
    return translator[nameColumn as keyof typeof translator]
  }

  const translatorColumnsForResponsabilities = (nameColumn: string) => {
    const translator = {
      name: (
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <DetailsAccordion style={{ width: '100%' }}>
            <DetailsLeft style={{ alignItems: 'flex-start' }}>
              <Title>Cargo</Title>
              <Text>{row.name}</Text>
            </DetailsLeft>

            <DetailsRight>
              <Title>Departamento</Title>
              <Text>{row.department}</Text>
            </DetailsRight>
          </DetailsAccordion>
        </AccordionSummary>
      ),

      agents_quantity: (
        <DetailsAccordion style={{ flexDirection: 'column', paddingLeft: 30 }}>
          <Title>Colaboradores</Title>
          <Text>{row.agents_quantity}</Text>
        </DetailsAccordion>
      ),
    }
    return translator[nameColumn as keyof typeof translator]
  }
  return (
    <Container>
      {columns?.map((column: any) => {
        return listMode == 'LISTEMPLOYES'
          ? translatorColumnsForEmployes(column.id)
          : translatorColumnsForResponsabilities(column.id)
      })}

      <DetailsAccordion>
        <ButtonAccordion
          variant="outlined"
          onClick={() => {
            setIsModalVisible(true)
          }}
        >
          <InsertDriveFileOutlinedIcon style={{ fontSize: 18 }} />
          <TextAccordion>Ações</TextAccordion>
        </ButtonAccordion>
      </DetailsAccordion>

      <ModalComponent
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        listMode={listMode}
      />
    </Container>
  )
}

export default AccordionComponent
