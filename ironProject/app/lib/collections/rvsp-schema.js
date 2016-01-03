Rsvps = new Mongo.Collection("rsvps");

Rsvps.attachSchema(new SimpleSchema({
	guests:{
		type:String,
		label:"Guest's name",
		optional:false,
		min:5,
		max:80
	},
	email:{
		type:String,
		label:"Email",
		regEx:SimpleSchema.RegEx.Email,
		optional:true
	},
	createAt:{
		type:Date,
		autoValue:function(){
			return new Date();
		}
	}
}));