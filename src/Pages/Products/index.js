import React, { Fragment } from 'react';
import { Row, Col, Breadcrumb, Form, Button, Card } from 'react-bootstrap';
import '../../scss/pages/Products/index.scss';
import productService from '../../Services/productService';
class Products extends React.Component {
	state = {
		products: []
	};
	componentDidMount() {
		productService.getProducts({ path: '/products' }).then(response => {
			console.log(response);
			if (response.status == 200) {
				this.setState({ products: response.data.rows });
			}
		});
	}
	render() {
		let { products } = this.state;
		return (
			<Row>
				<Col sm={12}>
					<Breadcrumb>
						<Breadcrumb.Item href="#">Home</Breadcrumb.Item>
						<Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
							Library
						</Breadcrumb.Item>
						<Breadcrumb.Item active>Data</Breadcrumb.Item>
					</Breadcrumb>
				</Col>
				<Col sm={12} className="aligner">
					<Col sm={2}>
						<div className="u-padding-b3 u-padding-t3">
							<div className="u-margin-b3">
								<span className="categoryHeader">Categories</span>
								<Button variant="default" className="fa fa-search float-right" />
							</div>
							<Form.Check type="checkbox" label="Check me out" />
							<Form.Check type="checkbox" label="Check me out" />
							<Form.Check type="checkbox" label="Check me out" />
							<Form.Check type="checkbox" label="Check me out" />
							<Form.Check type="checkbox" label="Check me out" />
							<Form.Check type="checkbox" label="Check me out" />
						</div>
					</Col>
					<Col sm={10}>
						<div className="aligner aligner--hSpaceBetween aligner--wrap">
							{products.map(product => {
								let discountPercentage =
									((product.price - product.discounted_price) * 100) / product.price;
								return (
									<Card style={{ width: '18rem' }} className="u-margin-b4">
										<Card.Img
											variant="top"
											src={process.env.PUBLIC_URL + '/assets/images/' + product.thumbnail}
											className="productImage"
										/>
										<Card.Body>
											<Card.Title>{product.name}</Card.Title>
											<Card.Text>
												<span className="product-discountedPrice">
													${product.discounted_price}
												</span>
												<span className="product-strike">${product.price}</span>
												<span className="product-discountPercentage">
													({Math.round(discountPercentage * 100) / 100}% OFF)
												</span>
											</Card.Text>
										</Card.Body>
									</Card>
								);
							})}
						</div>
					</Col>
				</Col>
			</Row>
		);
	}
}

export default Products;
