Trades = new Meteor.Collection("trades");

if(Meteor.isServer){
	Meteor.publish("trades", function(ownerId){
		return Trades.find({owner: ownerId});
	});
}