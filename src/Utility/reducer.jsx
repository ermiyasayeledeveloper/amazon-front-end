import { Type } from "./action.type";

export const initialState = {
    basket: [],
    user:null
}

export const reducer = (state, action) => {
    switch(action.type){
    case Type.ADD_TO_BASKET:
        return {
            ...state, basket:[...state.basket,action.item]
        }
    case Type.REMOVE_BASKET:
         const index = state.basket.findIndex(
    (basketItem) => basketItem.id === action.id
  );

  // make a copy of the basket
  let newBasket = [...state.basket];

  if (index >= 0) {
    // remove only 1 item at that index
    newBasket.splice(index, 1);
  } else {
    console.warn(`Item with id ${action.id} not found in basket`);
  }

  return {
    ...state,
    basket: newBasket,
  };
  case Type.SET_USER:
    return {
      ...state, user:action.user
    }
    case Type.EMPTY_BASKET:
      return{
        ...state,basket:[],
      }

        default:
            return state;
    }
    
}

// const [state, dispatch] =  useReducer(reducer, initialState);