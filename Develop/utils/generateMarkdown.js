// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    let badgeUrl = "";
    switch(license) {
        case 'Apache 2.0':
          badgeUrl = "https://camo.githubusercontent.com/c7c91ba0c808b97b0984050381736d8abae1fa27f0670ee27e9b2ad25ed2d938/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4c6963656e73652d4170616368655f322e302d79656c6c6f77677265656e2e737667";
          break;
        case 'GNU GPL v3':
          badgeUrl = "https://camo.githubusercontent.com/400c4e52df43f6a0ab8a89b74b1a78d1a64da56a7848b9110c9d2991bb7c3105/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4c6963656e73652d47504c76332d626c75652e737667";
          break;
        case 'ISC License':
          badgeUrl = "https://camo.githubusercontent.com/6628d684513422b8b959d29bcd415e41812e297c5e3422437556c6b23c533bf3/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4c6963656e73652d4953432d626c75652e737667";
          break;
        case 'The MIT License':
          badgeUrl = "https://camo.githubusercontent.com/78f47a09877ba9d28da1887a93e5c3bc2efb309c1e910eb21135becd2998238a/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4c6963656e73652d4d49542d79656c6c6f772e737667";
          break;

        default:
          badgeUrl = "https://camo.githubusercontent.com/c7c91ba0c808b97b0984050381736d8abae1fa27f0670ee27e9b2ad25ed2d938/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4c6963656e73652d4170616368655f322e302d79656c6c6f77677265656e2e737667";

    }

    return badgeUrl;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let linkUrl = ""
  switch(license) {
      case 'Apache 2.0':
        linkUrl = "[License: Apache 2.0](https://opensource.org/licenses/Apache-2.0)";
        break;
      case 'GNU GPL v3':
        linkUrl = "[License: GPL v3](https://www.gnu.org/licenses/gpl-3.0)";
        break;
      case 'ISC License':
        linkUrl = "[License: ISC](https://opensource.org/licenses/ISC)";
        break;
      case 'The MIT License':
        linkUrl = "[License: MIT](https://opensource.org/licenses/Apache-2.0)";
        break;

      default:
        linkUrl = "[License: Apache 2.0](https://opensource.org/licenses/Apache-2.0)";

  }

  return linkUrl
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    const badge = renderLicenseBadge(license)
    const link = renderLicenseLink(license)

    return `![${license}](${badge})<br/>` + link;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}
## Description
${data.description}
## Table of contents
[Installation](#installation)<br/>
[Usage](#usage)<br/>
[License](#license)<br/>
[Contributing](#contributing)<br/>
[Tests](#tests)<br/>
[Questions](#questions)<br/>
## Installation
${data.installation}
## Usage
${data.use}
## License
${data.license}<br/>
${renderLicenseSection(data.license)}
## Contributing
${data.contributing}
## Tests
${data.test}
## Questions
${data.questions}
`;
}

module.exports = generateMarkdown;
