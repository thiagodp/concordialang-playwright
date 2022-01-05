var colors = require('ansi-colors');
var mustache = require('mustache');
var path = require('path');
var fs = require('fs');
var constants = require('constants');
var require$$0 = require('stream');
var util = require('util');
var assert = require('assert');
var os = require('os');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var colors__default = /*#__PURE__*/_interopDefaultLegacy(colors);
var path__default = /*#__PURE__*/_interopDefaultLegacy(path);
var fs__default = /*#__PURE__*/_interopDefaultLegacy(fs);
var constants__default = /*#__PURE__*/_interopDefaultLegacy(constants);
var require$$0__default = /*#__PURE__*/_interopDefaultLegacy(require$$0);
var util__default = /*#__PURE__*/_interopDefaultLegacy(util);
var assert__default = /*#__PURE__*/_interopDefaultLegacy(assert);
var os__default = /*#__PURE__*/_interopDefaultLegacy(os);

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
    const dbCmd = cmd;

    if (!!dbCmd.db && cmd.action === 'connect') {
      const firstValue = !!cmd.values ? cmd.values[0] || '' : '';
      const values = {
        value: ['"' + firstValue + '"', JSON.stringify(dbCmd.db)],
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
          const [firstCfgOption] = cfg.options || []; // From CFG, not CMD !

          const [firstValue] = cmd.values || [];

          if (firstCfgOption !== undefined && firstValue !== undefined) {
            valueToRender = `{"${firstCfgOption}": "${firstValue}"}`;
          }

          break;
        }

      case OptionsOptions.FIRST_VALUE_AS_PROPERTY__SECOND_VALUE_AS_VALUE:
        {
          const [firstValue, secondValue] = cmd.values || [];

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
      if (undefined === cmd.values) {
        return false;
      }

      const valuesCount = numberCount + 1;

      if (cmd.values.length !== valuesCount) {
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
          if (!cmd.values || 3 !== valuesCount) {
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

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn) {
  var module = { exports: {} };
	return fn(module, module.exports), module.exports;
}

var fromCallback = function (fn) {
  return Object.defineProperty(function () {
    if (typeof arguments[arguments.length - 1] === 'function') fn.apply(this, arguments);
    else {
      return new Promise((resolve, reject) => {
        arguments[arguments.length] = (err, res) => {
          if (err) return reject(err)
          resolve(res);
        };
        arguments.length++;
        fn.apply(this, arguments);
      })
    }
  }, 'name', { value: fn.name })
};

var fromPromise = function (fn) {
  return Object.defineProperty(function () {
    const cb = arguments[arguments.length - 1];
    if (typeof cb !== 'function') return fn.apply(this, arguments)
    else fn.apply(this, arguments).then(r => cb(null, r), cb);
  }, 'name', { value: fn.name })
};

var universalify = {
	fromCallback: fromCallback,
	fromPromise: fromPromise
};

var origCwd = process.cwd;
var cwd = null;

var platform = process.env.GRACEFUL_FS_PLATFORM || process.platform;

process.cwd = function() {
  if (!cwd)
    cwd = origCwd.call(process);
  return cwd
};
try {
  process.cwd();
} catch (er) {}

// This check is needed until node.js 12 is required
if (typeof process.chdir === 'function') {
  var chdir = process.chdir;
  process.chdir = function (d) {
    cwd = null;
    chdir.call(process, d);
  };
  if (Object.setPrototypeOf) Object.setPrototypeOf(process.chdir, chdir);
}

var polyfills = patch;

function patch (fs) {
  // (re-)implement some things that are known busted or missing.

  // lchmod, broken prior to 0.6.2
  // back-port the fix here.
  if (constants__default["default"].hasOwnProperty('O_SYMLINK') &&
      process.version.match(/^v0\.6\.[0-2]|^v0\.5\./)) {
    patchLchmod(fs);
  }

  // lutimes implementation, or no-op
  if (!fs.lutimes) {
    patchLutimes(fs);
  }

  // https://github.com/isaacs/node-graceful-fs/issues/4
  // Chown should not fail on einval or eperm if non-root.
  // It should not fail on enosys ever, as this just indicates
  // that a fs doesn't support the intended operation.

  fs.chown = chownFix(fs.chown);
  fs.fchown = chownFix(fs.fchown);
  fs.lchown = chownFix(fs.lchown);

  fs.chmod = chmodFix(fs.chmod);
  fs.fchmod = chmodFix(fs.fchmod);
  fs.lchmod = chmodFix(fs.lchmod);

  fs.chownSync = chownFixSync(fs.chownSync);
  fs.fchownSync = chownFixSync(fs.fchownSync);
  fs.lchownSync = chownFixSync(fs.lchownSync);

  fs.chmodSync = chmodFixSync(fs.chmodSync);
  fs.fchmodSync = chmodFixSync(fs.fchmodSync);
  fs.lchmodSync = chmodFixSync(fs.lchmodSync);

  fs.stat = statFix(fs.stat);
  fs.fstat = statFix(fs.fstat);
  fs.lstat = statFix(fs.lstat);

  fs.statSync = statFixSync(fs.statSync);
  fs.fstatSync = statFixSync(fs.fstatSync);
  fs.lstatSync = statFixSync(fs.lstatSync);

  // if lchmod/lchown do not exist, then make them no-ops
  if (!fs.lchmod) {
    fs.lchmod = function (path, mode, cb) {
      if (cb) process.nextTick(cb);
    };
    fs.lchmodSync = function () {};
  }
  if (!fs.lchown) {
    fs.lchown = function (path, uid, gid, cb) {
      if (cb) process.nextTick(cb);
    };
    fs.lchownSync = function () {};
  }

  // on Windows, A/V software can lock the directory, causing this
  // to fail with an EACCES or EPERM if the directory contains newly
  // created files.  Try again on failure, for up to 60 seconds.

  // Set the timeout this long because some Windows Anti-Virus, such as Parity
  // bit9, may lock files for up to a minute, causing npm package install
  // failures. Also, take care to yield the scheduler. Windows scheduling gives
  // CPU to a busy looping process, which can cause the program causing the lock
  // contention to be starved of CPU by node, so the contention doesn't resolve.
  if (platform === "win32") {
    fs.rename = (function (fs$rename) { return function (from, to, cb) {
      var start = Date.now();
      var backoff = 0;
      fs$rename(from, to, function CB (er) {
        if (er
            && (er.code === "EACCES" || er.code === "EPERM")
            && Date.now() - start < 60000) {
          setTimeout(function() {
            fs.stat(to, function (stater, st) {
              if (stater && stater.code === "ENOENT")
                fs$rename(from, to, CB);
              else
                cb(er);
            });
          }, backoff);
          if (backoff < 100)
            backoff += 10;
          return;
        }
        if (cb) cb(er);
      });
    }})(fs.rename);
  }

  // if read() returns EAGAIN, then just try it again.
  fs.read = (function (fs$read) {
    function read (fd, buffer, offset, length, position, callback_) {
      var callback;
      if (callback_ && typeof callback_ === 'function') {
        var eagCounter = 0;
        callback = function (er, _, __) {
          if (er && er.code === 'EAGAIN' && eagCounter < 10) {
            eagCounter ++;
            return fs$read.call(fs, fd, buffer, offset, length, position, callback)
          }
          callback_.apply(this, arguments);
        };
      }
      return fs$read.call(fs, fd, buffer, offset, length, position, callback)
    }

    // This ensures `util.promisify` works as it does for native `fs.read`.
    if (Object.setPrototypeOf) Object.setPrototypeOf(read, fs$read);
    return read
  })(fs.read);

  fs.readSync = (function (fs$readSync) { return function (fd, buffer, offset, length, position) {
    var eagCounter = 0;
    while (true) {
      try {
        return fs$readSync.call(fs, fd, buffer, offset, length, position)
      } catch (er) {
        if (er.code === 'EAGAIN' && eagCounter < 10) {
          eagCounter ++;
          continue
        }
        throw er
      }
    }
  }})(fs.readSync);

  function patchLchmod (fs) {
    fs.lchmod = function (path, mode, callback) {
      fs.open( path
             , constants__default["default"].O_WRONLY | constants__default["default"].O_SYMLINK
             , mode
             , function (err, fd) {
        if (err) {
          if (callback) callback(err);
          return
        }
        // prefer to return the chmod error, if one occurs,
        // but still try to close, and report closing errors if they occur.
        fs.fchmod(fd, mode, function (err) {
          fs.close(fd, function(err2) {
            if (callback) callback(err || err2);
          });
        });
      });
    };

    fs.lchmodSync = function (path, mode) {
      var fd = fs.openSync(path, constants__default["default"].O_WRONLY | constants__default["default"].O_SYMLINK, mode);

      // prefer to return the chmod error, if one occurs,
      // but still try to close, and report closing errors if they occur.
      var threw = true;
      var ret;
      try {
        ret = fs.fchmodSync(fd, mode);
        threw = false;
      } finally {
        if (threw) {
          try {
            fs.closeSync(fd);
          } catch (er) {}
        } else {
          fs.closeSync(fd);
        }
      }
      return ret
    };
  }

  function patchLutimes (fs) {
    if (constants__default["default"].hasOwnProperty("O_SYMLINK")) {
      fs.lutimes = function (path, at, mt, cb) {
        fs.open(path, constants__default["default"].O_SYMLINK, function (er, fd) {
          if (er) {
            if (cb) cb(er);
            return
          }
          fs.futimes(fd, at, mt, function (er) {
            fs.close(fd, function (er2) {
              if (cb) cb(er || er2);
            });
          });
        });
      };

      fs.lutimesSync = function (path, at, mt) {
        var fd = fs.openSync(path, constants__default["default"].O_SYMLINK);
        var ret;
        var threw = true;
        try {
          ret = fs.futimesSync(fd, at, mt);
          threw = false;
        } finally {
          if (threw) {
            try {
              fs.closeSync(fd);
            } catch (er) {}
          } else {
            fs.closeSync(fd);
          }
        }
        return ret
      };

    } else {
      fs.lutimes = function (_a, _b, _c, cb) { if (cb) process.nextTick(cb); };
      fs.lutimesSync = function () {};
    }
  }

  function chmodFix (orig) {
    if (!orig) return orig
    return function (target, mode, cb) {
      return orig.call(fs, target, mode, function (er) {
        if (chownErOk(er)) er = null;
        if (cb) cb.apply(this, arguments);
      })
    }
  }

  function chmodFixSync (orig) {
    if (!orig) return orig
    return function (target, mode) {
      try {
        return orig.call(fs, target, mode)
      } catch (er) {
        if (!chownErOk(er)) throw er
      }
    }
  }


  function chownFix (orig) {
    if (!orig) return orig
    return function (target, uid, gid, cb) {
      return orig.call(fs, target, uid, gid, function (er) {
        if (chownErOk(er)) er = null;
        if (cb) cb.apply(this, arguments);
      })
    }
  }

  function chownFixSync (orig) {
    if (!orig) return orig
    return function (target, uid, gid) {
      try {
        return orig.call(fs, target, uid, gid)
      } catch (er) {
        if (!chownErOk(er)) throw er
      }
    }
  }

  function statFix (orig) {
    if (!orig) return orig
    // Older versions of Node erroneously returned signed integers for
    // uid + gid.
    return function (target, options, cb) {
      if (typeof options === 'function') {
        cb = options;
        options = null;
      }
      function callback (er, stats) {
        if (stats) {
          if (stats.uid < 0) stats.uid += 0x100000000;
          if (stats.gid < 0) stats.gid += 0x100000000;
        }
        if (cb) cb.apply(this, arguments);
      }
      return options ? orig.call(fs, target, options, callback)
        : orig.call(fs, target, callback)
    }
  }

  function statFixSync (orig) {
    if (!orig) return orig
    // Older versions of Node erroneously returned signed integers for
    // uid + gid.
    return function (target, options) {
      var stats = options ? orig.call(fs, target, options)
        : orig.call(fs, target);
      if (stats.uid < 0) stats.uid += 0x100000000;
      if (stats.gid < 0) stats.gid += 0x100000000;
      return stats;
    }
  }

  // ENOSYS means that the fs doesn't support the op. Just ignore
  // that, because it doesn't matter.
  //
  // if there's no getuid, or if getuid() is something other
  // than 0, and the error is EINVAL or EPERM, then just ignore
  // it.
  //
  // This specific case is a silent failure in cp, install, tar,
  // and most other unix tools that manage permissions.
  //
  // When running as root, or if other types of errors are
  // encountered, then it's strict.
  function chownErOk (er) {
    if (!er)
      return true

    if (er.code === "ENOSYS")
      return true

    var nonroot = !process.getuid || process.getuid() !== 0;
    if (nonroot) {
      if (er.code === "EINVAL" || er.code === "EPERM")
        return true
    }

    return false
  }
}

var Stream = require$$0__default["default"].Stream;

var legacyStreams = legacy;

function legacy (fs) {
  return {
    ReadStream: ReadStream,
    WriteStream: WriteStream
  }

  function ReadStream (path, options) {
    if (!(this instanceof ReadStream)) return new ReadStream(path, options);

    Stream.call(this);

    var self = this;

    this.path = path;
    this.fd = null;
    this.readable = true;
    this.paused = false;

    this.flags = 'r';
    this.mode = 438; /*=0666*/
    this.bufferSize = 64 * 1024;

    options = options || {};

    // Mixin options into this
    var keys = Object.keys(options);
    for (var index = 0, length = keys.length; index < length; index++) {
      var key = keys[index];
      this[key] = options[key];
    }

    if (this.encoding) this.setEncoding(this.encoding);

    if (this.start !== undefined) {
      if ('number' !== typeof this.start) {
        throw TypeError('start must be a Number');
      }
      if (this.end === undefined) {
        this.end = Infinity;
      } else if ('number' !== typeof this.end) {
        throw TypeError('end must be a Number');
      }

      if (this.start > this.end) {
        throw new Error('start must be <= end');
      }

      this.pos = this.start;
    }

    if (this.fd !== null) {
      process.nextTick(function() {
        self._read();
      });
      return;
    }

    fs.open(this.path, this.flags, this.mode, function (err, fd) {
      if (err) {
        self.emit('error', err);
        self.readable = false;
        return;
      }

      self.fd = fd;
      self.emit('open', fd);
      self._read();
    });
  }

  function WriteStream (path, options) {
    if (!(this instanceof WriteStream)) return new WriteStream(path, options);

    Stream.call(this);

    this.path = path;
    this.fd = null;
    this.writable = true;

    this.flags = 'w';
    this.encoding = 'binary';
    this.mode = 438; /*=0666*/
    this.bytesWritten = 0;

    options = options || {};

    // Mixin options into this
    var keys = Object.keys(options);
    for (var index = 0, length = keys.length; index < length; index++) {
      var key = keys[index];
      this[key] = options[key];
    }

    if (this.start !== undefined) {
      if ('number' !== typeof this.start) {
        throw TypeError('start must be a Number');
      }
      if (this.start < 0) {
        throw new Error('start must be >= zero');
      }

      this.pos = this.start;
    }

    this.busy = false;
    this._queue = [];

    if (this.fd === null) {
      this._open = fs.open;
      this._queue.push([this._open, this.path, this.flags, this.mode, undefined]);
      this.flush();
    }
  }
}

var clone_1 = clone;

var getPrototypeOf = Object.getPrototypeOf || function (obj) {
  return obj.__proto__
};

function clone (obj) {
  if (obj === null || typeof obj !== 'object')
    return obj

  if (obj instanceof Object)
    var copy = { __proto__: getPrototypeOf(obj) };
  else
    var copy = Object.create(null);

  Object.getOwnPropertyNames(obj).forEach(function (key) {
    Object.defineProperty(copy, key, Object.getOwnPropertyDescriptor(obj, key));
  });

  return copy
}

var gracefulFs = createCommonjsModule(function (module) {
/* istanbul ignore next - node 0.x polyfill */
var gracefulQueue;
var previousSymbol;

/* istanbul ignore else - node 0.x polyfill */
if (typeof Symbol === 'function' && typeof Symbol.for === 'function') {
  gracefulQueue = Symbol.for('graceful-fs.queue');
  // This is used in testing by future versions
  previousSymbol = Symbol.for('graceful-fs.previous');
} else {
  gracefulQueue = '___graceful-fs.queue';
  previousSymbol = '___graceful-fs.previous';
}

function noop () {}

function publishQueue(context, queue) {
  Object.defineProperty(context, gracefulQueue, {
    get: function() {
      return queue
    }
  });
}

var debug = noop;
if (util__default["default"].debuglog)
  debug = util__default["default"].debuglog('gfs4');
else if (/\bgfs4\b/i.test(process.env.NODE_DEBUG || ''))
  debug = function() {
    var m = util__default["default"].format.apply(util__default["default"], arguments);
    m = 'GFS4: ' + m.split(/\n/).join('\nGFS4: ');
    console.error(m);
  };

// Once time initialization
if (!fs__default["default"][gracefulQueue]) {
  // This queue can be shared by multiple loaded instances
  var queue = commonjsGlobal[gracefulQueue] || [];
  publishQueue(fs__default["default"], queue);

  // Patch fs.close/closeSync to shared queue version, because we need
  // to retry() whenever a close happens *anywhere* in the program.
  // This is essential when multiple graceful-fs instances are
  // in play at the same time.
  fs__default["default"].close = (function (fs$close) {
    function close (fd, cb) {
      return fs$close.call(fs__default["default"], fd, function (err) {
        // This function uses the graceful-fs shared queue
        if (!err) {
          resetQueue();
        }

        if (typeof cb === 'function')
          cb.apply(this, arguments);
      })
    }

    Object.defineProperty(close, previousSymbol, {
      value: fs$close
    });
    return close
  })(fs__default["default"].close);

  fs__default["default"].closeSync = (function (fs$closeSync) {
    function closeSync (fd) {
      // This function uses the graceful-fs shared queue
      fs$closeSync.apply(fs__default["default"], arguments);
      resetQueue();
    }

    Object.defineProperty(closeSync, previousSymbol, {
      value: fs$closeSync
    });
    return closeSync
  })(fs__default["default"].closeSync);

  if (/\bgfs4\b/i.test(process.env.NODE_DEBUG || '')) {
    process.on('exit', function() {
      debug(fs__default["default"][gracefulQueue]);
      assert__default["default"].equal(fs__default["default"][gracefulQueue].length, 0);
    });
  }
}

if (!commonjsGlobal[gracefulQueue]) {
  publishQueue(commonjsGlobal, fs__default["default"][gracefulQueue]);
}

module.exports = patch(clone_1(fs__default["default"]));
if (process.env.TEST_GRACEFUL_FS_GLOBAL_PATCH && !fs__default["default"].__patched) {
    module.exports = patch(fs__default["default"]);
    fs__default["default"].__patched = true;
}

function patch (fs) {
  // Everything that references the open() function needs to be in here
  polyfills(fs);
  fs.gracefulify = patch;

  fs.createReadStream = createReadStream;
  fs.createWriteStream = createWriteStream;
  var fs$readFile = fs.readFile;
  fs.readFile = readFile;
  function readFile (path, options, cb) {
    if (typeof options === 'function')
      cb = options, options = null;

    return go$readFile(path, options, cb)

    function go$readFile (path, options, cb, startTime) {
      return fs$readFile(path, options, function (err) {
        if (err && (err.code === 'EMFILE' || err.code === 'ENFILE'))
          enqueue([go$readFile, [path, options, cb], err, startTime || Date.now(), Date.now()]);
        else {
          if (typeof cb === 'function')
            cb.apply(this, arguments);
        }
      })
    }
  }

  var fs$writeFile = fs.writeFile;
  fs.writeFile = writeFile;
  function writeFile (path, data, options, cb) {
    if (typeof options === 'function')
      cb = options, options = null;

    return go$writeFile(path, data, options, cb)

    function go$writeFile (path, data, options, cb, startTime) {
      return fs$writeFile(path, data, options, function (err) {
        if (err && (err.code === 'EMFILE' || err.code === 'ENFILE'))
          enqueue([go$writeFile, [path, data, options, cb], err, startTime || Date.now(), Date.now()]);
        else {
          if (typeof cb === 'function')
            cb.apply(this, arguments);
        }
      })
    }
  }

  var fs$appendFile = fs.appendFile;
  if (fs$appendFile)
    fs.appendFile = appendFile;
  function appendFile (path, data, options, cb) {
    if (typeof options === 'function')
      cb = options, options = null;

    return go$appendFile(path, data, options, cb)

    function go$appendFile (path, data, options, cb, startTime) {
      return fs$appendFile(path, data, options, function (err) {
        if (err && (err.code === 'EMFILE' || err.code === 'ENFILE'))
          enqueue([go$appendFile, [path, data, options, cb], err, startTime || Date.now(), Date.now()]);
        else {
          if (typeof cb === 'function')
            cb.apply(this, arguments);
        }
      })
    }
  }

  var fs$copyFile = fs.copyFile;
  if (fs$copyFile)
    fs.copyFile = copyFile;
  function copyFile (src, dest, flags, cb) {
    if (typeof flags === 'function') {
      cb = flags;
      flags = 0;
    }
    return go$copyFile(src, dest, flags, cb)

    function go$copyFile (src, dest, flags, cb, startTime) {
      return fs$copyFile(src, dest, flags, function (err) {
        if (err && (err.code === 'EMFILE' || err.code === 'ENFILE'))
          enqueue([go$copyFile, [src, dest, flags, cb], err, startTime || Date.now(), Date.now()]);
        else {
          if (typeof cb === 'function')
            cb.apply(this, arguments);
        }
      })
    }
  }

  var fs$readdir = fs.readdir;
  fs.readdir = readdir;
  function readdir (path, options, cb) {
    if (typeof options === 'function')
      cb = options, options = null;

    return go$readdir(path, options, cb)

    function go$readdir (path, options, cb, startTime) {
      return fs$readdir(path, options, function (err, files) {
        if (err && (err.code === 'EMFILE' || err.code === 'ENFILE'))
          enqueue([go$readdir, [path, options, cb], err, startTime || Date.now(), Date.now()]);
        else {
          if (files && files.sort)
            files.sort();

          if (typeof cb === 'function')
            cb.call(this, err, files);
        }
      })
    }
  }

  if (process.version.substr(0, 4) === 'v0.8') {
    var legStreams = legacyStreams(fs);
    ReadStream = legStreams.ReadStream;
    WriteStream = legStreams.WriteStream;
  }

  var fs$ReadStream = fs.ReadStream;
  if (fs$ReadStream) {
    ReadStream.prototype = Object.create(fs$ReadStream.prototype);
    ReadStream.prototype.open = ReadStream$open;
  }

  var fs$WriteStream = fs.WriteStream;
  if (fs$WriteStream) {
    WriteStream.prototype = Object.create(fs$WriteStream.prototype);
    WriteStream.prototype.open = WriteStream$open;
  }

  Object.defineProperty(fs, 'ReadStream', {
    get: function () {
      return ReadStream
    },
    set: function (val) {
      ReadStream = val;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(fs, 'WriteStream', {
    get: function () {
      return WriteStream
    },
    set: function (val) {
      WriteStream = val;
    },
    enumerable: true,
    configurable: true
  });

  // legacy names
  var FileReadStream = ReadStream;
  Object.defineProperty(fs, 'FileReadStream', {
    get: function () {
      return FileReadStream
    },
    set: function (val) {
      FileReadStream = val;
    },
    enumerable: true,
    configurable: true
  });
  var FileWriteStream = WriteStream;
  Object.defineProperty(fs, 'FileWriteStream', {
    get: function () {
      return FileWriteStream
    },
    set: function (val) {
      FileWriteStream = val;
    },
    enumerable: true,
    configurable: true
  });

  function ReadStream (path, options) {
    if (this instanceof ReadStream)
      return fs$ReadStream.apply(this, arguments), this
    else
      return ReadStream.apply(Object.create(ReadStream.prototype), arguments)
  }

  function ReadStream$open () {
    var that = this;
    open(that.path, that.flags, that.mode, function (err, fd) {
      if (err) {
        if (that.autoClose)
          that.destroy();

        that.emit('error', err);
      } else {
        that.fd = fd;
        that.emit('open', fd);
        that.read();
      }
    });
  }

  function WriteStream (path, options) {
    if (this instanceof WriteStream)
      return fs$WriteStream.apply(this, arguments), this
    else
      return WriteStream.apply(Object.create(WriteStream.prototype), arguments)
  }

  function WriteStream$open () {
    var that = this;
    open(that.path, that.flags, that.mode, function (err, fd) {
      if (err) {
        that.destroy();
        that.emit('error', err);
      } else {
        that.fd = fd;
        that.emit('open', fd);
      }
    });
  }

  function createReadStream (path, options) {
    return new fs.ReadStream(path, options)
  }

  function createWriteStream (path, options) {
    return new fs.WriteStream(path, options)
  }

  var fs$open = fs.open;
  fs.open = open;
  function open (path, flags, mode, cb) {
    if (typeof mode === 'function')
      cb = mode, mode = null;

    return go$open(path, flags, mode, cb)

    function go$open (path, flags, mode, cb, startTime) {
      return fs$open(path, flags, mode, function (err, fd) {
        if (err && (err.code === 'EMFILE' || err.code === 'ENFILE'))
          enqueue([go$open, [path, flags, mode, cb], err, startTime || Date.now(), Date.now()]);
        else {
          if (typeof cb === 'function')
            cb.apply(this, arguments);
        }
      })
    }
  }

  return fs
}

function enqueue (elem) {
  debug('ENQUEUE', elem[0].name, elem[1]);
  fs__default["default"][gracefulQueue].push(elem);
  retry();
}

// keep track of the timeout between retry() calls
var retryTimer;

// reset the startTime and lastTime to now
// this resets the start of the 60 second overall timeout as well as the
// delay between attempts so that we'll retry these jobs sooner
function resetQueue () {
  var now = Date.now();
  for (var i = 0; i < fs__default["default"][gracefulQueue].length; ++i) {
    // entries that are only a length of 2 are from an older version, don't
    // bother modifying those since they'll be retried anyway.
    if (fs__default["default"][gracefulQueue][i].length > 2) {
      fs__default["default"][gracefulQueue][i][3] = now; // startTime
      fs__default["default"][gracefulQueue][i][4] = now; // lastTime
    }
  }
  // call retry to make sure we're actively processing the queue
  retry();
}

function retry () {
  // clear the timer and remove it to help prevent unintended concurrency
  clearTimeout(retryTimer);
  retryTimer = undefined;

  if (fs__default["default"][gracefulQueue].length === 0)
    return

  var elem = fs__default["default"][gracefulQueue].shift();
  var fn = elem[0];
  var args = elem[1];
  // these items may be unset if they were added by an older graceful-fs
  var err = elem[2];
  var startTime = elem[3];
  var lastTime = elem[4];

  // if we don't have a startTime we have no way of knowing if we've waited
  // long enough, so go ahead and retry this item now
  if (startTime === undefined) {
    debug('RETRY', fn.name, args);
    fn.apply(null, args);
  } else if (Date.now() - startTime >= 60000) {
    // it's been more than 60 seconds total, bail now
    debug('TIMEOUT', fn.name, args);
    var cb = args.pop();
    if (typeof cb === 'function')
      cb.call(null, err);
  } else {
    // the amount of time between the last attempt and right now
    var sinceAttempt = Date.now() - lastTime;
    // the amount of time between when we first tried, and when we last tried
    // rounded up to at least 1
    var sinceStart = Math.max(lastTime - startTime, 1);
    // backoff. wait longer than the total time we've been retrying, but only
    // up to a maximum of 100ms
    var desiredDelay = Math.min(sinceStart * 1.2, 100);
    // it's been long enough since the last retry, do it again
    if (sinceAttempt >= desiredDelay) {
      debug('RETRY', fn.name, args);
      fn.apply(null, args.concat([startTime]));
    } else {
      // if we can't do this job yet, push it to the end of the queue
      // and let the next iteration check again
      fs__default["default"][gracefulQueue].push(elem);
    }
  }

  // schedule our next run if one isn't already scheduled
  if (retryTimer === undefined) {
    retryTimer = setTimeout(retry, 0);
  }
}
});

var fs_1 = createCommonjsModule(function (module, exports) {
// This is adapted from https://github.com/normalize/mz
// Copyright (c) 2014-2016 Jonathan Ong me@jongleberry.com and Contributors
const u = universalify.fromCallback;


const api = [
  'access',
  'appendFile',
  'chmod',
  'chown',
  'close',
  'copyFile',
  'fchmod',
  'fchown',
  'fdatasync',
  'fstat',
  'fsync',
  'ftruncate',
  'futimes',
  'lchown',
  'lchmod',
  'link',
  'lstat',
  'mkdir',
  'mkdtemp',
  'open',
  'readFile',
  'readdir',
  'readlink',
  'realpath',
  'rename',
  'rmdir',
  'stat',
  'symlink',
  'truncate',
  'unlink',
  'utimes',
  'writeFile'
].filter(key => {
  // Some commands are not available on some systems. Ex:
  // fs.copyFile was added in Node.js v8.5.0
  // fs.mkdtemp was added in Node.js v5.10.0
  // fs.lchown is not available on at least some Linux
  return typeof gracefulFs[key] === 'function'
});

// Export all keys:
Object.keys(gracefulFs).forEach(key => {
  if (key === 'promises') {
    // fs.promises is a getter property that triggers ExperimentalWarning
    // Don't re-export it here, the getter is defined in "lib/index.js"
    return
  }
  exports[key] = gracefulFs[key];
});

// Universalify async methods:
api.forEach(method => {
  exports[method] = u(gracefulFs[method]);
});

// We differ from mz/fs in that we still ship the old, broken, fs.exists()
// since we are a drop-in replacement for the native module
exports.exists = function (filename, callback) {
  if (typeof callback === 'function') {
    return gracefulFs.exists(filename, callback)
  }
  return new Promise(resolve => {
    return gracefulFs.exists(filename, resolve)
  })
};

// fs.read() & fs.write need special treatment due to multiple callback args

exports.read = function (fd, buffer, offset, length, position, callback) {
  if (typeof callback === 'function') {
    return gracefulFs.read(fd, buffer, offset, length, position, callback)
  }
  return new Promise((resolve, reject) => {
    gracefulFs.read(fd, buffer, offset, length, position, (err, bytesRead, buffer) => {
      if (err) return reject(err)
      resolve({ bytesRead, buffer });
    });
  })
};

// Function signature can be
// fs.write(fd, buffer[, offset[, length[, position]]], callback)
// OR
// fs.write(fd, string[, position[, encoding]], callback)
// We need to handle both cases, so we use ...args
exports.write = function (fd, buffer, ...args) {
  if (typeof args[args.length - 1] === 'function') {
    return gracefulFs.write(fd, buffer, ...args)
  }

  return new Promise((resolve, reject) => {
    gracefulFs.write(fd, buffer, ...args, (err, bytesWritten, buffer) => {
      if (err) return reject(err)
      resolve({ bytesWritten, buffer });
    });
  })
};

// fs.realpath.native only available in Node v9.2+
if (typeof gracefulFs.realpath.native === 'function') {
  exports.realpath.native = u(gracefulFs.realpath.native);
}
});

// get drive on windows
function getRootPath (p) {
  p = path__default["default"].normalize(path__default["default"].resolve(p)).split(path__default["default"].sep);
  if (p.length > 0) return p[0]
  return null
}

// http://stackoverflow.com/a/62888/10333 contains more accurate
// TODO: expand to include the rest
const INVALID_PATH_CHARS = /[<>:"|?*]/;

function invalidWin32Path$2 (p) {
  const rp = getRootPath(p);
  p = p.replace(rp, '');
  return INVALID_PATH_CHARS.test(p)
}

var win32 = {
  getRootPath,
  invalidWin32Path: invalidWin32Path$2
};

const invalidWin32Path$1 = win32.invalidWin32Path;

const o777$1 = parseInt('0777', 8);

function mkdirs$2 (p, opts, callback, made) {
  if (typeof opts === 'function') {
    callback = opts;
    opts = {};
  } else if (!opts || typeof opts !== 'object') {
    opts = { mode: opts };
  }

  if (process.platform === 'win32' && invalidWin32Path$1(p)) {
    const errInval = new Error(p + ' contains invalid WIN32 path characters.');
    errInval.code = 'EINVAL';
    return callback(errInval)
  }

  let mode = opts.mode;
  const xfs = opts.fs || gracefulFs;

  if (mode === undefined) {
    mode = o777$1 & (~process.umask());
  }
  if (!made) made = null;

  callback = callback || function () {};
  p = path__default["default"].resolve(p);

  xfs.mkdir(p, mode, er => {
    if (!er) {
      made = made || p;
      return callback(null, made)
    }
    switch (er.code) {
      case 'ENOENT':
        if (path__default["default"].dirname(p) === p) return callback(er)
        mkdirs$2(path__default["default"].dirname(p), opts, (er, made) => {
          if (er) callback(er, made);
          else mkdirs$2(p, opts, callback, made);
        });
        break

      // In the case of any other error, just see if there's a dir
      // there already.  If so, then hooray!  If not, then something
      // is borked.
      default:
        xfs.stat(p, (er2, stat) => {
          // if the stat fails, then that's super weird.
          // let the original error be the failure reason.
          if (er2 || !stat.isDirectory()) callback(er, made);
          else callback(null, made);
        });
        break
    }
  });
}

var mkdirs_1$1 = mkdirs$2;

const invalidWin32Path = win32.invalidWin32Path;

const o777 = parseInt('0777', 8);

function mkdirsSync$1 (p, opts, made) {
  if (!opts || typeof opts !== 'object') {
    opts = { mode: opts };
  }

  let mode = opts.mode;
  const xfs = opts.fs || gracefulFs;

  if (process.platform === 'win32' && invalidWin32Path(p)) {
    const errInval = new Error(p + ' contains invalid WIN32 path characters.');
    errInval.code = 'EINVAL';
    throw errInval
  }

  if (mode === undefined) {
    mode = o777 & (~process.umask());
  }
  if (!made) made = null;

  p = path__default["default"].resolve(p);

  try {
    xfs.mkdirSync(p, mode);
    made = made || p;
  } catch (err0) {
    if (err0.code === 'ENOENT') {
      if (path__default["default"].dirname(p) === p) throw err0
      made = mkdirsSync$1(path__default["default"].dirname(p), opts, made);
      mkdirsSync$1(p, opts, made);
    } else {
      // In the case of any other error, just see if there's a dir there
      // already. If so, then hooray!  If not, then something is borked.
      let stat;
      try {
        stat = xfs.statSync(p);
      } catch (err1) {
        throw err0
      }
      if (!stat.isDirectory()) throw err0
    }
  }

  return made
}

var mkdirsSync_1 = mkdirsSync$1;

const u$b = universalify.fromCallback;
const mkdirs$1 = u$b(mkdirs_1$1);


var mkdirs_1 = {
  mkdirs: mkdirs$1,
  mkdirsSync: mkdirsSync_1,
  // alias
  mkdirp: mkdirs$1,
  mkdirpSync: mkdirsSync_1,
  ensureDir: mkdirs$1,
  ensureDirSync: mkdirsSync_1
};

// HFS, ext{2,3}, FAT do not, Node.js v0.10 does not
function hasMillisResSync () {
  let tmpfile = path__default["default"].join('millis-test-sync' + Date.now().toString() + Math.random().toString().slice(2));
  tmpfile = path__default["default"].join(os__default["default"].tmpdir(), tmpfile);

  // 550 millis past UNIX epoch
  const d = new Date(1435410243862);
  gracefulFs.writeFileSync(tmpfile, 'https://github.com/jprichardson/node-fs-extra/pull/141');
  const fd = gracefulFs.openSync(tmpfile, 'r+');
  gracefulFs.futimesSync(fd, d, d);
  gracefulFs.closeSync(fd);
  return gracefulFs.statSync(tmpfile).mtime > 1435410243000
}

function hasMillisRes (callback) {
  let tmpfile = path__default["default"].join('millis-test' + Date.now().toString() + Math.random().toString().slice(2));
  tmpfile = path__default["default"].join(os__default["default"].tmpdir(), tmpfile);

  // 550 millis past UNIX epoch
  const d = new Date(1435410243862);
  gracefulFs.writeFile(tmpfile, 'https://github.com/jprichardson/node-fs-extra/pull/141', err => {
    if (err) return callback(err)
    gracefulFs.open(tmpfile, 'r+', (err, fd) => {
      if (err) return callback(err)
      gracefulFs.futimes(fd, d, d, err => {
        if (err) return callback(err)
        gracefulFs.close(fd, err => {
          if (err) return callback(err)
          gracefulFs.stat(tmpfile, (err, stats) => {
            if (err) return callback(err)
            callback(null, stats.mtime > 1435410243000);
          });
        });
      });
    });
  });
}

function timeRemoveMillis (timestamp) {
  if (typeof timestamp === 'number') {
    return Math.floor(timestamp / 1000) * 1000
  } else if (timestamp instanceof Date) {
    return new Date(Math.floor(timestamp.getTime() / 1000) * 1000)
  } else {
    throw new Error('fs-extra: timeRemoveMillis() unknown parameter type')
  }
}

function utimesMillis (path, atime, mtime, callback) {
  // if (!HAS_MILLIS_RES) return fs.utimes(path, atime, mtime, callback)
  gracefulFs.open(path, 'r+', (err, fd) => {
    if (err) return callback(err)
    gracefulFs.futimes(fd, atime, mtime, futimesErr => {
      gracefulFs.close(fd, closeErr => {
        if (callback) callback(futimesErr || closeErr);
      });
    });
  });
}

function utimesMillisSync (path, atime, mtime) {
  const fd = gracefulFs.openSync(path, 'r+');
  gracefulFs.futimesSync(fd, atime, mtime);
  return gracefulFs.closeSync(fd)
}

var utimes$1 = {
  hasMillisRes,
  hasMillisResSync,
  timeRemoveMillis,
  utimesMillis,
  utimesMillisSync
};

const NODE_VERSION_MAJOR_WITH_BIGINT = 10;
const NODE_VERSION_MINOR_WITH_BIGINT = 5;
const NODE_VERSION_PATCH_WITH_BIGINT = 0;
const nodeVersion = process.versions.node.split('.');
const nodeVersionMajor = Number.parseInt(nodeVersion[0], 10);
const nodeVersionMinor = Number.parseInt(nodeVersion[1], 10);
const nodeVersionPatch = Number.parseInt(nodeVersion[2], 10);

function nodeSupportsBigInt () {
  if (nodeVersionMajor > NODE_VERSION_MAJOR_WITH_BIGINT) {
    return true
  } else if (nodeVersionMajor === NODE_VERSION_MAJOR_WITH_BIGINT) {
    if (nodeVersionMinor > NODE_VERSION_MINOR_WITH_BIGINT) {
      return true
    } else if (nodeVersionMinor === NODE_VERSION_MINOR_WITH_BIGINT) {
      if (nodeVersionPatch >= NODE_VERSION_PATCH_WITH_BIGINT) {
        return true
      }
    }
  }
  return false
}

function getStats$2 (src, dest, cb) {
  if (nodeSupportsBigInt()) {
    gracefulFs.stat(src, { bigint: true }, (err, srcStat) => {
      if (err) return cb(err)
      gracefulFs.stat(dest, { bigint: true }, (err, destStat) => {
        if (err) {
          if (err.code === 'ENOENT') return cb(null, { srcStat, destStat: null })
          return cb(err)
        }
        return cb(null, { srcStat, destStat })
      });
    });
  } else {
    gracefulFs.stat(src, (err, srcStat) => {
      if (err) return cb(err)
      gracefulFs.stat(dest, (err, destStat) => {
        if (err) {
          if (err.code === 'ENOENT') return cb(null, { srcStat, destStat: null })
          return cb(err)
        }
        return cb(null, { srcStat, destStat })
      });
    });
  }
}

function getStatsSync (src, dest) {
  let srcStat, destStat;
  if (nodeSupportsBigInt()) {
    srcStat = gracefulFs.statSync(src, { bigint: true });
  } else {
    srcStat = gracefulFs.statSync(src);
  }
  try {
    if (nodeSupportsBigInt()) {
      destStat = gracefulFs.statSync(dest, { bigint: true });
    } else {
      destStat = gracefulFs.statSync(dest);
    }
  } catch (err) {
    if (err.code === 'ENOENT') return { srcStat, destStat: null }
    throw err
  }
  return { srcStat, destStat }
}

function checkPaths (src, dest, funcName, cb) {
  getStats$2(src, dest, (err, stats) => {
    if (err) return cb(err)
    const { srcStat, destStat } = stats;
    if (destStat && destStat.ino && destStat.dev && destStat.ino === srcStat.ino && destStat.dev === srcStat.dev) {
      return cb(new Error('Source and destination must not be the same.'))
    }
    if (srcStat.isDirectory() && isSrcSubdir(src, dest)) {
      return cb(new Error(errMsg(src, dest, funcName)))
    }
    return cb(null, { srcStat, destStat })
  });
}

function checkPathsSync (src, dest, funcName) {
  const { srcStat, destStat } = getStatsSync(src, dest);
  if (destStat && destStat.ino && destStat.dev && destStat.ino === srcStat.ino && destStat.dev === srcStat.dev) {
    throw new Error('Source and destination must not be the same.')
  }
  if (srcStat.isDirectory() && isSrcSubdir(src, dest)) {
    throw new Error(errMsg(src, dest, funcName))
  }
  return { srcStat, destStat }
}

// recursively check if dest parent is a subdirectory of src.
// It works for all file types including symlinks since it
// checks the src and dest inodes. It starts from the deepest
// parent and stops once it reaches the src parent or the root path.
function checkParentPaths (src, srcStat, dest, funcName, cb) {
  const srcParent = path__default["default"].resolve(path__default["default"].dirname(src));
  const destParent = path__default["default"].resolve(path__default["default"].dirname(dest));
  if (destParent === srcParent || destParent === path__default["default"].parse(destParent).root) return cb()
  if (nodeSupportsBigInt()) {
    gracefulFs.stat(destParent, { bigint: true }, (err, destStat) => {
      if (err) {
        if (err.code === 'ENOENT') return cb()
        return cb(err)
      }
      if (destStat.ino && destStat.dev && destStat.ino === srcStat.ino && destStat.dev === srcStat.dev) {
        return cb(new Error(errMsg(src, dest, funcName)))
      }
      return checkParentPaths(src, srcStat, destParent, funcName, cb)
    });
  } else {
    gracefulFs.stat(destParent, (err, destStat) => {
      if (err) {
        if (err.code === 'ENOENT') return cb()
        return cb(err)
      }
      if (destStat.ino && destStat.dev && destStat.ino === srcStat.ino && destStat.dev === srcStat.dev) {
        return cb(new Error(errMsg(src, dest, funcName)))
      }
      return checkParentPaths(src, srcStat, destParent, funcName, cb)
    });
  }
}

function checkParentPathsSync (src, srcStat, dest, funcName) {
  const srcParent = path__default["default"].resolve(path__default["default"].dirname(src));
  const destParent = path__default["default"].resolve(path__default["default"].dirname(dest));
  if (destParent === srcParent || destParent === path__default["default"].parse(destParent).root) return
  let destStat;
  try {
    if (nodeSupportsBigInt()) {
      destStat = gracefulFs.statSync(destParent, { bigint: true });
    } else {
      destStat = gracefulFs.statSync(destParent);
    }
  } catch (err) {
    if (err.code === 'ENOENT') return
    throw err
  }
  if (destStat.ino && destStat.dev && destStat.ino === srcStat.ino && destStat.dev === srcStat.dev) {
    throw new Error(errMsg(src, dest, funcName))
  }
  return checkParentPathsSync(src, srcStat, destParent, funcName)
}

// return true if dest is a subdir of src, otherwise false.
// It only checks the path strings.
function isSrcSubdir (src, dest) {
  const srcArr = path__default["default"].resolve(src).split(path__default["default"].sep).filter(i => i);
  const destArr = path__default["default"].resolve(dest).split(path__default["default"].sep).filter(i => i);
  return srcArr.reduce((acc, cur, i) => acc && destArr[i] === cur, true)
}

function errMsg (src, dest, funcName) {
  return `Cannot ${funcName} '${src}' to a subdirectory of itself, '${dest}'.`
}

var stat = {
  checkPaths,
  checkPathsSync,
  checkParentPaths,
  checkParentPathsSync,
  isSrcSubdir
};

/* eslint-disable node/no-deprecated-api */
var buffer = function (size) {
  if (typeof Buffer.allocUnsafe === 'function') {
    try {
      return Buffer.allocUnsafe(size)
    } catch (e) {
      return new Buffer(size)
    }
  }
  return new Buffer(size)
};

const mkdirpSync$1 = mkdirs_1.mkdirsSync;
const utimesSync = utimes$1.utimesMillisSync;


function copySync$2 (src, dest, opts) {
  if (typeof opts === 'function') {
    opts = { filter: opts };
  }

  opts = opts || {};
  opts.clobber = 'clobber' in opts ? !!opts.clobber : true; // default to true for now
  opts.overwrite = 'overwrite' in opts ? !!opts.overwrite : opts.clobber; // overwrite falls back to clobber

  // Warn about using preserveTimestamps on 32-bit node
  if (opts.preserveTimestamps && process.arch === 'ia32') {
    console.warn(`fs-extra: Using the preserveTimestamps option in 32-bit node is not recommended;\n
    see https://github.com/jprichardson/node-fs-extra/issues/269`);
  }

  const { srcStat, destStat } = stat.checkPathsSync(src, dest, 'copy');
  stat.checkParentPathsSync(src, srcStat, dest, 'copy');
  return handleFilterAndCopy(destStat, src, dest, opts)
}

function handleFilterAndCopy (destStat, src, dest, opts) {
  if (opts.filter && !opts.filter(src, dest)) return
  const destParent = path__default["default"].dirname(dest);
  if (!gracefulFs.existsSync(destParent)) mkdirpSync$1(destParent);
  return startCopy$1(destStat, src, dest, opts)
}

function startCopy$1 (destStat, src, dest, opts) {
  if (opts.filter && !opts.filter(src, dest)) return
  return getStats$1(destStat, src, dest, opts)
}

function getStats$1 (destStat, src, dest, opts) {
  const statSync = opts.dereference ? gracefulFs.statSync : gracefulFs.lstatSync;
  const srcStat = statSync(src);

  if (srcStat.isDirectory()) return onDir$1(srcStat, destStat, src, dest, opts)
  else if (srcStat.isFile() ||
           srcStat.isCharacterDevice() ||
           srcStat.isBlockDevice()) return onFile$1(srcStat, destStat, src, dest, opts)
  else if (srcStat.isSymbolicLink()) return onLink$1(destStat, src, dest, opts)
}

function onFile$1 (srcStat, destStat, src, dest, opts) {
  if (!destStat) return copyFile$1(srcStat, src, dest, opts)
  return mayCopyFile$1(srcStat, src, dest, opts)
}

function mayCopyFile$1 (srcStat, src, dest, opts) {
  if (opts.overwrite) {
    gracefulFs.unlinkSync(dest);
    return copyFile$1(srcStat, src, dest, opts)
  } else if (opts.errorOnExist) {
    throw new Error(`'${dest}' already exists`)
  }
}

function copyFile$1 (srcStat, src, dest, opts) {
  if (typeof gracefulFs.copyFileSync === 'function') {
    gracefulFs.copyFileSync(src, dest);
    gracefulFs.chmodSync(dest, srcStat.mode);
    if (opts.preserveTimestamps) {
      return utimesSync(dest, srcStat.atime, srcStat.mtime)
    }
    return
  }
  return copyFileFallback$1(srcStat, src, dest, opts)
}

function copyFileFallback$1 (srcStat, src, dest, opts) {
  const BUF_LENGTH = 64 * 1024;
  const _buff = buffer(BUF_LENGTH);

  const fdr = gracefulFs.openSync(src, 'r');
  const fdw = gracefulFs.openSync(dest, 'w', srcStat.mode);
  let pos = 0;

  while (pos < srcStat.size) {
    const bytesRead = gracefulFs.readSync(fdr, _buff, 0, BUF_LENGTH, pos);
    gracefulFs.writeSync(fdw, _buff, 0, bytesRead);
    pos += bytesRead;
  }

  if (opts.preserveTimestamps) gracefulFs.futimesSync(fdw, srcStat.atime, srcStat.mtime);

  gracefulFs.closeSync(fdr);
  gracefulFs.closeSync(fdw);
}

function onDir$1 (srcStat, destStat, src, dest, opts) {
  if (!destStat) return mkDirAndCopy$1(srcStat, src, dest, opts)
  if (destStat && !destStat.isDirectory()) {
    throw new Error(`Cannot overwrite non-directory '${dest}' with directory '${src}'.`)
  }
  return copyDir$1(src, dest, opts)
}

function mkDirAndCopy$1 (srcStat, src, dest, opts) {
  gracefulFs.mkdirSync(dest);
  copyDir$1(src, dest, opts);
  return gracefulFs.chmodSync(dest, srcStat.mode)
}

function copyDir$1 (src, dest, opts) {
  gracefulFs.readdirSync(src).forEach(item => copyDirItem$1(item, src, dest, opts));
}

function copyDirItem$1 (item, src, dest, opts) {
  const srcItem = path__default["default"].join(src, item);
  const destItem = path__default["default"].join(dest, item);
  const { destStat } = stat.checkPathsSync(srcItem, destItem, 'copy');
  return startCopy$1(destStat, srcItem, destItem, opts)
}

function onLink$1 (destStat, src, dest, opts) {
  let resolvedSrc = gracefulFs.readlinkSync(src);
  if (opts.dereference) {
    resolvedSrc = path__default["default"].resolve(process.cwd(), resolvedSrc);
  }

  if (!destStat) {
    return gracefulFs.symlinkSync(resolvedSrc, dest)
  } else {
    let resolvedDest;
    try {
      resolvedDest = gracefulFs.readlinkSync(dest);
    } catch (err) {
      // dest exists and is a regular file or directory,
      // Windows may throw UNKNOWN error. If dest already exists,
      // fs throws error anyway, so no need to guard against it here.
      if (err.code === 'EINVAL' || err.code === 'UNKNOWN') return gracefulFs.symlinkSync(resolvedSrc, dest)
      throw err
    }
    if (opts.dereference) {
      resolvedDest = path__default["default"].resolve(process.cwd(), resolvedDest);
    }
    if (stat.isSrcSubdir(resolvedSrc, resolvedDest)) {
      throw new Error(`Cannot copy '${resolvedSrc}' to a subdirectory of itself, '${resolvedDest}'.`)
    }

    // prevent copy if src is a subdir of dest since unlinking
    // dest in this case would result in removing src contents
    // and therefore a broken symlink would be created.
    if (gracefulFs.statSync(dest).isDirectory() && stat.isSrcSubdir(resolvedDest, resolvedSrc)) {
      throw new Error(`Cannot overwrite '${resolvedDest}' with '${resolvedSrc}'.`)
    }
    return copyLink$1(resolvedSrc, dest)
  }
}

function copyLink$1 (resolvedSrc, dest) {
  gracefulFs.unlinkSync(dest);
  return gracefulFs.symlinkSync(resolvedSrc, dest)
}

var copySync_1 = copySync$2;

var copySync$1 = {
  copySync: copySync_1
};

const u$a = universalify.fromPromise;


function pathExists$8 (path) {
  return fs_1.access(path).then(() => true).catch(() => false)
}

var pathExists_1 = {
  pathExists: u$a(pathExists$8),
  pathExistsSync: fs_1.existsSync
};

const mkdirp$1 = mkdirs_1.mkdirs;
const pathExists$7 = pathExists_1.pathExists;
const utimes = utimes$1.utimesMillis;


function copy$2 (src, dest, opts, cb) {
  if (typeof opts === 'function' && !cb) {
    cb = opts;
    opts = {};
  } else if (typeof opts === 'function') {
    opts = { filter: opts };
  }

  cb = cb || function () {};
  opts = opts || {};

  opts.clobber = 'clobber' in opts ? !!opts.clobber : true; // default to true for now
  opts.overwrite = 'overwrite' in opts ? !!opts.overwrite : opts.clobber; // overwrite falls back to clobber

  // Warn about using preserveTimestamps on 32-bit node
  if (opts.preserveTimestamps && process.arch === 'ia32') {
    console.warn(`fs-extra: Using the preserveTimestamps option in 32-bit node is not recommended;\n
    see https://github.com/jprichardson/node-fs-extra/issues/269`);
  }

  stat.checkPaths(src, dest, 'copy', (err, stats) => {
    if (err) return cb(err)
    const { srcStat, destStat } = stats;
    stat.checkParentPaths(src, srcStat, dest, 'copy', err => {
      if (err) return cb(err)
      if (opts.filter) return handleFilter(checkParentDir, destStat, src, dest, opts, cb)
      return checkParentDir(destStat, src, dest, opts, cb)
    });
  });
}

function checkParentDir (destStat, src, dest, opts, cb) {
  const destParent = path__default["default"].dirname(dest);
  pathExists$7(destParent, (err, dirExists) => {
    if (err) return cb(err)
    if (dirExists) return startCopy(destStat, src, dest, opts, cb)
    mkdirp$1(destParent, err => {
      if (err) return cb(err)
      return startCopy(destStat, src, dest, opts, cb)
    });
  });
}

function handleFilter (onInclude, destStat, src, dest, opts, cb) {
  Promise.resolve(opts.filter(src, dest)).then(include => {
    if (include) return onInclude(destStat, src, dest, opts, cb)
    return cb()
  }, error => cb(error));
}

function startCopy (destStat, src, dest, opts, cb) {
  if (opts.filter) return handleFilter(getStats, destStat, src, dest, opts, cb)
  return getStats(destStat, src, dest, opts, cb)
}

function getStats (destStat, src, dest, opts, cb) {
  const stat = opts.dereference ? gracefulFs.stat : gracefulFs.lstat;
  stat(src, (err, srcStat) => {
    if (err) return cb(err)

    if (srcStat.isDirectory()) return onDir(srcStat, destStat, src, dest, opts, cb)
    else if (srcStat.isFile() ||
             srcStat.isCharacterDevice() ||
             srcStat.isBlockDevice()) return onFile(srcStat, destStat, src, dest, opts, cb)
    else if (srcStat.isSymbolicLink()) return onLink(destStat, src, dest, opts, cb)
  });
}

function onFile (srcStat, destStat, src, dest, opts, cb) {
  if (!destStat) return copyFile(srcStat, src, dest, opts, cb)
  return mayCopyFile(srcStat, src, dest, opts, cb)
}

function mayCopyFile (srcStat, src, dest, opts, cb) {
  if (opts.overwrite) {
    gracefulFs.unlink(dest, err => {
      if (err) return cb(err)
      return copyFile(srcStat, src, dest, opts, cb)
    });
  } else if (opts.errorOnExist) {
    return cb(new Error(`'${dest}' already exists`))
  } else return cb()
}

function copyFile (srcStat, src, dest, opts, cb) {
  if (typeof gracefulFs.copyFile === 'function') {
    return gracefulFs.copyFile(src, dest, err => {
      if (err) return cb(err)
      return setDestModeAndTimestamps(srcStat, dest, opts, cb)
    })
  }
  return copyFileFallback(srcStat, src, dest, opts, cb)
}

function copyFileFallback (srcStat, src, dest, opts, cb) {
  const rs = gracefulFs.createReadStream(src);
  rs.on('error', err => cb(err)).once('open', () => {
    const ws = gracefulFs.createWriteStream(dest, { mode: srcStat.mode });
    ws.on('error', err => cb(err))
      .on('open', () => rs.pipe(ws))
      .once('close', () => setDestModeAndTimestamps(srcStat, dest, opts, cb));
  });
}

function setDestModeAndTimestamps (srcStat, dest, opts, cb) {
  gracefulFs.chmod(dest, srcStat.mode, err => {
    if (err) return cb(err)
    if (opts.preserveTimestamps) {
      return utimes(dest, srcStat.atime, srcStat.mtime, cb)
    }
    return cb()
  });
}

function onDir (srcStat, destStat, src, dest, opts, cb) {
  if (!destStat) return mkDirAndCopy(srcStat, src, dest, opts, cb)
  if (destStat && !destStat.isDirectory()) {
    return cb(new Error(`Cannot overwrite non-directory '${dest}' with directory '${src}'.`))
  }
  return copyDir(src, dest, opts, cb)
}

function mkDirAndCopy (srcStat, src, dest, opts, cb) {
  gracefulFs.mkdir(dest, err => {
    if (err) return cb(err)
    copyDir(src, dest, opts, err => {
      if (err) return cb(err)
      return gracefulFs.chmod(dest, srcStat.mode, cb)
    });
  });
}

function copyDir (src, dest, opts, cb) {
  gracefulFs.readdir(src, (err, items) => {
    if (err) return cb(err)
    return copyDirItems(items, src, dest, opts, cb)
  });
}

function copyDirItems (items, src, dest, opts, cb) {
  const item = items.pop();
  if (!item) return cb()
  return copyDirItem(items, item, src, dest, opts, cb)
}

function copyDirItem (items, item, src, dest, opts, cb) {
  const srcItem = path__default["default"].join(src, item);
  const destItem = path__default["default"].join(dest, item);
  stat.checkPaths(srcItem, destItem, 'copy', (err, stats) => {
    if (err) return cb(err)
    const { destStat } = stats;
    startCopy(destStat, srcItem, destItem, opts, err => {
      if (err) return cb(err)
      return copyDirItems(items, src, dest, opts, cb)
    });
  });
}

function onLink (destStat, src, dest, opts, cb) {
  gracefulFs.readlink(src, (err, resolvedSrc) => {
    if (err) return cb(err)
    if (opts.dereference) {
      resolvedSrc = path__default["default"].resolve(process.cwd(), resolvedSrc);
    }

    if (!destStat) {
      return gracefulFs.symlink(resolvedSrc, dest, cb)
    } else {
      gracefulFs.readlink(dest, (err, resolvedDest) => {
        if (err) {
          // dest exists and is a regular file or directory,
          // Windows may throw UNKNOWN error. If dest already exists,
          // fs throws error anyway, so no need to guard against it here.
          if (err.code === 'EINVAL' || err.code === 'UNKNOWN') return gracefulFs.symlink(resolvedSrc, dest, cb)
          return cb(err)
        }
        if (opts.dereference) {
          resolvedDest = path__default["default"].resolve(process.cwd(), resolvedDest);
        }
        if (stat.isSrcSubdir(resolvedSrc, resolvedDest)) {
          return cb(new Error(`Cannot copy '${resolvedSrc}' to a subdirectory of itself, '${resolvedDest}'.`))
        }

        // do not copy if src is a subdir of dest since unlinking
        // dest in this case would result in removing src contents
        // and therefore a broken symlink would be created.
        if (destStat.isDirectory() && stat.isSrcSubdir(resolvedDest, resolvedSrc)) {
          return cb(new Error(`Cannot overwrite '${resolvedDest}' with '${resolvedSrc}'.`))
        }
        return copyLink(resolvedSrc, dest, cb)
      });
    }
  });
}

function copyLink (resolvedSrc, dest, cb) {
  gracefulFs.unlink(dest, err => {
    if (err) return cb(err)
    return gracefulFs.symlink(resolvedSrc, dest, cb)
  });
}

var copy_1 = copy$2;

const u$9 = universalify.fromCallback;
var copy$1 = {
  copy: u$9(copy_1)
};

const isWindows = (process.platform === 'win32');

function defaults (options) {
  const methods = [
    'unlink',
    'chmod',
    'stat',
    'lstat',
    'rmdir',
    'readdir'
  ];
  methods.forEach(m => {
    options[m] = options[m] || gracefulFs[m];
    m = m + 'Sync';
    options[m] = options[m] || gracefulFs[m];
  });

  options.maxBusyTries = options.maxBusyTries || 3;
}

function rimraf (p, options, cb) {
  let busyTries = 0;

  if (typeof options === 'function') {
    cb = options;
    options = {};
  }

  assert__default["default"](p, 'rimraf: missing path');
  assert__default["default"].strictEqual(typeof p, 'string', 'rimraf: path should be a string');
  assert__default["default"].strictEqual(typeof cb, 'function', 'rimraf: callback function required');
  assert__default["default"](options, 'rimraf: invalid options argument provided');
  assert__default["default"].strictEqual(typeof options, 'object', 'rimraf: options should be object');

  defaults(options);

  rimraf_(p, options, function CB (er) {
    if (er) {
      if ((er.code === 'EBUSY' || er.code === 'ENOTEMPTY' || er.code === 'EPERM') &&
          busyTries < options.maxBusyTries) {
        busyTries++;
        const time = busyTries * 100;
        // try again, with the same exact callback as this one.
        return setTimeout(() => rimraf_(p, options, CB), time)
      }

      // already gone
      if (er.code === 'ENOENT') er = null;
    }

    cb(er);
  });
}

// Two possible strategies.
// 1. Assume it's a file.  unlink it, then do the dir stuff on EPERM or EISDIR
// 2. Assume it's a directory.  readdir, then do the file stuff on ENOTDIR
//
// Both result in an extra syscall when you guess wrong.  However, there
// are likely far more normal files in the world than directories.  This
// is based on the assumption that a the average number of files per
// directory is >= 1.
//
// If anyone ever complains about this, then I guess the strategy could
// be made configurable somehow.  But until then, YAGNI.
function rimraf_ (p, options, cb) {
  assert__default["default"](p);
  assert__default["default"](options);
  assert__default["default"](typeof cb === 'function');

  // sunos lets the root user unlink directories, which is... weird.
  // so we have to lstat here and make sure it's not a dir.
  options.lstat(p, (er, st) => {
    if (er && er.code === 'ENOENT') {
      return cb(null)
    }

    // Windows can EPERM on stat.  Life is suffering.
    if (er && er.code === 'EPERM' && isWindows) {
      return fixWinEPERM(p, options, er, cb)
    }

    if (st && st.isDirectory()) {
      return rmdir(p, options, er, cb)
    }

    options.unlink(p, er => {
      if (er) {
        if (er.code === 'ENOENT') {
          return cb(null)
        }
        if (er.code === 'EPERM') {
          return (isWindows)
            ? fixWinEPERM(p, options, er, cb)
            : rmdir(p, options, er, cb)
        }
        if (er.code === 'EISDIR') {
          return rmdir(p, options, er, cb)
        }
      }
      return cb(er)
    });
  });
}

function fixWinEPERM (p, options, er, cb) {
  assert__default["default"](p);
  assert__default["default"](options);
  assert__default["default"](typeof cb === 'function');
  if (er) {
    assert__default["default"](er instanceof Error);
  }

  options.chmod(p, 0o666, er2 => {
    if (er2) {
      cb(er2.code === 'ENOENT' ? null : er);
    } else {
      options.stat(p, (er3, stats) => {
        if (er3) {
          cb(er3.code === 'ENOENT' ? null : er);
        } else if (stats.isDirectory()) {
          rmdir(p, options, er, cb);
        } else {
          options.unlink(p, cb);
        }
      });
    }
  });
}

function fixWinEPERMSync (p, options, er) {
  let stats;

  assert__default["default"](p);
  assert__default["default"](options);
  if (er) {
    assert__default["default"](er instanceof Error);
  }

  try {
    options.chmodSync(p, 0o666);
  } catch (er2) {
    if (er2.code === 'ENOENT') {
      return
    } else {
      throw er
    }
  }

  try {
    stats = options.statSync(p);
  } catch (er3) {
    if (er3.code === 'ENOENT') {
      return
    } else {
      throw er
    }
  }

  if (stats.isDirectory()) {
    rmdirSync(p, options, er);
  } else {
    options.unlinkSync(p);
  }
}

function rmdir (p, options, originalEr, cb) {
  assert__default["default"](p);
  assert__default["default"](options);
  if (originalEr) {
    assert__default["default"](originalEr instanceof Error);
  }
  assert__default["default"](typeof cb === 'function');

  // try to rmdir first, and only readdir on ENOTEMPTY or EEXIST (SunOS)
  // if we guessed wrong, and it's not a directory, then
  // raise the original error.
  options.rmdir(p, er => {
    if (er && (er.code === 'ENOTEMPTY' || er.code === 'EEXIST' || er.code === 'EPERM')) {
      rmkids(p, options, cb);
    } else if (er && er.code === 'ENOTDIR') {
      cb(originalEr);
    } else {
      cb(er);
    }
  });
}

function rmkids (p, options, cb) {
  assert__default["default"](p);
  assert__default["default"](options);
  assert__default["default"](typeof cb === 'function');

  options.readdir(p, (er, files) => {
    if (er) return cb(er)

    let n = files.length;
    let errState;

    if (n === 0) return options.rmdir(p, cb)

    files.forEach(f => {
      rimraf(path__default["default"].join(p, f), options, er => {
        if (errState) {
          return
        }
        if (er) return cb(errState = er)
        if (--n === 0) {
          options.rmdir(p, cb);
        }
      });
    });
  });
}

// this looks simpler, and is strictly *faster*, but will
// tie up the JavaScript thread and fail on excessively
// deep directory trees.
function rimrafSync (p, options) {
  let st;

  options = options || {};
  defaults(options);

  assert__default["default"](p, 'rimraf: missing path');
  assert__default["default"].strictEqual(typeof p, 'string', 'rimraf: path should be a string');
  assert__default["default"](options, 'rimraf: missing options');
  assert__default["default"].strictEqual(typeof options, 'object', 'rimraf: options should be object');

  try {
    st = options.lstatSync(p);
  } catch (er) {
    if (er.code === 'ENOENT') {
      return
    }

    // Windows can EPERM on stat.  Life is suffering.
    if (er.code === 'EPERM' && isWindows) {
      fixWinEPERMSync(p, options, er);
    }
  }

  try {
    // sunos lets the root user unlink directories, which is... weird.
    if (st && st.isDirectory()) {
      rmdirSync(p, options, null);
    } else {
      options.unlinkSync(p);
    }
  } catch (er) {
    if (er.code === 'ENOENT') {
      return
    } else if (er.code === 'EPERM') {
      return isWindows ? fixWinEPERMSync(p, options, er) : rmdirSync(p, options, er)
    } else if (er.code !== 'EISDIR') {
      throw er
    }
    rmdirSync(p, options, er);
  }
}

function rmdirSync (p, options, originalEr) {
  assert__default["default"](p);
  assert__default["default"](options);
  if (originalEr) {
    assert__default["default"](originalEr instanceof Error);
  }

  try {
    options.rmdirSync(p);
  } catch (er) {
    if (er.code === 'ENOTDIR') {
      throw originalEr
    } else if (er.code === 'ENOTEMPTY' || er.code === 'EEXIST' || er.code === 'EPERM') {
      rmkidsSync(p, options);
    } else if (er.code !== 'ENOENT') {
      throw er
    }
  }
}

function rmkidsSync (p, options) {
  assert__default["default"](p);
  assert__default["default"](options);
  options.readdirSync(p).forEach(f => rimrafSync(path__default["default"].join(p, f), options));

  if (isWindows) {
    // We only end up here once we got ENOTEMPTY at least once, and
    // at this point, we are guaranteed to have removed all the kids.
    // So, we know that it won't be ENOENT or ENOTDIR or anything else.
    // try really hard to delete stuff on windows, because it has a
    // PROFOUNDLY annoying habit of not closing handles promptly when
    // files are deleted, resulting in spurious ENOTEMPTY errors.
    const startTime = Date.now();
    do {
      try {
        const ret = options.rmdirSync(p, options);
        return ret
      } catch (er) { }
    } while (Date.now() - startTime < 500) // give up after 500ms
  } else {
    const ret = options.rmdirSync(p, options);
    return ret
  }
}

var rimraf_1 = rimraf;
rimraf.sync = rimrafSync;

const u$8 = universalify.fromCallback;


var remove$1 = {
  remove: u$8(rimraf_1),
  removeSync: rimraf_1.sync
};

const u$7 = universalify.fromCallback;





const emptyDir = u$7(function emptyDir (dir, callback) {
  callback = callback || function () {};
  gracefulFs.readdir(dir, (err, items) => {
    if (err) return mkdirs_1.mkdirs(dir, callback)

    items = items.map(item => path__default["default"].join(dir, item));

    deleteItem();

    function deleteItem () {
      const item = items.pop();
      if (!item) return callback()
      remove$1.remove(item, err => {
        if (err) return callback(err)
        deleteItem();
      });
    }
  });
});

function emptyDirSync (dir) {
  let items;
  try {
    items = gracefulFs.readdirSync(dir);
  } catch (err) {
    return mkdirs_1.mkdirsSync(dir)
  }

  items.forEach(item => {
    item = path__default["default"].join(dir, item);
    remove$1.removeSync(item);
  });
}

var empty = {
  emptyDirSync,
  emptydirSync: emptyDirSync,
  emptyDir,
  emptydir: emptyDir
};

const u$6 = universalify.fromCallback;



const pathExists$6 = pathExists_1.pathExists;

function createFile (file, callback) {
  function makeFile () {
    gracefulFs.writeFile(file, '', err => {
      if (err) return callback(err)
      callback();
    });
  }

  gracefulFs.stat(file, (err, stats) => { // eslint-disable-line handle-callback-err
    if (!err && stats.isFile()) return callback()
    const dir = path__default["default"].dirname(file);
    pathExists$6(dir, (err, dirExists) => {
      if (err) return callback(err)
      if (dirExists) return makeFile()
      mkdirs_1.mkdirs(dir, err => {
        if (err) return callback(err)
        makeFile();
      });
    });
  });
}

function createFileSync (file) {
  let stats;
  try {
    stats = gracefulFs.statSync(file);
  } catch (e) {}
  if (stats && stats.isFile()) return

  const dir = path__default["default"].dirname(file);
  if (!gracefulFs.existsSync(dir)) {
    mkdirs_1.mkdirsSync(dir);
  }

  gracefulFs.writeFileSync(file, '');
}

var file = {
  createFile: u$6(createFile),
  createFileSync
};

const u$5 = universalify.fromCallback;



const pathExists$5 = pathExists_1.pathExists;

function createLink (srcpath, dstpath, callback) {
  function makeLink (srcpath, dstpath) {
    gracefulFs.link(srcpath, dstpath, err => {
      if (err) return callback(err)
      callback(null);
    });
  }

  pathExists$5(dstpath, (err, destinationExists) => {
    if (err) return callback(err)
    if (destinationExists) return callback(null)
    gracefulFs.lstat(srcpath, (err) => {
      if (err) {
        err.message = err.message.replace('lstat', 'ensureLink');
        return callback(err)
      }

      const dir = path__default["default"].dirname(dstpath);
      pathExists$5(dir, (err, dirExists) => {
        if (err) return callback(err)
        if (dirExists) return makeLink(srcpath, dstpath)
        mkdirs_1.mkdirs(dir, err => {
          if (err) return callback(err)
          makeLink(srcpath, dstpath);
        });
      });
    });
  });
}

function createLinkSync (srcpath, dstpath) {
  const destinationExists = gracefulFs.existsSync(dstpath);
  if (destinationExists) return undefined

  try {
    gracefulFs.lstatSync(srcpath);
  } catch (err) {
    err.message = err.message.replace('lstat', 'ensureLink');
    throw err
  }

  const dir = path__default["default"].dirname(dstpath);
  const dirExists = gracefulFs.existsSync(dir);
  if (dirExists) return gracefulFs.linkSync(srcpath, dstpath)
  mkdirs_1.mkdirsSync(dir);

  return gracefulFs.linkSync(srcpath, dstpath)
}

var link = {
  createLink: u$5(createLink),
  createLinkSync
};

const pathExists$4 = pathExists_1.pathExists;

/**
 * Function that returns two types of paths, one relative to symlink, and one
 * relative to the current working directory. Checks if path is absolute or
 * relative. If the path is relative, this function checks if the path is
 * relative to symlink or relative to current working directory. This is an
 * initiative to find a smarter `srcpath` to supply when building symlinks.
 * This allows you to determine which path to use out of one of three possible
 * types of source paths. The first is an absolute path. This is detected by
 * `path.isAbsolute()`. When an absolute path is provided, it is checked to
 * see if it exists. If it does it's used, if not an error is returned
 * (callback)/ thrown (sync). The other two options for `srcpath` are a
 * relative url. By default Node's `fs.symlink` works by creating a symlink
 * using `dstpath` and expects the `srcpath` to be relative to the newly
 * created symlink. If you provide a `srcpath` that does not exist on the file
 * system it results in a broken symlink. To minimize this, the function
 * checks to see if the 'relative to symlink' source file exists, and if it
 * does it will use it. If it does not, it checks if there's a file that
 * exists that is relative to the current working directory, if does its used.
 * This preserves the expectations of the original fs.symlink spec and adds
 * the ability to pass in `relative to current working direcotry` paths.
 */

function symlinkPaths$1 (srcpath, dstpath, callback) {
  if (path__default["default"].isAbsolute(srcpath)) {
    return gracefulFs.lstat(srcpath, (err) => {
      if (err) {
        err.message = err.message.replace('lstat', 'ensureSymlink');
        return callback(err)
      }
      return callback(null, {
        'toCwd': srcpath,
        'toDst': srcpath
      })
    })
  } else {
    const dstdir = path__default["default"].dirname(dstpath);
    const relativeToDst = path__default["default"].join(dstdir, srcpath);
    return pathExists$4(relativeToDst, (err, exists) => {
      if (err) return callback(err)
      if (exists) {
        return callback(null, {
          'toCwd': relativeToDst,
          'toDst': srcpath
        })
      } else {
        return gracefulFs.lstat(srcpath, (err) => {
          if (err) {
            err.message = err.message.replace('lstat', 'ensureSymlink');
            return callback(err)
          }
          return callback(null, {
            'toCwd': srcpath,
            'toDst': path__default["default"].relative(dstdir, srcpath)
          })
        })
      }
    })
  }
}

function symlinkPathsSync$1 (srcpath, dstpath) {
  let exists;
  if (path__default["default"].isAbsolute(srcpath)) {
    exists = gracefulFs.existsSync(srcpath);
    if (!exists) throw new Error('absolute srcpath does not exist')
    return {
      'toCwd': srcpath,
      'toDst': srcpath
    }
  } else {
    const dstdir = path__default["default"].dirname(dstpath);
    const relativeToDst = path__default["default"].join(dstdir, srcpath);
    exists = gracefulFs.existsSync(relativeToDst);
    if (exists) {
      return {
        'toCwd': relativeToDst,
        'toDst': srcpath
      }
    } else {
      exists = gracefulFs.existsSync(srcpath);
      if (!exists) throw new Error('relative srcpath does not exist')
      return {
        'toCwd': srcpath,
        'toDst': path__default["default"].relative(dstdir, srcpath)
      }
    }
  }
}

var symlinkPaths_1 = {
  symlinkPaths: symlinkPaths$1,
  symlinkPathsSync: symlinkPathsSync$1
};

function symlinkType$1 (srcpath, type, callback) {
  callback = (typeof type === 'function') ? type : callback;
  type = (typeof type === 'function') ? false : type;
  if (type) return callback(null, type)
  gracefulFs.lstat(srcpath, (err, stats) => {
    if (err) return callback(null, 'file')
    type = (stats && stats.isDirectory()) ? 'dir' : 'file';
    callback(null, type);
  });
}

function symlinkTypeSync$1 (srcpath, type) {
  let stats;

  if (type) return type
  try {
    stats = gracefulFs.lstatSync(srcpath);
  } catch (e) {
    return 'file'
  }
  return (stats && stats.isDirectory()) ? 'dir' : 'file'
}

var symlinkType_1 = {
  symlinkType: symlinkType$1,
  symlinkTypeSync: symlinkTypeSync$1
};

const u$4 = universalify.fromCallback;



const mkdirs = mkdirs_1.mkdirs;
const mkdirsSync = mkdirs_1.mkdirsSync;


const symlinkPaths = symlinkPaths_1.symlinkPaths;
const symlinkPathsSync = symlinkPaths_1.symlinkPathsSync;


const symlinkType = symlinkType_1.symlinkType;
const symlinkTypeSync = symlinkType_1.symlinkTypeSync;

const pathExists$3 = pathExists_1.pathExists;

function createSymlink (srcpath, dstpath, type, callback) {
  callback = (typeof type === 'function') ? type : callback;
  type = (typeof type === 'function') ? false : type;

  pathExists$3(dstpath, (err, destinationExists) => {
    if (err) return callback(err)
    if (destinationExists) return callback(null)
    symlinkPaths(srcpath, dstpath, (err, relative) => {
      if (err) return callback(err)
      srcpath = relative.toDst;
      symlinkType(relative.toCwd, type, (err, type) => {
        if (err) return callback(err)
        const dir = path__default["default"].dirname(dstpath);
        pathExists$3(dir, (err, dirExists) => {
          if (err) return callback(err)
          if (dirExists) return gracefulFs.symlink(srcpath, dstpath, type, callback)
          mkdirs(dir, err => {
            if (err) return callback(err)
            gracefulFs.symlink(srcpath, dstpath, type, callback);
          });
        });
      });
    });
  });
}

function createSymlinkSync (srcpath, dstpath, type) {
  const destinationExists = gracefulFs.existsSync(dstpath);
  if (destinationExists) return undefined

  const relative = symlinkPathsSync(srcpath, dstpath);
  srcpath = relative.toDst;
  type = symlinkTypeSync(relative.toCwd, type);
  const dir = path__default["default"].dirname(dstpath);
  const exists = gracefulFs.existsSync(dir);
  if (exists) return gracefulFs.symlinkSync(srcpath, dstpath, type)
  mkdirsSync(dir);
  return gracefulFs.symlinkSync(srcpath, dstpath, type)
}

var symlink = {
  createSymlink: u$4(createSymlink),
  createSymlinkSync
};

var ensure = {
  // file
  createFile: file.createFile,
  createFileSync: file.createFileSync,
  ensureFile: file.createFile,
  ensureFileSync: file.createFileSync,
  // link
  createLink: link.createLink,
  createLinkSync: link.createLinkSync,
  ensureLink: link.createLink,
  ensureLinkSync: link.createLinkSync,
  // symlink
  createSymlink: symlink.createSymlink,
  createSymlinkSync: symlink.createSymlinkSync,
  ensureSymlink: symlink.createSymlink,
  ensureSymlinkSync: symlink.createSymlinkSync
};

var _fs;
try {
  _fs = gracefulFs;
} catch (_) {
  _fs = fs__default["default"];
}

function readFile (file, options, callback) {
  if (callback == null) {
    callback = options;
    options = {};
  }

  if (typeof options === 'string') {
    options = {encoding: options};
  }

  options = options || {};
  var fs = options.fs || _fs;

  var shouldThrow = true;
  if ('throws' in options) {
    shouldThrow = options.throws;
  }

  fs.readFile(file, options, function (err, data) {
    if (err) return callback(err)

    data = stripBom(data);

    var obj;
    try {
      obj = JSON.parse(data, options ? options.reviver : null);
    } catch (err2) {
      if (shouldThrow) {
        err2.message = file + ': ' + err2.message;
        return callback(err2)
      } else {
        return callback(null, null)
      }
    }

    callback(null, obj);
  });
}

function readFileSync (file, options) {
  options = options || {};
  if (typeof options === 'string') {
    options = {encoding: options};
  }

  var fs = options.fs || _fs;

  var shouldThrow = true;
  if ('throws' in options) {
    shouldThrow = options.throws;
  }

  try {
    var content = fs.readFileSync(file, options);
    content = stripBom(content);
    return JSON.parse(content, options.reviver)
  } catch (err) {
    if (shouldThrow) {
      err.message = file + ': ' + err.message;
      throw err
    } else {
      return null
    }
  }
}

function stringify (obj, options) {
  var spaces;
  var EOL = '\n';
  if (typeof options === 'object' && options !== null) {
    if (options.spaces) {
      spaces = options.spaces;
    }
    if (options.EOL) {
      EOL = options.EOL;
    }
  }

  var str = JSON.stringify(obj, options ? options.replacer : null, spaces);

  return str.replace(/\n/g, EOL) + EOL
}

function writeFile (file, obj, options, callback) {
  if (callback == null) {
    callback = options;
    options = {};
  }
  options = options || {};
  var fs = options.fs || _fs;

  var str = '';
  try {
    str = stringify(obj, options);
  } catch (err) {
    // Need to return whether a callback was passed or not
    if (callback) callback(err, null);
    return
  }

  fs.writeFile(file, str, options, callback);
}

function writeFileSync (file, obj, options) {
  options = options || {};
  var fs = options.fs || _fs;

  var str = stringify(obj, options);
  // not sure if fs.writeFileSync returns anything, but just in case
  return fs.writeFileSync(file, str, options)
}

function stripBom (content) {
  // we do this because JSON.parse would convert it to a utf8 string if encoding wasn't specified
  if (Buffer.isBuffer(content)) content = content.toString('utf8');
  content = content.replace(/^\uFEFF/, '');
  return content
}

var jsonfile$1 = {
  readFile: readFile,
  readFileSync: readFileSync,
  writeFile: writeFile,
  writeFileSync: writeFileSync
};

var jsonfile_1 = jsonfile$1;

const u$3 = universalify.fromCallback;


var jsonfile = {
  // jsonfile exports
  readJson: u$3(jsonfile_1.readFile),
  readJsonSync: jsonfile_1.readFileSync,
  writeJson: u$3(jsonfile_1.writeFile),
  writeJsonSync: jsonfile_1.writeFileSync
};

const pathExists$2 = pathExists_1.pathExists;


function outputJson (file, data, options, callback) {
  if (typeof options === 'function') {
    callback = options;
    options = {};
  }

  const dir = path__default["default"].dirname(file);

  pathExists$2(dir, (err, itDoes) => {
    if (err) return callback(err)
    if (itDoes) return jsonfile.writeJson(file, data, options, callback)

    mkdirs_1.mkdirs(dir, err => {
      if (err) return callback(err)
      jsonfile.writeJson(file, data, options, callback);
    });
  });
}

var outputJson_1 = outputJson;

function outputJsonSync (file, data, options) {
  const dir = path__default["default"].dirname(file);

  if (!gracefulFs.existsSync(dir)) {
    mkdirs_1.mkdirsSync(dir);
  }

  jsonfile.writeJsonSync(file, data, options);
}

var outputJsonSync_1 = outputJsonSync;

const u$2 = universalify.fromCallback;


jsonfile.outputJson = u$2(outputJson_1);
jsonfile.outputJsonSync = outputJsonSync_1;
// aliases
jsonfile.outputJSON = jsonfile.outputJson;
jsonfile.outputJSONSync = jsonfile.outputJsonSync;
jsonfile.writeJSON = jsonfile.writeJson;
jsonfile.writeJSONSync = jsonfile.writeJsonSync;
jsonfile.readJSON = jsonfile.readJson;
jsonfile.readJSONSync = jsonfile.readJsonSync;

var json = jsonfile;

const copySync = copySync$1.copySync;
const removeSync = remove$1.removeSync;
const mkdirpSync = mkdirs_1.mkdirpSync;


function moveSync$1 (src, dest, opts) {
  opts = opts || {};
  const overwrite = opts.overwrite || opts.clobber || false;

  const { srcStat } = stat.checkPathsSync(src, dest, 'move');
  stat.checkParentPathsSync(src, srcStat, dest, 'move');
  mkdirpSync(path__default["default"].dirname(dest));
  return doRename$1(src, dest, overwrite)
}

function doRename$1 (src, dest, overwrite) {
  if (overwrite) {
    removeSync(dest);
    return rename$1(src, dest, overwrite)
  }
  if (gracefulFs.existsSync(dest)) throw new Error('dest already exists.')
  return rename$1(src, dest, overwrite)
}

function rename$1 (src, dest, overwrite) {
  try {
    gracefulFs.renameSync(src, dest);
  } catch (err) {
    if (err.code !== 'EXDEV') throw err
    return moveAcrossDevice$1(src, dest, overwrite)
  }
}

function moveAcrossDevice$1 (src, dest, overwrite) {
  const opts = {
    overwrite,
    errorOnExist: true
  };
  copySync(src, dest, opts);
  return removeSync(src)
}

var moveSync_1 = moveSync$1;

var moveSync = {
  moveSync: moveSync_1
};

const copy = copy$1.copy;
const remove = remove$1.remove;
const mkdirp = mkdirs_1.mkdirp;
const pathExists$1 = pathExists_1.pathExists;


function move$1 (src, dest, opts, cb) {
  if (typeof opts === 'function') {
    cb = opts;
    opts = {};
  }

  const overwrite = opts.overwrite || opts.clobber || false;

  stat.checkPaths(src, dest, 'move', (err, stats) => {
    if (err) return cb(err)
    const { srcStat } = stats;
    stat.checkParentPaths(src, srcStat, dest, 'move', err => {
      if (err) return cb(err)
      mkdirp(path__default["default"].dirname(dest), err => {
        if (err) return cb(err)
        return doRename(src, dest, overwrite, cb)
      });
    });
  });
}

function doRename (src, dest, overwrite, cb) {
  if (overwrite) {
    return remove(dest, err => {
      if (err) return cb(err)
      return rename(src, dest, overwrite, cb)
    })
  }
  pathExists$1(dest, (err, destExists) => {
    if (err) return cb(err)
    if (destExists) return cb(new Error('dest already exists.'))
    return rename(src, dest, overwrite, cb)
  });
}

function rename (src, dest, overwrite, cb) {
  gracefulFs.rename(src, dest, err => {
    if (!err) return cb()
    if (err.code !== 'EXDEV') return cb(err)
    return moveAcrossDevice(src, dest, overwrite, cb)
  });
}

function moveAcrossDevice (src, dest, overwrite, cb) {
  const opts = {
    overwrite,
    errorOnExist: true
  };
  copy(src, dest, opts, err => {
    if (err) return cb(err)
    return remove(src, cb)
  });
}

var move_1 = move$1;

const u$1 = universalify.fromCallback;
var move = {
  move: u$1(move_1)
};

const u = universalify.fromCallback;



const pathExists = pathExists_1.pathExists;

function outputFile (file, data, encoding, callback) {
  if (typeof encoding === 'function') {
    callback = encoding;
    encoding = 'utf8';
  }

  const dir = path__default["default"].dirname(file);
  pathExists(dir, (err, itDoes) => {
    if (err) return callback(err)
    if (itDoes) return gracefulFs.writeFile(file, data, encoding, callback)

    mkdirs_1.mkdirs(dir, err => {
      if (err) return callback(err)

      gracefulFs.writeFile(file, data, encoding, callback);
    });
  });
}

function outputFileSync (file, ...args) {
  const dir = path__default["default"].dirname(file);
  if (gracefulFs.existsSync(dir)) {
    return gracefulFs.writeFileSync(file, ...args)
  }
  mkdirs_1.mkdirsSync(dir);
  gracefulFs.writeFileSync(file, ...args);
}

var output = {
  outputFile: u(outputFile),
  outputFileSync
};

var lib = createCommonjsModule(function (module) {

module.exports = Object.assign(
  {},
  // Export promiseified graceful-fs:
  fs_1,
  // Export extra methods:
  copySync$1,
  copy$1,
  empty,
  ensure,
  json,
  mkdirs_1,
  moveSync,
  move,
  output,
  pathExists_1,
  remove$1
);

// Export fs.promises as a getter property so that we don't trigger
// ExperimentalWarning before fs.promises is actually accessed.

if (Object.getOwnPropertyDescriptor(fs__default["default"], 'promises')) {
  Object.defineProperty(module.exports, 'promises', {
    get () { return fs__default["default"].promises }
  });
}
});

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
  lib.mkdirsSync(path.dirname(filePath));
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
  info: colors__default["default"].blue('ℹ'),
  success: colors__default["default"].green('✔'),
  warning: colors__default["default"].yellow('⚠'),
  error: colors__default["default"].red('✖')
};
const fallback = {
  info: colors__default["default"].blue('i'),
  success: colors__default["default"].green('√'),
  warning: colors__default["default"].yellow('‼'),
  error: colors__default["default"].red('×')
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
  options = _extends({
    sourceCodeDir: '.',
    specificationDir: './feature'
  }, options);
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
  warn('Plug-in could not convert command from', colors__default["default"].yellowBright(filePath), location ? '(' + location.line + ',' + location.column + ')' : '');
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
