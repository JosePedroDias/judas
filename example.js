var judas = require('./index');

var log = function(err, resp) {
    console.log(err ? err : resp);
};

judas('http://images.nos.pt/EPGChannelImages/SIC.png',    'SIC.',    log); // will return SIC.jpg
judas('http://images.nos.pt/EPGChannelImages/SPTV_1.png', 'SPTV_1.', log); // will return SPTV_1.png
