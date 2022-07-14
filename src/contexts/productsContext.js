import React, { useReducer } from "react";
import axios from "axios";

export const productsContext = React.createContext();

const INIT_STATE = {
  products: [],
  pages: 0,
  categories: [],
};
function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        products: action.payload.results,
        pages: Math.ceil(action.payload.count / 5),
      };
    case "GET_CATEGORIES":
      return { ...state, categories: action.payload };
    default:
      return state;
  }
}

const API = "https://agile-everglades-65547.herokuapp.com";

const ProductsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  async function getProducts() {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      // config
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios(
        `${API}/products/${window.location.search}`,
        config
      );
      dispatch({
        type: "GET_PRODUCTS",
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  }
  async function createProduct(newProduct, navigate) {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      //config
      // const Authorization = `Bearer ${tokens.access}`;
      // const config = {
      //   headers: {
      //     Authorization,
      //   },
      // };
      const res = await axios.post(
        `${API}/products/`,
        newProduct
        // config
      );
      console.log(res.data);

      // navigate("/products");
      getProducts();
    } catch (err) {
      console.log(err);
    }
  }
  // async function getCategories() {
  //   try {
  //     const tokens = JSON.parse(localStorage.getItem("tokens"));
  //     //config
  //     const Authorization = `Bearer ${tokens.access}`;
  //     const config = {
  //       headers: {
  //         Authorization,
  //       },
  //     };
  //     const res = await axios(`${API}/category/list/`, config);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }
  return (
    <productsContext.Provider
      value={{
        products: state.products,
        pages: state.pages,
        categories: state.categories,
        getProducts,
        createProduct,
      }}>
      {children}
    </productsContext.Provider>
  );
};
export default ProductsContextProvider;
