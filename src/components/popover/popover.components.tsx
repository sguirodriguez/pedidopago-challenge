import React from 'react'
import {
  ButtonAction,
  ToolTip,
  ItemToolTip,
  TitleToolTipe,
  MoreVertIconTable,
} from './popover.styles'
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'
import EditRoundedIcon from '@mui/icons-material/EditRounded'
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined'
import { colors } from '../../styles/global'
import Link from 'next/link'
type PopoverProps = {
  index: any
  details?: number | string
  listMode?: 'LISTEMPLOYES' | 'LISTRESPONSIBILITIES' | 'DEFAULT'
}
import { useRouter } from 'next/router'

const Popover = ({ index, details, listMode }: PopoverProps) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null)

  const router = useRouter()

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }
  const open = Boolean(anchorEl)

  return (
    <>
      <ButtonAction aria-describedby={index.toString()} onClick={handleClick}>
        <MoreVertIconTable />
      </ButtonAction>
      <ToolTip
        id={index.toString()}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        {listMode == 'LISTRESPONSIBILITIES' ? (
          <>
            <ItemToolTip
              onClick={() => {
                router.push(`/roles/`)
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
              <TitleToolTipe style={{ opacity: 0.5 }}>Excluir</TitleToolTipe>
            </ItemToolTip>
          </>
        ) : (
          <>
            <Link href={`/details/${details}`}>
              <ItemToolTip>
                <RemoveRedEyeOutlinedIcon
                  style={{
                    color: colors.iconToolTipColor,
                  }}
                />

                <TitleToolTipe>Ver Colaborador</TitleToolTipe>
              </ItemToolTip>
            </Link>
            <ItemToolTip>
              <DeleteOutlineOutlinedIcon
                style={{
                  color: colors.iconToolTipColor,
                  opacity: 0.5,
                }}
              />
              <TitleToolTipe style={{ opacity: 0.5 }}>Excluir</TitleToolTipe>
            </ItemToolTip>
          </>
        )}
      </ToolTip>
    </>
  )
}

export default Popover
