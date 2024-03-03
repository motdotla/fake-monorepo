const dotenv = require('dotenv')

const options = {
  path: '/Users/scottmotte/Code/dotenvx/playground/feb-18/fake-monorepo/.env.keys'
}

console.log(dotenv.configDotenv(options).parsed || {})
