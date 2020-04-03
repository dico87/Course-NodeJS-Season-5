const { argv } = require('./config/config');
const todo = require('./to-do/to-do');

let command = argv._[0];
switch (command) {
    case 'create':
        let todoTask = todo.create(argv.description);
        console.log(todoTask);
        break;
    case 'list':
        let todoTasks = todo.list(argv.complete);
        console.log('========= TO DO ========='.green);
        for(let todoTask of todoTasks) {
            console.log(`Task : ${todoTask.description}`);
            console.log(`Complete : ${todoTask.complete}`)
            console.log('-------------------------'.blue);
        }
        console.log('========================='.green);
        break;
    case 'update':
        let message1 = todo.update(argv.description, argv.complete);
        console.log(message1);
        break;
    case 'delete':
        let message2 = todo.deleted(argv.description);
        console.log(message2);
        break;
    default:
        console.log(`Command ${command} is not valid`);
        break;
}
