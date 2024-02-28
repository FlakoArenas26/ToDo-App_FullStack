require("dotenv").config();

const registerApp = require("./app");
const PORT = process.env.PORT || 3000;

const main = async () => {
  const app = await registerApp();

  app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}\nGo to http://localhost:${PORT}`);
    // console.log(process.env);

    console.log("PG_USER:", process.env.PG_USER);
    console.log("PG_HOST:", process.env.PG_HOST);
    console.log("PG_DATABASE:", process.env.PG_DATABASE);
    console.log("PG_PASSWORD:", process.env.PG_PASSWORD);
    console.log("PG_PORT:", process.env.PG_PORT);
  });
};

main().catch((e) => console.log(`Something went wrong : Error ${e}`));
