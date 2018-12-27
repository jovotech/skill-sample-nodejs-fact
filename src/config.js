// ------------------------------------------------------------------
// APP CONFIGURATION
// ------------------------------------------------------------------

module.exports = {
    logging: true,

    intentMap: {
        'AMAZON.StopIntent': 'END',
        'AMAZON.CancelIntent': 'END',
        'AMAZON.FallbackIntent': 'FallbackIntent',
        'AMAZON.HelpIntent': 'HelpIntent',
    },

    db: {
        FileDb: {
            pathToFile: '../db/db.json',
        }
    },
};
