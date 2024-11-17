import { Fragment, SyntheticEvent, useState } from 'react'
import {
  Accordion,
  AccordionDetails,
  StyledAccordionSummary,
  StyledArrowIcon,
  StyledIconButton,
} from './styles.tsx'
import { UserTreeType } from '@src/services'
import { Stack } from '@mui/material'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import EditIcon from '@mui/icons-material/Edit'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'

import { CreateNodeModal } from '@src/components/modals/CreateNodeModal'
import { RenameNodeModal } from '@src/components/modals/RenameNodeModal'
import { DeleteNodeModal } from '@src/components/modals/DeleteNodeModal'

type NodeProps = {
  node: UserTreeType
  isRoot?: boolean
}

export const Node = ({ node, isRoot }: NodeProps) => {
  const [expanded, setExpanded] = useState(false)
  const [hovered, setHovered] = useState(false)
  const [createNodeModalOpen, setCreateNodeModalOpen] = useState(false)
  const [renameNodeModalOpen, setRenameNodeModalOpen] = useState(false)
  const [deleteNodeModalOpen, setDeleteNodeModalOpen] = useState(false)

  const emptyChildren = !node.children.length

  const handleToggle = (event: SyntheticEvent, isExpanded: boolean) => {
    !emptyChildren && setExpanded(isExpanded)
  }

  const renderNode =
    expanded &&
    !emptyChildren &&
    node.children.map(child => (
      <Fragment key={child.id}>
        <Node node={child} />
      </Fragment>
    ))

  return (
    <>
      <Accordion
        expanded={expanded}
        onChange={handleToggle}
      >
        <StyledAccordionSummary
          expandIcon={<StyledArrowIcon emptychildren={+emptyChildren} />}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          hovered={+hovered}
        >
          {isRoot ? 'Root' : node.name}

          {hovered && (
            <Stack direction="row">
              <StyledIconButton
                onClick={event => {
                  event.stopPropagation()
                  setCreateNodeModalOpen(true)
                }}
                size="small"
              >
                <AddCircleOutlineIcon color="primary" />
              </StyledIconButton>

              {!isRoot && (
                <>
                  <StyledIconButton
                    onClick={event => {
                      event.stopPropagation()
                      setRenameNodeModalOpen(true)
                    }}
                    size="small"
                  >
                    <EditIcon color="primary" />
                  </StyledIconButton>

                  <StyledIconButton
                    onClick={event => {
                      event.stopPropagation()
                      setDeleteNodeModalOpen(true)
                    }}
                    size="small"
                  >
                    <DeleteForeverIcon color="error" />
                  </StyledIconButton>
                </>
              )}
            </Stack>
          )}
        </StyledAccordionSummary>

        <AccordionDetails>{renderNode}</AccordionDetails>
      </Accordion>

      {createNodeModalOpen && (
        <CreateNodeModal
          parentNodeId={node.id}
          onClose={() => setCreateNodeModalOpen(false)}
          open
        />
      )}

      {renameNodeModalOpen && (
        <RenameNodeModal
          nodeId={node.id}
          currentNodeName={node.name}
          onClose={() => setRenameNodeModalOpen(false)}
          open
        />
      )}

      {deleteNodeModalOpen && (
        <DeleteNodeModal
          nodeId={node.id}
          nodeName={node.name}
          onClose={() => setDeleteNodeModalOpen(false)}
          open
        />
      )}
    </>
  )
}
