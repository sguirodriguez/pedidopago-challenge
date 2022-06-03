import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Avatar from '@mui/material/Avatar'
import { Summary } from './accordion.styles'
import {
  AvatarAndName,
  Title,
  DetailsAccordion,
  DetailsLeft,
  DetailsRight,
  Text,
} from './accordion.styles'
import Button from '@mui/material/Button'
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined'

const AccordionComponent = () => {
  return (
    <Accordion>
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
        <Button
          style={{
            width: '100%',
            height: 52,
            borderColor: '#B5F1DD',
            color: '#B5F1DD',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          variant="outlined"
        >
          <InsertDriveFileOutlinedIcon style={{ fontSize: 18 }} />
          <span style={{ color: 'black', fontSize: 10 }}>Ações</span>
        </Button>
      </DetailsAccordion>
    </Accordion>
  )
}

export default AccordionComponent
