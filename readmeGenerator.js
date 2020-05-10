"use strict";

const inquirer = require("inquirer");
const fs = require("fs");

(async() => {

    const input = await inquirer.prompt([{
        message: "Title",
        name: "title",
    }, {
        message: "Description",
        name: "description",
    }, {
        message: "Usage",
        name: "usage",
    }, {
        message: "Installation",
        name: "installation",
    }, {
        message: "Tests",
        name: "tests",
    }, {
        message: "Authors",
        name: "authors",
    }, {
        message: "Contributing",
        name: "contributing",
    }, {
        message: "License",
        name: "license",
    }, {
        message: "GitHub account",
        name: "account",
    }, {
        message: "Repository",
        name: "repo",
    }]);

    // Returns table of contents corresponding to user input
    function genTOC(input) {
        let toc = '';
        if (input.usage != '') toc += "- [Usage](#Usage)\n";
        if (input.installation != '') toc += "- [Installing](#Installing)\n";
        if (input.tests != '') toc += "- [Running the Tests](#Running-the-Tests)\n";
        if (input.authors != '') toc += "- [Authors](#Authors)\n";
        if (input.contributing != '') toc += "- [Contributing](#Contributing)\n";
        if (input.license != '') toc += "- [License](#License)\n";
        return toc + "\n";
    }

    // Returns readme text corresponding to user input
    function genREADME(input) {
        let readme = `# ${input.title}\n\n${input.description}\n\n## Table of Contents\n\n${genTOC(input)}`;
        if (input.account != '' && input.repo != '') readme = `![GitHub commit activity](https://img.shields.io/github/commit-activity/${input.account}/${input.repo})\n\n` + readme;
        if (input.usage != '') readme += `## Usage\n\n${input.usage}\n\n`
        if (input.installation != '') readme += `## Installing\n\n${input.installation}\n\n`
        if (input.tests != '') readme += ` ## Running the tests\n\n${input.tests}\n\n`
        if (input.authors != '') readme += ` ## Authors\n\n${input.authors}\n\n`
        if (input.contributing != '') readme += ` ## Contributing\n\n${input.contributing}\n\n`
        if (input.license != '') readme += ` ## License\n\n${input.license}\n\n`
        return readme;
    }

    fs.writeFile("README.md", genREADME(input), "utf8", err => { if (err) console.log(err) });
})();