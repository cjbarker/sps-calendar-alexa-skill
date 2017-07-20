<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [sps-calendar-alexa-skill](#sps-calendar-alexa-skill)
- [Developer](#developer)
  - [Deploy](#deploy)
- [References](#references)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# sps-calendar-alexa-skill
Seattle Public School (SPS) [Alexa Skill](https://developer.amazon.com/alexa-skills-kit) denoting if school is in session or not for a given day,.

# Developer
Prerequiste: [Node.js](https://nodejs.org/en/download/) installed and [Alexa SDK](https://github.com/alexa/alexa-skills-kit-sdk-for-nodejs) for Node.js installed.

```sh
# Clone Repo
git clone git@github.com:cjbarker/sps-calendar-alexa-skill.git
cd sps-calendar-alexa-skill

# Install Node Dependencies
npm install 

# Run Tests
npm test

# Run JSHint
#jshint <javascript-file>
jshint index.js

```

## Deploy
Create a [deployment package for AWS Lambda](https://docs.aws.amazon.com/lambda/latest/dg/nodejs-create-deployment-pkg.html) via the following command script to zip all project contents to upload and deploy to AWS Lambda.

```bash
# Build AWS Lambda Package
npm run zip

# Provision AWS Lambda and deploy package via Terraform
npm run tf
```

# References
* [Alexa SDK for Node.js](https://github.com/alexa/alexa-skills-kit-sdk-for-nodejs)
* [Alexa Custom Skills Tutorial](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/overviews/steps-to-build-a-custom-skill)
* [Seattle Public Schools Calendars](https://www.seattleschools.org/district/calendars)
