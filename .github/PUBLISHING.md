# Publishing to npm

This document explains how to set up automatic publishing to npm using the GitHub Action workflow.

## Prerequisites

1. You need an npm account. If you don't have one, [create one](https://www.npmjs.com/signup).
2. You need to create a token on npm that GitHub Actions can use to publish packages on your behalf.

## Creating an npm Access Token

1. Log in to your npm account at [npmjs.com](https://www.npmjs.com/).
2. Click on your profile icon in the top right corner and select "Access Tokens".
3. Click "Generate New Token" and then "Classic Token".
4. Select the type of token: Choose "Automation" for CI/CD workflows.
5. Specify the permissions: For publishing, you need "Read and write" access.
6. Give your token a name that reminds you what it's for, like "GitHub Actions Publishing".
7. Click "Generate Token" and **make sure to copy the token** as you won't be able to see it again.

## Adding the Token to GitHub Secrets

1. Go to your GitHub repository.
2. Click on "Settings" > "Secrets" > "Actions".
3. Click "New repository secret".
4. Name the secret `NPM_TOKEN`.
5. Paste the token you copied from npm into the value field.
6. Click "Add secret".

## How Publishing Works

With the GitHub Action workflow and secret set up:

1. When you create a new release in GitHub, the workflow will automatically trigger.
2. It checks out your code, installs dependencies, builds the project, and publishes to npm.
3. The package will be published with the version specified in your `package.json` file.

## Manually Publishing

If you need to publish manually:

1. Make sure your `package.json` version is correct and has been incremented.
2. Log in to npm: `npm login`
3. Build the project: `npm run build`
4. Publish the package: `npm publish`

## Publishing Scoped Packages

If your package is scoped (e.g., `@your-scope/package-name`):

1. Make sure your package.json has the correct name with scope.
2. To publish publicly: `npm publish --access=public` 