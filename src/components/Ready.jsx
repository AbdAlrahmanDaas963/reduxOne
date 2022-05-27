import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Cart from "./Cart";
import Shop from "./Shop";
export class Ready extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path={"/shop"} component={() => <Shop />} />
          <Route path={"/cart"} component={() => <Cart />} />
        </Switch>
      </div>
    );
  }
}

export default Ready;
