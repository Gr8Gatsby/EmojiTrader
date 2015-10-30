Portfolios = new Meteor.Collection("portfolios");

if(Meteor.isServer){
	Meteor.publish("portfolios", function(ownerId){
		return Portfolios.find({owner: ownerId});
	});
}