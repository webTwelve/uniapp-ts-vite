const os = require('os')
const cp = require('child_process')

if (os.type() == 'Darwin') {
  //mac
  cp.execSync('chmod ug+x .husky/* && chmod ug+x .git/hooks/*')
} else if (os.type() == 'Linux') {
  //Linux
  cp.execSync('chmod ug+x .husky/* && chmod ug+x .git/hooks/*')
}
