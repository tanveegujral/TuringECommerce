import React from 'react';
import { Row, Col } from 'react-bootstrap';
import HeroImage from '../../public/assets/images/hero1.jpg';
import ProductsCarousel from './components/ProductsCarousel';
import Categories from './components/Categories';
import '../../scss/pages/Home/index.scss';
class Home extends React.Component {
	render() {
		return (
			<Row>
				<Col sm={12}>
					<img src={HeroImage} alt="Hero" />
				</Col>
				<Col sm={12} className="u-margin-t4">
					<h2 className="corouselHeader">Top Selling Products</h2>
					<ProductsCarousel />
				</Col>
				<Col sm={12} className="u-padding-t4 categoryBanner ">
					<h2 className="corouselHeader">Browse By Category</h2>
					<Categories />
				</Col>
			</Row>
		);
	}
}

export default Home;
