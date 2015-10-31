Trades = new Meteor.Collection("trades");

if(Meteor.isServer){
	//Trades.remove({});
	Meteor.publish("trades", function(ownerId){
		return Trades.find({owner: ownerId});
	});
}