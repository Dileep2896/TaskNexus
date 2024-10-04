module.exports = {
  apps: [
    {
      name: "task-nexus",
      script: "npm",
      args: "run dev",
      env: {
        NODE_ENV: "development",
      },
    },
  ],
};
