db.produtos.updateMany(
  {},
  { $set: { avaliacao: NumberInt(0) } },
  { upsert: true },
);

db.produtos.updateMany(
  { tags: { $all: ["bovino"] } },
  { $inc: { avaliacao: 5 } },
  { upsert: true },
);

db.produtos.updateMany(
  { tags: "ave" },
  { $inc: { avaliacao: 3 } },
  { upsert: true },
);

db.produtos.find(
  {},
  { _id: 0, nome: 1, avaliacao: 1 },
);