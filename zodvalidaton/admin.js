const { z } = require("zod");

const signupSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  firstName: z.string().min(2),
  lastName: z.string().min(2)
});

const signinSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6)
});

module.exports = {
  signupSchema,
  signinSchema
};
