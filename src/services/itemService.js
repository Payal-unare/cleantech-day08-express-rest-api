
import { itemStore } from "../data/items.js";

export const itemService = {
  list: () => itemStore.all(),

  get: (id) => itemStore.find(Number(id)),

  create: (data) => itemStore.create(data),

  update: (id, data) => itemStore.update(Number(id), data),

  remove: (id) => itemStore.remove(Number(id)),
};
