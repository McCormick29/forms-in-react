import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import SignUpComponent from "./SignUpYup"

class RootComponent extends React.Component {

    render() {
        return (
          <Router>
              <Switch>
                  <Route
                    exact
                    Path={"/sigin"}
                    render={() => {
                        return <SignUpComponent />;
                    }}
                    />
              </Switch>
            </Router>
        );
    }
}
export default RootComponent;