var HomePage = function(){

    this.addNewTodo = function(text){
            element(by.model('todoList.todoText')).sendKeys('write first protractor test');
            element(by.css('[value="add"]')).click();
    };

    this.getTodoList = function(){
            return element.all(by.repeater('todo in todoList.todos'));
    };

    this.completeTask = function(index){
            let todoList = this.getTodoList();
           if(index >= todoList.count()){
                console.log('Ignore action - index is bigger than total tasks ${index}/${totalLength}');
           } else {
                todoList.get(index).element(by.css('input')).click();
           }
    };

    this.getTasksCompleted = function(){
        return element.all(by.css('.done-true'));
    }

}

module.exports = new HomePage();