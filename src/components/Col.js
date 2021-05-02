import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Col = ({
  children,
  style
}) => (
  <ColLayout style={style}>
    { children }
  </ColLayout>
)

const ColLayout = styled.View``

Col.propTypes = {
  children: PropTypes.node,
  style: PropTypes.any
}


export default Col
