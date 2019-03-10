var mongoose = require('mongoose');
var Schema = mongoose.Schema;

 var vSchema = new Schema( {
	
	unique_id: Number,
	vno: String
}),
vehno = mongoose.model('vehno', vSchema);

module.exports = vehno;