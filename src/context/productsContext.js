import axios from "axios";

export const productContext = crateContext();
const INIT_STATE = {
  products: [],
  oneProduct: null,
};
