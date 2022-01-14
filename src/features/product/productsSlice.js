import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
	const response = await fetch("https://jsonplaceholder.typicode.com/users");
	const users = await response.json();
	return users;
});

const productsSlice = createSlice({
	name: "products",
	initialState: {
		entities: [],
		loading: false,
	},
	reducers: {
		addProduct(state, action) {
			console.log(action.payload);
			state.entities.push(action.payload);
		},
		productUpdate(state, action) {
			const { id, name, description } = action.payload;
			const existingProduct = state.entities.find((product) => product.id === id);
			if (existingProduct) {
				existingProduct.name = name;
				existingProduct.description = description;
			}
		},
		productDelete(state, action) {
			const { id } = action.payload;
			const existingProduct = state.entities.find((user) => user.id === id);
			if (existingProduct) {
				state.entities = state.entities.filter((user) => user.id !== id);
			}
		},
	},
	extraReducers: {
		[fetchUsers.pending]: (state, action) => {
			state.loading = true;
		},
		[fetchUsers.fulfilled]: (state, action) => {
			state.loading = false;
			state.entities = [...state.entities, ...action.payload];
		},
		[fetchUsers.rejected]: (state, action) => {
			state.loading = false;
		},
	},
});

export const { addProduct, productUpdate, productDelete } = productsSlice.actions;

export default productsSlice.reducer;
