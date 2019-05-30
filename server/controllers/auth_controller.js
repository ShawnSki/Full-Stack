const bcrypt = require('bcryptjs');


module.exports = {
    register: async (req, res) => {
        const { firstname, lastname, email, username, password } = req.body
        const db = req.app.get('db')
        const { session } = req
        const userFound = await db.check_user_email({ email })
        if (userFound[0]) return res.status(409).send('Email already exists')
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)
        const createdUser = await db.register_user({
            firstname,
            lastname,
            email,
            username,
            password: hash
        })
        session.user = { id: createdUser[0].login_id, username: createdUser[0].username }
        res.status(200).send(session.user)
    }
}