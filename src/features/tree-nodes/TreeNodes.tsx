import { useGetUserTreeQuery } from '@src/services'
import { CircularProgress } from '@mui/material'
import { Node } from './node/Node.tsx'

export const TreeNodes = () => {
  const { data, isLoading } = useGetUserTreeQuery()

  if (isLoading || !data) {
    return <CircularProgress />
  }

  return (
    <Node
      node={data}
      isRoot
    />
  )
}
