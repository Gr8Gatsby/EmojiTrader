Router.route('/', function(){
	this.render('home');
});

Router.route('/portfolio', function(){
	this.render('portfolio');
});

Router.route('/trades', function(){
	this.render('trades');
});