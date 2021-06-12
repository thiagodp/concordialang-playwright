async function exec(options) {
  const r = {};
  return r;
}

async function generate(abstractTestScripts, options) {
  const r = {};
  return r;
}

async function convert(filePath) {
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
  }

}
const plugin = new PlaywrightPlugin();

export default plugin;
