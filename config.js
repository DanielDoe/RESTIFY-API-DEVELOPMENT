module.exports = {
  ENV: process.env.NODE_ENV || 'development',
  PORT: process.env.PORT || 3000,
  URL: process.env.Base_URL || 'http://localhost:3000',
  MONGODB_URI: process.env.MONGODB_URI || 'mongodb+srv://customer:Doe@7176@cluster0-r7g1i.mongodb.net/test?retryWrites=true',
} 