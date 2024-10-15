
## Installation

The first step is to open up a terminal and run:
```bash
npm install
```

And then you can run:

```bash
npx cypress run --browser chrome --reporter mochawesome
```

This command will run tests on Chrome browser and will generate Mocha report
To see the report you should navigate to mocha folder and open mochawesome.html file:

```bash
mochawesome-report/mochawesome.html
```

You can see also the video of the tests running under folder videos:

```bash
cypress/videos/tests.js.mp4
```