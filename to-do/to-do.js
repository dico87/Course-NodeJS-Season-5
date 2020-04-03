const fs = require('fs');
const colors = require('colors');

let todoList = [];

const saveInDb = () => {
    let data = JSON.stringify(todoList);
    fs.writeFile('./db/data.json', data, (err) => {
        if (err) {
            console.log(err);
        }
    });
};

const loadFromDB = () => {
    try {
        todoList = require('../db/data.json');
    } catch (error) {
        todoList = [];
    }
};

const create = (description) => {
    loadFromDB();
    let todoTask = todoList.find(task => task.description.toLowerCase().trim() === description.toLowerCase().trim());
    if (todoTask) {
        return `Task ${description} already exists`;
    } else {
        let todo = {
            description,
            complete: false
        };
        todoList.push(todo);
        saveInDb();
        return `Task ${JSON.stringify(todo)} save succesfull`;
    }
};

const list = (complete) => {
    loadFromDB();
    return todoList.filter(task => task.complete == (complete == 'true'));
};

const update = (description, complete) => {
    loadFromDB();
    let todoTask = todoList.find(task => task.description.toLowerCase().trim() === description.toLowerCase().trim());
    if (todoTask) {
        todoTask.complete = (complete == "true");        
        saveInDb();
        return `Task ${description} updated`;
    } else {
        return `Task ${description} not found`;
    }
};

const deleted = (description) => {
    loadFromDB();
    let todoTask = todoList.findIndex(task => task.description.toLowerCase().trim() === description.toLowerCase().trim());
    if (todoTask > -1) {
        todoList.splice(todoTask, 1)
        saveInDb();
        return `Task ${description} deleted`;
    } else {
        return `Task ${description} not found`;
    }
};

module.exports = {
    create,
    list,
    update,
    deleted
}