import express from 'express';
import { userId, read, update, readAll, cus, adm,Id} from '../controller/user';
import { requireSignin, isAdmin, isAuth} from "../controller/auth";

const router = express.Router();

router.get('/secret/:userId', requireSignin, isAuth, isAdmin, (req, res) => {
    res.json({
        user: req.profile
    })
});

router.get('/user/:userId', read);
router.get('/users/:userId', requireSignin, isAuth, isAdmin, readAll);
router.put('/user/:userId/:Id',requireSignin, isAuth, isAdmin,  update);

// router.get('/adm/', requireSignin, isAuth, isAdmin, adm);

router.param('userId', userId);
router.param('Id', Id);

module.exports = router;