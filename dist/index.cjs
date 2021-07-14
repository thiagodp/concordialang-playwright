var colors = require('ansi-colors');
var mustache = require('mustache');
var path = require('path');
var fs = require('fs');
var fse = require('node-fs-extra');
var util = require('util');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () {
                        return e[k];
                    }
                });
            }
        });
    }
    n['default'] = e;
    return n;
}

var colors__default = /*#__PURE__*/_interopDefaultLegacy(colors);
var fse__namespace = /*#__PURE__*/_interopNamespace(fse);

async function exec(options) {
  console.log('[[ TO-DO: execute scripts with Playwright ]]');
  const r = {};
  return r;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/**
 * Command comparison
 */

var CmdCmp;

(function (CmdCmp) {
  CmdCmp[CmdCmp["ONE_VALUE"] = 0] = "ONE_VALUE";
  CmdCmp[CmdCmp["ONE_VALUE__OR_ARRAY"] = 1] = "ONE_VALUE__OR_ARRAY";
  CmdCmp[CmdCmp["ONE_VALUE__ONE_NUMBER"] = 2] = "ONE_VALUE__ONE_NUMBER";
  CmdCmp[CmdCmp["ONE_VALUE__TWO_NUMBERS"] = 3] = "ONE_VALUE__TWO_NUMBERS";
  CmdCmp[CmdCmp["ONE_VALUE__THREE_NUMBERS"] = 4] = "ONE_VALUE__THREE_NUMBERS";
  CmdCmp[CmdCmp["ONE_VALUE__ONE_TARGET"] = 5] = "ONE_VALUE__ONE_TARGET";
  CmdCmp[CmdCmp["ONE_VALUE_OR_NUMBER"] = 6] = "ONE_VALUE_OR_NUMBER";
  CmdCmp[CmdCmp["ONE_VALUE_OR_NUMBER__ONE_NUMBER"] = 7] = "ONE_VALUE_OR_NUMBER__ONE_NUMBER";
  CmdCmp[CmdCmp["ONE_VALUE_OR_NUMBER__ONE_TARGET"] = 8] = "ONE_VALUE_OR_NUMBER__ONE_TARGET";
  CmdCmp[CmdCmp["ONE_VALUE_OR_NUMBER__OR_ARRAY"] = 9] = "ONE_VALUE_OR_NUMBER__OR_ARRAY";
  CmdCmp[CmdCmp["ONE_NUMBER"] = 10] = "ONE_NUMBER";
  CmdCmp[CmdCmp["ONE_NUMBER__ONE_TARGET"] = 11] = "ONE_NUMBER__ONE_TARGET";
  CmdCmp[CmdCmp["ONE_TARGET"] = 12] = "ONE_TARGET";
  CmdCmp[CmdCmp["ONE_TARGET__ONE_VALUE"] = 13] = "ONE_TARGET__ONE_VALUE";
  CmdCmp[CmdCmp["ONE_TARGET__ONE_NUMBER"] = 14] = "ONE_TARGET__ONE_NUMBER";
  CmdCmp[CmdCmp["ONE_TARGET__ONE_VALUE_OR_NUMBER"] = 15] = "ONE_TARGET__ONE_VALUE_OR_NUMBER";
  CmdCmp[CmdCmp["ONE_TARGET__TWO_NUMBERS"] = 16] = "ONE_TARGET__TWO_NUMBERS";
  CmdCmp[CmdCmp["ONE_TARGET__THREE_NUMBERS"] = 17] = "ONE_TARGET__THREE_NUMBERS";
  CmdCmp[CmdCmp["SAME_TARGET_TYPE"] = 18] = "SAME_TARGET_TYPE";
  CmdCmp[CmdCmp["SAME_TARGET_TYPE__ONE_NUMBER"] = 19] = "SAME_TARGET_TYPE__ONE_NUMBER";
  CmdCmp[CmdCmp["SAME_TARGET_TYPE__ONE_VALUE"] = 20] = "SAME_TARGET_TYPE__ONE_VALUE";
  CmdCmp[CmdCmp["SAME_TARGET_TYPE__ONE_VALUE__ONE_NUMBER"] = 21] = "SAME_TARGET_TYPE__ONE_VALUE__ONE_NUMBER";
  CmdCmp[CmdCmp["SAME_TARGET_TYPE__ONE_TARGET"] = 22] = "SAME_TARGET_TYPE__ONE_TARGET";
  CmdCmp[CmdCmp["SAME_TARGET_TYPE__ONE_TARGET__ONE_NUMBER"] = 23] = "SAME_TARGET_TYPE__ONE_TARGET__ONE_NUMBER";
  CmdCmp[CmdCmp["SAME_TARGET_TYPE__ONE_TARGET__ONE_NUMBER__ONE_VALUE"] = 24] = "SAME_TARGET_TYPE__ONE_TARGET__ONE_NUMBER__ONE_VALUE";
  CmdCmp[CmdCmp["SAME_TARGET_TYPE__ONE_TARGET__TWO_NUMBERS"] = 25] = "SAME_TARGET_TYPE__ONE_TARGET__TWO_NUMBERS";
  CmdCmp[CmdCmp["SAME_TARGET_TYPE__ONE_TARGET__ONE_VALUE_OR_NUMBER"] = 26] = "SAME_TARGET_TYPE__ONE_TARGET__ONE_VALUE_OR_NUMBER";
  CmdCmp[CmdCmp["SAME_TARGET_TYPE__ONE_TARGET__ONE_VALUE__ONE_NUMBER"] = 27] = "SAME_TARGET_TYPE__ONE_TARGET__ONE_VALUE__ONE_NUMBER";
  CmdCmp[CmdCmp["SAME_TARGET_TYPE__MANY_TARGETS"] = 28] = "SAME_TARGET_TYPE__MANY_TARGETS";
  CmdCmp[CmdCmp["SAME_TARGET_TYPE__ONE_VALUE_OR_NUMBER"] = 29] = "SAME_TARGET_TYPE__ONE_VALUE_OR_NUMBER";
  CmdCmp[CmdCmp["SAME_TARGET_TYPE__ONE_VALUE_OR_NUMBER__ONE_NUMBER"] = 30] = "SAME_TARGET_TYPE__ONE_VALUE_OR_NUMBER__ONE_NUMBER";
  CmdCmp[CmdCmp["SAME_TARGET_TYPE__ONE_VALUE_OR_NUMBER__ONE_NUMBER__ONE_TARGET"] = 31] = "SAME_TARGET_TYPE__ONE_VALUE_OR_NUMBER__ONE_NUMBER__ONE_TARGET";
  CmdCmp[CmdCmp["SAME_OPTION"] = 32] = "SAME_OPTION";
  CmdCmp[CmdCmp["SAME_OPTION__ONE_NUMBER"] = 33] = "SAME_OPTION__ONE_NUMBER";
  CmdCmp[CmdCmp["SAME_OPTION__ONE_VALUE"] = 34] = "SAME_OPTION__ONE_VALUE";
  CmdCmp[CmdCmp["SAME_OPTION__ONE_VALUE__ONE_NUMBER"] = 35] = "SAME_OPTION__ONE_VALUE__ONE_NUMBER";
  CmdCmp[CmdCmp["SAME_OPTION__ONE_VALUE__ONE_NUMBER__ONE_TARGET"] = 36] = "SAME_OPTION__ONE_VALUE__ONE_NUMBER__ONE_TARGET";
  CmdCmp[CmdCmp["SAME_OPTION__ONE_VALUE__ONE_NUMBER__ONE_VALUE"] = 37] = "SAME_OPTION__ONE_VALUE__ONE_NUMBER__ONE_VALUE";
  CmdCmp[CmdCmp["SAME_OPTION__ONE_VALUE__TWO_NUMBERS"] = 38] = "SAME_OPTION__ONE_VALUE__TWO_NUMBERS";
  CmdCmp[CmdCmp["SAME_OPTION__ONE_VALUE_OR_NUMBER"] = 39] = "SAME_OPTION__ONE_VALUE_OR_NUMBER";
  CmdCmp[CmdCmp["SAME_OPTION__ONE_VALUE_OR_NUMBER__ONE_NUMBER"] = 40] = "SAME_OPTION__ONE_VALUE_OR_NUMBER__ONE_NUMBER";
  CmdCmp[CmdCmp["SAME_OPTION__ONE_TARGET"] = 41] = "SAME_OPTION__ONE_TARGET";
  CmdCmp[CmdCmp["SAME_OPTION__ONE_TARGET__ONE_NUMBER"] = 42] = "SAME_OPTION__ONE_TARGET__ONE_NUMBER";
  CmdCmp[CmdCmp["SAME_OPTION__ONE_TARGET__TWO_NUMBERS"] = 43] = "SAME_OPTION__ONE_TARGET__TWO_NUMBERS";
  CmdCmp[CmdCmp["SAME_OPTION__ONE_TARGET__ONE_VALUE"] = 44] = "SAME_OPTION__ONE_TARGET__ONE_VALUE";
  CmdCmp[CmdCmp["SAME_OPTION__ONE_TARGET__ONE_VALUE_OR_NUMBER"] = 45] = "SAME_OPTION__ONE_TARGET__ONE_VALUE_OR_NUMBER";
  CmdCmp[CmdCmp["SAME_OPTION__ONE_TARGET__ONE_VALUE_OR_NUMBER__ONE_NUMBER"] = 46] = "SAME_OPTION__ONE_TARGET__ONE_VALUE_OR_NUMBER__ONE_NUMBER";
  CmdCmp[CmdCmp["SAME_OPTION__ONE_TARGET__ONE_VALUE__ONE_NUMBER"] = 47] = "SAME_OPTION__ONE_TARGET__ONE_VALUE__ONE_NUMBER";
  CmdCmp[CmdCmp["SAME_OPTION__MANY_TARGETS"] = 48] = "SAME_OPTION__MANY_TARGETS";
  CmdCmp[CmdCmp["SAME_OPTION__SAME_TARGET_TYPE"] = 49] = "SAME_OPTION__SAME_TARGET_TYPE";
  CmdCmp[CmdCmp["SAME_OPTION__SAME_TARGET_TYPE__ONE_NUMBER"] = 50] = "SAME_OPTION__SAME_TARGET_TYPE__ONE_NUMBER";
  CmdCmp[CmdCmp["SAME_OPTION__SAME_TARGET_TYPE__ONE_VALUE_OR_NUMBER"] = 51] = "SAME_OPTION__SAME_TARGET_TYPE__ONE_VALUE_OR_NUMBER";
  CmdCmp[CmdCmp["SAME_OPTION__SAME_TARGET_TYPE__ONE_VALUE_OR_NUMBER__ONE_NUMBER"] = 52] = "SAME_OPTION__SAME_TARGET_TYPE__ONE_VALUE_OR_NUMBER__ONE_NUMBER";
  CmdCmp[CmdCmp["SAME_OPTION__SAME_TARGET_TYPE__ONE_TARGET"] = 53] = "SAME_OPTION__SAME_TARGET_TYPE__ONE_TARGET";
  CmdCmp[CmdCmp["SAME_OPTION__SAME_TARGET_TYPE__ONE_TARGET__ONE_NUMBER"] = 54] = "SAME_OPTION__SAME_TARGET_TYPE__ONE_TARGET__ONE_NUMBER";
  CmdCmp[CmdCmp["SAME_MODIFIER__ONE_VALUE"] = 55] = "SAME_MODIFIER__ONE_VALUE";
  CmdCmp[CmdCmp["SAME_MODIFIER__ONE_VALUE_OR_NUMBER"] = 56] = "SAME_MODIFIER__ONE_VALUE_OR_NUMBER";
  CmdCmp[CmdCmp["SAME_MODIFIER__ONE_TARGET"] = 57] = "SAME_MODIFIER__ONE_TARGET";
  CmdCmp[CmdCmp["SAME_MODIFIER__SAME_OPTION"] = 58] = "SAME_MODIFIER__SAME_OPTION";
  CmdCmp[CmdCmp["SAME_MODIFIER__SAME_OPTION__ONE_VALUE"] = 59] = "SAME_MODIFIER__SAME_OPTION__ONE_VALUE";
  CmdCmp[CmdCmp["SAME_MODIFIER__SAME_OPTION__ONE_VALUE_OR_NUMBER"] = 60] = "SAME_MODIFIER__SAME_OPTION__ONE_VALUE_OR_NUMBER";
  CmdCmp[CmdCmp["SAME_MODIFIER__SAME_OPTION__ONE_TARGET"] = 61] = "SAME_MODIFIER__SAME_OPTION__ONE_TARGET";
  CmdCmp[CmdCmp["SAME_MODIFIER__SAME_OPTION__ONE_TARGET__ONE_VALUE"] = 62] = "SAME_MODIFIER__SAME_OPTION__ONE_TARGET__ONE_VALUE";
  CmdCmp[CmdCmp["SAME_MODIFIER__SAME_OPTION__ONE_TARGET__ONE_VALUE_OR_NUMBER"] = 63] = "SAME_MODIFIER__SAME_OPTION__ONE_TARGET__ONE_VALUE_OR_NUMBER";
  CmdCmp[CmdCmp["SAME_MODIFIER__SAME_OPTION__ONE_TARGET__TWO_VALUES"] = 64] = "SAME_MODIFIER__SAME_OPTION__ONE_TARGET__TWO_VALUES";
  CmdCmp[CmdCmp["SAME_MODIFIER__SAME_OPTION__SAME_TARGET_TYPE__ONE_TARGET"] = 65] = "SAME_MODIFIER__SAME_OPTION__SAME_TARGET_TYPE__ONE_TARGET";
  CmdCmp[CmdCmp["SAME_MODIFIER__SAME_TARGET_TYPE__ONE_VALUE"] = 66] = "SAME_MODIFIER__SAME_TARGET_TYPE__ONE_VALUE";
  CmdCmp[CmdCmp["SAME_MODIFIER__SAME_TARGET_TYPE__ONE_VALUE_OR_NUMBER"] = 67] = "SAME_MODIFIER__SAME_TARGET_TYPE__ONE_VALUE_OR_NUMBER";
  CmdCmp[CmdCmp["SAME_MODIFIER__SAME_TARGET_TYPE__ONE_TARGET__ONE_VALUE"] = 68] = "SAME_MODIFIER__SAME_TARGET_TYPE__ONE_TARGET__ONE_VALUE";
  CmdCmp[CmdCmp["SAME_MODIFIER__SAME_TARGET_TYPE__ONE_TARGET__ONE_VALUE_OR_NUMBER"] = 69] = "SAME_MODIFIER__SAME_TARGET_TYPE__ONE_TARGET__ONE_VALUE_OR_NUMBER";
  CmdCmp[CmdCmp["TWO_TARGETS"] = 70] = "TWO_TARGETS";
  CmdCmp[CmdCmp["TWO_VALUES_SAME_OPTION"] = 71] = "TWO_VALUES_SAME_OPTION";
  CmdCmp[CmdCmp["TWO_NUMBERS"] = 72] = "TWO_NUMBERS";
  CmdCmp[CmdCmp["TWO_NUMBERS_SAME_OPTION"] = 73] = "TWO_NUMBERS_SAME_OPTION";
  CmdCmp[CmdCmp["TWO_NUMBERS_SAME_TARGET_TYPE"] = 74] = "TWO_NUMBERS_SAME_TARGET_TYPE";
})(CmdCmp || (CmdCmp = {}));

var OptionsOptions;

(function (OptionsOptions) {
  // E.g. action: "see", target: "#foo", options: [ "class" ], values: [ "active" ] -> {"class": "active"}
  OptionsOptions[OptionsOptions["OPTION_AS_PROPERTY__FIRST_VALUE_AS_VALUE"] = 1] = "OPTION_AS_PROPERTY__FIRST_VALUE_AS_VALUE"; // E.g. action: "see", target: "#foo", options: [ "attribute" ], values: [ "class", "active" ] -> {"class": "active"}

  OptionsOptions[OptionsOptions["FIRST_VALUE_AS_PROPERTY__SECOND_VALUE_AS_VALUE"] = 2] = "FIRST_VALUE_AS_PROPERTY__SECOND_VALUE_AS_VALUE";
})(OptionsOptions || (OptionsOptions = {}));
/**
 * Command mapper
 *
 * @author Thiago Delgado Pinto
 */


class CommandMapper {
  constructor(commands) {
    this.commands = void 0;
    this._withinCount = 0;
    this.commands = commands;
  }

  withinCount() {
    return this._withinCount;
  }

  setWithinCount(value) {
    this._withinCount = value;

    if (this._withinCount < 0) {
      this._withinCount = 0;
    }
  }
  /**
   * Converts an abstract test script command into one or more lines of code.
   *
   * @param cmd Abstract test script command
   */


  map(cmd) {
    let cmdCfg = this.commands.find(cfg => this.areCompatible(cfg, cmd));

    if (!cmdCfg) {
      return [];
    }

    return this.makeCommands(cmdCfg, cmd);
  }
  /**
   * Make one or more lines of code from the given command configuration and
   * abstract test script command.
   *
   * @param cfg Command configuration
   * @param cmd Abstract test script command
   * @returns Lines of code.
   */


  makeCommands(cfg, cmd) {
    // singleQuotedTargets defaults to true if undefined
    if (undefined === cfg.singleQuotedTargets) {
      cfg.singleQuotedTargets = true;
    }

    const COMMENT_TEMPLATE = ' // ({{{location.line}}},{{{location.column}}}){{#comment}} {{{comment}}}{{/comment}}';
    const TABULATION = "\t";

    if (!!cmd["db"] && cmd.action === 'connect') {
      const values = {
        value: ['"' + cmd.values[0] + '"', JSON.stringify(cmd["db"])],
        location: cmd.location,
        comment: cmd.comment
      };
      const template = cfg.template + COMMENT_TEMPLATE;
      return [mustache.render(template, values)];
    }

    let result = [];

    if ('switch' === cmd.action && this.withinCount() > 0) {
      // Add "} );" if it already is in a "within"
      const endWithinBlock = '});';
      const tabs = TABULATION.repeat(this.withinCount() - 1);
      result.push(`${tabs}${endWithinBlock}`); // Set to 0 instead of decreasing, since current
      // implementation will avoid a within inside a within.

      this.setWithinCount(0);
    }

    let valueToRender = !cmd.values ? '' : this.valuesToParameters(cmd.values, cfg.valuesAsNonArray, cfg.singleQuotedValues);

    switch (cfg.optionsOption) {
      case OptionsOptions.OPTION_AS_PROPERTY__FIRST_VALUE_AS_VALUE:
        {
          const [firstCfgOption] = cfg.options; // From CFG, not CMD !

          const [firstValue] = cmd.values;

          if (firstCfgOption !== undefined && firstValue !== undefined) {
            valueToRender = `{"${firstCfgOption}": "${firstValue}"}`;
          }

          break;
        }

      case OptionsOptions.FIRST_VALUE_AS_PROPERTY__SECOND_VALUE_AS_VALUE:
        {
          const [firstValue, secondValue] = cmd.values;

          if (firstValue !== undefined && secondValue !== undefined) {
            valueToRender = `{"${firstValue}": "${secondValue}"}`;
          }

          break;
        }
      // no default
    }

    const values = {
      target: !cmd.targets ? '' : this.targetsToParameters(cmd.targets, cfg.valuesAsNonArray, cfg.singleQuotedTargets),
      value: valueToRender,
      location: cmd.location,
      comment: cmd.comment,
      modifier: cmd.modifier,
      options: cmd.options
    };
    const tabs = TABULATION.repeat(this.withinCount());
    const template = tabs + cfg.template + COMMENT_TEMPLATE;
    const rendered = mustache.render(template, values);
    result.push(rendered); // Switch with multiple frames

    if ('switch' === cmd.action && (cmd.targetTypes || []).includes('frame') && (cmd.targets || []).length > 1) {
      // const value = cmd.targets.length - 1;
      // this.setWithinCount( value );
      // Set to 1 instead of increasing, since current
      // implementation will avoid a within inside a within.
      this.setWithinCount(1);
    }

    return result;
  }
  /**
   * Make a code comment with the data of a abstract test script command.
   *
   * @param cmd Abstract test script command
   */


  makeCommentWithCommand(cmd) {
    if (!cmd) {
      return '// COMMAND NOT ACCEPTED';
    }

    return '// COMMAND NOT ACCEPTED -> ' + this.serializeCommand(cmd);
  }

  serializeCommand(cmd) {
    if (!cmd) {
      return '';
    }

    let s = '';
    let count = 0;

    for (let prop in cmd) {
      let val = cmd[prop];

      if (undefined === val) {
        continue;
      }

      if (count > 0) {
        s += ', ';
      }

      s += `"${prop}": ` + JSON.stringify(val);
      ++count;
    }

    return s;
  }
  /**
   * Returns true whether the command configuration is compatible with the
   * given abstract test script command.
   *
   * @param cfg Command configuration
   * @param cmd Abstract test script command
   */


  areCompatible(cfg, cmd) {
    if (cfg.action !== cmd.action) {
      return false;
    }

    function isNumber(x) {
      return 'number' === typeof x || !isNaN(parseInt(x));
    }

    function sameTargetTypes(cfg, cmd) {
      if ('string' === typeof cfg.targetTypes) {
        return (cmd.targetTypes || []).indexOf(cfg.targetTypes) >= 0;
      }

      const cmdTypes = cmd.targetTypes || [];
      const cfgTypes = cfg.targetTypes || [];

      for (const configured of cfgTypes) {
        if (cmdTypes.indexOf(configured) < 0) {
          return false;
        }
      }

      return true;
    }

    function includeOptions(from, into) {
      let targetOptions = into.options || [];

      for (let o of from.options || []) {
        if (targetOptions.indexOf(o) < 0) {
          return false; // not found
        }
      }

      return true; // all options of cfg were found at cmd
    }

    function oneValueThenNumbers(cmd, numberCount, atLeast = false) {
      const valuesCount = numberCount + 1;

      if ((cmd.values || []).length !== valuesCount) {
        return false;
      }

      const totalNumbersInValues = cmd.values.filter(isNumber).length;

      if (atLeast && totalNumbersInValues < numberCount) {
        return false;
      }

      if (numberCount !== totalNumbersInValues) {
        return false;
      }

      let newArray = [];

      for (let i = 0; i < valuesCount; ++i) {
        if (isNumber(cmd.values[i])) {
          newArray.push(Number(cmd.values[i]));
        } else {
          newArray.unshift(cmd.values[i]);
        }
      }

      cmd.values = newArray;
      return true;
    }

    function oneValueThenOneNumber(cmd) {
      return oneValueThenNumbers(cmd, 1);
    }

    function oneValueThenTwoNumbers(cmd) {
      return oneValueThenNumbers(cmd, 2);
    }

    function oneValueThenThreeNumbers(cmd) {
      return oneValueThenNumbers(cmd, 3);
    }

    const valuesCount = (cmd.values || []).length;
    const targetsCount = (cmd.targets || []).length;

    switch (cfg.comp) {
      case CmdCmp.ONE_VALUE:
        {
          return 1 === valuesCount && !isNumber(cmd.values[0]);
        }

      case CmdCmp.SAME_TARGET_TYPE__ONE_VALUE:
        {
          return 1 === valuesCount && !isNumber(cmd.values[0]) && sameTargetTypes(cfg, cmd);
        }

      case CmdCmp.SAME_MODIFIER__SAME_TARGET_TYPE__ONE_VALUE:
        {
          return 1 === valuesCount && !isNumber(cmd.values[0]) && sameTargetTypes(cfg, cmd) && cfg.modifier === cmd.modifier;
        }

      case CmdCmp.SAME_MODIFIER__SAME_TARGET_TYPE__ONE_VALUE_OR_NUMBER:
        {
          return 1 === valuesCount && sameTargetTypes(cfg, cmd) && cfg.modifier === cmd.modifier;
        }

      case CmdCmp.SAME_OPTION__ONE_NUMBER:
        {
          const ok = 1 === valuesCount && isNumber(cmd.values[0]) && includeOptions(cfg, cmd);

          if (ok) {
            cmd.values[0] = Number(cmd.values[0]);
          }

          return ok;
        }

      case CmdCmp.SAME_OPTION__ONE_VALUE:
        {
          return 1 === valuesCount && !isNumber(cmd.values[0]) && includeOptions(cfg, cmd);
        }

      case CmdCmp.SAME_MODIFIER__SAME_OPTION:
        {
          return includeOptions(cfg, cmd) && cfg.modifier === cmd.modifier;
        }

      case CmdCmp.SAME_MODIFIER__SAME_OPTION__ONE_VALUE:
        {
          return 1 === valuesCount && !isNumber(cmd.values[0]) && includeOptions(cfg, cmd) && cfg.modifier === cmd.modifier;
        }

      case CmdCmp.SAME_MODIFIER__SAME_OPTION__ONE_VALUE_OR_NUMBER:
        {
          return 1 === valuesCount && includeOptions(cfg, cmd) && cfg.modifier === cmd.modifier;
        }

      case CmdCmp.ONE_VALUE_OR_NUMBER__OR_ARRAY:
      // next

      case CmdCmp.ONE_VALUE__OR_ARRAY:
        {
          return valuesCount >= 1;
        }

      case CmdCmp.ONE_VALUE__ONE_NUMBER:
        {
          return oneValueThenOneNumber(cmd);
        }

      case CmdCmp.SAME_TARGET_TYPE__ONE_NUMBER:
        {
          return sameTargetTypes(cfg, cmd) && 1 == valuesCount && isNumber(cmd.values[0]);
        }

      case CmdCmp.SAME_TARGET_TYPE__ONE_VALUE__ONE_NUMBER:
        {
          return sameTargetTypes(cfg, cmd) && oneValueThenOneNumber(cmd);
        }

      case CmdCmp.SAME_OPTION__ONE_VALUE__ONE_NUMBER:
        {
          return includeOptions(cfg, cmd) && oneValueThenOneNumber(cmd);
        }

      case CmdCmp.SAME_MODIFIER__ONE_VALUE:
        {
          return 1 === valuesCount && !isNumber(cmd.values[0]) && cmd.modifier === cfg.modifier;
        }

      case CmdCmp.SAME_MODIFIER__ONE_VALUE_OR_NUMBER:
        {
          return 1 === valuesCount && cmd.modifier === cfg.modifier;
        }

      case CmdCmp.ONE_VALUE__TWO_NUMBERS:
        {
          return oneValueThenTwoNumbers(cmd);
        }

      case CmdCmp.SAME_OPTION__ONE_VALUE__ONE_NUMBER__ONE_TARGET:
        {
          return 1 === targetsCount && oneValueThenOneNumber(cmd) && includeOptions(cfg, cmd);
        }

      case CmdCmp.SAME_OPTION__ONE_VALUE__ONE_NUMBER__ONE_VALUE:
        {
          if (3 !== valuesCount) {
            return false;
          }

          const numberIndex = cmd.values.findIndex(isNumber);

          if (numberIndex < 0) {
            return false;
          } // Transform to number


          cmd.values[numberIndex] = Number(cmd.values[numberIndex]); // Guarantee order -> index 1 is where the number must be placed

          if (0 === numberIndex) {
            cmd.values = [cmd.values[1], cmd.values[0], cmd.values[2]];
          } else if (2 == numberIndex) {
            cmd.values = [cmd.values[0], cmd.values[2], cmd.values[1]];
          }

          return true;
        }

      case CmdCmp.SAME_OPTION__ONE_VALUE__TWO_NUMBERS:
        {
          return includeOptions(cfg, cmd) && oneValueThenTwoNumbers(cmd);
        }

      case CmdCmp.SAME_OPTION__ONE_VALUE_OR_NUMBER:
        {
          return 1 === valuesCount && includeOptions(cfg, cmd);
        }

      case CmdCmp.SAME_OPTION__ONE_VALUE_OR_NUMBER__ONE_NUMBER:
        {
          return oneValueThenNumbers(cmd, 1, true) && includeOptions(cfg, cmd);
        }

      case CmdCmp.ONE_VALUE__THREE_NUMBERS:
        {
          return oneValueThenThreeNumbers(cmd);
        }

      case CmdCmp.ONE_VALUE_OR_NUMBER:
        {
          return 1 === valuesCount;
        }

      case CmdCmp.ONE_NUMBER:
        {
          const ok = 1 === valuesCount && isNumber(cmd.values[0]);

          if (ok) {
            cmd.values[0] = Number(cmd.values[0]);
          }

          return ok;
        }

      case CmdCmp.ONE_NUMBER__ONE_TARGET:
        {
          return 1 === targetsCount && 1 === valuesCount && isNumber(cmd.values[0]);
        }

      case CmdCmp.ONE_TARGET:
        return 1 === targetsCount;

      case CmdCmp.ONE_VALUE__ONE_TARGET:
      // next

      case CmdCmp.ONE_TARGET__ONE_VALUE:
        {
          return 1 === targetsCount && 1 === valuesCount && !isNumber(cmd.values[0]);
        }

      case CmdCmp.ONE_TARGET__ONE_NUMBER:
        {
          const ok = 1 === targetsCount && 1 === valuesCount && isNumber(cmd.values[0]);

          if (ok) {
            cmd.values[0] = Number(cmd.values[0]);
          }

          return ok;
        }

      case CmdCmp.ONE_VALUE_OR_NUMBER__ONE_NUMBER:
        {
          return oneValueThenNumbers(cmd, 1, true);
        }

      case CmdCmp.ONE_VALUE_OR_NUMBER__ONE_TARGET:
      // next

      case CmdCmp.ONE_TARGET__ONE_VALUE_OR_NUMBER:
        {
          return 1 === targetsCount && 1 === valuesCount;
        }

      case CmdCmp.ONE_TARGET__TWO_NUMBERS:
        {
          const ok = 1 === targetsCount && 2 === valuesCount && isNumber(cmd.values[0]) && isNumber(cmd.values[1]);

          if (ok) {
            cmd.values[0] = Number(cmd.values[0]);
            cmd.values[1] = Number(cmd.values[1]);
          }

          return ok;
        }

      case CmdCmp.ONE_TARGET__THREE_NUMBERS:
        {
          const ok = 1 === targetsCount && 3 === valuesCount && isNumber(cmd.values[0]) && isNumber(cmd.values[1]) && isNumber(cmd.values[2]);

          if (ok) {
            cmd.values[0] = Number(cmd.values[0]);
            cmd.values[1] = Number(cmd.values[1]);
            cmd.values[2] = Number(cmd.values[2]);
          }

          return ok;
        }

      case CmdCmp.SAME_OPTION__ONE_TARGET__ONE_NUMBER:
        {
          const ok = 1 === targetsCount && 1 === valuesCount && isNumber(cmd.values[0]) && includeOptions(cfg, cmd);

          if (ok) {
            cmd.values[0] = Number(cmd.values[0]);
          }

          return ok;
        }

      case CmdCmp.SAME_TARGET_TYPE__ONE_TARGET__ONE_NUMBER:
        {
          const ok = 1 === targetsCount && 1 === valuesCount && isNumber(cmd.values[0]) && sameTargetTypes(cfg, cmd);

          if (ok) {
            cmd.values[0] = Number(cmd.values[0]);
          }

          return ok;
        }

      case CmdCmp.SAME_TARGET_TYPE__ONE_TARGET__ONE_NUMBER__ONE_VALUE:
        {
          let ok = 1 === targetsCount && 2 === valuesCount && sameTargetTypes(cfg, cmd);

          if (!ok) {
            return false;
          }

          ok = oneValueThenNumbers(cmd, 1, true);

          if (ok) {
            cmd.values = [cmd.values[1], cmd.values[0]];
          }

          return ok;
        }

      case CmdCmp.SAME_TARGET_TYPE__ONE_TARGET__TWO_NUMBERS:
        {
          const ok = 1 === targetsCount && 2 === valuesCount && isNumber(cmd.values[0]) && isNumber(cmd.values[1]) && sameTargetTypes(cfg, cmd);

          if (ok) {
            cmd.values = [Number(cmd.values[0]), Number(cmd.values[1])];
          }

          return ok;
        }

      case CmdCmp.SAME_TARGET_TYPE__ONE_TARGET__ONE_VALUE_OR_NUMBER:
        {
          return 1 === targetsCount && 1 === valuesCount && sameTargetTypes(cfg, cmd);
        }

      case CmdCmp.SAME_TARGET_TYPE__ONE_TARGET__ONE_VALUE__ONE_NUMBER:
        {
          const ok = 1 === targetsCount && 2 === valuesCount && sameTargetTypes(cfg, cmd);

          if (!ok) {
            return false;
          }

          return oneValueThenNumbers(cmd, 1, true);
        }

      case CmdCmp.SAME_TARGET_TYPE__MANY_TARGETS:
        {
          return targetsCount > 1 && sameTargetTypes(cfg, cmd);
        }

      case CmdCmp.SAME_TARGET_TYPE__ONE_VALUE_OR_NUMBER:
        {
          return 1 === valuesCount && sameTargetTypes(cfg, cmd);
        }

      case CmdCmp.SAME_TARGET_TYPE__ONE_VALUE_OR_NUMBER__ONE_NUMBER:
        {
          return oneValueThenNumbers(cmd, 1, true) && sameTargetTypes(cfg, cmd);
        }

      case CmdCmp.SAME_TARGET_TYPE__ONE_VALUE_OR_NUMBER__ONE_NUMBER__ONE_TARGET:
        {
          return 1 === targetsCount && oneValueThenNumbers(cmd, 1, true) && sameTargetTypes(cfg, cmd);
        }

      case CmdCmp.SAME_OPTION__ONE_TARGET__TWO_NUMBERS:
        {
          const ok = 1 === targetsCount && 2 === valuesCount && isNumber(cmd.values[0]) && isNumber(cmd.values[1]) && includeOptions(cfg, cmd);

          if (ok) {
            cmd.values[0] = Number(cmd.values[0]);
            cmd.values[1] = Number(cmd.values[1]);
          }

          return ok;
        }

      case CmdCmp.SAME_OPTION__ONE_TARGET__ONE_VALUE:
        {
          return 1 === targetsCount && 1 === valuesCount && !isNumber(cmd.values[0]) && includeOptions(cfg, cmd);
        }

      case CmdCmp.SAME_OPTION__ONE_TARGET__ONE_VALUE_OR_NUMBER:
        {
          return 1 === targetsCount && 1 === valuesCount && includeOptions(cfg, cmd);
        }

      case CmdCmp.SAME_OPTION__ONE_TARGET__ONE_VALUE_OR_NUMBER__ONE_NUMBER:
        {
          const ok = 1 === targetsCount && 2 === valuesCount && includeOptions(cfg, cmd);

          if (!ok) {
            return false;
          }

          return oneValueThenNumbers(cmd, 1, true);
        }

      case CmdCmp.SAME_OPTION__ONE_TARGET__ONE_VALUE__ONE_NUMBER:
        {
          return 1 === targetsCount && includeOptions(cfg, cmd) && oneValueThenOneNumber(cmd);
        }

      case CmdCmp.SAME_OPTION__MANY_TARGETS:
        {
          return targetsCount > 1 && includeOptions(cfg, cmd);
        }

      case CmdCmp.SAME_OPTION__SAME_TARGET_TYPE:
        {
          return includeOptions(cfg, cmd) && sameTargetTypes(cfg, cmd);
        }

      case CmdCmp.SAME_OPTION__SAME_TARGET_TYPE__ONE_NUMBER:
        {
          const ok = 1 === valuesCount && isNumber(cmd.values[0]) && includeOptions(cfg, cmd) && sameTargetTypes(cfg, cmd);

          if (ok) {
            cmd.values[0] = Number(cmd.values[0]);
          }

          return ok;
        }

      case CmdCmp.SAME_OPTION__SAME_TARGET_TYPE__ONE_VALUE_OR_NUMBER:
        {
          return 1 === valuesCount && includeOptions(cfg, cmd) && sameTargetTypes(cfg, cmd);
        }

      case CmdCmp.SAME_OPTION__SAME_TARGET_TYPE__ONE_VALUE_OR_NUMBER__ONE_NUMBER:
        {
          return oneValueThenNumbers(cmd, 1, true) && includeOptions(cfg, cmd) && sameTargetTypes(cfg, cmd);
        }

      case CmdCmp.SAME_OPTION__SAME_TARGET_TYPE__ONE_TARGET:
        {
          return 1 === targetsCount && includeOptions(cfg, cmd) && sameTargetTypes(cfg, cmd);
        }

      case CmdCmp.SAME_OPTION__SAME_TARGET_TYPE__ONE_TARGET__ONE_NUMBER:
        {
          return 1 === targetsCount && 1 === valuesCount && isNumber(cmd.values[0]) && includeOptions(cfg, cmd) && sameTargetTypes(cfg, cmd);
        }

      case CmdCmp.SAME_TARGET_TYPE__ONE_TARGET:
        {
          return 1 === targetsCount && sameTargetTypes(cfg, cmd);
        }

      case CmdCmp.SAME_MODIFIER__SAME_OPTION__ONE_TARGET:
        {
          return 1 === targetsCount && includeOptions(cfg, cmd) && cfg.modifier === cmd.modifier;
        }

      case CmdCmp.SAME_MODIFIER__SAME_OPTION__SAME_TARGET_TYPE__ONE_TARGET:
        {
          return 1 === targetsCount && sameTargetTypes(cfg, cmd) && includeOptions(cfg, cmd) && cfg.modifier === cmd.modifier;
        }

      case CmdCmp.SAME_MODIFIER__SAME_OPTION__ONE_TARGET__ONE_VALUE:
        {
          return 1 === targetsCount && 1 === valuesCount && !isNumber(cmd.values[0]) && includeOptions(cfg, cmd) && cfg.modifier === cmd.modifier;
        }

      case CmdCmp.SAME_MODIFIER__SAME_OPTION__ONE_TARGET__ONE_VALUE_OR_NUMBER:
        {
          return 1 === targetsCount && 1 === valuesCount && includeOptions(cfg, cmd) && cfg.modifier === cmd.modifier;
        }

      case CmdCmp.SAME_MODIFIER__SAME_OPTION__ONE_TARGET__TWO_VALUES:
        {
          return 1 === targetsCount && 2 === valuesCount && includeOptions(cfg, cmd) && cfg.modifier === cmd.modifier;
        }

      case CmdCmp.SAME_MODIFIER__SAME_TARGET_TYPE__ONE_TARGET__ONE_VALUE:
        {
          return 1 === targetsCount && 1 === valuesCount && !isNumber(cmd.values[0]) && sameTargetTypes(cfg, cmd) && cfg.modifier === cmd.modifier;
        }

      case CmdCmp.SAME_MODIFIER__SAME_TARGET_TYPE__ONE_TARGET__ONE_VALUE_OR_NUMBER:
        {
          return 1 === targetsCount && 1 === valuesCount && sameTargetTypes(cfg, cmd) && cfg.modifier === cmd.modifier;
        }

      case CmdCmp.SAME_OPTION__ONE_TARGET:
        {
          return 1 === targetsCount && includeOptions(cfg, cmd);
        }

      case CmdCmp.SAME_MODIFIER__ONE_TARGET:
        {
          return 1 === targetsCount && cfg.modifier === cmd.modifier;
        }

      case CmdCmp.SAME_TARGET_TYPE:
        {
          return 0 === targetsCount && 0 === valuesCount && sameTargetTypes(cfg, cmd);
        }

      case CmdCmp.SAME_OPTION:
        {
          return 0 === targetsCount && 0 === valuesCount && includeOptions(cfg, cmd);
        }

      case CmdCmp.TWO_TARGETS:
        {
          return 2 === targetsCount;
        }

      case CmdCmp.TWO_VALUES_SAME_OPTION:
        {
          return 2 == valuesCount && !isNumber(cmd.values[0]) && !isNumber(cmd.values[1]) && includeOptions(cfg, cmd);
        }

      case CmdCmp.TWO_NUMBERS:
        {
          let ok = 2 == valuesCount && isNumber(cmd.values[0]) && isNumber(cmd.values[1]);

          if (ok) {
            cmd.values[0] = Number(cmd.values[0]);
            cmd.values[1] = Number(cmd.values[1]);
          }

          return ok;
        }

      case CmdCmp.TWO_NUMBERS_SAME_OPTION:
        {
          let ok = 2 == valuesCount && isNumber(cmd.values[0]) && isNumber(cmd.values[1]) && includeOptions(cfg, cmd);

          if (ok) {
            cmd.values[0] = Number(cmd.values[0]);
            cmd.values[1] = Number(cmd.values[1]);
          }

          return ok;
        }

      case CmdCmp.TWO_NUMBERS_SAME_TARGET_TYPE:
        {
          let ok = 2 == valuesCount && isNumber(cmd.values[0]) && isNumber(cmd.values[1]) && sameTargetTypes(cfg, cmd);

          if (ok) {
            cmd.values[0] = Number(cmd.values[0]);
            cmd.values[1] = Number(cmd.values[1]);
          }

          return ok;
        }
    }

    return false;
  }
  /**
   * Convert targets to function parameters.
   *
   * @param targets Targets to convert, usually UI literals.
   * @param singleQuotedTargets Whether the targets should be wrapped with single quotes.
   */


  targetsToParameters(targets, valueAsNonArrayWhenGreaterThanOne, singleQuotedTargets) {
    if (0 === targets.length) {
      return '';
    }

    const areStrings = 'string' === typeof targets[0];

    if (areStrings) {
      let strTargets = targets;

      if (1 === targets.length) {
        return this.convertSingleTarget(strTargets[0], singleQuotedTargets);
      }

      const joint = strTargets.map(v => this.convertSingleTarget(v, singleQuotedTargets)).join(', ');

      if (!valueAsNonArrayWhenGreaterThanOne) {
        return '[' + joint + ']';
      }

      return joint;
    }

    function valueReplacer(key, value) {
      if (typeof value === 'string' && value.charAt(0) === '@') {
        return {
          name: value.substr(1)
        };
      }

      return value;
    }

    const content = JSON.stringify(targets, valueReplacer); // remove [ and ]

    return content.substring(1, content.length - 1);
  }

  convertSingleTarget(target, singleQuotedTargets) {
    const t = !singleQuotedTargets ? this.escapeDoubleQuotes(target) : this.escapeSingleQuotes(target);
    return !singleQuotedTargets ? t.charAt(0) === '@' ? `{name: "${t.substr(1)}"}` : `"${t}"` : t.charAt(0) === '@' ? `{name: '${t.substr(1)}'}` : `'${t}'`;
  }
  /**
   * Convert values to function parameters.
   *
   * @param values Values to convert.
   * @param valueAsNonArrayWhenGreaterThanOne Whether wants to convert an
   *      array to single values when its size is greater than one.
   * @param singleQuotedValues Whether is desired to use single quotes.
   */


  valuesToParameters(values, valueAsNonArrayWhenGreaterThanOne = false, singleQuotedValues = false) {
    if (0 === values.length) {
      return '';
    }

    if (1 === values.length) {
      return this.convertSingleValue(values[0], singleQuotedValues);
    }

    const joint = values.map(v => this.convertSingleValue(v, singleQuotedValues)).join(', ');

    if (!valueAsNonArrayWhenGreaterThanOne) {
      return '[' + joint + ']';
    }

    return joint;
  }

  convertSingleValue(value, singleQuotedValues = false) {
    if (typeof value === 'string') {
      const v = singleQuotedValues ? this.escapeSingleQuotes(value) : this.escapeDoubleQuotes(value);
      return singleQuotedValues ? `'${v}'` : `"${v}"`;
    }

    return value;
  }

  escapeDoubleQuotes(value) {
    return value.replace(/[^\\](")/g, p1 => {
      return p1.substr(0, 1) + '\\"';
    });
  }

  escapeSingleQuotes(value) {
    return value.replace(/[^\\](')/g, p1 => {
      return p1.substr(0, 1) + "\\'";
    });
  }

}

var varCount = 0;
/** Maps available commands. ORDER MATTERS */

const COMMANDS = [// accept
{
  action: 'accept',
  comp: CmdCmp.SAME_OPTION,
  options: ['alert'],
  template: 'I.acceptPopup();'
}, {
  action: 'accept',
  comp: CmdCmp.SAME_OPTION,
  options: ['confirm'],
  template: 'I.acceptPopup();'
}, {
  action: 'accept',
  comp: CmdCmp.SAME_OPTION,
  options: ['popup'],
  template: 'I.acceptPopup();'
}, {
  action: 'accept',
  comp: CmdCmp.SAME_OPTION,
  options: ['prompt'],
  template: 'I.acceptPopup();'
}, {
  action: 'accept',
  comp: CmdCmp.SAME_OPTION__ONE_VALUE,
  options: ['alert'],
  valuesAsNonArray: true,
  template: `const popupText${++varCount} = await I.grabPopupText(); I.acceptPopup(); assert.equal(popupText${varCount}, {{{value}}});`
}, {
  action: 'accept',
  comp: CmdCmp.SAME_OPTION__ONE_VALUE,
  options: ['confirm'],
  valuesAsNonArray: true,
  template: `const popupText${++varCount} = await I.grabPopupText(); I.acceptPopup(); assert.equal(popupText${varCount}, {{{value}}});`
}, {
  action: 'accept',
  comp: CmdCmp.SAME_OPTION__ONE_VALUE,
  options: ['popup'],
  valuesAsNonArray: true,
  template: `const popupText${++varCount} = await I.grabPopupText(); I.acceptPopup(); assert.equal(popupText${varCount}, {{{value}}});`
}, {
  action: 'accept',
  comp: CmdCmp.SAME_OPTION__ONE_VALUE,
  options: ['prompt'],
  valuesAsNonArray: true,
  template: `const popupText${++varCount} = await I.grabPopupText(); I.acceptPopup(); assert.equal(popupText${varCount}, {{{value}}});`
}, // amOn
{
  action: 'amOn',
  comp: CmdCmp.SAME_TARGET_TYPE__ONE_TARGET,
  targetTypes: 'url',
  template: 'I.amOnPage({{{target}}});'
}, {
  action: 'amOn',
  comp: CmdCmp.ONE_VALUE,
  template: 'I.amOnPage({{{value}}});'
}, {
  action: 'amOn',
  comp: CmdCmp.ONE_TARGET,
  template: 'I.amOnPage({{{target}}});'
}, // append
{
  action: 'append',
  comp: CmdCmp.ONE_TARGET__ONE_VALUE_OR_NUMBER,
  template: 'I.appendField({{{target}}}, {{{value}}});'
}, // attachFile
{
  action: 'attachFile',
  comp: CmdCmp.ONE_TARGET__ONE_VALUE,
  template: 'I.attachFile({{{target}}}, {{{value}}});'
}, {
  action: 'fill',
  comp: CmdCmp.SAME_TARGET_TYPE__ONE_TARGET__ONE_VALUE_OR_NUMBER,
  targetTypes: 'inputFile',
  template: 'I.attachFile({{{target}}}, {{{value}}});'
}, // cancel
{
  action: 'cancel',
  comp: CmdCmp.SAME_OPTION,
  options: ['alert'],
  template: 'I.cancelPopup();'
}, {
  action: 'cancel',
  comp: CmdCmp.SAME_OPTION,
  options: ['confirm'],
  template: 'I.cancelPopup();'
}, {
  action: 'cancel',
  comp: CmdCmp.SAME_OPTION,
  options: ['popup'],
  template: 'I.cancelPopup();'
}, {
  action: 'cancel',
  comp: CmdCmp.SAME_OPTION,
  options: ['prompt'],
  template: 'I.cancelPopup();'
}, // check
{
  action: 'check',
  comp: CmdCmp.ONE_VALUE__ONE_TARGET,
  template: 'I.checkOption({{{value}}}, {{{target}}});'
}, {
  action: 'check',
  comp: CmdCmp.ONE_TARGET,
  template: 'I.checkOption({{{target}}});'
}, {
  action: 'check',
  comp: CmdCmp.TWO_TARGETS,
  template: 'I.checkOption({{{target}}});',
  valuesAsNonArray: true
}, {
  action: 'check',
  comp: CmdCmp.ONE_VALUE_OR_NUMBER,
  template: 'I.checkOption({{{value}}});'
}, // clear + cookie
{
  action: 'clear',
  comp: CmdCmp.SAME_TARGET_TYPE__ONE_TARGET,
  targetTypes: 'cookie',
  template: 'I.clearCookie({{{target}}});'
}, {
  action: 'clear',
  comp: CmdCmp.SAME_TARGET_TYPE__ONE_VALUE_OR_NUMBER,
  targetTypes: 'cookie',
  template: 'I.clearCookie({{{value}}});'
}, {
  action: 'clear',
  comp: CmdCmp.SAME_OPTION__ONE_VALUE_OR_NUMBER,
  targetTypes: 'cookie',
  template: 'I.clearCookie({{{value}}});'
}, // clear + field
{
  action: 'clear',
  comp: CmdCmp.ONE_TARGET,
  template: 'I.clearField({{{target}}});'
}, {
  action: 'clear',
  comp: CmdCmp.SAME_OPTION__ONE_TARGET,
  options: ['field'],
  template: 'I.clearField({{{target}}});'
}, // click
{
  action: 'click',
  comp: CmdCmp.ONE_VALUE_OR_NUMBER__ONE_TARGET,
  template: 'I.click({{{value}}}, {{{target}}});'
}, {
  action: 'click',
  comp: CmdCmp.ONE_TARGET,
  template: 'I.click({{{target}}});'
}, {
  action: 'click',
  comp: CmdCmp.ONE_VALUE_OR_NUMBER,
  template: 'I.click({{{value}}});'
}, {
  action: 'click',
  comp: CmdCmp.TWO_TARGETS,
  template: 'I.click({{{target}}});',
  valuesAsNonArray: true
}, // close + app (Appium only)
{
  action: 'close',
  comp: CmdCmp.SAME_OPTION,
  options: ['app'],
  template: 'I.closeApp();'
}, // close + currentTab
{
  action: 'close',
  comp: CmdCmp.SAME_TARGET_TYPE,
  targetTypes: 'currentTab',
  template: 'I.closeCurrentTab();'
}, {
  action: 'close',
  comp: CmdCmp.SAME_OPTION,
  options: ['currentTab'],
  template: 'I.closeCurrentTab();'
}, // close + otherTabs
{
  action: 'close',
  comp: CmdCmp.SAME_TARGET_TYPE,
  targetTypes: 'otherTabs',
  template: 'I.closeOtherTabs();'
}, {
  action: 'close',
  comp: CmdCmp.SAME_OPTION,
  options: ['otherTabs'],
  template: 'I.closeOtherTabs();'
}, // connect + database (usually during a Test Event)
{
  action: 'connect',
  comp: CmdCmp.TWO_VALUES_SAME_OPTION,
  options: ['database'],
  valuesAsNonArray: true,
  template: 'I.connect({{{value}}});'
}, // disconnect + database (usually during a Test Event)
{
  action: 'disconnect',
  comp: CmdCmp.SAME_OPTION__ONE_VALUE,
  options: ['database'],
  valuesAsNonArray: true,
  template: 'await I.disconnect({{{value}}});'
}, // doubleClick
{
  action: 'doubleClick',
  comp: CmdCmp.ONE_VALUE_OR_NUMBER__ONE_TARGET,
  template: 'I.doubleClick({{{value}}}, {{{target}}});'
}, {
  action: 'doubleClick',
  comp: CmdCmp.ONE_TARGET,
  template: 'I.doubleClick({{{target}}});'
}, {
  action: 'doubleClick',
  comp: CmdCmp.ONE_VALUE_OR_NUMBER,
  template: 'I.doubleClick({{{value}}});'
}, {
  action: 'doubleClick',
  comp: CmdCmp.TWO_TARGETS,
  template: 'I.doubleClick({{{target}}});',
  valuesAsNonArray: true
}, // drag
{
  action: 'drag',
  comp: CmdCmp.TWO_TARGETS,
  template: 'I.dragAndDrop({{{target}}});',
  valuesAsNonArray: true
}, // fill
{
  action: 'fill',
  comp: CmdCmp.ONE_TARGET__ONE_VALUE_OR_NUMBER,
  template: 'I.fillField({{{target}}}, {{{value}}});'
}, // hide + keyboard (Appium only)
{
  action: 'hide',
  comp: CmdCmp.SAME_OPTION,
  options: ['keyboard'],
  template: 'I.hideDeviceKeyboard();'
}, // install (Appium only)
{
  action: 'install',
  comp: CmdCmp.SAME_OPTION__ONE_VALUE,
  options: ['app'],
  template: 'I.installApp({{{value}}});'
}, {
  action: 'install',
  comp: CmdCmp.ONE_VALUE,
  template: 'I.installApp({{{value}}});'
}, // maximize + window
{
  action: 'maximize',
  comp: CmdCmp.SAME_TARGET_TYPE,
  targetTypes: 'window',
  template: 'I.resizeWindow("maximize");'
}, {
  action: 'maximize',
  comp: CmdCmp.SAME_OPTION,
  options: ['window'],
  template: 'I.resizeWindow("maximize");'
}, // move + cursor + target [ + x, y ]
{
  action: 'move',
  comp: CmdCmp.SAME_TARGET_TYPE__ONE_TARGET__TWO_NUMBERS,
  targetTypes: 'cursor',
  valuesAsNonArray: true,
  template: 'I.moveCursorTo({{{target}}}, {{{value}}});'
}, {
  action: 'move',
  comp: CmdCmp.SAME_TARGET_TYPE__ONE_TARGET,
  targetTypes: 'cursor',
  template: 'I.moveCursorTo({{{target}}});'
}, {
  action: 'move',
  comp: CmdCmp.SAME_OPTION__ONE_TARGET__TWO_NUMBERS,
  options: ['cursor'],
  valuesAsNonArray: true,
  template: 'I.moveCursorTo({{{target}}}, {{{value}}});'
}, {
  action: 'move',
  comp: CmdCmp.SAME_OPTION__ONE_TARGET,
  options: ['cursor'],
  template: 'I.moveCursorTo({{{target}}});'
}, // open + notifications (Appium only)
{
  action: 'open',
  comp: CmdCmp.SAME_OPTION,
  options: ['notifications'],
  template: 'I.openNotifications();'
}, // press
{
  action: 'press',
  comp: CmdCmp.ONE_VALUE_OR_NUMBER__OR_ARRAY,
  template: 'I.pressKey({{{value}}});'
}, // pull + file (Appium only)
{
  action: 'pull',
  comp: CmdCmp.TWO_VALUES_SAME_OPTION,
  targetTypes: 'fileInput',
  valuesAsNonArray: true,
  template: 'I.pullFile({{{value}}});'
}, {
  action: 'pull',
  comp: CmdCmp.TWO_VALUES_SAME_OPTION,
  options: ['file'],
  valuesAsNonArray: true,
  template: 'I.pullFile({{{value}}});'
}, // refresh + ( page | currentPage )
{
  action: 'refresh',
  comp: CmdCmp.SAME_TARGET_TYPE,
  targetTypes: 'page',
  template: 'I.refreshPage();'
}, {
  action: 'refresh',
  comp: CmdCmp.SAME_OPTION,
  options: ['currentPage'],
  template: 'I.refreshPage();'
}, {
  action: 'refresh',
  comp: CmdCmp.SAME_OPTION,
  options: ['page'],
  template: 'I.refreshPage();'
}, // remove + app (Appium only)
{
  action: 'remove',
  comp: CmdCmp.SAME_OPTION__ONE_VALUE,
  options: ['app'],
  template: 'I.removeApp({{{value}}});'
}, // resize + window
{
  action: 'resize',
  comp: CmdCmp.TWO_NUMBERS_SAME_TARGET_TYPE,
  targetTypes: 'window',
  valuesAsNonArray: true,
  template: 'I.resizeWindow({{{value}}});'
}, {
  action: 'resize',
  comp: CmdCmp.TWO_NUMBERS_SAME_OPTION,
  options: ['window'],
  valuesAsNonArray: true,
  template: 'I.resizeWindow({{{value}}});'
}, // rightClick
{
  action: 'rightClick',
  comp: CmdCmp.ONE_TARGET,
  template: 'I.rightClick({{{target}}});'
}, {
  action: 'rightClick',
  comp: CmdCmp.ONE_VALUE_OR_NUMBER,
  template: 'I.rightClick({{{value}}});'
}, // rotate (Appium only)
{
  action: 'rotate',
  comp: CmdCmp.TWO_NUMBERS,
  valuesAsNonArray: true,
  template: 'I.rotate({{{value}}});'
}, // run + command (usually during a Test Event)
{
  action: 'run',
  comp: CmdCmp.SAME_OPTION__ONE_VALUE,
  options: ['command'],
  singleQuotedValues: true,
  template: 'await I.runCommand({{{value}}});'
}, // run + script (usually during a Test Event)
{
  action: 'run',
  comp: CmdCmp.TWO_VALUES_SAME_OPTION,
  options: ['script'],
  valuesAsNonArray: true,
  singleQuotedValues: true,
  template: 'await I.run({{{value}}});'
}, // saveScreenshot
{
  action: 'saveScreenshot',
  comp: CmdCmp.ONE_VALUE,
  template: 'I.saveScreenshot({{{value}}});'
}, // scrollTo + ( value | number | target )
{
  action: 'scrollTo',
  comp: CmdCmp.ONE_VALUE_OR_NUMBER,
  template: 'I.scrollTo({{{value}}});'
}, {
  action: 'scrollTo',
  comp: CmdCmp.ONE_TARGET,
  template: 'I.scrollTo({{{target}}});'
}, // see + app + installed (Appium only)
{
  action: 'see',
  comp: CmdCmp.SAME_MODIFIER__SAME_OPTION__ONE_VALUE,
  options: ['app', 'installed'],
  template: 'I.seeAppIsInstalled({{{value}}});'
}, {
  action: 'see',
  comp: CmdCmp.SAME_MODIFIER__SAME_OPTION__ONE_VALUE,
  options: ['app', 'uninstalled'],
  modifier: 'not',
  template: 'I.seeAppIsInstalled({{{value}}});'
}, // see + app + installed + not (Appium only)
{
  action: 'see',
  comp: CmdCmp.SAME_MODIFIER__SAME_OPTION__ONE_VALUE,
  options: ['app', 'installed'],
  modifier: 'not',
  template: 'I.seeAppIsNotInstalled({{{value}}});'
}, {
  action: 'see',
  comp: CmdCmp.SAME_MODIFIER__SAME_OPTION__ONE_VALUE,
  options: ['app', 'uninstalled'],
  template: 'I.seeAppIsNotInstalled({{{value}}});'
}, // see + currentActivity + value (Appium only)
{
  action: 'see',
  comp: CmdCmp.SAME_MODIFIER__SAME_OPTION__ONE_VALUE,
  options: ['currentActivity'],
  template: 'I.seeCurrentActivityIs({{{value}}});'
}, // see + device + locked (Appium only)
{
  action: 'see',
  comp: CmdCmp.SAME_MODIFIER__SAME_OPTION,
  options: ['device', 'locked'],
  template: 'I.seeDeviceIsLocked();'
}, {
  action: 'see',
  comp: CmdCmp.SAME_MODIFIER__SAME_OPTION,
  options: ['device', 'locked'],
  modifier: 'not',
  template: 'I.seeDeviceIsUnlocked();'
}, // see + device + unlocked (Appium only)
{
  action: 'see',
  comp: CmdCmp.SAME_MODIFIER__SAME_OPTION,
  options: ['device', 'unlocked'],
  template: 'I.seeDeviceIsUnlocked();'
}, {
  action: 'see',
  comp: CmdCmp.SAME_MODIFIER__SAME_OPTION,
  options: ['device', 'unlocked'],
  modifier: 'not',
  template: 'I.seeDeviceIsLocked();'
}, // see + orientation + landscape (Appium only)
{
  action: 'see',
  comp: CmdCmp.SAME_MODIFIER__SAME_OPTION,
  options: ['orientation', 'landscape'],
  template: 'I.seeOrientationIs("LANDSCAPE");'
}, {
  action: 'see',
  comp: CmdCmp.SAME_MODIFIER__SAME_OPTION,
  options: ['orientation', 'landscape'],
  modifier: 'not',
  template: 'I.seeOrientationIs("PORTRAIT");'
}, // see + orientation + portrait (Appium only)
{
  action: 'see',
  comp: CmdCmp.SAME_MODIFIER__SAME_OPTION,
  options: ['orientation', 'portrait'],
  template: 'I.seeOrientationIs("PORTRAIT");'
}, {
  action: 'see',
  comp: CmdCmp.SAME_MODIFIER__SAME_OPTION,
  options: ['orientation', 'portrait'],
  modifier: 'not',
  template: 'I.seeOrientationIs("LANDSCAPE");'
}, // see + field as option + value | number
{
  action: 'see',
  comp: CmdCmp.SAME_MODIFIER__SAME_OPTION__ONE_TARGET__ONE_VALUE_OR_NUMBER,
  options: ['field'],
  template: 'I.seeInField({{{target}}}, {{{value}}});'
}, // see + field as option + not + value | number
{
  action: 'see',
  comp: CmdCmp.SAME_MODIFIER__SAME_OPTION__ONE_TARGET__ONE_VALUE_OR_NUMBER,
  options: ['field'],
  modifier: 'not',
  template: 'I.dontSeeInField({{{target}}}, {{{value}}});'
}, // see + textbox as target type + value | number
{
  action: 'see',
  comp: CmdCmp.SAME_MODIFIER__SAME_TARGET_TYPE__ONE_TARGET__ONE_VALUE_OR_NUMBER,
  targetTypes: 'textbox',
  template: 'I.seeInField({{{target}}}, {{{value}}});'
}, // see + textbox as target type + not + value | number
{
  action: 'see',
  comp: CmdCmp.SAME_MODIFIER__SAME_TARGET_TYPE__ONE_TARGET__ONE_VALUE_OR_NUMBER,
  targetTypes: 'textbox',
  modifier: 'not',
  template: 'I.dontSeeInField({{{target}}}, {{{value}}});'
}, // see + textarea as target type + value | number
{
  action: 'see',
  comp: CmdCmp.SAME_MODIFIER__SAME_TARGET_TYPE__ONE_TARGET__ONE_VALUE_OR_NUMBER,
  targetTypes: 'textarea',
  template: 'I.seeInField({{{target}}}, {{{value}}});'
}, // see + textarea as target type + not + value | number
{
  action: 'see',
  comp: CmdCmp.SAME_MODIFIER__SAME_TARGET_TYPE__ONE_TARGET__ONE_VALUE_OR_NUMBER,
  targetTypes: 'textarea',
  modifier: 'not',
  template: 'I.dontSeeInField({{{target}}}, {{{value}}});'
}, // see + target + option "class" + value
{
  action: 'see',
  comp: CmdCmp.SAME_MODIFIER__SAME_OPTION__ONE_TARGET__ONE_VALUE_OR_NUMBER,
  options: ['class'],
  template: 'I.seeAttributesOnElements({{{target}}}, {{{value}}});',
  optionsOption: OptionsOptions.OPTION_AS_PROPERTY__FIRST_VALUE_AS_VALUE
}, // see + target + option "style" + value
{
  action: 'see',
  comp: CmdCmp.SAME_MODIFIER__SAME_OPTION__ONE_TARGET__ONE_VALUE_OR_NUMBER,
  options: ['style'],
  template: 'I.seeAttributesOnElements({{{target}}}, {{{value}}});',
  optionsOption: OptionsOptions.OPTION_AS_PROPERTY__FIRST_VALUE_AS_VALUE
}, // see + target + option "attribute" + value + value
{
  action: 'see',
  comp: CmdCmp.SAME_MODIFIER__SAME_OPTION__ONE_TARGET__TWO_VALUES,
  options: ['attribute'],
  template: 'I.seeAttributesOnElements({{{target}}}, {{{value}}});',
  optionsOption: OptionsOptions.FIRST_VALUE_AS_PROPERTY__SECOND_VALUE_AS_VALUE
}, // see + value | number + inside + target
{
  action: 'see',
  comp: CmdCmp.SAME_MODIFIER__SAME_OPTION__ONE_TARGET__ONE_VALUE_OR_NUMBER,
  options: ['inside'],
  template: 'I.see({{{value}}}, {{{target}}});'
}, // see + value | number + not + inside + target
{
  action: 'see',
  comp: CmdCmp.SAME_MODIFIER__SAME_OPTION__ONE_TARGET__ONE_VALUE_OR_NUMBER,
  options: ['inside'],
  modifier: 'not',
  template: 'I.dontSee({{{value}}}, {{{target}}});'
}, // see + with + value | number
{
  action: 'see',
  comp: CmdCmp.SAME_MODIFIER__SAME_OPTION__ONE_TARGET__ONE_VALUE_OR_NUMBER,
  options: ['with'],
  template: 'I.see({{{value}}}, {{{target}}});'
}, // see + with + not + value | number
{
  action: 'see',
  comp: CmdCmp.SAME_MODIFIER__SAME_OPTION__ONE_TARGET__ONE_VALUE_OR_NUMBER,
  options: ['with'],
  modifier: 'not',
  template: 'I.dontSee({{{value}}}, {{{target}}});'
}, // see + checkbox [+ not] + checked
{
  action: 'see',
  comp: CmdCmp.SAME_MODIFIER__SAME_OPTION__SAME_TARGET_TYPE__ONE_TARGET,
  targetTypes: 'checkbox',
  options: ['checked'],
  modifier: 'not',
  template: 'I.dontSeeCheckboxIsChecked({{{target}}});'
}, {
  action: 'see',
  comp: CmdCmp.SAME_MODIFIER__SAME_OPTION__SAME_TARGET_TYPE__ONE_TARGET,
  targetTypes: 'checkbox',
  options: ['checked'],
  template: 'I.seeCheckboxIsChecked({{{target}}});'
}, {
  action: 'see',
  comp: CmdCmp.SAME_MODIFIER__SAME_OPTION__ONE_TARGET,
  options: ['checked'],
  modifier: 'not',
  template: 'I.dontSeeCheckboxIsChecked({{{target}}});'
}, {
  action: 'see',
  comp: CmdCmp.SAME_MODIFIER__SAME_OPTION__ONE_TARGET,
  options: ['checked'],
  template: 'I.seeCheckboxIsChecked({{{target}}});'
}, // see + checkbox [+ not] + unchecked
{
  action: 'see',
  comp: CmdCmp.SAME_MODIFIER__SAME_OPTION__SAME_TARGET_TYPE__ONE_TARGET,
  targetTypes: 'checkbox',
  options: ['unchecked'],
  modifier: 'not',
  template: 'I.seeCheckboxIsChecked({{{target}}});'
}, {
  action: 'see',
  comp: CmdCmp.SAME_MODIFIER__SAME_OPTION__SAME_TARGET_TYPE__ONE_TARGET,
  targetTypes: 'checkbox',
  options: ['unchecked'],
  template: 'I.dontSeeCheckboxIsChecked({{{target}}});'
}, {
  action: 'see',
  comp: CmdCmp.SAME_MODIFIER__SAME_OPTION__ONE_TARGET,
  options: ['unchecked'],
  modifier: 'not',
  template: 'I.seeCheckboxIsChecked({{{target}}});'
}, {
  action: 'see',
  comp: CmdCmp.SAME_MODIFIER__SAME_OPTION__ONE_TARGET,
  options: ['unchecked'],
  template: 'I.dontSeeCheckboxIsChecked({{{target}}});'
}, // see + cookie + value | number
{
  action: 'see',
  comp: CmdCmp.SAME_MODIFIER__SAME_TARGET_TYPE__ONE_VALUE_OR_NUMBER,
  targetTypes: 'cookie',
  template: 'I.seeCookie({{{value}}});'
}, {
  action: 'see',
  comp: CmdCmp.SAME_MODIFIER__SAME_OPTION__ONE_VALUE_OR_NUMBER,
  options: ['cookie'],
  template: 'I.seeCookie({{{value}}});'
}, // see + cookie + not + value | number
{
  action: 'see',
  comp: CmdCmp.SAME_MODIFIER__SAME_TARGET_TYPE__ONE_VALUE_OR_NUMBER,
  targetTypes: 'cookie',
  modifier: 'not',
  template: 'I.dontSeeCookie({{{value}}});'
}, {
  action: 'see',
  comp: CmdCmp.SAME_MODIFIER__SAME_OPTION__ONE_VALUE_OR_NUMBER,
  options: ['cookie'],
  modifier: 'not',
  template: 'I.dontSeeCookie({{{value}}});'
}, // see + text + value | number
{
  action: 'see',
  comp: CmdCmp.SAME_MODIFIER__SAME_TARGET_TYPE__ONE_VALUE_OR_NUMBER,
  targetTypes: 'text',
  template: 'I.seeTextEquals({{{value}}});'
}, {
  action: 'see',
  comp: CmdCmp.SAME_MODIFIER__SAME_OPTION__ONE_VALUE_OR_NUMBER,
  options: ['text'],
  template: 'I.seeTextEquals({{{value}}});'
}, // see + text + not + value | number
{
  action: 'see',
  comp: CmdCmp.SAME_MODIFIER__SAME_TARGET_TYPE__ONE_VALUE_OR_NUMBER,
  targetTypes: 'text',
  modifier: 'not',
  template: 'I.dontSeeTextEquals({{{value}}});'
}, {
  action: 'see',
  comp: CmdCmp.SAME_MODIFIER__SAME_OPTION__ONE_VALUE_OR_NUMBER,
  options: ['text'],
  modifier: 'not',
  template: 'I.dontSeeTextEquals({{{value}}});'
}, // see + title + value | number
{
  action: 'see',
  comp: CmdCmp.SAME_MODIFIER__SAME_TARGET_TYPE__ONE_VALUE_OR_NUMBER,
  targetTypes: 'title',
  template: 'I.seeInTitle({{{value}}});'
}, {
  action: 'see',
  comp: CmdCmp.SAME_MODIFIER__SAME_OPTION__ONE_VALUE_OR_NUMBER,
  options: ['title'],
  template: 'I.seeInTitle({{{value}}});'
}, // see + title + not + value | number
{
  action: 'see',
  comp: CmdCmp.SAME_MODIFIER__SAME_TARGET_TYPE__ONE_VALUE_OR_NUMBER,
  targetTypes: 'title',
  modifier: 'not',
  template: 'I.dontSeeInTitle({{{value}}});'
}, {
  action: 'see',
  comp: CmdCmp.SAME_MODIFIER__SAME_OPTION__ONE_VALUE_OR_NUMBER,
  options: ['title'],
  modifier: 'not',
  template: 'I.dontSeeInTitle({{{value}}});'
}, // see + url + value | number
{
  action: 'see',
  comp: CmdCmp.SAME_MODIFIER__SAME_TARGET_TYPE__ONE_VALUE_OR_NUMBER,
  targetTypes: 'url',
  template: 'I.seeInCurrentUrl({{{value}}});'
}, {
  action: 'see',
  comp: CmdCmp.SAME_MODIFIER__SAME_OPTION__ONE_VALUE_OR_NUMBER,
  options: ['url'],
  template: 'I.seeInCurrentUrl({{{value}}});'
}, // see + url + not + value | number
{
  action: 'see',
  comp: CmdCmp.SAME_MODIFIER__SAME_TARGET_TYPE__ONE_VALUE_OR_NUMBER,
  targetTypes: 'url',
  modifier: 'not',
  template: 'I.dontSeeInCurrentUrl({{{value}}});'
}, {
  action: 'see',
  comp: CmdCmp.SAME_MODIFIER__SAME_OPTION__ONE_VALUE_OR_NUMBER,
  options: ['url'],
  modifier: 'not',
  template: 'I.dontSeeInCurrentUrl({{{value}}});'
}, // see + target
{
  action: 'see',
  comp: CmdCmp.SAME_MODIFIER__ONE_TARGET,
  template: 'I.seeElement({{{target}}});'
}, // see + target + not
{
  action: 'see',
  comp: CmdCmp.SAME_MODIFIER__ONE_TARGET,
  modifier: 'not',
  template: 'I.dontSeeElement({{{target}}});'
}, // see + value | number
{
  action: 'see',
  comp: CmdCmp.SAME_MODIFIER__ONE_VALUE_OR_NUMBER,
  template: 'I.see({{{value}}});'
}, // see + not + value | number
{
  action: 'see',
  comp: CmdCmp.SAME_MODIFIER__ONE_VALUE_OR_NUMBER,
  modifier: 'not',
  template: 'I.dontSee({{{value}}});'
}, // select + value | number
{
  action: 'select',
  comp: CmdCmp.ONE_TARGET__ONE_VALUE_OR_NUMBER,
  template: 'I.selectOption({{{target}}}, {{{value}}});'
}, // shake (Appium only)
{
  action: 'shake',
  comp: CmdCmp.SAME_OPTION,
  options: [],
  template: 'I.shakeDevice();'
}, // swipe + down (Appium only)
{
  action: 'swipe',
  comp: CmdCmp.SAME_OPTION__ONE_TARGET__TWO_NUMBERS,
  options: ['down'],
  valuesAsNonArray: true,
  template: 'I.swipeDown({{{target}}}, {{{value}}});'
}, {
  action: 'swipe',
  comp: CmdCmp.SAME_OPTION__ONE_TARGET__ONE_NUMBER,
  options: ['down'],
  template: 'I.swipeDown({{{target}}}, {{{value}}});'
}, {
  action: 'swipe',
  comp: CmdCmp.SAME_OPTION__ONE_TARGET,
  options: ['down'],
  template: 'I.swipeDown({{{target}}});'
}, {
  action: 'swipe',
  comp: CmdCmp.SAME_OPTION__ONE_VALUE__TWO_NUMBERS,
  options: ['down'],
  valuesAsNonArray: true,
  template: 'I.swipeDown({{{value}}});'
}, {
  action: 'swipe',
  comp: CmdCmp.SAME_OPTION__ONE_VALUE__ONE_NUMBER,
  options: ['down'],
  valuesAsNonArray: true,
  template: 'I.swipeDown({{{value}}});'
}, {
  action: 'swipe',
  comp: CmdCmp.SAME_OPTION__ONE_VALUE_OR_NUMBER,
  options: ['down'],
  template: 'I.swipeDown({{{value}}});'
}, // swipe + left (Appium only)
{
  action: 'swipe',
  comp: CmdCmp.SAME_OPTION__ONE_TARGET__TWO_NUMBERS,
  options: ['left'],
  valuesAsNonArray: true,
  template: 'I.swipeLeft({{{target}}}, {{{value}}});'
}, {
  action: 'swipe',
  comp: CmdCmp.SAME_OPTION__ONE_TARGET__ONE_NUMBER,
  options: ['left'],
  template: 'I.swipeLeft({{{target}}}, {{{value}}});'
}, {
  action: 'swipe',
  comp: CmdCmp.SAME_OPTION__ONE_TARGET,
  options: ['left'],
  template: 'I.swipeLeft({{{target}}});'
}, {
  action: 'swipe',
  comp: CmdCmp.SAME_OPTION__ONE_VALUE__TWO_NUMBERS,
  options: ['left'],
  valuesAsNonArray: true,
  template: 'I.swipeLeft({{{value}}});'
}, {
  action: 'swipe',
  comp: CmdCmp.SAME_OPTION__ONE_VALUE__ONE_NUMBER,
  options: ['left'],
  valuesAsNonArray: true,
  template: 'I.swipeLeft({{{value}}});'
}, {
  action: 'swipe',
  comp: CmdCmp.SAME_OPTION__ONE_VALUE_OR_NUMBER,
  options: ['left'],
  template: 'I.swipeLeft({{{value}}});'
}, // swipe + right (Appium only)
{
  action: 'swipe',
  comp: CmdCmp.SAME_OPTION__ONE_TARGET__TWO_NUMBERS,
  options: ['right'],
  valuesAsNonArray: true,
  template: 'I.swipeRight({{{target}}}, {{{value}}});'
}, {
  action: 'swipe',
  comp: CmdCmp.SAME_OPTION__ONE_TARGET__ONE_NUMBER,
  options: ['right'],
  template: 'I.swipeRight({{{target}}}, {{{value}}});'
}, {
  action: 'swipe',
  comp: CmdCmp.SAME_OPTION__ONE_TARGET,
  options: ['right'],
  template: 'I.swipeRight({{{target}}});'
}, {
  action: 'swipe',
  comp: CmdCmp.SAME_OPTION__ONE_VALUE__TWO_NUMBERS,
  options: ['right'],
  valuesAsNonArray: true,
  template: 'I.swipeRight({{{value}}});'
}, {
  action: 'swipe',
  comp: CmdCmp.SAME_OPTION__ONE_VALUE__ONE_NUMBER,
  options: ['right'],
  valuesAsNonArray: true,
  template: 'I.swipeRight({{{value}}});'
}, {
  action: 'swipe',
  comp: CmdCmp.SAME_OPTION__ONE_VALUE_OR_NUMBER,
  options: ['right'],
  template: 'I.swipeRight({{{value}}});'
}, // swipe + up (Appium only)
{
  action: 'swipe',
  comp: CmdCmp.SAME_OPTION__ONE_TARGET__TWO_NUMBERS,
  options: ['up'],
  valuesAsNonArray: true,
  template: 'I.swipeUp({{{target}}}, {{{value}}});'
}, {
  action: 'swipe',
  comp: CmdCmp.SAME_OPTION__ONE_TARGET__ONE_NUMBER,
  options: ['up'],
  template: 'I.swipeUp({{{target}}}, {{{value}}});'
}, {
  action: 'swipe',
  comp: CmdCmp.SAME_OPTION__ONE_TARGET,
  options: ['up'],
  template: 'I.swipeUp({{{target}}});'
}, {
  action: 'swipe',
  comp: CmdCmp.SAME_OPTION__ONE_VALUE__TWO_NUMBERS,
  options: ['up'],
  valuesAsNonArray: true,
  template: 'I.swipeUp({{{value}}});'
}, {
  action: 'swipe',
  comp: CmdCmp.SAME_OPTION__ONE_VALUE__ONE_NUMBER,
  options: ['up'],
  valuesAsNonArray: true,
  template: 'I.swipeUp({{{value}}});'
}, {
  action: 'swipe',
  comp: CmdCmp.SAME_OPTION__ONE_VALUE_OR_NUMBER,
  options: ['up'],
  template: 'I.swipeUp({{{value}}});'
}, // swipe (Appium only)
{
  action: 'swipe',
  comp: CmdCmp.ONE_TARGET__TWO_NUMBERS,
  valuesAsNonArray: true,
  template: 'I.swipe({{{target}}}, {{{value}}});'
}, {
  action: 'swipe',
  comp: CmdCmp.ONE_TARGET__THREE_NUMBERS,
  valuesAsNonArray: true,
  template: 'I.swipe({{{target}}}, {{{value}}});'
}, {
  action: 'swipe',
  comp: CmdCmp.ONE_VALUE__TWO_NUMBERS,
  valuesAsNonArray: true,
  template: 'I.swipe({{{value}}});'
}, {
  action: 'swipe',
  comp: CmdCmp.ONE_VALUE__THREE_NUMBERS,
  valuesAsNonArray: true,
  template: 'I.swipe({{{value}}});'
}, {
  action: 'swipe',
  comp: CmdCmp.TWO_NUMBERS,
  template: 'I.performSwipe({{{value}}});',
  valuesAsNonArray: true
}, // switch + app (same as switch + currentPage)
{
  action: 'switch',
  comp: CmdCmp.SAME_TARGET_TYPE,
  targetTypes: 'app',
  template: 'I.switchTo();'
}, {
  action: 'switch',
  comp: CmdCmp.SAME_OPTION,
  options: ['app'],
  template: 'I.switchTo();'
}, // switch + currentPage
{
  action: 'switch',
  comp: CmdCmp.SAME_TARGET_TYPE,
  targetTypes: 'currentPage',
  template: 'I.switchTo();'
}, {
  action: 'switch',
  comp: CmdCmp.SAME_OPTION,
  options: ['currentPage'],
  template: 'I.switchTo();'
}, // switch + frame
{
  action: 'switch',
  comp: CmdCmp.SAME_TARGET_TYPE,
  targetTypes: 'frame',
  template: 'I.switchTo("iframe");'
}, {
  action: 'switch',
  comp: CmdCmp.SAME_OPTION,
  options: ['frame'],
  template: 'I.switchTo("iframe");'
}, // switch + frame + value
{
  action: 'switch',
  comp: CmdCmp.SAME_TARGET_TYPE__ONE_VALUE,
  targetTypes: 'frame',
  template: 'I.switchTo({{{value}}});'
}, {
  action: 'switch',
  comp: CmdCmp.SAME_OPTION__ONE_VALUE,
  options: ['frame'],
  template: 'I.switchTo({{{value}}});'
}, // switch + frame + target
{
  action: 'switch',
  comp: CmdCmp.SAME_TARGET_TYPE__ONE_TARGET,
  targetTypes: 'frame',
  template: 'I.switchTo({{{target}}});'
}, {
  action: 'switch',
  comp: CmdCmp.SAME_OPTION__ONE_TARGET,
  options: ['frame'],
  template: 'I.switchTo({{{target}}});'
}, {
  action: 'switch',
  comp: CmdCmp.SAME_TARGET_TYPE__ONE_TARGET,
  targetTypes: ['frame', 'frame'],
  template: 'I.switchTo({{{target}}});'
}, {
  action: 'switch',
  comp: CmdCmp.SAME_TARGET_TYPE__MANY_TARGETS,
  targetTypes: ['frame', 'frame'],
  template: 'within({ frame: {{{target}}} }, function() {',
  valuesAsNonArray: false
}, {
  action: 'switch',
  comp: CmdCmp.SAME_OPTION__MANY_TARGETS,
  options: ['inside'],
  template: 'within({ frame: {{{target}}} }, function() {',
  valuesAsNonArray: false
}, // switch + native (Appium only)
{
  action: 'switch',
  comp: CmdCmp.SAME_OPTION__ONE_VALUE,
  options: ['native'],
  template: 'I.switchToNative({{{value}}});'
}, {
  action: 'switch',
  comp: CmdCmp.SAME_OPTION,
  options: ['native'],
  template: 'I.switchToNative();'
}, // switch + web (Appium only)
{
  action: 'switch',
  comp: CmdCmp.SAME_OPTION__ONE_VALUE,
  options: ['web'],
  template: 'I.switchToWeb({{{value}}});'
}, {
  action: 'switch',
  comp: CmdCmp.SAME_OPTION,
  options: ['web'],
  template: 'I.switchToWeb();'
}, // switch + tab + number
{
  action: 'switch',
  comp: CmdCmp.SAME_TARGET_TYPE__ONE_NUMBER,
  targetTypes: 'tab',
  template: 'I.switchToNextTab({{{value}}});'
}, {
  action: 'switch',
  comp: CmdCmp.SAME_OPTION__ONE_NUMBER,
  options: ['tab'],
  template: 'I.switchToNextTab({{{value}}});'
}, // switch + next + tab
{
  action: 'switch',
  comp: CmdCmp.SAME_OPTION__SAME_TARGET_TYPE,
  targetTypes: 'tab',
  options: ['next'],
  template: 'I.switchToNextTab();'
}, {
  action: 'switch',
  comp: CmdCmp.SAME_OPTION,
  options: ['next', 'tab'],
  template: 'I.switchToNextTab();'
}, // switch + previous + tab
{
  action: 'switch',
  comp: CmdCmp.SAME_OPTION__SAME_TARGET_TYPE,
  targetTypes: 'tab',
  options: ['previous'],
  template: 'I.switchToPreviousTab();'
}, {
  action: 'switch',
  comp: CmdCmp.SAME_OPTION,
  options: ['previous', 'tab'],
  template: 'I.switchToPreviousTab();'
}, // tap (Appium only)
{
  action: 'tap',
  comp: CmdCmp.ONE_TARGET,
  template: 'I.tap({{{target}}});'
}, {
  action: 'tap',
  comp: CmdCmp.ONE_VALUE,
  template: 'I.tap({{{value}}});'
}, // uncheck
{
  action: 'uncheck',
  comp: CmdCmp.ONE_VALUE_OR_NUMBER__ONE_TARGET,
  template: 'I.uncheckOption({{{value}}}, {{{target}}});'
}, {
  action: 'uncheck',
  comp: CmdCmp.ONE_TARGET,
  template: 'I.uncheckOption({{{target}}});'
}, {
  action: 'uncheck',
  comp: CmdCmp.TWO_TARGETS,
  template: 'I.uncheckOption({{{target}}});',
  valuesAsNonArray: true
}, {
  action: 'uncheck',
  comp: CmdCmp.ONE_VALUE_OR_NUMBER,
  template: 'I.uncheckOption({{{value}}});'
}, // uninstall (Appium only)
{
  action: 'uninstall',
  comp: CmdCmp.SAME_OPTION__ONE_VALUE,
  options: ['app'],
  template: 'I.removeApp({{{value}}});'
}, {
  action: 'uninstall',
  comp: CmdCmp.ONE_VALUE,
  template: 'I.removeApp({{{value}}});'
}, // wait + url
{
  action: 'wait',
  comp: CmdCmp.SAME_OPTION__SAME_TARGET_TYPE__ONE_VALUE_OR_NUMBER,
  targetTypes: 'url',
  options: ['inside'],
  template: 'I.waitInUrl({{{value}}});'
}, {
  action: 'wait',
  comp: CmdCmp.SAME_OPTION__SAME_TARGET_TYPE__ONE_VALUE_OR_NUMBER__ONE_NUMBER,
  targetTypes: 'url',
  options: ['inside'],
  valuesAsNonArray: true,
  template: 'I.waitInUrl({{{value}}});'
}, {
  action: 'wait',
  comp: CmdCmp.SAME_TARGET_TYPE__ONE_VALUE,
  targetTypes: 'url',
  template: 'I.waitUrlEquals({{{value}}});'
}, {
  action: 'wait',
  comp: CmdCmp.SAME_TARGET_TYPE__ONE_VALUE__ONE_NUMBER,
  targetTypes: 'url',
  valuesAsNonArray: true,
  template: 'I.waitUrlEquals({{{value}}});'
}, {
  action: 'wait',
  comp: CmdCmp.SAME_OPTION__ONE_TARGET__ONE_NUMBER,
  options: ['url'],
  template: 'I.waitUrlEquals({{{target}}}, {{{value}}});'
}, {
  action: 'wait',
  comp: CmdCmp.SAME_OPTION__ONE_TARGET,
  options: ['url'],
  template: 'I.waitUrlEquals({{{target}}});'
}, {
  action: 'wait',
  comp: CmdCmp.SAME_OPTION__ONE_VALUE,
  options: ['url'],
  template: 'I.waitUrlEquals({{{value}}});'
}, {
  action: 'wait',
  comp: CmdCmp.SAME_OPTION__ONE_VALUE__ONE_NUMBER,
  options: ['url'],
  valuesAsNonArray: true,
  template: 'I.waitUrlEquals({{{value}}});'
}, // wait + target + number + visible + elements
{
  action: 'wait',
  comp: CmdCmp.SAME_OPTION__ONE_TARGET__ONE_NUMBER,
  options: ['visible', 'elements'],
  valuesAsNonArray: true,
  template: 'I.waitNumberOfVisibleElements({{{target}}}, {{{value}}});'
}, // wait + visible
{
  action: 'wait',
  comp: CmdCmp.SAME_OPTION__ONE_TARGET__ONE_NUMBER,
  options: ['visible'],
  template: 'I.waitForVisible({{{target}}}, {{{value}}});'
}, {
  action: 'wait',
  comp: CmdCmp.SAME_OPTION__ONE_TARGET,
  options: ['visible'],
  template: 'I.waitForVisible({{{target}}});'
}, {
  action: 'wait',
  comp: CmdCmp.SAME_OPTION__ONE_VALUE_OR_NUMBER__ONE_NUMBER,
  options: ['visible'],
  valuesAsNonArray: true,
  template: 'I.waitForVisible({{{value}}});'
}, {
  action: 'wait',
  comp: CmdCmp.SAME_OPTION__ONE_VALUE_OR_NUMBER,
  options: ['visible'],
  template: 'I.waitForVisible({{{value}}});'
}, // wait + invisible
{
  action: 'wait',
  comp: CmdCmp.SAME_OPTION__ONE_TARGET__ONE_NUMBER,
  options: ['invisible'],
  template: 'I.waitForInvisible({{{target}}}, {{{value}}});'
}, {
  action: 'wait',
  comp: CmdCmp.SAME_OPTION__ONE_TARGET,
  options: ['invisible'],
  template: 'I.waitForInvisible({{{target}}});'
}, {
  action: 'wait',
  comp: CmdCmp.SAME_OPTION__ONE_VALUE_OR_NUMBER__ONE_NUMBER,
  options: ['invisible'],
  valuesAsNonArray: true,
  template: 'I.waitForInvisible({{{value}}});'
}, {
  action: 'wait',
  comp: CmdCmp.SAME_OPTION__ONE_VALUE_OR_NUMBER,
  options: ['invisible'],
  template: 'I.waitForInvisible({{{value}}});'
}, // wait + enabled
{
  action: 'wait',
  comp: CmdCmp.SAME_OPTION__ONE_TARGET__ONE_NUMBER,
  options: ['enabled'],
  template: 'I.waitForEnabled({{{target}}}, {{{value}}});'
}, {
  action: 'wait',
  comp: CmdCmp.SAME_OPTION__ONE_TARGET,
  options: ['enabled'],
  template: 'I.waitForEnabled({{{target}}});'
}, {
  action: 'wait',
  comp: CmdCmp.SAME_OPTION__ONE_VALUE_OR_NUMBER__ONE_NUMBER,
  options: ['enabled'],
  valuesAsNonArray: true,
  template: 'I.waitForEnabled({{{value}}});'
}, {
  action: 'wait',
  comp: CmdCmp.SAME_OPTION__ONE_VALUE_OR_NUMBER,
  options: ['enabled'],
  template: 'I.waitForEnabled({{{value}}});'
}, // wait + hidden
{
  action: 'wait',
  comp: CmdCmp.SAME_OPTION__ONE_TARGET__ONE_NUMBER,
  options: ['hidden'],
  template: 'I.waitToHide({{{target}}}, {{{value}}});'
}, {
  action: 'wait',
  comp: CmdCmp.SAME_OPTION__ONE_TARGET,
  options: ['hidden'],
  template: 'I.waitToHide({{{target}}});'
}, {
  action: 'wait',
  comp: CmdCmp.SAME_OPTION__ONE_VALUE_OR_NUMBER__ONE_NUMBER,
  options: ['hidden'],
  valuesAsNonArray: true,
  template: 'I.waitToHide({{{value}}});'
}, {
  action: 'wait',
  comp: CmdCmp.SAME_OPTION__ONE_VALUE_OR_NUMBER,
  options: ['hidden'],
  template: 'I.waitToHide({{{value}}});'
}, // wait + text
{
  action: 'wait',
  comp: CmdCmp.SAME_TARGET_TYPE__ONE_TARGET__ONE_NUMBER,
  targetTypes: 'text',
  template: 'I.waitForText({{{target}}}, {{{value}}});'
}, {
  action: 'wait',
  comp: CmdCmp.SAME_TARGET_TYPE__ONE_TARGET__ONE_VALUE_OR_NUMBER,
  targetTypes: 'text',
  template: 'I.waitForText({{{value}}}, 1, {{{target}}});'
}, {
  action: 'wait',
  comp: CmdCmp.SAME_TARGET_TYPE__ONE_VALUE_OR_NUMBER__ONE_NUMBER__ONE_TARGET,
  targetTypes: 'text',
  valuesAsNonArray: true,
  template: 'I.waitForText({{{value}}}, {{{target}}});'
}, {
  action: 'wait',
  comp: CmdCmp.SAME_TARGET_TYPE__ONE_TARGET,
  targetTypes: 'text',
  template: 'I.waitForText({{{target}}});'
}, {
  action: 'wait',
  comp: CmdCmp.SAME_TARGET_TYPE__ONE_VALUE_OR_NUMBER__ONE_NUMBER,
  targetTypes: 'text',
  valuesAsNonArray: true,
  template: 'I.waitForText({{{value}}});'
}, {
  action: 'wait',
  comp: CmdCmp.SAME_TARGET_TYPE__ONE_VALUE_OR_NUMBER,
  targetTypes: 'text',
  template: 'I.waitForText({{{value}}});'
}, {
  action: 'wait',
  comp: CmdCmp.SAME_OPTION__ONE_VALUE__ONE_NUMBER__ONE_TARGET,
  options: ['text'],
  valuesAsNonArray: true,
  template: 'I.waitForText({{{value}}}, {{{target}}});'
}, {
  action: 'wait',
  comp: CmdCmp.SAME_OPTION__ONE_TARGET__ONE_NUMBER,
  options: ['text'],
  template: 'I.waitForText({{{target}}}, {{{value}}});'
}, {
  action: 'wait',
  comp: CmdCmp.SAME_OPTION__ONE_TARGET,
  options: ['text'],
  template: 'I.waitForText({{{target}}});'
}, {
  action: 'wait',
  comp: CmdCmp.SAME_OPTION__ONE_VALUE_OR_NUMBER,
  options: ['text'],
  template: 'I.waitForText({{{value}}});'
}, {
  action: 'wait',
  comp: CmdCmp.SAME_OPTION__ONE_VALUE__ONE_NUMBER,
  options: ['text'],
  valuesAsNonArray: true,
  template: 'I.waitForText({{{value}}});'
}, {
  action: 'wait',
  comp: CmdCmp.SAME_OPTION__ONE_VALUE__ONE_NUMBER__ONE_VALUE,
  options: ['text'],
  valuesAsNonArray: true,
  template: 'I.waitForText({{{value}}});'
}, // wait + value
{
  action: 'wait',
  comp: CmdCmp.SAME_OPTION__ONE_TARGET__ONE_VALUE_OR_NUMBER__ONE_NUMBER,
  options: ['value'],
  valuesAsNonArray: true,
  template: 'I.waitForValue({{{target}}}, {{{value}}});'
}, {
  action: 'wait',
  comp: CmdCmp.SAME_OPTION__ONE_TARGET__ONE_VALUE_OR_NUMBER,
  options: ['value'],
  template: 'I.waitForValue({{{target}}}, {{{value}}});'
}, // wait + target
{
  action: 'wait',
  comp: CmdCmp.ONE_TARGET__ONE_NUMBER,
  template: 'I.waitForElement({{{target}}}, {{{value}}});'
}, {
  action: 'wait',
  comp: CmdCmp.ONE_TARGET,
  template: 'I.waitForElement({{{target}}});'
}, {
  action: 'wait',
  comp: CmdCmp.ONE_VALUE,
  template: 'I.waitForElement({{{value}}});'
}, {
  action: 'wait',
  comp: CmdCmp.ONE_VALUE_OR_NUMBER__ONE_NUMBER,
  valuesAsNonArray: true,
  template: 'I.waitForElement({{{value}}});'
}, // wait
{
  action: 'wait',
  comp: CmdCmp.ONE_NUMBER,
  template: 'I.wait({{{value}}});'
}];

/**
 * Creates a test script file path, according to the given specification file and output directory.
 *
 * The corresponding directories under output directory are also created.
 *
 * @param outputDirectory Target directory, e.g. `tests`
 * @param specificationFilePath Specification file, e.g. `path/to/features/sub1/sub2/f1.testcase`
 * @param specificationBaseDirectory Base specification directory, e.g. `path/to/features/`
 */

function makeSourceCodeFilePath(outputDirectory, specificationFilePath, specificationBaseDirectory, fileExtension) {
  const relativeSpecFilePath = path.relative(specificationBaseDirectory, specificationFilePath);
  const correspondingOutputDir = path.resolve(outputDirectory, path.dirname(relativeSpecFilePath));
  const fileName = path.basename(relativeSpecFilePath, '.testcase') + fileExtension;
  const filePath = path.join(correspondingOutputDir, fileName);
  return filePath;
}
function ensureSourceCodeFileDirectory(filePath) {
  fse__namespace.mkdirsSync(path.dirname(filePath));
}
async function saveFile(path, content) {
  const write = util.promisify(fs.writeFile);
  await write(path, content, {
    flag: 'w+'
  });
}

// Adapted from: `is-unicode-supported`
// @see https://github.com/sindresorhus/is-unicode-supported/blob/main/index.js
//

function isUnicodeSupported() {
  if (process.platform !== 'win32') {
    return process.env.TERM !== 'linux'; // Linux console (kernel)
  }

  return Boolean(process.env.CI) || Boolean(process.env.WT_SESSION) || // Windows Terminal
  process.env.ConEmuTask === '{cmd::Cmder}' || // ConEmu and cmder
  process.env.TERM_PROGRAM === 'vscode' || process.env.TERM_PROGRAM === 'Hyper' || process.env.TERM === 'xterm-256color' || process.env.TERM === 'alacritty';
} //
// Adapted from: `log-symbols`
// @see https://github.com/sindresorhus/log-symbols/blob/main/index.js
//


const main = {
  info: colors__default['default'].blue('ℹ'),
  success: colors__default['default'].green('✔'),
  warning: colors__default['default'].yellow('⚠'),
  error: colors__default['default'].red('✖')
};
const fallback = {
  info: colors__default['default'].blue('i'),
  success: colors__default['default'].green('√'),
  warning: colors__default['default'].yellow('‼'),
  error: colors__default['default'].red('×')
};
const logSymbols = isUnicodeSupported() ? main : fallback;
function warn(...args) {
  console.warn(logSymbols.warning, ...args);
}

// exportable
const installationPackages = () => ['@playwright/test']; // exportable


const fileExtension = options => options != null && options.useTypescript ? '.spec.ts' : '.spec.js';

const tsImports = browser => [`import { test, expect } from '@playwright/test';`, `import { ${browser} } from 'playwright';`];

const jsImports = browser => [`const { test, expect } = require('@playwright/test');`, `const { ${browser} } = require('playwright');`];

const importFiles = options => options != null && options.useTypescript ? tsImports(options == null ? void 0 : options.browser) : jsImports(options == null ? void 0 : options.browser); // exportable


const templateContent = options => `
// Generated with ❤ by Concordia Compiler plug-in for Playwright
//
// source: {{{sourceFile}}}
//
// THIS IS A GENERATED FILE - MODIFICATIONS CAN BE LOST !

${importFiles(options).join('\n')}

test.describe("{{feature.name}}", () => {

    const browserRef = ${options == null ? void 0 : options.browser};
    let browser;

    {{#beforeFeature}}
    test.beforeAll( async ({ page }) => { // Before Feature
        browser = await browserRef.launch();
        {{#convertedCommands}}
        {{{.}}}
        {{/convertedCommands}}
    });
    {{/beforeFeature}}
    {{#afterFeature}}

    test.afterAll( async ({ page }) => { // After Feature
        {{#convertedCommands}}
        {{{.}}}
        {{/convertedCommands}}
        await browser.close();
    });
    {{/afterFeature}}
    test.describe("{{scenario}}", () => {
        {{#beforeEachScenario}}

        test.beforeEach( async ({ page }) => { // Before Each Scenario
            {{#convertedCommands}}
            {{{.}}}
            {{/convertedCommands}}
        });
        {{/beforeEachScenario}}
        {{#afterEachScenario}}

        test.afterEach( async ({ page }) => { // After Each Scenario
            {{#convertedCommands}}
            {{{.}}}
            {{/convertedCommands}}
        });
        {{/afterEachScenario}}

        {{#testcases}}
        test("{{name}}", async ({ page }) =>
            {{#convertedCommands}}
            {{{.}}}
            {{/convertedCommands}}
        });

        {{/testcases}}
    });

});`;

var playwrightDef = {
  installationPackages,
  fileExtension,
  templateContent
};

function runnerDef(runner) {
  // if ( 'mocha' === runner ) {
  //     return mochaDef;
  // }
  return playwrightDef;
}

async function generate(abstractTestScripts, options) {
  const runner = runnerDef(); // TODO: read runner name from config

  const runnerOptions = {
    browser: 'chromium',
    useTypescript: false
  }; // TODO: read runner options from config

  const templateStr = runner.templateContent(runnerOptions);
  const fileExtension = runner.fileExtension(runnerOptions);
  const errors = [];
  const mapper = new CommandMapper(COMMANDS);
  let files = [];

  for (let ats of abstractTestScripts || []) {
    const outputFilePath = makeSourceCodeFilePath(options.sourceCodeDir, ats.sourceFile, options.specificationDir, fileExtension);

    try {
      ensureSourceCodeFileDirectory(outputFilePath);
      const sourceCode = generateSourceCode(options.specificationDir, templateStr, mapper, ats);
      await saveFile(outputFilePath, sourceCode);
      files.push(outputFilePath);
    } catch (e) {
      const msg = 'Error generating script for "' + ats.sourceFile + '": ' + e.message;
      errors.push(new Error(msg));
    }
  }

  return {
    generatedFiles: files,
    errors: errors
  };
}

function generateSourceCode(specificationDir, template, mapper, ats) {
  let obj = _extends({}, ats); // clone


  for (let test of obj.testcases || []) {
    test.convertedCommands = [];

    for (let cmd of test.commands || []) {
      const converted = analyzeConverted(specificationDir, mapper, cmd, ats);
      test.convertedCommands.push.apply(test.convertedCommands, converted);
    }
  }

  const events = ['beforeFeature', 'afterFeature', 'beforeEachScenario', 'afterEachScenario'];

  for (let eventStr of events) {
    let event = obj[eventStr];

    if (!event) {
      // Not found in the supported ones
      continue;
    }

    event.convertedCommands = [];

    for (let cmd of event.commands || []) {
      const converted = analyzeConverted(specificationDir, mapper, cmd, ats);
      event.convertedCommands.push.apply(event.convertedCommands, converted);
    }
  }

  return mustache.render(template, obj); // mustache's renderer
}

function analyzeConverted(specificationDir, mapper, cmd, ats) {
  const converted = mapper.map(cmd);

  if (ats && cmd && converted && 0 === converted.length) {
    const filePath = path.relative(specificationDir, ats.sourceFile);
    couldNotConvertCommand(filePath, cmd.location);
    return [mapper.makeCommentWithCommand(cmd)];
  }

  return converted || [];
}

function couldNotConvertCommand(filePath, location) {
  warn('Plug-in could not convert command from', colors__default['default'].yellowBright(filePath), location ? '(' + location.line + ',' + location.column + ')' : '');
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
