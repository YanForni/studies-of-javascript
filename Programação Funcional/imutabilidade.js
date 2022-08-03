const cart = {
  quantity: 2,
  total: 200,
};

//modo não recomendado
cart.quantity = 3;

//maneira recomendada
const newCart = {
  ...cart,
  quantity: 4,
};
