Make sure you have node installed.

To get this project ready, type the following commands from a command line in this directory:
npm install
npm install gulpjs/gulp-cli#4.0 -g
npm install live-server -g

To watch and build our server and client scripts, run:
gulp watch:scripts

ALWAYS HAVE THAT TASK RUNNING WHEN DEVELOPING

To launch the server for client-side examples:
live-server public

To launch a server-side example in node:
npm run nodemon build/example_xx

Where "xx" is example number.