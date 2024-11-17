import { styled } from '@mui/material/styles'
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp'
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion'
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { IconButton } from '@mui/material'
import SvgIcon from '@mui/material/SvgIcon/SvgIcon'

export const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion
    disableGutters
    elevation={0}
    square
    {...props}
  />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&::before': {
    display: 'none',
  },
}))

export const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
    display: 'flex',
    alignItems: 'center',
  },
  ...theme.applyStyles('dark', {
    backgroundColor: 'rgba(255, 255, 255, .05)',
  }),
}))

export const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}))

export const StyledAccordionSummary = styled(AccordionSummary)(
  ({ hovered }) => ({
    backgroundColor: hovered ? '#dde7ee' : '#f0f4f8',
    fontWeight: hovered ? '700' : '400',
    transition: 'background-color 0.2s',
    height: '50px',
  })
) as typeof AccordionSummary

export const StyledArrowIcon = styled(ArrowForwardIosIcon)(
  ({ emptychildren }) => ({
    fontSize: '16px',
    opacity: emptychildren ? '0' : '1',
  })
)

export const StyledIconButton = styled(IconButton)({
  marginLeft: '2px',
  visibility: 'visible',
})
