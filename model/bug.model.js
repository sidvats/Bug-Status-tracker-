function currdate() {
    today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yy = today.getFullYear();
    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;
    return (dd + "-" + mm + "-" + yy);
}

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bugmodel = new Schema({
    title: { type: String, required: true },
    description: { type: String },
    date: { type: String, default: currdate()},
    time: {type:Date,default: Date.now},
    assigne:{type:String,required:true}
});
module.exports = mongoose.model('bugdetail',bugmodel)


