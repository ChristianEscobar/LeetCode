/**
 * Initialize your data structure here.
 */
 var MyStack = function() {
	this.queue1 = [];
	this.queue2 = [];
};

/**
* Push element x onto stack. 
* @param {number} x
* @return {void}
*/
MyStack.prototype.push = function(x) {
	this.queue1.unshift(x);
};

/**
* Removes the element on top of the stack and returns that element.
* @return {number}
*/
MyStack.prototype.pop = function() {
	let returnValue = null;
	while(this.queue1.length > 1) {	
		this.queue2.unshift(this.queue1.pop());
	}

	returnValue = this.queue1.pop();

	while(this.queue2.length !== 0) {
		this.queue1.unshift(this.queue2.pop());
	}

	return returnValue;
};

/**
* Get the top element.
* @return {number}
*/
MyStack.prototype.top = function() {
	let returnValue = null;
	while(this.queue1.length > 1) {	
		this.queue2.unshift(this.queue1.pop());
	}

	returnValue = this.queue1[0];
	this.queue2.unshift(this.queue1.pop());

	while(this.queue2.length !== 0) {
		this.queue1.unshift(this.queue2.pop());
	}

	return returnValue;
};

/**
* Returns whether the stack is empty.
* @return {boolean}
*/
MyStack.prototype.empty = function() {
	return this.queue1.length === 0 && this.queue2.length === 0;
};


let obj = new MyStack();
obj.push(1);
obj.push(2);
obj.push(3);
obj.top();
obj.pop();
obj.pop();
obj.pop();
obj.empty();
