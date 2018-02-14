const shell = require('shelljs');

/*
if (!shell.which('git')) {
  shell.echo('Sorry, this script requires git');
  shell.exit(1);
}
*/

// clone theme
/*
const theme_repo = 'https://github.com/iTimeTraveler/hexo-theme-hiker.git';
const theme_name = 'hiker';
if (shell.exec(`git clone ${theme_repo} theme/${theme_name}`).code !== 0) {
  shell.echo('Error: Git clone failed');
  shell.exit(1);
}
*/