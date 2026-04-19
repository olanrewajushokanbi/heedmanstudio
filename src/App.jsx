import { HomePage } from "./Pages/HomePage";
import { EquipmentPage } from "./Pages/EquipmentPage";
import { PreviousProjectPage } from "./Pages/PreviousProject";
import { Route, Routes } from "react-router";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/EquipmentPage" element={<EquipmentPage />}></Route>
      <Route
        path="/PreviousProjectPage"
        element={<PreviousProjectPage />}
      ></Route>
    </Routes>
  );
}

export default App;
