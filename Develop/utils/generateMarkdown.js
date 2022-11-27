// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(data) {
  if (license = "MIT", "ISC", "zlib", "ncsa", "mpl-2.0", "osl-3.0", "gpl", "cc") {
    return `
  ![License Badge](https://img.shields.io/github/license/${data.github}/${data.repo})`
    }  else {
      return ""
    }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

function renderLicenseLink(data) { 
  if (license = "MIT", "ISC", "zlib", "ncsa", "mpl-2.0", "osl-3.0", "gpl", "cc") {
  return `
  ## https://img.shields.io/github/license/${data.github}/${data.repo}`
  }  else {
    return ""
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  if (license = "MIT", "ISC", "zlib", "ncsa", "mpl-2.0", "osl-3.0", "gpl", "cc") {
  return `
  ## Licensing Information
  
  ${data.license}
  `
  }  else {
    return ""
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  return `# ${data.title}

  ${renderLicenseSection(data.license)}
  ${renderLicenseBadge(data.license)}
  ${renderLicenseLink(data.license)}

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

  ${data.testing}

  ## Contact creator with questions

  * Click this link to go to my [GitHub profile](https;//github.com/${data.github})

  * If you have any questions for the creators, contact us at [send an email](mailto:${data.email})



`};

module.exports = generateMarkdown;
