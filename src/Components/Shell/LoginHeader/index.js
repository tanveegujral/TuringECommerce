import React from 'react';
import { Nav, Navbar, FormControl, Button, InputGroup } from 'react-bootstrap';

class Header extends React.Component {
	render() {
		return (
			<Navbar bg="light" variant="light" className="u-padding-t0 u-padding-b0">
				<Navbar.Brand href="#home">
					Hi! <a>Sign in</a> or <a>Register</a>
				</Navbar.Brand>
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ml-auto text-dark">
						<Nav.Link href="#home">Daily Deals</Nav.Link>
						<Nav.Link href="#link">Sell</Nav.Link>
						<Nav.Link href="#link">Help Center</Nav.Link>
					</Nav>
					<Nav className="ml-sm-5 text-dark">
						<Nav.Link href="#home">
							<i className="fa fa-shopping-bag" />
							Your bag: $3.55
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}

export default Header;
