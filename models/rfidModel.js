var mongoose = require('mongoose');
var Schema = mongoose.Schema;

 var rfidSchema = new Schema( {
	
	r_id: Number,
	rfid_no: String,
	f_u_id:Number
}),
Rfidtbl = mongoose.model('rfidtbl', rfidSchema);

module.exports = Rfidtbl;
