'use strict'

const { Eyes, Configuration, BatchInfo, FileLogHandler} = require('@applitools/eyes-webdriverio')

describe('Dynamic-NML', function () {

  let batch;
  let config;
  let eyes;

  before(async () => {
    batch = new BatchInfo('Dynamic-NML-IOS-Full-Page');
    config = new Configuration();
    config.setBatch(batch);
  });
  
  
  beforeEach(async function () {

    eyes = new Eyes();

    eyes.setConfiguration(config);
    eyes.setLogHandler(new FileLogHandler(true, './eyes.log', false))

    await eyes.open(driver, 'Sample IOS Application', 'IOS WDIO-NML Test');

  });
  
  it('DYNAMIC-NML', async () => {

   await eyes.check("Scroll Stitch Mode",{StitchMode: 'Scroll'});
   await eyes.check("Scroll Stitch Mode with full Page SC",{StitchMode: 'Scroll', fully : true});

   await eyes.check("CSS Stitch Mode",{StitchMode: 'CSS'}); 
   await eyes.check("CSS Stitch Mode with full Page screenshot",{StitchMode: 'CSS', fully: true}); 
  });
  
  afterEach(async () => {

    await eyes.closeAsync();
  });
  
});