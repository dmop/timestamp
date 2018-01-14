const moment = require('moment');

exports.getDate = function (req, res) {
    var query = req.params.date;
    var unixResponse = null;
    var naturalResponse = null;

    if (moment.unix(query).isValid()) {
        unixResponse = Number(query);
        var day = moment.unix(unixResponse).utc();
        naturalResponse = moment(day).format("MMMM DD, YYYY");
    }
    else if (moment(query).isValid()) {
        unixResponse = moment(query).unix();
        naturalResponse = moment(query).format("MMMM DD, YYYY");
    }
    res.status(200).json({ "unix":unixResponse, "natural": naturalResponse });
};