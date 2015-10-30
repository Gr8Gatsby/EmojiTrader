Emojis = new Meteor.Collection("emojis");

if(Meteor.isServer){
	Meteor.publish("emojis", function(marketId){
		return Emojis.find();
	});
}