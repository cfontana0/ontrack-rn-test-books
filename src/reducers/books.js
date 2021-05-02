const initialState = {
  list: [],
  loading: false,
  page: 1,
  hasMorePages: true,
  book: null
};

const books = (state = initialState, action) => {
  switch (action.type) {
    case 'BOOKS_FETCH_ALL_START':
      return { ...state, loading: true};
    case 'BOOKS_FETCH_ALL_SUCCESS':
      const list = (action.payload.nextPage <= 2) ? action.payload.books : [...state.list, ...action.payload.books]
      return { 
        ...state,
        loading: false,
        page: action.payload.nextPage,
        hasMorePages: action.payload.hasMorePages,
        list,
      };
      case 'BOOKS_FETCH_ONE_START':
        return { ...state, loading: true, book: null};
      case 'BOOKS_FETCH_ONE_SUCCESS':
        return { 
          ...state,
          loading: false,
          book: action.payload.book,
        };
      case 'BOOKS_CLEAR':
        return { 
          ...state,
          loading: false,
          book: null,
        };
    default:
      return state;
  }
};

export default books;
