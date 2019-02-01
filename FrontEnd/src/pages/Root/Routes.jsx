import React from "react";
import { Route } from "react-router-dom";
import HomePage from "pages/HomePage";

// Planning Panel Pages
import PlanningPanelPage from "pages/PlanningPanelPage";

// Options Page
import OptionsPage from "pages/OptionsPage";

const Routes = () => (
	<div style={{ margin: "1em" }}>
		{/* the routes are in order of first load of web app */}
		{/* <Route exact path="/" component={HomePage} /> */}

		<Route exact path="/options" component={OptionsPage} />

		{/* the routes are in order of first load of web app */}
		<Route exact path="/" component={PlanningPanelPage} />
	</div>
);

export default Routes;
