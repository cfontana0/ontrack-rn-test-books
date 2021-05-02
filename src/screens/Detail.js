import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import Container from '../components/Container'
import BookDetails from '../components/BookDetails'
import { Spinner } from '@ui-kitten/components'
import { fetchOne, clearOne } from '../actions/books'

const Detail = ({ route }) => {
  const dispatch = useDispatch()
  const bookId = route?.params?.bookId
  const { book, loading } = useSelector(store => store.books)

  useEffect(() => {
    dispatch(fetchOne(bookId))
    return () => {
      dispatch(clearOne())
    }
  }, [])

  if (loading) {
    return <Centered><Spinner status='primary'/></Centered>
  }

  return (
    <Container>
      {!loading && book && (<BookDetails { ...book}/>)}
    </Container>
  )
}

const Centered = styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`

export default Detail
