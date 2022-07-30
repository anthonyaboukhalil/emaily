import React, { Component } from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Header from "./Header";
import Landing from "./Landing";
import { connect } from "react-redux";
import * as actions from "../actions";

const Dashboard = () => {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
};
const SurveyNew = () => {
  return (
    <div>
      <h2>SurveyNew</h2>
    </div>
  );
};

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="surveys" element={<Dashboard />} />
            <Route path="surveys/new" element={<SurveyNew />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
export default connect(null, actions)(App);
