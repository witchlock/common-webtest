const env = CONTEXT.env;
var homePage = require('../../lib/pages/home.js');
var supporter = require('../../lib/support.js');

describe('angularjs homepage todo list', function () {
    it('should add a todo', function () {
        browser.get(env.baseUrl);
        homePage.addNewTodo('learn reactjs');
        let todoList = homePage.getTodoList();
        expect(todoList.count()).toEqual(3);
        expect(todoList.get(2).getText()).toEqual('write first protractor test');
        homePage.completeTask(2);
        var taskCompleted = homePage.getTasksCompleted();
        expect(taskCompleted.count()).toEqual(2);
        browser.takeScreenshot(function(png){
            supporter.screenshot(png, 'todolist.png');
        });
    });
});
