import React, { useEffect } from "react";
import "./App.css";
import Carousel from "./components/Carousel";
import { loadData } from "./actions/main";
import store from "./store";
import { Provider } from "react-redux";
import Form from "./components/Form";

const App = () => {
  useEffect(() => {
    store.dispatch(loadData());
  }, []);

  return (
    <Provider store={store}>
      <div className="App">
        <Carousel />
        <Form />
      </div>
    </Provider>
  );
};

export default App;
