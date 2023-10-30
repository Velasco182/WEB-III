import express from 'express';
import { getAllApdz, getApdz, createApdz, updateApdz, deleteApdz } from '../controladores/miControlador.js';
const router = express.Router();

router.get('/', getAllApdz);
router.get('/:id', getApdz);
router.post('/', createApdz);
router.put('/:id', updateApdz);
router.delete('/:id', deleteApdz);

export default router;