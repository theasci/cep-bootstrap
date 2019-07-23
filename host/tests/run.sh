#/bin/bash

DIRECTORY=$(cd `dirname $0` && pwd)
EXTENDSCRIPT="$DIRECTORY/run.jsx"
EXTENDSCRIPT_LOG="$DIRECTORY/../logs/test.log"

echo "Testing ExtendScript specs..."

rm "$EXTENDSCRIPT_LOG"
osascript -e "tell application \"Adobe InDesign CC 2019\" to do script POSIX file \"$EXTENDSCRIPT\" language javascript"
cat "$EXTENDSCRIPT_LOG"
