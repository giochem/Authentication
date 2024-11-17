const app = require("./app");
const PORT = 2000;

app.listen(PORT, "127.0.0.2", () => {
  console.info(`sso-server listening on port ${PORT}`);
});
