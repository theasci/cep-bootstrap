# Overview

Adobe's Common Extensibility Platform (CEP) provides the ability to create custom panels inside Adobe products. This project creates a test Node.js panel so we can trial running stuff through this framework.

This project was developed and tested solely on MacOS Mojave with Adobe InDesign CC 2019.

# License

See [LICENSE](./LICENSE) file in root folder. This license applies to all custom code, not libraries that carry their own licensing.

# Bidirectional Communication between panel (client) and JSX (host)

[This article](https://medium.com/adobetech/cep-panels-and-json-objects-8f1643742f4c) has a good overview and example of how to have the client JavaScript communicate with the host ExtendScript through JSON objects. In essence:

* Variables to ExtendScript should be sent as JSON objects. ExtendScript automatically parses them and makes them available right away.
* Return values back to client JavaScript should be converted to strings using `JSON.stringify(result)`. The client callback should do a `JSON.parse(result)` to  access the returning data. This is done by the [json2.js library](https://github.com/douglascrockford/JSON-js/blob/master/json2.js).

Additional details about [client](client/README.md) or [host](host/README.md) side configurations can be seen in their README files.

# Resources

* [Getting Started Guide](https://github.com/Adobe-CEP/Getting-Started-guides)
* [CEP Extension Cookbook](https://github.com/Adobe-CEP/CEP-Resources/blob/master/CEP_8.x/Documentation/CEP%208.0%20HTML%20Extension%20Cookbook.md#applications-integrated-with-cep)
* [How to build a node.js server in CEP](https://medium.com/adobetech/how-to-build-a-node-js-server-in-a-panel-ba1d63ea67e2)
* [CSInterface.js docs](https://theiviaxx.github.io/photoshop-docs/CEP/csinterface.html)
* [CEP Mega Guide](http://aphall.com/2014/08/cep-mega-guide-en/)
* [ExtendScript Tool Guide](https://www.adobe.com/content/dam/acom/en/devnet/scripting/pdfs/javascript_tools_guide.pdf)
