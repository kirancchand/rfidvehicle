var express = require('express');
var router = express.Router();
var session = require('express-session');
var Usermodel = require('../models/userModel');
var VehicleRfidModel = require('../models/vehiclerfidModel');
var RfidModel = require('../models/rfidModel');
var VehicleModel = require('../models/vehicleModel');
var vehno = require('../models/vehno');
var rfidno = require('../models/rfidno');
var app = express();
var session = require('express-session');
var mongoose = require('mongoose');
var MongoStore = require('connect-mongo')(session);
mongoose.connect('mongodb://localhost/vehiclerfid_db', {useNewUrlParser: true  });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
});
app.use(session({
  secret: 'work hard',
  resave: true,
  saveUninitialized: false,
  store: new MongoStore({
    mongooseConnection: db
  })
}));

/****get request**/
router.get('/', function (req, res, next) {
	return res.render('index');
});
router.get('/login', function (req, res, next) {
	 return res.render('login');
});
router.get('/register', function (req, res, next) {
	return res.render('register');
});
router.get('/home', function (req, res, next) {
	return res.render('home');
});
router.get('/reg_vehicle_rfid', function (req, res, next) {
	return res.render('regvehiclerfid');
});
router.get('/recharge_account', function (req, res, next) {
	return res.render('rechargeaccount');
});
router.get('/fine_details', function (req, res, next) {
	return res.render('finedetails');
});
router.get('/log_details', function (req, res, next) {
	return res.render('logdetails');
});
router.get('/account_balance', function (req, res, next) {
	return res.render('accountbalance');
});
router.get('/vehicle_details', function (req, res, next) {
	return res.render('vehicledetails');
});

router.get('/view_user', function (req, res, next) {
	return res.render('viewuser');
});
router.get('/view_device', function (req, res, next) {
	return res.render('viewdevice');
});
router.get('/admin_log_details', function (req, res, next) {
	return res.render('adminlogdetails');
});
/****post request***/


router.post('/login', function (req, res, next) {
	//console.log(req.body);
	Usermodel.findOne({email:req.body.email},function(err,data){
		if(data){
			
			if(data.password==req.body.password){
				//console.log("Done Login");
				req.session.userId = data.u_id;
				//console.log(req.session.userId);
				res.send({"Success":"Success!"});
				
			}else{
				res.send({"Success":"Wrong password!"});
			}
		}else{
			res.send({"Success":"This Email Is not regestered!"});
		}
	});
});



router.post('/register', function(req, res, next) {
	var userInfo = req.body;

	console.log(userInfo);

	if(!userInfo.email || !userInfo.name || !userInfo.mobileno || !userInfo.password || !userInfo.passwordConf){
		res.send();
		console.log("1not");
	} else { 
		if (userInfo.password == userInfo.passwordConf) {
			Usermodel.findOne({email:userInfo.email},function(err,data){
				if(!data){
					var c;
					Usermodel.findOne({},function(err,data){

						if (data) {
							console.log("if");
							c = data.u_id + 1;
							console.log(c);
						}else{
							c=1;
							console.log("c1");
						}

						var newUser = new Usermodel({
							u_id:c,
							name: userInfo.username,
							mobileno: userInfo.mobileno,
							email: userInfo.email,
							password: userInfo.password,
							usertype:1
						});

						newUser.save(function(err, User){
							if(err)
								console.log(err);
							else
								console.log('Success');
						});

					}).sort({_id: -1}).limit(1);
					res.send({"Success":"You are regestered,You can login now."});
				}else{
					res.send({"Success":"Email is already used."});
				}

			});
		}else{
			res.send({"Success":"password is not matched"});
		}
	}
});


