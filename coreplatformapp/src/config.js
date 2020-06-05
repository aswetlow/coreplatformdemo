// ------------------------------------------------------------------
// APP CONFIGURATION
// ------------------------------------------------------------------

module.exports = {
  logging: {
		request: true,
		maskRequestObjects: ['request.body.audio'],
		response: true,
	},

  intentMap: {
    'AMAZON.StopIntent': 'END',
  },

  db: {
    FileDb: {
      pathToFile: '../db/db.json',
    },
  },
};
