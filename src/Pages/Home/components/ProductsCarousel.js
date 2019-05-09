import React from 'react';
import { Row, Col, Carousel, Button } from 'react-bootstrap';
import Shirt1 from '../../../public/assets/images/images-shirt1.png';
import Shirt2 from '../../../public/assets/images/images-shirt2.png';
import Shirt3 from '../../../public/assets/images/images-shirt3.png';
import Shirt4 from '../../../public/assets/images/images-shirt4.png';
import Shirt5 from '../../../public/assets/images/images-shirt5.png';
import Shirt6 from '../../../public/assets/images/images-shirt6.png';
import Shirt7 from '../../../public/assets/images/images-shirt7.png';
import Shirt8 from '../../../public/assets/images/images-shirt8.png';
class ProductsCarousel extends React.Component {
	render() {
		return (
			<Carousel className="u-margin-t4 u-margin-b4">
				<Carousel.Item>
					<div className="aligner aligner--hCenter">
						<div className="text-center">
							<img className="productImage" src={Shirt1} alt="Shirt1" />
							<div className="productInfo">
								<div className="productName">{`Arc d'Triomphe`}</div>
								<div className="price"> $14.99</div>
							</div>
							<Button variant="danger" className="u-margin-t2">
								<i className="fa fa-cart-plus" /> Add
							</Button>
						</div>
						<div className="text-center">
							<img className="productImage" src={Shirt2} alt="Shirt1" />
							<div className="productInfo">
								<div className="productName">{`Arc d'Triomphe`}</div>
								<div className="price"> $14.99</div>
							</div>
							<Button variant="danger" className="u-margin-t2">
								<i className="fa fa-cart-plus" /> Add
							</Button>
						</div>
						<div className="text-center">
							<img className="productImage" src={Shirt3} alt="Shirt1" />
							<div className="productInfo">
								<div className="productName">{`Arc d'Triomphe`}</div>
								<div className="price"> $14.99</div>
							</div>
							<Button variant="danger" className="u-margin-t2">
								<i className="fa fa-cart-plus" /> Add
							</Button>
						</div>
						<div className="text-center">
							<img className="productImage" src={Shirt4} alt="Shirt1" />
							<div className="productInfo">
								<div className="productName">{`Arc d'Triomphe`}</div>
								<div className="price"> $14.99</div>
							</div>
							<Button variant="danger" className="u-margin-t2">
								<i className="fa fa-cart-plus" /> Add
							</Button>
						</div>
					</div>
				</Carousel.Item>
				<Carousel.Item>
					<div className="aligner aligner--hCenter">
						<div className="text-center">
							<img className="productImage" src={Shirt5} alt="Shirt1" />
							<div className="productInfo">
								<div className="productName">{`Arc d'Triomphe`}</div>
								<div className="price"> $14.99</div>
							</div>
							<Button variant="danger" className="u-margin-t2">
								<i className="fa fa-cart-plus" /> Add
							</Button>
						</div>
						<div className="text-center">
							<img className="productImage" src={Shirt6} alt="Shirt1" />
							<div className="productInfo">
								<div className="productName">{`Arc d'Triomphe`}</div>
								<div className="price"> $14.99</div>
							</div>
							<Button variant="danger" className="u-margin-t2">
								<i className="fa fa-cart-plus" /> Add
							</Button>
						</div>
						<div className="text-center">
							<img className="productImage" src={Shirt7} alt="Shirt1" />
							<div className="productInfo">
								<div className="productName">{`Arc d'Triomphe`}</div>
								<div className="price"> $14.99</div>
							</div>
							<Button variant="danger" className="u-margin-t2">
								<i className="fa fa-cart-plus" /> Add
							</Button>
						</div>
						<div className="text-center">
							<img className="productImage" src={Shirt8} alt="Shirt1" />
							<div className="productInfo">
								<div className="productName">{`Arc d'Triomphe`}</div>
								<div className="price"> $14.99</div>
							</div>
							<Button variant="danger" className="u-margin-t2">
								<i className="fa fa-cart-plus" /> Add
							</Button>
						</div>
					</div>
				</Carousel.Item>
			</Carousel>
		);
	}
}

export default ProductsCarousel;
