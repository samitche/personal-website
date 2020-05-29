/*global require:true, process:true*/

var express = require('express');
var app = express();
var path = require('path');
var promMid = require('express-prometheus-middleware');

app.set('port', process.env.PORT || 3000);

app.use(express.static(path.join(__dirname, './')));

app.use(promMid({
  metricsPath: '/metrics',
  collectDefaultMetrics: true,
  requestDurationBuckets: [0.1, 0.5, 1, 1.5]
}));

app.use(function (req, res, next) {
  console.log('Fallback:', req.originalUrl);
  return res.status(200).sendFile(path.join(__dirname + '/index.html'));
});

app.listen(app.get('port'), function () {
  console.log('server listening on port ' + app.get('port'));
});
