export default () => ({
  appPort: parseInt(process.env.PORT, 10) || 3001,
})