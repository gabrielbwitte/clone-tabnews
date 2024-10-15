function status(resquest, response) {
  response.status(200).json({ chave: "São acima da média" });
}

export default status;
