import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";
import Main from "./components/Main/Main";
import { Route } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

function App(props) {
  return (
    <div className="app-wrapper">
      <Header />
      <div class="container">
        <SideBar />
        <section className="content">
          <Route path="/profile">
          <Main />
          </Route>
          <Route path="/dialogs">
          <DialogsContainer />
          </Route>
        </section>
      </div>
    </div>
  );
}

export default App;
