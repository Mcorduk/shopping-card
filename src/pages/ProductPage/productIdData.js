const PRODUCT_ID_DATA = {
  "living-room": [28, 31],
  kitchen: [29, 30, 32],
  office: [33, 34],
};

const getProducts = (room) => PRODUCT_ID_DATA[room] || [];

export default getProducts;
