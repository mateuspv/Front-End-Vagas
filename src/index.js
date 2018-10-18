import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import Header from "./structure/header";
import Footer from "./structure/footer";

import JobList from "./containers/joblist";
import Modal from "./containers/jobmodal";
import Filters from "./containers/filters";

import Forkme from "./components/forkme";

import store from "./state/store";
import { GET_JOBS } from "./state/actions";

import "./scaffold.scss";

const APP = (
  <Provider store={store}>
    <>
      <Forkme />
      <Header />
      <Filters />
      <JobList />
      <Modal />
      <Footer />
    </>
  </Provider>
);

GET_JOBS();

ReactDOM.render(APP, document.getElementById("root"));
