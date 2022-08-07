import axios from "axios";

const fetch = {
  listProducts: () =>
    axios.get("https://challenge-ecommerce-api.herokuapp.com/product"),
};

export default fetch;
