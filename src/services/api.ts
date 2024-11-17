import { instance } from '@src/instance'
import { UserTreeType, API_PATH, UNIQUE_TREE_NAME } from '@src/services'

export const getUserTree = (): Promise<UserTreeType> => {
  return instance
    .post(`${API_PATH.USER_TREE_GET}?treeName=${UNIQUE_TREE_NAME}`)
    .then(res => res.data)
}

export const createUserTreeNode = ({ parentNodeId, nodeName }) => {
  return instance
    .post(
      `${API_PATH.USER_TREE_NODE_CREATE}?treeName=${UNIQUE_TREE_NAME}&parentNodeId=${parentNodeId}&nodeName=${nodeName}`
    )
    .then(res => res.data)
}

export const renameUserTreeNode = ({ nodeId, newNodeName }) => {
  return instance
    .post(
      `${API_PATH.USER_TREE_NODE_RENAME}?treeName=${UNIQUE_TREE_NAME}&nodeId=${nodeId}&newNodeName=${newNodeName}`
    )
    .then(res => res.data)
}

export const deleteUserTreeNode = ({ nodeId }) => {
  return instance
    .post(
      `${API_PATH.USER_TREE_NODE_DELETE}?treeName=${UNIQUE_TREE_NAME}&nodeId=${nodeId}`
    )
    .then(res => res.data)
}
