import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";

import { useState } from "react";
import { productUpdate } from "./productsSlice";

export function EditProduct() {
	const { pathname } = useLocation();
	const product_Id = parseInt(pathname.replace("/edit-product/", ""));

	const product = useSelector((state) =>
		state.users.entities.find((product) => product.id === product_Id)
	);

	const dispatch = useDispatch();
	const history = useHistory();

	const [name, setName] = useState(product.name);
	const [description, setDescription] = useState(product.description);
	const [error, setError] = useState(null);

	const handleName = (e) => setName(e.target.value);
	const handleDescription = (e) => setDescription(e.target.value);

	const handleClick = () => {
		if (name && description) {
			dispatch(
				productUpdate({
					id: product_Id,
					name,
					description,
				})
			);

			setError(null);
			history.push("/");
		} else {
			setError("Fill in all fields");
		}
	};

	return (
		<div className="container">
			<div className="row">
				<h1>Edit user</h1>
			</div>
			<div className="row">
				<div className="three columns">
					<label htmlFor="nameInput">Name</label>
					<input
						className="u-full-width"
						type="text"
						placeholder=""
						id="nameInput"
						onChange={handleName}
						value={name}
					/>
					<label htmlFor="emailInput">Description</label>
					<input
						className="u-full-width"
						type="email"
						placeholder=""
						id="emailInput"
						onChange={handleDescription}
						value={description}
					/>
					{error && error}
					<button onClick={handleClick} className="button-primary">
						Save Product
					</button>
				</div>
			</div>
		</div>
	);
}
