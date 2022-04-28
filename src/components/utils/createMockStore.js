import configureMockStore from 'redux-mock-store'
import thunk from "redux-thunk"

const middleware = [thunk];
export const store = (initialState) => {
  const mockStore = configureMockStore(middleware)(initialState)
  // eslint-disable-next-line no-undef
  // замените метод dispatch "шпионом" и поддерживайте  функциональность
  mockStore.dispatch = jest.fn(mockStore.dispatch)
  return mockStore
}