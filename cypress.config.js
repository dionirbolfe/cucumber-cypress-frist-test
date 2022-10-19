const {defineConfig} = require('cypress')

module.exports = defineConfig({
  projectId: 'krwam5',

    reporter: 'mochawesome',
    reporterOptions: {
        charts: false,
        overwrite: false,
        html: true,
        json: true,
        reportDir: 'cypress/report/mochawesome-report',
    },

    env: {
        "base": "https://controlevm.ixcsoft.com.br/vm/web/login/login.php",
        "usuario": "NECESSARIO PREENCHER",
        "senha": 'NECESSARIO PREENCHER',
    },
    e2e: {
        setupNodeEvents(on, config) { //load plugins cucumber
            return require('./cypress/plugins/index.js')(on, config)
        },
        specPattern: 'cypress/e2e/*.feature',
    },
})
