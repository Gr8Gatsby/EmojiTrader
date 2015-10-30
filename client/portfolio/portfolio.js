// Need this defined on the client for miniMongo
Portfolios = new Meteor.Collection("portfolios");

Meteor.startup(function () {
	Meteor.call('addPortfolio');
});

if(Meteor.isClient){
	Meteor.subscribe("portfolios", Meteor.userId());
	
	Template.portfolio.helpers({
		portfolio: function(){
			return Portfolios.find({owner: Meteor.userId()});
		},
		isOwner: function(){
			return this.owner === Meteor.userId();
		}
	});
}