const express = require("express");
// const Joi = require("joi");

const ctrl = require("../../controllers/contacts.js");
const { schemas } = require("../../models/contact.js");
const { isValidId, validateBody } = require("../../middlewares");

const router = express.Router();

router.get("/", ctrl.getAll);

router.get("/:id", isValidId, ctrl.getContactById);

router.post("/", validateBody(schemas.addSchema), ctrl.addContact);

router.put("/:id", isValidId, validateBody(schemas.addSchema), ctrl.updateById);

router.delete("/:id", isValidId, ctrl.deleteById);

router.patch(
  "/:id/favorite",
  isValidId,
  validateBody(schemas.updateFavoriteSchema),
  ctrl.updateFavorite
);
// router.put("/:id", async (req, res, next) => {
//   try {
//     const { error } = addSchema.validate(req.body);
//     if (error) {
//       throw HttpError(400, error.message);
//     }
//     const { id } = req.params;
//     const result = await contacts.updateById(id, req.body);
//     if (!result) {
//       throw HttpError(400, error.message);
//     }
//     res.json(result);
//   } catch (error) {
//     next(error);
//   }
// });

// router.delete("/:id", async (req, res, next) => {
//   try {
//     const { id } = req.params;
//     const result = await contacts.removeContact(id, req.body);
//     if (!result) {
//       throw HttpError(400, "Not found");
//     }
//     res.json({
//       message: "Delete success",
//     });
//   } catch (error) {
//     next(error);
//   }
// });

module.exports = router;
