module.exports = {
  production: {
    client: process.env.RS_CLIENT,
    version: '8.8.0',
    connection: {
      host: process.env.RS_HOST,
      port: process.env.RS_PORT,
      database: process.env.RS_DATABASE,
      user: process.env.RS_USER,
      password: process.env.RS_PASSWORD,
      useNullAsDefault: true,
      searchPath: ['product_db']
    },
    pool: {
      min: 2,
      max: 10,
      createTimeoutMillis: 80000,
      acquireTimeoutMillis: 80000,
      idleTimeoutMillis: 1000,
      reapIntervalMillis: 1000,
      createRetryIntervalMillis: 100,
      propagateCreateError: true
    }
  }
}
