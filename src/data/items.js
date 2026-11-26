
let items = [
  {
    id: 1,
    name: "Reusable Bottle",
    category: "Reuse",
  },
  {
    id: 2,
    name: "Solar Lamp",
    category: "Energy",
  },
];

let nextId = 3;

export const itemStore = {
  all: () => items,

  find: (id) => items.find((item) => item.id === id),

  create: (body) => {
    const item = {
      id: nextId++,
      ...body,
    };

    items.push(item);
    return item;
  },

  update: (id, body) => {
    const index = items.findIndex((item) => item.id === id);

    if (index < 0) return null;

    items[index] = {
      ...items[index],
      ...body,
      id,
    };

    return items[index];
  },

  remove: (id) => {
    const index = items.findIndex((item) => item.id === id);

    if (index < 0) return false;

    items = items.filter((item) => item.id !== id);
    return true;
  },
};
