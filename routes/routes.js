module.exports = function(app) {

    var date = require('../controllers/app.controller.js');

    app.get('/:date', date.getDate);

}