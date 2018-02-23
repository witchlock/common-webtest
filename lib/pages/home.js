'use strict';

function Elements() {
    return {
        todoText: function () {
            return element(by.model('todoList.todoText'));
        },
        addButton: function () {
            return element(by.css('[value="add"]'));
        },
        todoList: function () {
            return element.all(by.repeater('todo in todoList.todos'));
        },
        completedTasks: function () {
            return element.all(by.css('.done-true'));
        }
    };
}

var HomePage = function () {

    let elements = new Elements();

    this.open = function () {
        return browser.get(browser.params.baseUrl);
    };

    this.addNewTodo = function (text) {
        elements.todoText().sendKeys('write first protractor test');
        return elements.addButton().click();
    };

    this.getTodoList = function () {
        return elements.todoList();
    };

    this.completeTask = function (index) {
        let todoList = this.getTodoList();
        if (index >= todoList.count()) {
            console.log('Ignore action - index is bigger than total tasks ${index}/${totalLength}');
            return;
        } else {
            return todoList.get(index).element(by.css('input')).click();
        }
    };

    this.getTasksCompleted = function () {
        return elements.completedTasks();
    }
};

module.exports = new HomePage();