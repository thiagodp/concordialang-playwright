import colors from 'ansi-colors';

//
// Adapted from: `is-unicode-supported`
// @see https://github.com/sindresorhus/is-unicode-supported/blob/main/index.js
//
function isUnicodeSupported(): boolean {
	if (process.platform !== 'win32') {
		return process.env.TERM !== 'linux'; // Linux console (kernel)
	}

	return Boolean(process.env.CI) ||
		Boolean(process.env.WT_SESSION) || // Windows Terminal
		process.env.ConEmuTask === '{cmd::Cmder}' || // ConEmu and cmder
		process.env.TERM_PROGRAM === 'vscode' ||
        process.env.TERM_PROGRAM === 'Hyper' ||
		process.env.TERM === 'xterm-256color' ||
		process.env.TERM === 'alacritty';
}

//
// Adapted from: `log-symbols`
// @see https://github.com/sindresorhus/log-symbols/blob/main/index.js
//
const main = {
	info: colors.blue('ℹ'),
	success: colors.green('✔'),
	warning: colors.yellow('⚠'),
	error: colors.red('✖')
};

const fallback = {
	info: colors.blue('i'),
	success: colors.green('√'),
	warning: colors.yellow('‼'),
	error: colors.red('×')
};

export const logSymbols = isUnicodeSupported() ? main : fallback;

export function success( ...args ): void {
    console.log( logSymbols.success, ...args );
}

export function warn( ...args ): void {
    console.warn( logSymbols.warning, ...args );
}

export function info( ...args ): void {
    console.info( logSymbols.info, ...args );
}

export function error( ...args ): void {
    console.info( logSymbols.error, ...args );
}

export function log( ...args ): void {
    console.log( ...args );
}
