Emojis = new Meteor.Collection("emojis");

Meteor.startup(function(){

});

if(Meteor.isClient){
	Meteor.subscribe("emojis");

	Template.emojis.helpers({
		emojis: function(){
			return Emojis.find();
		}
	})
}