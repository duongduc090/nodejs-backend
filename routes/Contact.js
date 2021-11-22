import express from 'express';
import {upContact, listContact, showContact, delContact, Id} from '../controller/contact'
import { userId } from '../controller/user';
import { requireSignin, isAdmin, isAuth} from "../controller/auth";

const router = express.Router();

router.post('/contact', upContact)
router.get('/contacts', listContact)
router.get('/contact/:id', showContact)
router.delete('/contact/:id/:idUser', requireSignin, isAuth, isAdmin, delContact)

router.param('id', Id);
router.param('idUser' , userId);

module.exports = router;
