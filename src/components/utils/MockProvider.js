import { Provider } from "react-redux";
import { store } from "../../store";

export const MockProvider = ({ children = null, mockStore = null }) => {
    return (
      <Provider store={ mockStore || store }>
        { children }
      </Provider>
    );
  };