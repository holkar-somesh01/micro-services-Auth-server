import express from "express"

import {
    activateUser,
    deActivateUser,
    getUser,
    getUserById,
    loginUser,
    logoutAdmin,
    logoutUser,
    registerAdmin,
    registerUser
}
    from "../controller/authController"

const router = express.Router()

router.post("/register", registerUser)
router.post("/login", loginUser)
router.post("/logout", logoutUser)
router.post("/register-admin", registerAdmin)
router.post("/logout-admin", logoutAdmin)
router.put("/activate/:id", activateUser)
router.put("/deActivate/:id", deActivateUser)
router.get("/user", getUser)
router.get("/user/:id", getUserById)

export default router