import React, { Component } from "react";

class OptionsPage extends Component {
	render() {
		return (
			<div>
				<h1>Hi Mary Tan!</h1>

				<form action="">
					<table>
						<tr>
							<td>
								<input
									type="checkbox"
									name="Pay Bills"
									value="Pay Bills"
									checked
								>
									{" "}
									Pay Bills
								</input>
							</td>
							<td>
								<input
									type="checkbox"
									name="My Accounts"
									value="My Accounts"
									checked
								>
									My Accounts
								</input>
							</td>
							<td>
								<input type="checkbox" name="Pay Cards" value="Pay Cards">
									Pay Cards
								</input>
							</td>
						</tr>
						<tr>
							<td>
								<input
									type="checkbox"
									name="Transfer Money"
									value="Transfer Money"
								>
									Transfer Money
								</input>
							</td>
							<td>
								<input
									type="checkbox"
									name="Top up PayLah"
									value="Top up PayLah"
									checked
								>
									Top up PayLah
								</input>
							</td>
							<td>
								<input
									type="checkbox"
									name="DBS Vickers Online Trading"
									value="DBS Vickers Online Trading"
								>
									DBS Vickers Online Trading
								</input>
							</td>
						</tr>
						<tr>
							<td>
								<input
									type="checkbox"
									name="Plan your future"
									value="Plan your future"
								>
									Plan your future
								</input>
							</td>
							<td>
								<input
									type="checkbox"
									name="Manage Credit Cards"
									value="Manage Credit Cards"
									checked
								>
									Manage Credit Cards
								</input>
							</td>
							<td>
								<input
									type="checkbox"
									name="Credit Card Limit"
									value="Credit Card Limit"
								>
									Credit Card Limit
								</input>
							</td>
						</tr>

						<tr>
							<td>
								<input
									type="checkbox"
									name="Forecast Spending"
									value="Forecast Spending"
								>
									Forecast Spending
								</input>
							</td>
							<td>
								<input type="checkbox" name="EPS" value="EPS">
									EPS
								</input>
							</td>
							<td>
								<input
									type="checkbox"
									name="Transfer Limit"
									value="Transfer Limit"
								>
									Transfer Limit
								</input>
							</td>
						</tr>
					</table>
				</form>
			</div>
		);
	}
}
export default OptionsPage;
