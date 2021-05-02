import axios from 'axios'

const onFetchAllStart = () => {
  return {
    type: 'BOOKS_FETCH_ALL_START',
    payload: null
  }
}

const onFetchAllSuccess = (payload) => {
  return {
    type: 'BOOKS_FETCH_ALL_SUCCESS',
    payload
  }
}

const onFetchOneStart = () => {
  return {
    type: 'BOOKS_FETCH_ONE_START',
    payload: null
  }
}

const onFetchOneSuccess = (payload) => {
  return {
    type: 'BOOKS_FETCH_ONE_SUCCESS',
    payload
  }
}

const onClearOne = () => {
  return {
    type: 'BOOKS_CLEAR',
    payload: null
  }
}

export const fetchAll = (page, searchTems) => {
  return dispatch => {
    dispatch(onFetchAllStart())
    const props = {page, itemsPerPage: 15}
    if (searchTems) {
      props.filters = [{type: "all", values: [searchTems]}]
    }
    axios.post('http://nyx.vima.ekt.gr:3000/api/books', props).then(response => {
      const books = response?.data?.books ?? []
      const hasMorePages = (books.length === 15)
      const nextPage = (hasMorePages) ? (page + 1) : page 
      dispatch(onFetchAllSuccess({ books, nextPage, hasMorePages}))
    })
  }
}

export const fetchOne = (bookId) => {
  return dispatch => {
    dispatch(onFetchOneStart())
    axios.get(`http://nyx.vima.ekt.gr:3000/api/book/${bookId}`).then(response => {
      const book = response?.data?.book ?? null
      dispatch(onFetchOneSuccess({ book }))
    })
  }
}

export const clearOne = () => {
  return dispatch => {
    dispatch(onClearOne())
  }
}
