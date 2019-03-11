var mongoose = require('mongoose');
var Schema = mongoose.Schema;

 var vehiclerfidSchema = new Schema( {
	
	vr_id: Number,
	f_v_id: Number,
	f_r_id: Number,
	f_u_id:Number
}),
VehicleRfidtbl = mongoose.model('vehiclerfidtbl', vehiclerfidSchema);

module.exports = VehicleRfidtbl;
