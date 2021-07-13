const { Router } = require('express');
const controller=require('../controllers/controller')

const router = Router();
router.get('/',controller.home_get);
router.get('/today',controller.today_get);
router.get('/notes',controller.notes_get);
router.post('/signup', controller.signup_post);
router.post('/login', controller.login_post);
router.get('/logout',controller.logout_get);
module.exports = router;