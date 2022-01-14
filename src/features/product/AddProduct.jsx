import { useDispatch, useSelector } from "react-redux";

import { useHistory } from "react-router-dom";
import { useState } from "react";
import { addProduct } from "./productsSlice";

export function AddProduct() {
	const dispatch = useDispatch();
	const history = useHistory();

	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	const [error, setError] = useState(null);

	const handleName = (e) => setName(e.target.value);
	const handleDescription = (e) => setDescription(e.target.value);

	const productTotal = useSelector((state) => state.users.entities.length);

	const handleClick = () => {
		if (name && description) {
			dispatch(
				addProduct({
					id: productTotal + 1,
					name,
					description,
				})
			);

			setError(null);
			history.push("/");
		} else {
			setError("Fill in all fields");
		}

		setName("");
		setDescription("");
	};

	return (
		<div className="container">
			<div className="row">
				<h1>Add Product</h1>
			</div>
			<div className="row">
				<div className="three columns">
					<label htmlFor="nameInput">Name</label>
					<input
						className="u-full-width"
						type="text"
						placeholder="test@mailbox.com"
						id="nameInput"
						onChange={handleName}
						value={name}
					/>
					<label htmlFor="emailInput">Description</label>
					<input
						className="u-full-width"
						type="email"
						placeholder="description"
						id="emailInput"
						onChange={handleDescription}
						value={description}
					/>
					{error && error}
					<button onClick={handleClick} className="button-primary">
						Add Product
					</button>
				</div>
			</div>
		</div>
	);
}
