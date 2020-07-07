const UserLogin = require("../database/models/userLogin.model");
const User = require("../database/models/user.model");
const Bcrypt = require("bcryptjs");

async function registerUser(req, res) {
    const { query } = req;
    console.log(query);
    query.password = Bcrypt.hashSync(query.password, 10);
    const newUserLogin = new UserLogin({...query})
    await newUserLogin.save((err, data) => {
        console.log("error login", err);
        if (err) {
            return res.send({
                message: "Username already present, please type a unique username",
                status: 400
            });
        }
    });
    const newUser = new User({...query})
    newUser.save((err, data) => {
        console.log("error", err);
        if (err) {
            return res.send({
                message: "Error while creating your profile",
                status: 400,
                err: err
            });
        }
        return res.send(data)
    });
}

async function validateUser(req, res) {
    const { query } = req;
    console.log(query);

    let user = await UserLogin.findOne({username: query.username}).exec();
    if (!user) {
        return res.send({message: "The username does not exist", status: 400});
    }
    if (!Bcrypt.compareSync(query.password, user.password)) {
        return res.send({message: "The password or username is invalid", status: 400});
    }
    User.findOne({username: user.username}, (err, userData) => {
        if (err) return res.send({
            message: "Error while creating your profile, possibly username already present",
            status: 400,
            err: err
        })
        res.send(userData);
    })

}


module.exports = ({
    registerUser: registerUser,
    validateUser: validateUser
})