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
  background:'#F9FAF9',
  primaryColor:'#22E0A1',
  secondaryColor:'#034AFD',
  statusColor:'#B5F1DD',
  statusColorInactive:'#EAEFED',
  textColor:'#587169',
  inputLabel:'#A3B8B0',
  inputIcon:'#587169',
  tableBorderColor:'#CAD6D1',
  iconTableColor:'#587169',
  borderButtonAccordionColor:'#B5F1DD',
}

