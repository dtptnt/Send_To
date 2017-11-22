'use strict';

var commands = {
  windows: '%ProgramFiles%\\MPV\\mpv.exe',
  mac: 'open -a "MPV"',
  linux: 'mpv'
};

commands.tag = 'mpv';

commands.guess = () => {
  if (navigator.platform.startsWith('Win')) {
    return commands.windows;
  }
  if (navigator.platform.startsWith('Linux')) {
    return commands.linux;
  }
  return commands.mac;
};
