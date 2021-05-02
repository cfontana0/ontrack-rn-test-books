import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Row = ({
  children,
}) => (
  <RowLayout>
    { children }
  </RowLayout>
)

const RowLayout = styled.View`
  margin-top: 10px;
  justify-content: space-between;
  flex-direction: row;
`

Row.propTypes = {
  children: PropTypes.node,
  justifyContent: PropTypes.string
}

export default Row