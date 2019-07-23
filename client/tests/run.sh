#/bin/bash

DIRECTORY=$(cd `dirname $0` && pwd)

echo "Testing JavaScript unit tests..."
"$DIRECTORY/../node_modules/mocha/bin/mocha" "$DIRECTORY/unit/"
