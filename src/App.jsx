import React from "react";
import Desserts from "./components/Desserts";
import YourCart from "./components/YourCart";
import { useFetch } from "./hooks/useFetch";
import { useGlobalContext } from "./hooks/useGlobalContext";

function App() {
  const {
    data: desserts,
    isLoading,
    error,
  } = useFetch("https://json-api.uz/api/project/dessertss/desserts");
  return (
    <div className="container">
      {isLoading && (
        <div className="desserts">
          <h1 className="desserts__title">Loading...</h1>
        </div>
      )}
      {desserts && <Desserts desserts={desserts.data} />}
      <YourCart />
    </div>
  );
}

export default App;
