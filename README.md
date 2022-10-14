# cucumber-cypress-frist-test

# Example to run cypress version 10 with cucumber

<p><b>Reports:</b> gerenate with mochawesome and configured to remove before a run test suite</p>
<p><b>Steps:</b> configured in support/step_definitions</p> 
<p><b>Features:</b> configured in integrations</p>
<p><b>Commands:</b> configured in utils/commands</p>   

## Installation

```bash
$ npm install cypress cypress-cucumber-preprocessor mochawesome mochawesome-merge mochawesome-report-generator cypress-multi-reporters
```

## Docker build and run

```bash
docker build -t cyp-cucumber-dock-mocha-report .
```

```bash
docker-compose run e2e-electron
```

        

