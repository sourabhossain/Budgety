// Budget Controller
var budgetController = (function() {

    var Expense = funciton(id, description, value) {
    	this.id = id;
    	this.description = description;
    	this.value = value;
    	this.percentage = -1;
    };

    Expense.prototype.calcPercentage = function(totalIncome) {
    	if(totalIncome > 0) {
    		this.percentage = Math.round((this.value / totalIncome) * 100);
    	} else {
    		this.percentage = -1;
    	}
    };

    Expense.prototype.getPercentage = function() {
    	return this.percentage;
    };

    var Income = function(id, description, value) {
    	this.id = id;
    	this.description = description;
    	this.value = value;
    };

    var calculateTotal = function(type) {
    	var sum = 0;

    	data.allItem[type].forEach(function(cur) {
    		sum += cur.value;
    	});

    	data.totals[type] = sum;
    };

    var data = {
    	allItems: {
    		exp: [],
    		inc: []
    	},
    	totals: {
    		exp: 0,
    		inc: 0
    	}
    };

})();

// UI Controller
var UIController = (function() {

    var DOMstrings = {
    	inputType: ".add__type",
    	inputDescription: ".add__description",
    	inputValue: ".add__value",
    	inputBtn: ".add__btn"
    };

    return {
    	getinput: function() {
    		return {
	    		type: document.querySelector(DOMstrings.inputType).value, // will be either inc or exp
	    		description: document.querySelector(DOMstrings.inputDescription).value,
	            value: document.querySelector(DOMstrings.inputValue).value 
            }
    	},

    	getDOMstrings: function() {
    		return DOMstrings;
    	}
    };

})();

// Global App Controller
var controller = (function(budgetCtrl, UICtrl) {
    
    var setupEventListeners = function() {
    	
    };

    var DOM = UICtrl.getDOMstrings();

    var ctrlAddItem = function() {
    	// 1. Get the filed input data
    	var input = UICtrl.getinput();

		// 2. Add the item to the budget controller

		// 3. Add the item to the UI

		// 4. Calculate the budget

		// 5. Display the budget on the UI
    }

	document.querySelector(DOM.inputBtn).addEventListener("click", ctrlAddItem);

	document.addEventListener("keypress", function(event) {
	    
	    if(event.keyCode === 13 || event.which === 13) {
	    	ctrlAddItem();
	    }

	});

})(budgetController, UIController);