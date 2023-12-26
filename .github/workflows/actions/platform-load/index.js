const core = require('@actions/core');
const github = require('@actions/github');
const fs = require('fs');

try {
  const configPath = core.getInput('config');
  const platform = core.getInput('platform');

  const dataRaw = fs.readFileSync(configPath);
  const data = JSON.parse(dataRaw);
  
  core.setOutput("flows", data[platform].flows);
  core.setOutput("edge", data[platform].edge);
  core.setOutput("shield", data[platform].shield);
  core.setOutput("dai", data[platform].dai);
  // Get the JSON webhook payload for the event that triggered the workflow
  // const payload = JSON.stringify(github.context.payload, undefined, 2)
  // console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
