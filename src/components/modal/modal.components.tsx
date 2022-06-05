import React, { useState } from 'react'
import { ItemToolTip, TitleToolTipe, Content } from './modal.styles'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'
import EditRoundedIcon from '@mui/icons-material/EditRounded'
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined'
import { colors } from '../../styles/global'
import Link from 'next/link'

type ModalComponentProps = {
  isModalVisible: boolean
  setIsModalVisible: any
  listMode?: 'LISTEMPLOYES' | 'LISTRESPONSIBILITIES' | 'DEFAULT'
}

const ModalComponent = ({
  isModalVisible,
  setIsModalVisible,
  listMode = 'DEFAULT',
}: ModalComponentProps) => {
  const translatorColumnsForEmployes = (translatorListMode: string) => {
    const translator = {
      LISTEMPLOYES: (
        <>
          <Link href={`/details/${1}`} onClick={() => setIsModalVisible(false)}>
            <>
              <ItemToolTip
                onClick={() => {
                  setIsModalVisible(false)
                }}
              >
                <RemoveRedEyeOutlinedIcon
                  style={{
                    color: colors.iconToolTipColor,
                  }}
                />
                <TitleToolTipe>Ver Colaborador</TitleToolTipe>
              </ItemToolTip>
            </>
          </Link>
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
          <Link href={`/details/${1}`}>
            <>
              <ItemToolTip
                onClick={() => {
                  setIsModalVisible(false)
                }}
              >
                <RemoveRedEyeOutlinedIcon
                  style={{
                    color: colors.iconToolTipColor,
                  }}
                />
                <TitleToolTipe>Ver Cargo</TitleToolTipe>
              </ItemToolTip>
            </>
          </Link>
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
          height: listMode == 'LISTEMPLOYES' ? 180 : 300,
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
