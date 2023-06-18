const licenses = {
  'Apache License 2.0': {
      link: 'https://opensource.org/licenses/Apache-2.0',
      badge: 'https://img.shields.io/badge/License-Apache_2.0-blue.svg'
  },
  'GNU General Public License v3.0': {
      link: 'https://www.gnu.org/licenses/gpl-3.0',
      badge:'https://img.shields.io/badge/License-GPLv3-blue.svg'
  },
  'MIT License': {
      link: 'https://opensource.org/license/mit',
      badge: 'https://img.shields.io/badge/License-MIT-yellow.svg'
  },
  'BSD 2-Clause "Simplified" License': {
      link: 'https://opensource.org/licenses/BSD-2-Clause',
      badge: 'https://img.shields.io/badge/License-BSD_2--Clause-orange.svg'
  },
  'BSD 3-Clause "New" or "Revised" License': {
      link: 'https://opensource.org/licenses/BSD-3-Clause',
      badge: 'https://img.shields.io/badge/License-BSD_3--Clause-blue.svg'
  },
  'Boost Software License 1.0': {
      link: 'https://www.boost.org/LICENSE_1_0.txt',
      badge: 'https://img.shields.io/badge/License-Boost_1.0-lightblue.svg'
  },
  'GNU General Public License v2.0': {
      link: 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html',
      badge: 'https://img.shields.io/badge/License-GPL_v2-blue.svg'
  },
  'Mozilla Public License 2.0': {
      link: 'https://opensource.org/licenses/MPL-2.0',
      badge: 'https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg'
  },
  'The Unlicense': {
      link: 'http://unlicense.org',
      badge: 'https://img.shields.io/badge/license-Unlicense-blue.svg'
  }
}

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === 'No license') {
    return "";
  }
  return `[![](${licenses[license].badge})](${licenses[license].link})`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return `This project is covered under [${license}](${licenses[license].link}).`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === 'No license') {
    return "";
  }

  return `## License
  
  ${renderLicenseLink(license)}
  `
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}
  
  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Contributing

  ${data.contributions}

  ## Tests

  ## Questions

  If there any questions concerning the project, feel free to contact me by either of the following ways:

  Github Profile: [${data.username}](https://github.com/${data.username})
  
  Email: ${data.email}.
`;
}

module.exports = generateMarkdown;
