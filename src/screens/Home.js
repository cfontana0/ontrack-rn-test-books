import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FlatList } from 'react-native'
import styled from 'styled-components'
import Container from '../components/Container'
import BookItem from '../components/BookItem'
import { Input as InputKt, Icon, Spinner } from '@ui-kitten/components'
import { fetchAll } from '../actions/books'

const Home = ({ navigation }) => {
  const dispatch = useDispatch()
  const [hasScrolled, setHasScrolled] = useState(false)
  const [searching, setSearching] = useState(false)
  const [searchTems, setSearchTems] = useState(null)
  const [timer, setTimer] = useState()
  const { list, page, hasMorePages } = useSelector(store => store.books)

  useEffect(() => {
    dispatch(fetchAll(page, searchTems))
  }, [])

  useEffect(() => {
    if (searchTems !== null) {
      setSearching(true)
      if (timer) clearTimeout(timer);
      const newTimer = setTimeout(() => {
        dispatch(fetchAll(1, searchTems))
        setSearching(false)
      }, 1500);
      setTimer(newTimer)
    }
    return () => {
      if (timer) clearTimeout(timer);
    }
  }, [searchTems])

  const renderItem = ({ item }) => (
    <BookItem { ...item } handleView={handleView}/>
  )
  
  const handleOnScroll = () => {
    setHasScrolled(true)
  }

  const handleLoadMore = () => {
    if (hasMorePages && hasScrolled) {
      dispatch(fetchAll(page, searchTems))
    }
  }

  const handleView = (title, bookId) => {
    navigation.navigate('Detail', { title, bookId })
  }

  const renderIcon = (props) => {
    return <Icon {...props} name='search'/>
  }

  return (
    <Container>
      <Input
        value={searchTems}
        label='Search'
        placeholder='Write your search terms'
        accessoryRight={renderIcon}
        onChangeText={nextValue => setSearchTems(nextValue)}
      />
      { searching && (<Centered><Spinner status='primary'/></Centered>) }
      { !searching && (
      <FlatList
        data={list}
        renderItem={renderItem}
        keyExtractor={item => String(item.id)}
        onScroll={handleOnScroll}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.2}
      />)}
    </Container>
  )
}

const Input = styled(InputKt)`
  margin-bottom: 10px;
`

const Centered = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`

export default Home
