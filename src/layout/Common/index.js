import React, { Component } from "react";
import { Outlet } from "react-router-dom";

const Header = React.lazy(() => import("../../component/Header"));
export default class Common extends Component {
  render() {
    return (
      <div>
        <Header />
        <div>
          <Outlet />
        </div>
      </div>
    );
  }
}
