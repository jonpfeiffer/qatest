import React, { Component, PropTypes } from 'react';
import { FormGroup, FormControl, ControlLabel, Button, HelpBlock } from 'react-bootstrap';

const AdjustBalance = (props) => {
	const { balanceInput, users, user, selectUser, updateBalance, updateBalanceInput } = props;
	const consoleFail = (e) => {
		console.error(`Unable to reset data for ${user.name}, please check AdjustBalance.jsx line 38`);
	};
	return (
		<form>
			<FormGroup
	          controlId="formBasicSelect"
	        >
	          <ControlLabel>Target Customer</ControlLabel>
	          <FormControl
	            componentClass="select"
	            value={user.name}
	            onChange={selectUser}
	          >
		          {
		          	users.map((u) => {
		          		return <option value={u.id} key={u.id}>{u.name}</option>
		          	})
		          }
	          </FormControl>
	        </FormGroup>
			<FormGroup
	          controlId="formBasicText"
	        >
	          <ControlLabel>New Balance</ControlLabel>
	          <FormControl
	            type="text"
	            value={balanceInput}
	            placeholder="$0.00"
	            onChange={updateBalanceInput}
	          />
	          {
	          	user && user.name
	          	? <HelpBlock>{`Balance for ${user.name}: ${user.balance}.`}</HelpBlock>
	          	: null
	          }
	        </FormGroup>
	        <Button
	        	type="button"
	        	bsStyle="primary"
	        	className="bad-spacing"
	        	onClick={updateBalance}
	        >
	        	Change Balance
	        </Button>
	        <Button
	        	type="reset"
	        	bsStyle="danger"
	        	onClick={consoleFail}
	        >
	        	Reset
	        </Button>
		</form>
	);
};

export default AdjustBalance;