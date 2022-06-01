import type { NextPage } from 'next'
import Image from 'next/image'
import {
  Header,
  Left,
  Right,
  Logo,
  LogoSecond,
  ContainerAvatarHeader,
  TextAvatar,
  ContainerTexts,
  Title,
  Description,
  Main,
  Rectangle,
} from './home.styles'
import logoPrimary from '../../../public/vector-logo-primary.svg'
import logoSecondary from '../../../public/vector-logo-secondary.svg'
import Avatar from '@mui/material/Avatar'
import { colors } from '../../styles/global'

const HomeScreen: NextPage = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Header>
        <Left>
          <Logo>
            <Image src={logoPrimary} width={29} height={29} />
          </Logo>

          <LogoSecond>
            <Image src={logoSecondary} width={29} height={29} />
          </LogoSecond>
        </Left>
        <Right>
          <ContainerAvatarHeader>
            <Avatar sx={{ bgcolor: colors.statusColor, width: 32, height: 32 }}>
              <TextAvatar>LZ</TextAvatar>
            </Avatar>
          </ContainerAvatarHeader>
          <ContainerTexts>
            <Title>Luiz Zlochevsky</Title>
            <Description>meus dados</Description>
          </ContainerTexts>
        </Right>
      </Header>
      <Main>
        <Rectangle>rectangle</Rectangle>
        <div style={{ flex: 1, backgroundColor: colors.background }}>
          dashboard
        </div>
      </Main>
    </div>
  )
}

export default HomeScreen
