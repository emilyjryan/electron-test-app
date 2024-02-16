// ecosystem.config.js
module.exports = {
  apps : [{
    name: 'electron test app',
    script: 'npm',
    args: 'start',
    watch: true,
    env: {
      NODE_ENV: 'development',
    },
    env_production: {
      NODE_ENV: 'production',
    }
  }],
};
