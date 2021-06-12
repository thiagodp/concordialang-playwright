async function exec(options) {
  console.log('[[ TO-DO: execute scripts with Playwright ]]');
  const r = {};
  return r;
}

async function generate(abstractTestScripts, options) {
  console.log('[[ TO-DO: generate scripts with Playwright ]]');
  const r = {};
  return r;
}

async function convert(filePath) {
  console.log('[[ TO-DO: convert report with Playwright ]]');
  const r = {};
  return r;
}

class PlaywrightPlugin {
  constructor() {
    this.generateCode = generate;
    this.executeCode = exec;
    this.convert = convert;

    this.defaultReportFile = async function defaultReportFile() {
      return 'TO-DO';
    };

    this.beforeReport = async () => console.log('[beforeReport]');

    this.afterReport = async () => console.log('[afterReport]');
  }

}
const plugin = new PlaywrightPlugin();

module.exports = plugin;
