var process = require('process');
var path = require('path');



module.exports = {
	relativeToCwd: function(pathname) {
		return './' + path.relative(process.cwd(), pathname);
	}
};
