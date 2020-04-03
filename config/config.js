const description = {
    demand: true,
    alias: 'd',
    desc: 'Description of the todo task'
};

const complete = {
    default: true,
    alias: 'c',
    desc: 'True/False check to complete todo task'
};

const argv = require('yargs')
    .command('create', 'Create a new todo task', { description })
    .command('list', 'List all task', {complete})
    .command('update', 'Update status the one task', {description, complete})
    .help()
    .argv;

module.exports = {
    argv
}