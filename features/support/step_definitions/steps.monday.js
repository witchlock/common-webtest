'use strict';

let homePage = global.Pages.HomePage;

Given(/^a wonderful monday$/, function () {
    homePage.open();
    return homePage.addNewTodo("A new day");
});

When(/^I start in the morning$/, function () {
    let todoList = homePage.getTodoList();
    return expect(todoList.count()).to.eventually.equal(3);
});

Then(/^I should cheer up$/, function () {
    homePage.completeTask(2);
    let completed = homePage.getTasksCompleted();
    return expect(completed.count()).to.eventually.equal(2);
});

