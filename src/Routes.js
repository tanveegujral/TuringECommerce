import React, { Suspense, lazy } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Shell from './Components/Shell';
import history from './helpers/history';
import Loader from './Components/Loader';
const Home = lazy(() => import(/* webpackChunkName: "dashboard" */ './Pages/Home'));
const Category = lazy(() => import(/* webpackChunkName: "dashboard" */ './Pages/Category'));
const Products = lazy(() => import(/* webpackChunkName: "Item" */ './Pages/Products'));
const ShoppingCart = lazy(() => import(/* webpackChunkName: "dashboard" */ './Pages/ShoppingCart'));

const Routes = () => (
	<Router history={history}>
		<Suspense fallback={<Loader />}>
			<Switch>
				<Shell>
					<Route exact path="/" render={() => <Home />} />
					<Route exact path="/category" render={() => <Category />} />
					<Route exact path="/products" render={() => <Products />} />
					<Route exact path="/shoppingCart" render={() => <ShoppingCart />} />
				</Shell>
			</Switch>
		</Suspense>
	</Router>
);

export default Routes;
