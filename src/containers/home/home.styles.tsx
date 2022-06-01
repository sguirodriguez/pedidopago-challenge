import styled from '@emotion/styled'
import { colors } from '../../styles/global'
import { textDefault } from '../../styles/global'

export const Header = styled.div`
  width: 100%;
  height: 60px;
  background-color: ${colors.white};
  font-size: 1.4rem;
  border-bottom: 1px solid ${colors.gray};
  padding: 0 32px;
  display: flex;
  justify-content: space-between;
`

export const Left = styled.div`
  height: 100%;
  width: 67px;
  border-right: 1px solid ${colors.gray};
  display: flex;
  align-items: center;
`

export const Logo = styled.div`
  position: relative;
  margin-top: -6px;
  z-index: 1;
`
export const LogoSecond = styled.div`
  position: relative;
  margin-left: -24px;
  z-index: 2;
  opacity: 0.85;
`

export const Right = styled.div`
  height: 100%;
  padding-left: 32px;
  width: 184px;
  border-left: 1px solid ${colors.gray};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`

export const ContainerAvatarHeader = styled.div`
  width: 32px;
  height: '100%';
  display: flex;
  align-items: center;
`

export const TextAvatar = styled(textDefault)`
  font-size: 1.4rem;
`

export const ContainerTexts = styled.div`
  width: 110px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Title = styled(textDefault)`
  font-weight: 600;
  font-size: 1.4rem;
  line-height: 1.4rem;
`
export const Description = styled(textDefault)`
  color: ${colors.background};
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.44rem;
`

export const Main = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  display: flex;
  flex-direction: row;
`
export const Rectangle = styled.div`
  flex: 1;
  max-width: 256px;
  background-color: ${colors.white};
  box-shadow: 0px 4px 8px rgba(165, 171, 179, 0.16);
`