router.post('/veh_rf_register',function(req,res,next){
  //console.log(req.body);
  //console.log(req.session.userId);

  var vehicle_no = req.body.vehicleno;
  var rfid = req.body.rfid;
  var vid ;
  var rid ;
console.log("heloo"+req.session.userId);
	VehicleModel.findOne({},function(err,data){
						var vid ;
						if (data) {
							vid = data.v_id + 1;
							req.session.v_id = data.v_id + 1;
							console.log("sesvm"+req.session.v_id);
						}else{
							vid=1;
							console.log("c1");
						}

						var newvehicle = new VehicleModel({
						    v_id: vid,
						    vehicle_no: vehicle_no,
						    f_u_id:req.session.userId 
						  });

						newvehicle.save(function(err, Vehicle){
							if(err)
								console.log(err);
							else
								console.log('Success');
						});

					}).sort({_id: -1}).limit(1);

	RfidModel.findOne({},function(err,data){
							var rid ;
							if (data) {
								rid = data.r_id + 1;
								req.session.r_id = rid;
								console.log(req.session.r_id);
							}else{
								rid=1;
								console.log("c1");
							}

							var newrfid = new RfidModel({
							    r_id: rid,
							    rfid_no: rfid,
							    f_u_id:req.session.userId 
							  });


							newrfid.save(function(err, Rfid){
								if(err)
									console.log(err);
								else
									console.log('Success');
							});

						}).sort({_id: -1}).limit(1);

console.log("vsdf"+ req.session.v_id);
console.log("jhbx"+ req.session.r_id);

/*
  var newvehicle = new VehicleModel({
    v_id: vid,
    vehicle_no: vehicle_rfid_no.vehicleno,
    f_u_id:req.session.userId 
  });

  var newrfid = new RfidModel({
    r_id: rid,
    rfid_no: vehicle_rfid_no.rfid,
    f_u_id:req.session.userId 
  });

  var newvehiclerfid = new VehicleRfidModel({
    vr_id: vrid,
    f_v_id: f_vid,
    f_r_id:f_rid, 
    f_u_id:f_uid
  });


  newvno.save(function(err, data){
                                
              if(err)
                console.log(err);
              else
                console.log('Success');
            });return res.render('vregister.ejs');*/

});

router.post('/rfregister',function(req,res,next){
	console.log(req.body);
	var refno = req.body;
	 var c;
	var newrfno = new rfidno({
		unique_id:c,
		rfno:refno.rfno
	});
	newrfno.save(function(err, Person){ 
 							if(err)
								console.log(err);
							else
								console.log('Success');
							
						});return res.render('rfregister.ejs');
});
router.post('/vregister',function(req,res,next){
	console.log(req.body);
	var veno = req.body;
	var a ;s

	var newvno = new vehno({
		unique_id:a,
		vno:veno.vno
	});
	newvno.save(function(err, data){
                                
							if(err)
								console.log(err);
							else
								console.log('Success');
						});return res.render('vregister.ejs');
});




router.get('/profile', function (req, res, next) {
	console.log("profile");
	vehno.findOne({unique_id:req.session.userId},function(err,data){
		
		console.log("data");
		console.log(data);
		if(!data){
			res.redirect('/');
		}else{
			//console.log("found");
			return res.render('data.ejs', {"name":data.username,"email":data.email,"vno":data.vno});
		}
	});
});
router.get('/logout', function (req, res, next) {
	console.log("logout")
	if (req.session) {
    // delete session object
    req.session.destroy(function (err) {
    	if (err) {
    		return next(err);
    	} else {
    		return res.redirect('/');
    	}
    });
}
});

router.get('/forgetpass', function (req, res, next) {
	res.render("forget.ejs");
});

router.post('/forgetpass', function (req, res, next) {
	//console.log('req.body');
	//console.log(req.body);
	User.findOne({email:req.body.email},function(err,data){
		console.log(data);
		if(!data){
			res.send({"Success":"This Email Is not regestered!"});
		}else{
			// res.send({"Success":"Success!"});
			if (req.body.password==req.body.passwordConf) {
			data.password=req.body.password;
			data.passwordConf=req.body.passwordConf;

			data.save(function(err, Person){
				if(err)
					console.log(err);
				else
					console.log('Success');
					res.send({"Success":"Password changed!"});
			});
		}else{
			res.send({"Success":"Password does not matched! Both Password should be same."});
		}
		}
	});
	
});

module.exports = router;