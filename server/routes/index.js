import express from "express";

import {
    checkServerHealth,
    deletePatient,
    getAllPatients,
    getPatientById,
    registerPatient,
    updatePatient
} from "../services/index.js";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Hello, World!");
})

router.get('/health', checkServerHealth)
router.post('/patients/new', registerPatient) // /api/patients/new
router.get('/patients', getAllPatients) // /api/patients
router.put('/patients/:id', updatePatient) // /api/patients/:id
router.delete('/patients/:id', deletePatient) // /api/patients/:id
router.get('/patients/:id', getPatientById) // /api/patients/:id

export default router;