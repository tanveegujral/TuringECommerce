import React from 'react';
import { Row, Col } from 'react-bootstrap';
import categoryService from '../../../Services/categoryService';
import Feature1 from '../../../public/assets/images/images-feature1.png';
import Feature2 from '../../../public/assets/images/images-feature2.png';
import Feature3 from '../../../public/assets/images/images-feature3.png';
import Feature4 from '../../../public/assets/images/images-feature4.png';
import Feature5 from '../../../public/assets/images/images-feature5.png';
import Feature6 from '../../../public/assets/images/images-feature6.png';
import Feature7 from '../../../public/assets/images/images-feature7.png';
import Feature8 from '../../../public/assets/images/images-feature8.png';
class Categories extends React.Component {
	state = {
		categories: []
	};
	componentDidMount() {
		categoryService.getCategories({ path: '/categories' }).then(response => {
			if (response.status == 200) {
				this.setState({ categories: response.data.rows });
			}
		});
	}
	render() {
		let { categories } = this.state;
		return (
			<Row className="categoryContent aligner aligner--hCenter u-margin-t4 u-margin-b4">
				{categories.map(category => {
					return (
						<Col className="text-center u-margin-t2 u-margin-b3" key={category.category_id} sm={3}>
							<img className="productImage" src={Feature1} alt="Shirt1" />
							<div className="categoryText">{category.name}</div>
						</Col>
					);
				})}
			</Row>
		);
	}
}

export default Categories;
