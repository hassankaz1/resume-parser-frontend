import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import LoginForm from "./auth/LoginForm";
import SignupForm from "./auth/SignupForm";
import Homepage from "./auth/Homepage";
import ProfileForm from "./profile/ProfileForm";
import StepTwo from "./step2/StepTwo";

// import PrivateRoute from "./PrivateRoute";

function Routes({ login, signup }) {



    return (
        <Switch>
            <Route exact path="/step1">
                <Homepage />
            </Route>
            <Route exact path="/step2">
                <StepTwo />
            </Route>
            <Route exact path="/login">
                <LoginForm login={login} />
            </Route>
            <Route exact path="/signup">
                <SignupForm signup={signup} />
            </Route>
            <Redirect to="/" />
        </Switch>

    )
}

export default Routes;