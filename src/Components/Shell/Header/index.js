import React from 'react';
import { Nav, Navbar, FormControl, Button, InputGroup } from 'react-bootstrap';
import departmentService from '../../../Services/departmentService';
class Header extends React.Component {
	state = {
		departments: []
	};
	componentDidMount() {
		departmentService.getDepartments({ path: '/departments' }).then(response => {
			console.log(response);
			if (response.status == 200) {
				this.setState({ departments: response.data });
			}
		});
	}
	render() {
		let { departments } = this.state;
		return (
			<Navbar bg="dark" variant="dark">
				<Navbar.Brand href="#home" className="logo">
					SHOPMATE
				</Navbar.Brand>
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ml-auto text-light">
						{departments.map(department => {
							return (
								<Nav.Link key={department.department_id} href="#home">
									{department.name}
								</Nav.Link>
							);
						})}
					</Nav>
					<InputGroup className="ml-sm-5 search-group">
						<FormControl type="text" placeholder="Search" />
						<InputGroup.Append>
							<Button variant="outline-light">
								<i className="fa fa-search" />
							</Button>
						</InputGroup.Append>
					</InputGroup>
					<Nav className="ml-sm-5 text-light">
						<Nav.Link href="#home">
							<i className="fa fa-shopping-bag fa-2x" />
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}

export default Header;
