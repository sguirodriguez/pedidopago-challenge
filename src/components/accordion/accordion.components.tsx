import React from 'react'
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

type column = {
  id: 'name' | 'department' | 'responsibility' | 'unity' | 'status' | 'action'
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
    action: any
  }
  columns?: any
}

const AccordionComponent = ({ row, columns }: AccordionProps) => {
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

  const translatorColumnsRender = (nameColumn: string) => {
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
  return (
    <Container>
      {columns?.map((column: any) => {
        return translatorColumnsRender(column.id)
      })}

      <DetailsAccordion>
        <ButtonAccordion
          variant="outlined"
          onClick={() => console.log(row.action)}
        >
          <InsertDriveFileOutlinedIcon style={{ fontSize: 18 }} />
          <TextAccordion>Ações</TextAccordion>
        </ButtonAccordion>
      </DetailsAccordion>
    </Container>
  )
}

export default AccordionComponent
