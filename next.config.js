const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "mohamedsaidumn",
        mongodb_password: "3kRu3Ni2fucYhLGp",
        mongodb_clustername: "cluster04211",
        mongodb_database: "my-site-dev",
      },
    };
  }

  return {
    env: {
      mongodb_username: "mohamedsaidumn",
      mongodb_password: "3kRu3Ni2fucYhLGp",
      mongodb_clustername: "cluster04211",
      mongodb_database: "my-site",
    },
  };
};
