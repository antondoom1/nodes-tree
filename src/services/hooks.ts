import {
  useMutation,
  useQuery,
  useQueryClient,
  UseQueryResult,
} from '@tanstack/react-query'
import {
  createUserTreeNode,
  deleteUserTreeNode,
  getUserTree,
  renameUserTreeNode,
} from '@src/services/api.ts'
import { UserTreeType } from '@src/services/types.ts'
import { toast } from 'react-toastify'

export const useGetUserTreeQuery = (): UseQueryResult<UserTreeType> => {
  return useQuery({
    queryFn: getUserTree,
    queryKey: ['user-tree'],
  })
}

export const useCreateUserTreeNodeMutation = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ parentNodeId, nodeName }) =>
      createUserTreeNode({ parentNodeId, nodeName }),
    onSettled: () => {
      void queryClient.invalidateQueries({
        queryKey: ['user-tree'],
      })
    },
    onError: error => {
      toast(error.response.data.data.message || 'Some error occurred')
    },
  })
}

export const useRenameUserTreeNodeMutation = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ nodeId, newNodeName }) =>
      renameUserTreeNode({ nodeId, newNodeName }),
    onSettled: () => {
      void queryClient.invalidateQueries({
        queryKey: ['user-tree'],
      })
    },
    onError: error => {
      toast(error.response.data.data.message || 'Some error occurred')
    },
  })
}

export const useDeleteUserTreeNodeMutation = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ nodeId }) => deleteUserTreeNode({ nodeId }),
    onSettled: () => {
      void queryClient.invalidateQueries({
        queryKey: ['user-tree'],
      })
    },
    onError: error => {
      toast(error.response.data.data.message || 'Some error occurred')
    },
  })
}
