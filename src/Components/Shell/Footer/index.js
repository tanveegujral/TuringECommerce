import React from 'react';
import { Row, Col } from 'react-bootstrap';

class Footer extends React.Component {
	render() {
		return (
			<Row className="footer">
				<Col xs={12}>
					<div className="aligner aligner--hCenter footer-nav u-margin-2">
						<div className="u-margin-l3 u-margin-r3">Women</div>
						<div className="u-margin-l3 u-margin-r3">Men</div>
						<div className="u-margin-l3 u-margin-r3">Kids</div>
						<div className="u-margin-l3 u-margin-r3">Shoes</div>
						<div className="u-margin-l3 u-margin-r3">Brands</div>
					</div>
				</Col>
				<Col xs={12}>
					<div className="aligner aligner--hCenter u-margin-2">
						<div className="u-margin-l3 u-margin-r3 ">
							<i className="fa fa-instagram fa-2x" />
						</div>
						<div className="u-margin-l3 u-margin-r3">
							<i className="fa fa-pinterest fa-2x" />
						</div>
						<div className="u-margin-l3 u-margin-r3">
							<i className="fa fa-twitter fa-2x" />
						</div>
						<div className="u-margin-l3 u-margin-r3">
							<i className="fa fa-facebook-f fa-2x" />
						</div>
					</div>
				</Col>
				<Col xs={12}>
					<div className="aligner aligner--hCenter u-margin-2">
						@2016 shopmate Ltd . Contact . Privacy policy
					</div>
				</Col>
			</Row>
		);
	}
}

export default Footer;
