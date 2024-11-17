import CloseIcon from '@mui/icons-material/Close'
import { Modal as MuiModal, type ModalOwnProps } from '@mui/material'
import { type FC, type ReactNode } from 'react'
import { StyledClose, StyledModal, StyledTitle } from './styles.ts'

export type ModalProps = Omit<ModalOwnProps, 'children'> & {
  children?: ReactNode
  open: boolean
  onClose?: VoidFunction
  title?: string
}

export const CustomModal: FC<ModalProps> = props => {
  const { children, open, onClose, title, ...rest } = props

  return (
    <MuiModal
      open={open}
      onClose={onClose}
      {...rest}
    >
      <StyledModal>
        {title && <StyledTitle>{title}</StyledTitle>}

        <StyledClose onClick={onClose}>
          <CloseIcon />
        </StyledClose>

        {children}
      </StyledModal>
    </MuiModal>
  )
}
