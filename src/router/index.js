import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Main from "../pages/main";
import Presale from "../pages/presale";
import Game from "../pages/game";
import Footer from "../components/footer";

import "bootstrap/dist/css/bootstrap.min.css";
import "../components/assets/css/custom.css";
import "../components/assets/css/fontStyle.css";

function Routes() {
	return (
		<BrowserRouter>
			<Route exact path="/" component={Main} />
			<Route exact path="/buy" component={Presale} />
			<Route exact path="/game" component={Game} />
			<Footer />
		</BrowserRouter>
	);
}

export default Routes;
