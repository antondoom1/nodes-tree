import {
  Button,
  CircularProgress,
  type ModalOwnProps,
  Stack,
  Typography,
} from '@mui/material'
import { type FC, type ReactNode } from 'react'
import { CustomModal } from '@src/components/modals/CustomModal'
import { useDeleteUserTreeNodeMutation } from '@src/services'

export type ModalProps = Omit<ModalOwnProps, 'children'> & {
  nodeId: number
  nodeName: string
  children?: ReactNode
  open: boolean
  onClose?: VoidFunction
  title?: string
}

export const DeleteNodeModal: FC<ModalProps> = props => {
  const { nodeId, nodeName, open, onClose, ...rest } = props

  const { mutate } = useDeleteUserTreeNodeMutation()

  const deleteUserTreeNodeHandler = () => {
    mutate({ nodeId })

    if (onClose) {
      onClose()
    }
  }

  return (
    <CustomModal
      open={open}
      onClose={onClose}
      title={'Delete'}
      {...rest}
    >
      <Typography>Do you want to delete {nodeName}?</Typography>

      <Stack
        flexDirection="row"
        justifyContent="flex-end"
        gap="10px"
        mt={3}
      >
        <Button
          variant="outlined"
          onClick={onClose}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          color="error"
          onClick={deleteUserTreeNodeHandler}
        >
          Delete
        </Button>
      </Stack>
    </CustomModal>
  )
}
