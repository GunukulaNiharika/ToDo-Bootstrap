const { Router } = require('express');
const controller=require('../controllers/controller')

const router = Router();
router.get('/',controller.home_get);
router.get('/today',controller.today_get);
router.get('/notes',controller.notes_get);
router.post('/signup', controller.signup_post);
router.post('/login', controller.login_post);
router.get('/logout',controller.logout_get);
router.post('/addtask',controller.addtask_post);
router.post('/addnote',controller.addnote_post);
router.post('/deltask',controller.deltask_post);
router.post('/delnote',controller.delnote_post);
router.post('/checktask',controller.checktask_post);
module.exports = router;