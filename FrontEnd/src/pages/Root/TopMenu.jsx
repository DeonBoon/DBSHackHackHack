import React from "react";
import { Menu, Image } from "semantic-ui-react";

const style = {
	DBS: {
		marginLeft: "-10px",
		color: "#ffffff"
	}
};

const TopMenu = () => (
	<Menu size="massive" secondary style={{ background: "#2185d0" }} fixed="top">
		<Menu.Item header>
			<a href="" style={style.DBS}>
				DBS iBanking
			</a>
		</Menu.Item>
		<Menu.Menu position="right" />
	</Menu>
);

export default TopMenu;
