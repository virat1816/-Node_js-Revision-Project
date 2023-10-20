const joi = require("joi");
const dotenv = require("dotenv");

dotenv.config({ path: "./.env" });

//  env vars
const envVarSchema = joi
  .object({
    PORT: joi.number().default(3000),
    MONGODB_URL: joi.string().trim(),
    BASE_URL: joi.string().trim(),
      SMTP_HOST: joi.string(),
      SMTP_PORT: joi.number(),
      SMTP_USERNAME: joi.string(),
      SMTP_PASSWORD: joi.string(),
      EMAIL_FROM: joi.string(),
  })
  .unknown();

const { value: envVars, error } = envVarSchema
  .prefs({ errors: { label: "key" } })
  .validate(process.env);

if (error) {
  console.log("config error: ", error);
  process.exit(1);
}

module.exports = {
  port: envVars.PORT,
  mongodb: {
    url: envVars.MONGODB_URL,
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  },
  base_url: envVars.BASE_URL,
  email: {
    smtp: {
      host: envVars.SMTP_HOST,
      port: envVars.SMTP_PORT,
      auth: {
        user: envVars.SMTP_USERNAME,
        pass: envVars.SMTP_PASSWORD,
      },
    },
    from: envVars.EMAIL_FROM,
  },
};
