const defaultState = {
  favourites: []
};

const ADD_FAVOURITE = "ADD_FAVOURITE";
const REMOVE_FAVOURITE = "REMOVE_FAVOURITE";

export const favouriteReducer = (state = defaultState, action) => {
  switch(action.type) {
    case ADD_FAVOURITE:
      return {...state, favourites: [...state.favourites, action.payload]};
    case REMOVE_FAVOURITE:
      return {...state, favourites: state.favourites.filter(item => item.id !== action.payload.id)};
    default:
      return state;
  }
};

export const addFavouriteAction = payload => ({type: ADD_FAVOURITE, payload});
export const removeFavouriteAction = payload => ({type: REMOVE_FAVOURITE, payload});