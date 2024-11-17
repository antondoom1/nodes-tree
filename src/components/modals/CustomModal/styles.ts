import { Box, styled } from '@mui/material'

export const StyledModal = styled(Box)(({ theme }) => ({
  zIndex: 15,
  width: '100%',
  position: 'fixed',
  left: 0,
  top: '100%',
  boxSizing: 'border-box',
  padding: '24px 32px',
  background: theme.palette.background.default,
  color: theme.palette.text.primary,
  flexDirection: 'column',
  alignItems: 'center',
  borderTopLeftRadius: '24px',
  borderTopRightRadius: '24px',
  willChange: 'transform, filter',
  transition: 'transform 300ms ease',
  transform: 'translate3d(0, -100%, 0)',
  animation: 'modalShowMobile 300ms ease',

  [theme.breakpoints.up('sm')]: {
    width: '560px',
    top: '50%',
    left: '50%',
    paddingBottom: '24px',
    borderRadius: '24px',
    transition: 'filter 300ms ease',
    transform: 'translate(-50%, -50%)',
    animation: 'none',
  },

  '@keyframes modalShowMobile': {
    from: {
      transform: 'translate3d(0, 0, 0)',
    },
    to: {
      transform: 'translate3d(0, -100%, 0)',
    },
  },
}))

export const StyledTitle = styled(Box)({
  fontSize: '20px',
  fontWeight: '700',
  marginBottom: '12px',
})

export const StyledClose = styled(Box)({
  position: 'absolute',
  top: '14px',
  right: '16px',
  cursor: 'pointer',

  '@media (hover: hover)': {
    '&:hover': {
      opacity: 0.9,
    },
  },

  '&:active': {
    opacity: 0.8,
  },
})
