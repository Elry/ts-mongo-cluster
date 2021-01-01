import { Router } from "express";

const router:Router = Router();

import { unutilized_field_availability } from "../controllers/field.controller";

router.get('/unutilized-availability/:fieldId/:startDate/:endDate', unutilized_field_availability);

export default router;