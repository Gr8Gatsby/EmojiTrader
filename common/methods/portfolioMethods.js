Meteor.methods({
	addPortfolio: function (){
        //Portfolios.remove({});
        var portfolio = Portfolios.find({owner: Meteor.userId()});

        if(portfolio.count() < 1) {
            console.log("New: Created a new portfolio for: " + Meteor.userId());
            Portfolios.insert({
                cash: 1000,
                createdAt: new Date(),
                owner: Meteor.userId(),
                emojis: []
            });
        } else if(portfolio.count() > 1) {
            console.log("Error: Someone has more than one portfolio!")
        } else if(portfolio.count() === 1) {
            portfolio = Portfolios.find({owner: Meteor.userId()}).fetch();
            console.log("User has existing portfolio with " + portfolio[0].cash + " in cash");
        }

        // Temporary
        //Meteor.call('buySecurity', Securities.find({name:"Cat Face"}).fetch(),1);
    }
})