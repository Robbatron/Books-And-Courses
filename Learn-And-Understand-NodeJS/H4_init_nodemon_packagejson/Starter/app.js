// Package: Code...
// * Managed and maintained with a package management system

// Package Management System: Software that automates installing and updating packages.
// * Deals with what version you have or need, and manages dependencies.

// Dependency: Code that another set of code depends on to function.
// * If you use that code in your app, it is a dependency. Your app depends on it.

// Versioning: Specifying what version of a set of code this is...
// * So others can track if a new version has come out. This allows to watch
// * for new features, or to watch for 'breaking changes'.
// * The word 'semantic' implies that something conveys meaning. (MAJOR.MINOR.PATCH : 1.7.2)

var moment = require('moment');
console.log(moment().format("ddd, hA"));