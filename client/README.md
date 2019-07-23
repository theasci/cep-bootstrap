# overview

This describes client specific configurations for displaying the Common Extensibility Platform (CEP) panel.

# Node.js + npm Setup

Node.js is used internally by CEP and we can access the large array of NPM modules. However, the version of Node.js is old. As of [CEP 9.0](https://github.com/Adobe-CEP/CEP-Resources/blob/master/CEP_9.x/Documentation/CEP%209.0%20HTML%20Extension%20Cookbook.md#chromium-embedded-framework-cef), it was using [Node.js 8.6.0](https://github.com/nodejs/node/blob/master/doc/changelogs/CHANGELOG_V8.md#8.6.0). You can see the version with: `console.log('Node.js vesion: ' + process.version);` and viewing it in the debugging site. See Development Setup section in the [main README.md](../README.md). 

1. Use [nvm](https://github.com/nvm-sh/nvm) to make your life easier when you have to upgrade.
    
    ```sh
    brew update
    brew install nvm
    # The `.nvmrc` has been set to match CEP's Node.js version
    nvm install $(cat ./.nvmrc)
    nvm use
    ```
    
1. Then add the following to your `~/.bash_profile`
    
    ```sh
    export NVM_DIR="$HOME/.nvm"
    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
    [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
    ```
    
1. Install [npm packages](https://www.npmjs.com/) for both client and host.
    ```sh
    pushd client
    npm install
    cd ../host
    npm install
    popd
    ````

# Development Setup

1. Step through the configuration steps at [Getting Started with CEP Extensions](https://github.com/Adobe-CEP/Getting-Started-guides#6-launch-your-extension-in-the-host-app)
1. Determine your CSXS version. As of this writing, [Adobe CC 2019 apps use CEP 9.0](https://github.com/Adobe-CEP/CEP-Resources/blob/master/CEP_9.x/Documentation/CEP%209.0%20HTML%20Extension%20Cookbook.md#applications-integrated-with-cep).
1. Update the `CSXS/manifest.xml` attributes `/ExtensionManifest@Version` and `/ExtensionManifest/ExecutionEnvironment/RequiredRuntimeList/RequiredRuntime@Version` with the installed CSXS version.
1. Update the `CSXS/manifest.xml` attributes `/ExtensionManifest/ExecutionEnvironment/HostList/Host@Version` with the installed versions of the applications. You can specify [multiple versions by providing a range](https://forums.adobe.com/thread/2447112) like `[20.0.4,20.99]`
1. [Node.js native methods aren't enabled by default](https://www.davidebarranca.com/2015/12/html-panel-tips-19-cc2015-1-cep6-1-node-js-fixes/). A `CSXS/manifest.xml` `/ExtensionManifest/DispatchInfoList/Extension/DispatchInfo/Resources/CEFCommandLine/Parameter` element is required with value `--enable-nodejs`. [Other CEF switches are also available](https://peter.sh/experiments/chromium-command-line-switches/).
1. [Configure your system to be in debug](https://github.com/Adobe-CEP/Getting-Started-guides/blob/master/Client-side%20Debugging/readme.md) mode so you don't get errors when trying to load unsigned extensions.
1. Use the correct version of CSXS when setting debug mode: `defaults write com.adobe.CSXS.<MAJOR-VERSION> PlayerDebugMode 1`.
1. Link the project to the CEP extensions folder.
    ```sh
    TMPUSER=`whoami`
    mkdir -p "/Users/$TMPUSER/Library/Application Support/Adobe/CEP/extensions"
    ln -s "/Users/$TMPUSER/projects/cep-bootstrap" "/Users/$TMPUSER/Library/Application Support/Adobe/CEP/extensions/cep-bootstrap"
    ```
1. Start the Adobe application that this CEP will be displayed in. Go to `Window > Extensions > <CEP name>` to show your CEP.
1. Debugging can be done by going to http://localhost:8080 (or whatever port used in your `.debug` file). The console will output any errors encountered by the client Node.js. You'll have to hit back and click "CEP Bootstrap" every time you close and reopen the panel in InDesign.
1. Create an InDesign keyboard shortcut (Edit menu > Keyboard shortcuts...) to quickly open and close a panel after changes are made. The only time InDesign needs to restarted is when the `CSXS/manifest.xml` changes.

# jQuery

The latest version of jQuery doesn't seem to work when Node.js is enabled in the panel. You have do some handwaving to [allow an older version of jQuery to work with window module and exports](https://github.com/Adobe-CEP/CEP-Resources/blob/master/CEP_9.x/Documentation/CEP%209.0%20HTML%20Extension%20Cookbook.md#js-lib-break-due-to-node-symbols-possible-for-many-other-libraries).

```html
<!-- Insert this line above script imports -->
<script>if (typeof module === 'object') {window.module = module; module = undefined;}</script>
<script>if (typeof exports === 'object') {window.exports = exports; exports = undefined;}</script>
<!-- extension's imports -->
<script src="js/jquery-1.7.1.min.js"></script>
<script src="js/CSInterface.js"></script>
<script src="js/index.js"></script>
<!-- Insert this line after script imports -->
<script>if (window.module) module = window.module;</script>
<script>if (window.exports) exports = window.exports;</script>
```

# Logging

Since CEP panels use node, you can use any logger via npm package compatible with the node version. 

# Testing

Tests are run with `client/tests/run.sh` which executes vanilla JavaScript unit tests with [mocha.js](https://mochajs.org/) and [Chai.js](https://www.chaijs.com/).
