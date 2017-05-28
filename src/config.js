let conf = {
  'winston': {
    'level': 'trace',
    'prettyPrint': true,
    'colorize': true,
    'silent': false,
    'timestamp': false
  }
}

if (process.env.NODE_ENV === 'production') {
  conf.winston.level = 'warn'
}

module.exports = conf
