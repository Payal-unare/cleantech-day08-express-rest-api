
import { itemService } from "../services/itemService.js";

export const itemController = {
  // GET /api/items
  list: (req, res) => {
    const items = itemService.list();
    res.status(200).json({ data: items });
  },

  // GET /api/items/:id
  get: (req, res) => {
    const item = itemService.get(req.params.id);

    if (!item) {
      return res.status(404).json({
        message: "Item not found",
      });
    }

    res.status(200).json({ data: item });
  },

  // POST /api/items
  create: (req, res) => {
    const { name, category } = req.body;

    if (
      typeof name !== "string" ||
      !name.trim() ||
      typeof category !== "string" ||
      !category.trim()
    ) {
      return res.status(400).json({
        message: "Name and category are required",
      });
    }

    const item = itemService.create({
      name: name.trim(),
      category: category.trim(),
    });

    res.status(201).json({ data: item });
  },

  // PUT /api/items/:id
  update: (req, res) => {
    const item = itemService.update(req.params.id, req.body);

    if (!item) {
      return res.status(404).json({
        message: "Item not found",
      });
    }

    res.status(200).json({ data: item });
  },

  // DELETE /api/items/:id
  remove: (req, res) => {
    const deleted = itemService.remove(req.params.id);

    if (!deleted) {
      return res.status(404).json({
        message: "Item not found",
      });
    }

    res.status(204).send();
  },
};
