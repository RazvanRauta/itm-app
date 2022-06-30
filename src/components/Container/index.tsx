import MUIContainer, { type ContainerProps } from '@mui/material/Container'
import React from 'react'

interface Props extends ContainerProps {
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
