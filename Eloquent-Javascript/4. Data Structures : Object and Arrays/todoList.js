/* 

======= Basic Todo list. =======

This program manages a queue of tasks. You add tasks to the end of the queue by calling remember("groceries"), and when you’re ready to do something, you call getTask() to get (and remove) the front item from the queue. The rememberUrgently function also adds a task but adds it to the front instead of the back of the queue.

*/


let todoList = [];

function remember(event) {
  todoList.push(event);
}

function getTask() {
  todoList.shift();
}

function rememberUrgent(event) {
  todoList.unshift(event);
}

remember("Submit CS50 Week 1 Problem set")
console.log("remember() : ", todoList);
// remember() :  [ 'Submit CS50 Week 1 Problem set' ]

rememberUrgent("Update your CS50 account")
console.log("remeberUrgently() : ", todoList);
// remeberUrgently() :  [ 'Update your CS50 account', 'Submit CS50 Week 1 Problem set' ]

getTask()
console.log("getTask() : ", todoList);
// remember() :  [ 'Submit CS50 Week 1 Problem set' ]



