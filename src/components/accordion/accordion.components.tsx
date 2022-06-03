import Accordion from '@mui/material/Accordion'
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
} from './accordion.styles'
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined'

const AccordionComponent = () => {
  return (
    <Container>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Summary>
          <Title className="title-summary">Nome completo</Title>
          <AvatarAndName>
            <Avatar src="/broken-image.jpg" style={{ width: 32, height: 32 }} />
            <Title>Samuel Guilherme Ribeiro Rodrigues</Title>
          </AvatarAndName>
        </Summary>
      </AccordionSummary>

      <DetailsAccordion>
        <DetailsLeft>
          <Title>Departamento</Title>
          <Text>Administrativo</Text>
        </DetailsLeft>
        <DetailsRight>
          <Title>Cargo</Title>
          <Text>Diretor</Text>
        </DetailsRight>
      </DetailsAccordion>

      <DetailsAccordion>
        <DetailsLeft>
          <Title>Departamento</Title>
          <Text>Administrativo</Text>
        </DetailsLeft>
        <DetailsRight>
          <Title>Cargo</Title>
          <Text>Diretor</Text>
        </DetailsRight>
      </DetailsAccordion>
      <DetailsAccordion style={{ flexDirection: 'column' }}>
        <Title>Cargo</Title>
        <Text>Diretor</Text>
      </DetailsAccordion>
      <DetailsAccordion style={{ flexDirection: 'column' }}>
        <Title>Cargo</Title>
        <Text>Diretor</Text>
      </DetailsAccordion>
      <DetailsAccordion>
        <ButtonAccordion variant="outlined">
          <InsertDriveFileOutlinedIcon style={{ fontSize: 18 }} />
          <TextAccordion>Ações</TextAccordion>
        </ButtonAccordion>
      </DetailsAccordion>
    </Container>
  )
}

export default AccordionComponent
