var mongoose = require('mongoose');
var Schema = mongoose.Schema;

 var rSchema = new Schema( {
	
	unique_id: Number,
	rfno: String
}),
rfidno = mongoose.model('rfidno', rSchema);

module.exports = rfidno;