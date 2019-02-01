import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";

const style = {
	menu: {
		marginTop: "51px",
		background: "#f9f9f9"
	},
	name: {
		marginLeft: "10px"
	},
	menuItem: {}
};

const LeftMenu = (props) => (
	<Menu fluid={true} widths={8} compact={true} style={style.menu}>
		<Menu.Item header active={props.activeItem === "Planning"} as={Link} to="/">
			My Accounts
		</Menu.Item>
		<Menu.Item header active={props.activeItem === "Planning"} as={Link} to="/">
			Transfer
		</Menu.Item>
		<Menu.Item header active={props.activeItem === "Planning"} as={Link} to="/">
			Pay
		</Menu.Item>
		<Menu.Item header active={props.activeItem === "Planning"} as={Link} to="/">
			Cards
		</Menu.Item>
		<Menu.Item header active={props.activeItem === "Planning"} as={Link} to="/">
			Plan
		</Menu.Item>
		<Menu.Item header active={props.activeItem === "Planning"} as={Link} to="/">
			Invest
		</Menu.Item>
		<Menu.Item
			fitted
			header
			active={props.activeItem === "Planning"}
			as={Link}
			to="/"
		>
			Apply
		</Menu.Item>
		<Menu.Item
			fitted
			header
			active={props.activeItem === "Planning"}
			as={Link}
			to="/"
		>
			Request
		</Menu.Item>
	</Menu>
);

export default LeftMenu;
