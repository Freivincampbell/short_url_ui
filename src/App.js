import React, {useState} from 'react';
import {Route, Routes} from "react-router-dom";
import NavBar from "./Components/Nav/Nav";
import TopUrls from "./Components/TopUrls/TopUrls";

const App = () => {
  const [showForm, setShowForm] = useState(false);
  return (
    <>
      <NavBar setShowForm={setShowForm}/>
      <Routes>
        <Route
          path="*"
          exact
          element={<TopUrls showForm={showForm}/>}
        />
      </Routes>
    </>
  );
};

export default App;
