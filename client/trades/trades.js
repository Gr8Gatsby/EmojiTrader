Trades = new Meteor.Collection("trades");

if(Meteor.isClient){
	Meteor.subscribe("trades", Meteor.userId());

	Template.trades.helpers({
		trades: function(){
			return Trades.find({owner: Meteor.userId()});
		}
	});
}