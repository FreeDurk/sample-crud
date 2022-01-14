import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import { AddProduct } from "./features/product/AddProduct";
import { EditProduct } from "./features/product/EditProduct";
import React from "react";
import { ProductList } from "./features/product/ProductList";

export default function App() {
	return (
		<Router>
			<div>
				<Switch>
					<Route path="/add-product">
						<AddProduct />
					</Route>
					<Route path="/edit-product">
						<EditProduct />
					</Route>
					<Route path="/">
						<ProductList />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}
