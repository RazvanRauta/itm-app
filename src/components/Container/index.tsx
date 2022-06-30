import MUIContainer from '@mui/material/Container'
import React from 'react'

type Props = {
  children?: React.ReactNode
}

const Container = ({ children, ...rest }: Props) => {
  return (
    <MUIContainer maxWidth="lg" {...rest}>
      {children}
    </MUIContainer>
  )
}

export default Container
