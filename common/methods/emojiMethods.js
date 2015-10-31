Meteor.methods({
	initializeEmojis: function(){
		Emojis.remove({});
		
		Emojis.insert({
			"symbol": "❤",
			"name":"Heart",
			"createdAt": new Date(),
			"price": 5.05,
			"shares": 1000
		});

		Emojis.insert({
			"symbol": "☀",
			"name": "Sun",
			"createdAt": new Date(),
			"price": 15.15,
			"shares": 10000
		});

		Emojis.insert({
			"symbol": "☂",
			"name": "Umbrella",
			"createdAt": new Date(),
			"price": 105.00,
			"shares": 100000
		});
	},
	buyEmoji: function(emoji){
		// Save a record of the trade
		Meteor.call('recordTrade',emoji);
	}
});