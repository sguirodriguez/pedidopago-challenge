import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const GlobalStyle = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 62.5%;
  }
`
export const textDefault = styled.span`
  color: #34423D; 
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  font-weight: 400;
`

export const colors = {
  white:'#FFFFFF',
  black: '#34423D',
  gray:'#EAEFED',
  background:'#E5E5E5',
  primaryColor:'#22E0A1',
  secondaryColor:'#034AFD',
  statusColor:'#B5F1DD',
  textColor:'#587169',
}

