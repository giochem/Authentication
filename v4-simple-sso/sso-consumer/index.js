const app = require("./app");
const PORT = 3000;

app.listen(PORT, "127.0.0.3", () => {
  console.info(`sso-consumer listening on port ${PORT}`);
});
