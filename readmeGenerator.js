"use strict";

const inquirer = require("inquirer");

(async() => {
    const input = await inquirer.prompt([{
        message: "Title",
        name: "title",
    }, {
        message: "Description",
        name: "description",
    }, {
        message: "Installation",
        name: "installation",
    }, {
        message: "Usage",
        name: "usage",
    }, {
        message: "License",
        name: "license",
    }, {
        message: "Contributors",
        name: "contributors",
    }, {
        message: "Tests",
        name: "tests",
    }]);
    console.log(input);
})();