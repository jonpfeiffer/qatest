import React, { Component, PropTypes } from 'react';
import { Navbar, Nav, NavItem, Image, Grid, Col, Row } from 'react-bootstrap';
import ViewCustomers from './ViewCustomers';
import CreateUser from './CreateUser';
import AdjustBalance from './AdjustBalance';

export default class MainPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			navSelection: 'viewCustomers',
			data: props.data || [],
			balanceInput: '',
			userSelected: {}
		};
	}
	onNavSelect = (eventKey) => {
		this.setState({
			navSelection: eventKey,
			balanceInput: '',
			userSelected: '' 
		});
	}
	selectUser = (e) => {
		const user = this.state.data.filter((u) => {return u.id === e.target.value});
		this.setState({userSelected: user});
	}
	updateBalanceInput = (e) => {
		this.setState({balanceInput: e.target.value});
	}
	updateBalance = () => {
		let user = this.state.data.filter((cust) => {
			return this.state.userSelected.name === cust.name;
		});
		
		if (user) {
			user.balance = this.state.balanceInput;
			const newData = Object.assign(this.state.data, user);
			this.setState({data: newData, navSelection: 'viewCustomers'});
		}
	}
	renderMainComponent = () => {
		switch (this.state.navSelection) {
			case 'balanceAdjust':
				return <AdjustBalance
							balanceInput={this.state.balanceInput}
							users={this.state.data}
							user={this.state.userSelected}
							selectUser={this.selectUser}
							updateBalance={this.updateBalance}
							updateBalanceInput={this.updateBalanceInput}
						/>;
			case 'newUser':
				return <CreateUser />;
			default:
				return <ViewCustomers data={this.state.data} />;
		}
	}
	render() {
		return (
			<div>
				<Navbar>
					<Navbar.Header>
						<Navbar.Brand>
							<Image src="/assets/thumbnail.png" rounded />
							<p>QA-Corp</p>
						</Navbar.Brand>
					</Navbar.Header>
					<Nav onSelect={this.onNavSelect} >
						<NavItem eventKey="newUser" href="#">Create User</NavItem>
						<NavItem eventKey="balanceAdjust" href="#">Adjust Balance</NavItem>
						<NavItem eventKey="viewCustomers" href="#">View Customers</NavItem>
					</Nav>
				</Navbar>
				{this.state.navSelection}
				<Grid>
					<Col xs={10}>
						{this.renderMainComponent()}
					</Col>
				</Grid>
			</div>
		);
	}
}