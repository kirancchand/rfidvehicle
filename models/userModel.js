var mongoose = require('mongoose');
var Schema = mongoose.Schema;

 var userSchema = new Schema( {
	
	u_id: Number,
	name: String,
	email: String,
	password: String,
	usertype:Number
}),
Usertbl = mongoose.model('usertbl', userSchema);

module.exports = Usertbl;
