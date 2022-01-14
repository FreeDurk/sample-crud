import { productDelete } from "./productsSlice";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";

export function ProductList() {
	const dispatch = useDispatch();

	const { entities } = useSelector((state) => state.users);
	const loading = useSelector((state) => state.loading);

	const handleDelete = (id) => {
		dispatch(productDelete({ id }));
	};

	return (
		<div className="container">
			<div className="row">
				<h1>Sample CRUD</h1>
			</div>
			<div className="row">
				<div className="two columns">
					<Link to="/add-product">
						<button className="button-primary">Add Product</button>
					</Link>
				</div>
			</div>
			<div className="row">
				{loading ? (
					"Loading..."
				) : (
					<table className="u-full-width">
						<thead>
							<tr>
								<th>ID</th>
								<th>Name</th>
								<th>Description</th>
								<th>Actions</th>
							</tr>
						</thead>
						<tbody>
							{entities.length &&
								entities.map(({ id, name, description }, i) => (
									<tr key={i}>
										<td>{id}</td>
										<td>{name}</td>
										<td>{description}</td>
										<td>
											<button onClick={() => handleDelete(id)}>Delete</button>
											<Link to={`/edit-product/${id}`}>
												<button>Edit</button>
											</Link>
										</td>
									</tr>
								))}
						</tbody>
					</table>
				)}
			</div>
		</div>
	);
}
