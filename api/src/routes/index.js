const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const rouCountries = require('./RouCountries.js');
const rouActivity = require('./RouActivity.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/countries', rouCountries)
router.use('/activities', rouActivity)






module.exports = router;
