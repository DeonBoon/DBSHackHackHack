import React from "react";
import { BrowserRouter } from "react-router-dom";
import LeftMenu from "./LeftMenu";
import TopMenu from "./TopMenu";
import Routes from "./Routes";

const View = (props) => (
	<BrowserRouter>
		<div>
			<LeftMenu
				// image={props.image}
				name={props.name}
				// points={props.points}
				activeItem={props.activeItem}
				activeMenu={props.activeMenu}
			/>
			<TopMenu />
			<div style={{ marginLeft: "210px", marginTop: "70px" }}>
				<Routes />
			</div>
		</div>
	</BrowserRouter>
);

export default View;
