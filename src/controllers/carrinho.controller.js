const carrinhoService = require('../services/carrinho.service');

const findAllCarrinhoController = async (req, res) => {
  const allCarrinho = await carrinhoService.findAllCarrinhoService();
  if (allCarrinho.length == 0) {
    return res
      .status(404)
      .send({ message: 'Não existe nenhum item no carrinho!' });
  }
  res.send(allCarrinho);
};

const createCarrinhoController = async (req, res) => {
  const carrinho = req.body;
  const newCarrinho = await carrinhoService.createCarrinhoService(carrinho);
  res.status(201).send(newCarrinho);
};

const deleteCarrinhoController = async (req, res) => {
  const idParam = req.params.id;
  await carrinhoService.deleteCarrinhoService(idParam);
  res.send({ message: 'Item do carrinho deletado com sucesso!' });
};

// DeleteAll

module.exports = {
  findAllCarrinhoController,
  createCarrinhoController,
  deleteCarrinhoController,
};
