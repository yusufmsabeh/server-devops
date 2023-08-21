const config = {
  branches: ["main"],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    [
      "@semantic-release/git",
      {
        assets: ["*"],
        message: `chore(release): ${nextReleas.version} [skip ci] \n\n${nextReleas.notes}`,
      },
    ],
    "@semantic-release/github",
  ],
};
module.exports = config;
