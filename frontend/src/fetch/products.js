import axios from "axios";

const fetch = {
  listProducts: () => axios.get("http://localhost:4000/product"),
};

export default fetch;
