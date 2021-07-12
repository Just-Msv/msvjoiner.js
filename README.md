<div align="center">
  <h1>Msvjoiner.js</h1>
  <p>
    <a href="https://www.npmjs.com/package/msvjoiner.js"><img src="https://img.shields.io/npm/v/msvjoiner.js?maxAge=3600" alt="NPM version" /></a>
 </p>
<p>
    <a href="https://www.npmjs.com/package/msvjoiner.js"><img src="https://nodei.co/npm/msvjoiner.js.png?downloads=true&stars=true" alt="NPM Banner"></a>
  </p>
</div>

# About

- msvjoiner.js is a Node.js module

# Installation

- Node.js 14.0.0 or newer is required.
- Ignore any warnings about unmet peer dependencies, as they're all optional.

### Example Usage

```js
const Msvjoiner = require("../msvjoiner");
let Logger = new Msvjoiner.Logger();

Logger.log("MSVJOINER.JS", "Test Message.", true);
Logger.info("MSVJOINER.JS", "Test Message.", true);
Logger.success("MSVJOINER.JS", "Test Message.", true);
Logger.warn("MSVJOINER.JS", "Test Message.", true);
Logger.error("MSVJOINER.JS", "Test Message.", true);
```
