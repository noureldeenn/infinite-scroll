import React from "react";
import { Provider } from "react-redux";
import configureStore from "./redux/configureStore";
import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PokemonList from "./components/PokemonList";
import PokemonItem from "./components/PokemonItem";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route path="/" element={<PokemonList />} />
            <Route path="/view/:id" element={<PokemonItem />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
