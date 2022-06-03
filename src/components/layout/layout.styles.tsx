import styled from '@emotion/styled'
import { colors } from '../../styles/global'
import { textDefault } from '../../styles/global'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const Header = styled.div`
  width: 100%;
  height: 60px;
  background-color: ${colors.white};
  font-size: 1.4rem;
  border-bottom: 1px solid ${colors.gray};
  padding: 0 32px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 600px) {
    padding: 0;
    justify-content: flex-end;
    flex-direction: row-reverse;
    gap: 0;
  }
`

export const Left = styled.div`
  height: 100%;
  width: 67px;
  border-right: 1px solid ${colors.gray};
  display: flex;
  align-items: center;

  @media (max-width: 600px) {
    border: 0px;
    flex: 1;
    justify-content: center;
  }
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

  @media (max-width: 600px) {
    border: 0px;
    padding-left: 0px;
    width: 50px;
  }
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

  @media (max-width: 600px) {
    display: none;
  }
`

export const Name = styled(textDefault)`
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
  position: relative;
  z-index: 2;
  background-color: ${colors.white};
  box-shadow: 4px 0px 8px 0px rgba(165, 171, 179, 0.16);

  @media (max-width: 1024px) {
    display: none;
  }
`

export const Dashboard = styled.div`
  flex: 1;
  background-color: ${colors.background};

  @media (max-width: 700px) {
    max-height: 1000px;
    overflow: auto;
  }

  @media (max-width: 576px) {
    max-height: 1527px;
    padding-bottom: 100px;
    overflow: auto;
  }
`

export const Content = styled.div`
  max-width: 58%;
  height: 100%;
  margin: auto;
  box-sizing: border-box;
  padding-top: 50px;
  padding-bottom: 80px;

  @media (max-width: 1910px) {
    padding-top: 40px;
    padding-bottom: 40px;
    max-width: 65%;
    max-height: 700px;
  }

  @media (max-width: 1300px) {
    max-width: 80%;
    padding-top: 20px;
    padding-bottom: 20px;
  }

  @media (max-width: 780px) {
    max-width: 90%;
    padding-top: 15px;
    padding-bottom: 15px;
  }

  @media (max-width: 576px) {
    max-width: 98%;
    padding-top: 40px;
    padding-bottom: 125px;
  }
`
