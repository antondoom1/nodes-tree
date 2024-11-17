import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import 'react-toastify/dist/ReactToastify.css'
import { TreeNodes } from '@src/features/tree-nodes/TreeNodes.tsx'
import { ToastContainer } from 'react-toastify'

const queryClient = new QueryClient()

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ToastContainer />

      <TreeNodes />
    </QueryClientProvider>
  )
}
