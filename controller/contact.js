import ContactSchema from '../models/contact'

export const upContact = (req, res) => {
    const contact = new ContactSchema(req.body);
    contact.save((err, data) => {
        if(err){
            res.status(400).json({
                error: "Not send a contact"
            })
        }
        res.json(data);
    })
}
export const listContact = (req, res) => {
    ContactSchema.find((err, data) => {
        if(err){
            return res.status(400).json({
                error: "Not found some contact"
            })
        }
        res.json({data});
    })
}
export const showContact = (req, res) => {
    return res.json(req.data);
    
}
export const delContact = (req, res) => {
    let contact = req.data;
    contact.remove((err, data) => {
        if(err || !data){
            res.status(400).json({
                error: "Can not delete contact"
            })
        }
        res.json({
            data,
            message: "Delete contact successfully"
        })
    })
}
export const Id = (req, res, next, id) => {
    ContactSchema.findById(id).exec((err, data) => {
        if(err || !data){
            res.status(400).json({
                error: "Not found contact"
            })
        }
        req.data = data;
        next();
    })
}