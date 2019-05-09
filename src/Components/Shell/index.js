import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Header from './Header';
import LoginHeader from './LoginHeader';
import Footer from './Footer';

class Shell extends React.Component {
	render() {
		const { children } = this.props;

		return (
			<Row>
				<Col xs={12}>
					<LoginHeader />
				</Col>
				<Col xs={12}>
					<Header />
				</Col>
				<Col xs={12}>{children}</Col>
				<Col xs={12}>
					<Footer />
				</Col>
			</Row>
		);
	}
}

export default Shell;
