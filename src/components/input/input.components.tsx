import React, { CSSProperties } from 'react'
import { InputTextDefault } from './input.styles'
import { colors } from '../../styles/global'
import Input from '@mui/material/Input'

interface InputProps {
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  labelText?: string
  inputStyle?: CSSProperties
  inputLabelStyle?: CSSProperties
  icon?: React.ReactNode
  type?: string
  disabled?: boolean
  placeholderText?: string
}

const InputText = ({
  handleChange,
  labelText,
  inputStyle,
  icon,
  inputLabelStyle,
  placeholderText,
  type = 'default',
  disabled,
}: InputProps) => {
  const translatorInputByType = () => {
    const translatorInput = {
      default: (
        <InputTextDefault
          label={labelText}
          id="outlined-start-adornment"
          InputLabelProps={{
            style: inputLabelStyle || {
              fontSize: '1.4rem',
              fontFamily: 'Poppins',
              height: 18,
              width: 100,
              color: colors.inputLabel,
              fontWeight: 500,
              backgroundColor: colors.white,
              zIndex: 100,
            },
          }}
          InputProps={{
            startAdornment: icon,
            style: inputStyle || {
              borderColor: colors.gray,
              height: '4.2rem',
              fontSize: '1.6rem',
              lineHeight: '2.4rem',
              fontFamily: 'Poppins',
            },
            notched: true,
          }}
          onChange={handleChange}
          placeholder={placeholderText}
          disabled={disabled}
        />
      ),
      disabled: <Input />,
    }

    return translatorInput[type as keyof typeof translatorInput]
  }

  return <>{translatorInputByType()}</>
}

export default InputText
