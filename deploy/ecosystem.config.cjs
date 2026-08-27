module.exports = {
  apps: [
    {
      name: 'personal-website-api',
      script: 'dist/main.js',
      cwd: '/var/www/personal-website/server',
      instances: 1,
      exec_mode: 'fork',
      max_memory_restart: '300M',
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
      env_file: '.env',
    },
  ],
};
