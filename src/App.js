import React, { useState } from "react";
import BasicDetailComponent from "./component/BasicDetailComponent";
import TableComponent from "./component/TableComponent";
import ModalComponent from "./component/ModalComponent";

import logo from "./logo.svg";
import "./App.css";

function App() {
  const [toggleModal, setToggleModal] = useState(false);
  const [modalData, setModalData] = useState([]);
  return (
    <div className="App mb-5">
      <h1>Dashboard</h1>
      <BasicDetailComponent
        setToggleModal={setToggleModal}
        setData={setModalData}
      />
      <TableComponent setToggleModal={setToggleModal} setData={setModalData} />
      <ModalComponent
        toggleModal={toggleModal}
        setToggleModal={setToggleModal}
        data={modalData}
      />
    </div>
  );
}

export default App;
