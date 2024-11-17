import { Button, type ModalOwnProps, Stack, TextField } from '@mui/material'
import { ChangeEvent, type FC, type ReactNode, useState } from 'react'
import { CustomModal } from '@src/components/modals/CustomModal'
import { useRenameUserTreeNodeMutation } from '@src/services'

export type ModalProps = Omit<ModalOwnProps, 'children'> & {
  nodeId: number
  currentNodeName: string
  children?: ReactNode
  open: boolean
  onClose?: VoidFunction
  title?: string
}

export const RenameNodeModal: FC<ModalProps> = props => {
  const { nodeId, currentNodeName, open, onClose, ...rest } = props

  const [newNodeName, setNewNodeName] = useState(currentNodeName)

  const { mutate } = useRenameUserTreeNodeMutation()

  const changeNodeNameHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setNewNodeName(event.currentTarget.value)
  }

  const renameUserTreeNodeHandler = () => {
    mutate({ nodeId, newNodeName })

    if (onClose) {
      onClose()
    }
  }

  return (
    <CustomModal
      open={open}
      onClose={onClose}
      title={'Rename'}
      {...rest}
    >
      <TextField
        sx={{ mt: 2 }}
        fullWidth
        label="New node name"
        value={newNodeName}
        onChange={changeNodeNameHandler}
      />

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
          color="primary"
          onClick={renameUserTreeNodeHandler}
        >
          Rename
        </Button>
      </Stack>
    </CustomModal>
  )
}
