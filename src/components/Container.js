import React from 'react'
import { Layout } from '@ui-kitten/components'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Container = ({ children, justifyContent = 'flex-start' }) => (
  <ContainerLayout justifyContent={justifyContent}>
    { children }
  </ContainerLayout>
)

const ContainerLayout = styled(Layout)`
  flex: 1;
  justify-content: ${props => props.justifyContent};
  padding-top: 30px;
  padding-left: 20px;
  padding-right: 20px;
  background-color: #e8e8e8;
`
Container.propTypes = {
  children: PropTypes.node,
  justifyContent: PropTypes.string
}

export default Container
