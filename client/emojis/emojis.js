Emojis = new Meteor.Collection("emojis");

Meteor.startup(function(){
	Meteor.call('initializeEmojis');
});

if(Meteor.isClient){
	Meteor.subscribe("emojis");

	Template.emojis.helpers({
		emojis: function(){
			return Emojis.find();
		}
	});

	Template.emojis.events({
		"click .buy-emoji" : function(event){
			event.preventDefault();
			var emoji = Emojis.find({_id: event.currentTarget.id}).fetch();
			Meteor.call('buyEmoji', emoji[0]);
		}
	})
}