var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var vehiclerfidjoinSchema = new Schema( {
	
	vr_id: Number,
	f_v_id: Number,[{ type: Schema.Types.v_id, ref: 'vehicletbls' }]
	f_r_id: Number,
	f_u_id:Number
});
VehicleRfidjointbl = mongoose.model('vehicletbl', vehicleSchema);
module.exports = Vehicletbl;



 var vehicleSchema = new Schema( {
	
	v_id: Number,
	vehicle_no: String,
	f_u_id:Number
});


Vehicletbl = mongoose.model('vehiclerfidtbl', vehiclerfidjoinSchema);
module.exports = Vehicletbl;
//



/*
const personSchema = Schema({
  _id: Schema.Types.ObjectId,
  name: String,
  age: Number,
  stories: [{ type: Schema.Types.ObjectId, ref: 'Story' }]
});

const storySchema = Schema({
  author: { type: Schema.Types.ObjectId, ref: 'Person' },
  title: String,
  fans: [{ type: Schema.Types.ObjectId, ref: 'Person' }]
});*/
/*
db.vehiclerfidtbls.aggregate([
		{
			$lookup:
			{
				from:"vehicletbls",
				localField:"f_v_id",
				foreignField:"v_id",
				as:"vehicletbl"
			}
		},
		{
			$lookup:
			{
				from:"rfidtbls",
				localField:"f_r_id",
				foreignField:"r_id",
				as:"rfidtbl"
			}
		},
		{
			$lookup:
			{
				from:"usertbls",
				localField:"f_u_id",
				foreignField:"u_id",
				as:"usertbl"
			}
		}

	]).pretty()*/