if (process.env.NODE_ENV != 'production') require('dotenv').load();

module.exports = {
	APPNAME: process.env.APPNAME || 'Friendly Student Logger',
  PORT: process.env.PORT || 3030,
  DEVMODE: (process.env.NODE_ENV != 'production')
};