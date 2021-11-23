db.produto.updateOne(
  { nome: "Big Mac" },
  { $currentDate: {
    ultimaModificacao: true,
  } },
  { upsert: true },
);

db.produto.find(
  { ultimaModificacao: { $exists: true } },
  { _id: 0, nome: 1 },
);