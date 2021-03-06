Changelog
=========

## v0.1

- Added test using QUnit
  - Still need one test for `Util.updateUrl()` (see TODO in the code)
- Added URL encoding when building query strings (in `Util.buildQueryString()`)
- Added URL decoding when parsing query strings (in `Util.queryStringParams()`)

## v0.1.1

- Made some changes per code review, functionality remains the same

## v0.1.2

- Added the ability to pass a URL to `Util.queryStringParams()`
- Added the parsing of arrays in query strings (like `?ids[]=1&ids[]=2&ids[]=3`)

## v0.1.3

- Added the ability to update a URL's query string using `Util.updateQueryString()`
- Added the ability to handle arrays when parsing query strings in `Util.queryStringParams()`

## v0.1.4

- Fixed return values when parsing URLs without query strings in `Util.queryStringParams()`

## v0.1.5

- Renamed the library to `QsUtil`, since that's what it's for
- Minor doc and tests improvements

## v0.1.6

- Fixed syntax error

## v0.1.7

- Re-Added TODO
- Converted all indents to 2-space tabs

## v0.1.8

- Added `QsUtil.replaceLocationRemovingParam()` to update the browser's address bar and history: this core functionality was all I have ever used this library for, so I made it a first class ability.
- Added tests for `QsUtil.replaceLocation()`
- Empty query strings are now created as `''` instead of `'?'`
