import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./features/product/productsSlice";

export default configureStore({
	reducer: {
		users: productsSlice,
	},
});
