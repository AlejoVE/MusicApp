import { types } from '../types/types';

export const categoriesReducer = (state = {}, action) => {
	switch (action.type) {
		case types.setCategories:
			return {
				...state,
				categories: [...action.payload],
				isLoading: false,
			};

		case types.setActiveCategory:
			return {
				...state,
				activeCategory: action.payload,
			};

		default:
			return state;
	}
};
