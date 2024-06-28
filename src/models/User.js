const {Schema, model} = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new Schema({
    name: {type: String, required: true},
    password: {type: String, required: true},
    Ntlf: {type: String, required: true},
    cedula: {type: String, required: true},
    Nfamiliares: {type: String, required: true},
    Ncasa: {type: String, required: true},

},{
    timestamps: true
});

UserSchema.methods.guardarcontraseña = async password => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
};

UserSchema.methods.matchPassword = async function(password) {
    return await bcrypt.compare(password,this.password);

}

module.exports = model('user',UserSchema);