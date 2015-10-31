Meteor.methods({
	recordTrade: function(emoji){
		Trades.insert({
			createdAt: new Date(),
			owner: Meteor.userId(),
			emojiId: emoji._id,
			emojiSymbol: emoji.symbol,
			price: emoji.price,
			shares: 1
		})
	}
})