import React, { ReactNode, CSSProperties } from 'react'
import Image from 'next/image'
import {
  Container,
  Header,
  Left,
  Right,
  Logo,
  LogoSecond,
  ContainerAvatarHeader,
  TextAvatar,
  ContainerTexts,
  Name,
  Description,
  Main,
  Rectangle,
  Dashboard,
  Content,
} from './layout.styles'
import logoPrimary from '../../../public/vector-logo-primary.svg'
import logoSecondary from '../../../public/vector-logo-secondary.svg'
import Avatar from '@mui/material/Avatar'
import { colors } from '../../styles/global'

interface LayoutProps {
  children?: ReactNode
  contentStyle?: CSSProperties
}

const Layout = ({ children, contentStyle }: LayoutProps) => {
  return (
    <Container>
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
            <Name>Luiz Zlochevsky</Name>
            <Description>meus dados</Description>
          </ContainerTexts>
        </Right>
      </Header>

      <Main>
        <Rectangle />

        <Dashboard>
          <Content style={contentStyle}>{children}</Content>
        </Dashboard>
      </Main>
    </Container>
  )
}

export default Layout
