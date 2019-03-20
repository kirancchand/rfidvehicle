var mongoose = require('mongoose');
var Schema = mongoose.Schema;

 var vehiclerfidsingleSchema = new Schema( {
	
	vrs_id: Number,
	vehicle_no: String,
	rfid_no: String,
	f_u_id:Number
}),
VehicleRfidSingletbl = mongoose.model('vehiclerfidsingletbl', vehiclerfidsingleSchema);

module.exports = VehicleRfidSingletbl;
