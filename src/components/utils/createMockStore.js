import configureMockStore from 'redux-mock-store'
import thunk from "redux-thunk"

const middleware = [thunk];
export const store = (initialState) => {
  const mockStore = configureMockStore(middleware)(initialState)
  mockStore.dispatch = jest.fn(mockStore.dispatch)
  return mockStore
}