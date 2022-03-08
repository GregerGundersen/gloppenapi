module.exports = ({ env }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET", "de89a3de9a9318c4b8f48da864217e41"),
  },
});
