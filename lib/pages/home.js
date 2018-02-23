var HomePage = function(){

  this.open = async function() {
    return await browser.get('/');
  }

  this.addNewTodo = async function(text) {
    await element(by.model('todoList.todoText')).sendKeys('write first protractor test');
    return await element(by.css('[value="add"]')).click();
  }

  this.getTodoList = async function(){
    return await element.all(by.repeater('todo in todoList.todos'));
  };

  this.completeTask = async function(index) {
    let todoList = await getTodoList();
       if(index >= todoList.count()){
            console.log('Ignore action - index is bigger than total tasks ${index}/${totalLength}');
            return ;
       } else {
            return await todoList.get(index).element(by.css('input')).click();
       }
  }

   this.getTasksCompleted= async function(){
        return await element.all(by.css('.done-true'));
    }
}

module.exports = new HomePage();