const Carrinho = require('../models/Carrinho');

const findAllCarrinhoService = async () => {
  const allCarrinho = await Carrinho.find();
  return allCarrinho;
};

const createCarrinhoService = async (newCarrinho) => {
  const createdCarrinho = await Carrinho.create(newCarrinho);
  return createdCarrinho;
};

const deleteCarrinhoService = async (idParam) => {
  return await Carrinho.findByIdAndDelete(idParam);
};

module.exports = {
  findAllCarrinhoService,
  createCarrinhoService,
  deleteCarrinhoService,
};
