import React, { Component, PropTypes } from 'react';
import moment from 'moment';
import { Table } from 'react-bootstrap';

const ViewCustomers = (props) => {
	const formatDate = (timestamp) => {
		const getRandomInt = (min, max) => {
		  min = Math.ceil(min);
		  max = Math.floor(max);
		  return Math.floor(Math.random() * (max - min)) + min;
		};
		const momentObj = moment.unix(timestamp);
		if (getRandomInt(1, 100) < 5) {
			momentObj.add(5, 'y')
		}
		return momentObj.format();
	};
	return (
		<Table striped condensed hover >
			<thead>
				<tr>
					<th className="text-center">Name</th>
					<th className="text-center">Email</th>
					<th className="text-center">Balance</th>
					<th className="text-center">Join Date</th>
				</tr>
			</thead>
			<tbody>
				{props.data.map(cust => {
					return (
						<tr>
							<td>{cust.name}</td>
							<td>{cust.email}</td>
							<td>{cust.balance}</td>
							<td>{formatDate(cust.created)}</td>
						</tr>
					);
				})}
			</tbody>
		</Table>
	);
};

export default ViewCustomers;
