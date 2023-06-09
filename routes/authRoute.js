const express = require("express");
const {
    createUser,
    loginUser,
    getallUsers,
    getaUser,
    deleteaUser,
    updateaUser,
    blockUser,
    unblockUser,
} = require("../controller/userCtrl");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddlewares");
const router = express.Router();

router.post("/register", createUser);
router.post("/login", loginUser);
router.get("/all-users", getallUsers);
router.get("/:id", authMiddleware, isAdmin, getaUser);
router.delete("/:id", deleteaUser);
router.put("/edit-user", authMiddleware, updateaUser);
router.put("/block-user/:id", authMiddleware,isAdmin,blockUser);
router.put("/unblock-user/:id", authMiddleware,isAdmin, unblockUser);
module.exports = router;
