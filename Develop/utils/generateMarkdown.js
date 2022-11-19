// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (data.license = true) {
    return `
  ![License Badge](https://img.shields.io/github/license/${data.github}/${data.repo})`
    }  else {
      return ""
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { 
  if (data.license = true) {
  return `
  ## https://img.shields.io/github/license/${data.github}/${data.repo}`
  }  else {
    return ""
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (data.license = true) {
  return `
  ## Licensing Information
  
  ${data.license}
  `
  }  else {
    return ""
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description

  ${data.description}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contribution](#contribution)
  * [Testing](#testing)
  * [Questions](#questions)

  ## Installation Instructions

  ${data.installation}

  ## Usage Restrictions

  ${data.usage}

  ## How can you contribute?

  ${data.contribution}

  ## How can users test this applicaiton?

  ${data.test}

  ## Contact creator with questions

  * Click this link to go to my [GitHub profile](https;//github.com/${data.github})

  * If you have any questions for the creators, contact us at [send an email](mailto:${data.email})



`;
}

module.exports = generateMarkdown;
