import React, { useState } from 'react'
import { ItemToolTip, TitleToolTipe, Content } from './modal.styles'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'
import EditRoundedIcon from '@mui/icons-material/EditRounded'
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined'
import { colors } from '../../styles/global'
import { useRouter } from 'next/router'

type ModalComponentProps = {
  isModalVisible: boolean
  setIsModalVisible: any
  listMode?: 'LISTEMPLOYES' | 'LISTRESPONSIBILITIES' | 'DEFAULT' | 'CHANGETAB'
  handleFunction?: any
}

const ModalComponent = ({
  isModalVisible,
  setIsModalVisible,
  listMode = 'DEFAULT',
  handleFunction,
}: ModalComponentProps) => {
  const router = useRouter()
  const translatorColumnsForEmployes = (translatorListMode: string) => {
    const translator = {
      LISTEMPLOYES: (
        <>
          <ItemToolTip
            onClick={() => {
              setIsModalVisible(false)
              router.push(`/details/${1}`)
            }}
          >
            <RemoveRedEyeOutlinedIcon
              style={{
                color: colors.iconToolTipColor,
              }}
            />
            <TitleToolTipe>Ver Colaborador</TitleToolTipe>
          </ItemToolTip>

          <ItemToolTip>
            <EditRoundedIcon
              style={{
                color: colors.iconToolTipColor,
                opacity: 0.5,
              }}
            />
            <TitleToolTipe style={{ opacity: 0.5 }}>Editar</TitleToolTipe>
          </ItemToolTip>
        </>
      ),
      LISTRESPONSIBILITIES: (
        <>
          <ItemToolTip
            onClick={() => {
              setIsModalVisible(false)
              router.push(`/details/${1}`)
            }}
          >
            <RemoveRedEyeOutlinedIcon
              style={{
                color: colors.iconToolTipColor,
              }}
            />
            <TitleToolTipe>Ver Cargo</TitleToolTipe>
          </ItemToolTip>
          <ItemToolTip>
            <EditRoundedIcon
              style={{
                color: colors.iconToolTipColor,
                opacity: 0.5,
              }}
            />
            <TitleToolTipe style={{ opacity: 0.5 }}>Editar</TitleToolTipe>
          </ItemToolTip>
          <ItemToolTip>
            <ContentCopyOutlinedIcon
              style={{
                color: colors.iconToolTipColor,
                opacity: 0.5,
              }}
            />
            <TitleToolTipe style={{ opacity: 0.5 }}>Duplicar</TitleToolTipe>
          </ItemToolTip>
          <ItemToolTip>
            <DeleteOutlineOutlinedIcon
              style={{
                color: colors.iconToolTipColor,
                opacity: 0.5,
              }}
            />
            <TitleToolTipe style={{ opacity: 0.5 }}>Editar</TitleToolTipe>
          </ItemToolTip>
        </>
      ),
      CHANGETAB: (
        <>
          <ItemToolTip
            onClick={() => {
              setIsModalVisible(false)
              handleFunction(0)
            }}
          >
            <RemoveRedEyeOutlinedIcon
              style={{
                color: colors.iconToolTipColor,
              }}
            />
            <TitleToolTipe>Colaboradores</TitleToolTipe>
          </ItemToolTip>

          <ItemToolTip
            onClick={() => {
              setIsModalVisible(false)
              handleFunction(1)
            }}
          >
            <EditRoundedIcon
              style={{
                color: colors.iconToolTipColor,
              }}
            />
            <TitleToolTipe>Cargos</TitleToolTipe>
          </ItemToolTip>
        </>
      ),
      DEFAULT: <></>,
    }
    return translator[translatorListMode as keyof typeof translator]
  }

  return (
    <Modal
      open={isModalVisible}
      onClose={() => setIsModalVisible(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: 'absolute' as 'absolute',
          bottom: '5%',
          left: '50%',
          transform: 'translate(-50%, -4%)',
          width: 330,
          height: listMode == 'LISTEMPLOYES' || 'CHANGETAB' ? 180 : 300,
          bgcolor: 'background.paper',
          p: 1,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}
      >
        <Content>{translatorColumnsForEmployes(listMode)}</Content>
      </Box>
    </Modal>
  )
}

export default ModalComponent
