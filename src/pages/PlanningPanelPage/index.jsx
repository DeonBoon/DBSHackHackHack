import React, { Component } from "react";
import { observer } from "mobx-react";
import { withRouter } from "react-router-dom";
import Stores from "stores";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { Grid, Button as SemButton } from "semantic-ui-react";
import { PieChart, Pie, Cell, Legend } from "recharts";

const styles = (theme) => ({
	root: {
		marginLeft: "0px",
		width: "100%"
	},
	button: {
		marginTop: theme.spacing.unit,
		marginRight: theme.spacing.unit
	},
	actionsContainer: {
		marginBottom: theme.spacing.unit * 2
	},
	resetContainer: {
		padding: theme.spacing.unit * 3
	},
	paper: {
		...theme.mixins.gutters(),
		paddingTop: theme.spacing.unit * 2,
		paddingBottom: theme.spacing.unit * 2
	}
});

const style = {
	firstPaper: {
		width: "200px"
	},
	fbuttons: {
		width: "300px"
	},
	thirdcolumn: {
		marginTop: "-7px"
	},
	firstPieChart: {
		marginTop: "-120px",
		marginLeft: "25px"
	},
	gridStyle: {
		marginLeft: "110px"
	}
};

const data = [
	{ name: "Food", value: 500 },
	{ name: "Transport", value: 300 },
	{ name: "Investment", value: 1000 }
];

const COLORS = ["#8eb4e3", "#ffc000", "#9bbb59", "#d99694"];

@observer
class PlanningPanelPage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			user: {
				accountID: 0,
				username: "",
				balance: 0.0,
				buttonTransact: false,
				buttonInvest: false,
				buttonPlanExpenses: false,
				numClickButtonTransact: 0,
				numClickButtonInvest: 0,
				numClickButtonPlanExpenses: 0
			}
		};
	}

	componentDidMount() {
		Stores.RootStore.SetActiveMenuItem("Planning");
		// let _this = this;
		// fetch("localhost:8080/g1/customer_details?username=Name1")
		// 	.then((response) => response.json())
		// 	.then((data) => {
		// 		let current_user = {
		// 			accountID: data.accountID,
		// 			username: data.fullname,
		// 			balance: data.balance,
		// 			buttonTransact: data.buttonTransact,
		// 			buttonInvest: data.buttonInvest,
		// 			buttonPlanExpenses: data.buttonPlanExpenses,
		// 			numClickButtonTransact: data.numClickButtonTransact,
		// 			numClickButtonInvest: data.numClickButtonInvest,
		// 			numClickButtonPlanExpenses: data.numClickButtonPlanExpenses
		// 		};
		// 		_this.setState({ user: current_user });
		// 	});
	}

	render() {
		const { classes } = this.props;
		const { user } = this.state;

		return (
			<div>
				<Grid style={style.gridStyle}>
					<Grid.Row columns={3}>
						<Grid.Column width={3}>
							<Paper
								className={classes.root}
								elevation={2}
								style={style.firstPaper}
							>
								<Typography
									variant="h5"
									component="h3"
									style={{ marginLeft: "28px" }}
								>
									What You Owe
								</Typography>
								<Typography component="p" style={{ marginLeft: "80px" }}>
									$10000
								</Typography>
							</Paper>
						</Grid.Column>
						<Grid.Column width={3}>
							<Paper
								className={classes.root}
								elevation={2}
								style={style.firstPaper}
							>
								<Typography
									variant="h5"
									component="h3"
									style={{ marginLeft: "28px" }}
								>
									What You Have
								</Typography>

								<Typography component="p" style={{ marginLeft: "80px" }}>
									$25000
								</Typography>
							</Paper>
						</Grid.Column>
						<Grid.Column style={style.thirdcolumn}>
							<Grid.Row />
							<Grid.Row>
								<Button
									variant="contained"
									className={classes.button}
									style={style.fbuttons}
								>
									View transaction History
								</Button>
							</Grid.Row>
							<Grid.Row>
								<Button
									variant="contained"
									className={classes.button}
									style={style.fbuttons}
								>
									Top Up PayLah
								</Button>
							</Grid.Row>
							<Grid.Row />
							<Button
								variant="contained"
								className={classes.button}
								style={style.fbuttons}
							>
								Transfer Fund to Another Account
							</Button>
							<Grid.Row />
							<Button
								variant="contained"
								className={classes.button}
								style={style.fbuttons}
							>
								Pay Bill
							</Button>
							<Grid.Row />
						</Grid.Column>
					</Grid.Row>
					<Grid.Row>
						<PieChart width={400} height={280} style={style.firstPieChart}>
							<Pie
								data={data}
								dataKey="value"
								nameKey="name"
								cx="50%"
								cy="50%"
								innerRadius={40}
								outerRadius={90}
								paddingAngle={0}
								label
								isAnimationActive={false}
							>
								{data.map((entry, index) => (
									<Cell key={index} fill={COLORS[index % COLORS.length]} />
								))}
							</Pie>
							<Legend
								align="center"
								verticalAlign="bottom"
								wrapperStyle={{ left: 15 }}
							/>
						</PieChart>
					</Grid.Row>
				</Grid>
			</div>
		);
	}
}

PlanningPanelPage.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PlanningPanelPage);
