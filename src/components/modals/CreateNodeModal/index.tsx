import { Button, type ModalOwnProps, Stack, TextField } from '@mui/material'
import { ChangeEvent, type FC, type ReactNode, useState } from 'react'
import { CustomModal } from '@src/components/modals/CustomModal'
import { useCreateUserTreeNodeMutation } from '@src/services'

export type ModalProps = Omit<ModalOwnProps, 'children'> & {
  parentNodeId: number
  children?: ReactNode
  open: boolean
  onClose?: VoidFunction
  title?: string
}

export const CreateNodeModal: FC<ModalProps> = props => {
  const { parentNodeId, open, onClose, ...rest } = props

  const [nodeName, setNodeName] = useState('')

  const { mutate } = useCreateUserTreeNodeMutation()

  const changeNodeNameHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setNodeName(event.currentTarget.value)
  }

  const createUserTreeNodeHandler = () => {
    mutate({ parentNodeId, nodeName })

    if (onClose) {
      onClose()
    }
  }

  return (
    <CustomModal
      open={open}
      onClose={onClose}
      title={'Add'}
      {...rest}
    >
      <TextField
        sx={{ mt: 2 }}
        fullWidth
        label="Node name"
        value={nodeName}
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
          onClick={createUserTreeNodeHandler}
        >
          Add
        </Button>
      </Stack>
    </CustomModal>
  )
}
