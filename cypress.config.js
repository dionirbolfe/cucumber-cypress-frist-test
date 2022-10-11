const {defineConfig} = require('cypress')

module.exports = defineConfig({
    experimentalStudio: true,
    modifyObstructiveCode: false,
    projectId: 'karma5',
    watchForFileChanges: false,
    reporter: 'mochawesome',
    reporterOptions: {
        charts: true,
        overwrite: false,
        html: true,
        json: true,
        reportDir: 'cypress/report/mochawesome-report',
    },

    env: {
        "TAGS": "not @ignore",
        "base": "https://controlevm.ixcsoft.com.br/vm/web/login/login.php",
    },
    e2e: {
        setupNodeEvents(on, config) { //load plugins cucumber
            return require('./cypress/plugins/index.js')(on, config)
        },
        specPattern: 'cypress/integration/*.feature',
    },
})
