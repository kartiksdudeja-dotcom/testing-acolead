import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import AppRoutesNew from "./routes/AppRoutesNew";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <AppRoutesNew />
      </Router>
    </Provider>
  );
}

export default App;
