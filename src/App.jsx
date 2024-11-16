import { Provider } from "react-redux";
import ReviewComponent from "./ReviewComponent";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <ReviewComponent />
    </Provider>
  );
}

export default App;
