
module.exports = 
				   {
					   homepage:function(req, res) {
					         res.render('index', { title: 'Travel Planner' });
					   },

					   addcity : function(req, res) {
					         res.render('index', { title: 'Add City' });
					   },

					   addPlanforday : function(req, res) {
					         res.render('index', { title: 'Add Plan for day' });
					   }	

				};