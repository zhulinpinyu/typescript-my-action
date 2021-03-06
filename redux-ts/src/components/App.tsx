import React from "react";
import { Provider } from "react-redux";
import { store } from "../state";
import RepositoriesList from "./RepositoriesList";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div>
        <h2>Search for a package</h2>
        <RepositoriesList />
      </div>
    </Provider>
  )
}

export default App;