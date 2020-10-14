import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { AppContextProvider } from "contexts/app.context";
import { PictureInfoVm } from "models/vm";
import { MainPage } from "pages/mainPage";
import { CheckoutPage } from "pages/checkoutPage";

export const App: React.FC = () => {
    const [cartElementsCollection, setCartElementsCollection] = React.useState<PictureInfoVm[]>([]);

    return (
        <AppContextProvider
            cartElements={cartElementsCollection}
            setCartElements={setCartElementsCollection}>
            <Router>
                <Switch>
                    <Route exact path="/" component={MainPage} />
                    <Route exact path="/purchase" component={CheckoutPage} />
                    <Redirect to="/" />
                </Switch>
            </Router>
        </AppContextProvider >
    );
};