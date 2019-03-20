var mongoose = require('mongoose');
var Schema = mongoose.Schema;

 var vehicleSchema = new Schema( {
	
	v_id: Number,
	vehicle_no: String,
	f_u_id:Number
}),
Vehicletbl = mongoose.model('vehicletbl', vehicleSchema);

module.exports = Vehicletbl;


