import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { AppContextProvider } from "contexts/app.context";
import { PictureInfoVm } from "models/vm";
import { MainPage } from "pages/main";
import { CheckoutPage } from "pages/checkout";
import { switchRouting } from "core/routing";

export const App: React.FC = () => {
    const [cartElementsCollection, setCartElementsCollection] = React.useState<PictureInfoVm[]>([]);

    return (
        <AppContextProvider
            cartElements={cartElementsCollection}
            setCartElements={setCartElementsCollection}>
            <Router>
                <Switch>
                    <Route exact path={switchRouting.gallery} component={MainPage} />
                    <Route exact path={switchRouting.checkout} component={CheckoutPage} />
                    <Redirect to={switchRouting.gallery} />
                </Switch>
            </Router>
        </AppContextProvider >
    );
};