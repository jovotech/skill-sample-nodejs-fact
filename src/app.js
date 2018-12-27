'use strict';

// ------------------------------------------------------------------
// APP INITIALIZATION
// ------------------------------------------------------------------

const {App} = require('jovo-framework');
const {Alexa} = require('jovo-platform-alexa');
const {JovoDebugger} = require('jovo-plugin-debugger');
const {FileDb} = require('jovo-db-filedb');

const app = new App();

app.use(
    new Alexa(),
    new JovoDebugger(),
    new FileDb()
);


// ------------------------------------------------------------------
// APP LOGIC
// ------------------------------------------------------------------

app.setHandler({
    LAUNCH() {
        this.toIntent('GetNewFactIntent');
    },

    GetNewFactIntent() {
        this.$speech
            .addText(this.t('GET_FACT_MESSAGE'))
            .addText(this.t('FACTS')); // SpeechBuilder gets random fact from array

        this.tell(this.$speech);
    },

    HelpIntent() {
        this.ask(this.t('HELP_MESSAGE'), this.t('HELP_REPROMPT'));
    },

    // 2018-Aug-01: AMAZON.FallbackIntent is only currently available in en-* locales.
    //              This handler will not be triggered except in those locales, so it can be
    //              safely deployed for any locale.
    FallbackIntent() {
        this.ask(this.t('FALLBACK_MESSAGE'), this.t('FALLBACK_REPROMPT'));
    },

    END() {
        if (this.$alexaSkill.$request.reason) {
            console.log(`Session ended with reason: ${this.$alexaSkill.$request.reason}`);
        } else {
            this.tell(this.t('STOP_MESSAGE'));
        }
    },
});

module.exports.app = app;
