		/* STEP 1: Declare variables
		Use a-z, 0-9, A-Z and underscores, avoiding reserved names
		All program variables are generally declared at the beginning */
		let myName;
		let myAge;

		/* STEP 2: Initialize variables
		Don't confuse a variable with no value with one that doesn't exist at all */
		myName = "Cody";
		myAge = 21;


		/* STEP 3: Updating variables
		Once a variable has been declared, this can be done any time */
		myName = "John";
		myAge = 33;

		// STEP 4: Variable types (use typeof in the console)
		// Numbers
		let num = 5;
		// Strings (use '' or "")
		let string = "hello world";
		let year = "2025";
		console.log('words words ${year} ${string}');
		// Booleans
		let TF = true; 
		// Arrays
		let array = [10, 34, 31, 284, 423];
		let wordarray = ["word", "aaaa", "bbbb"];
		let mixarray = ["word", 123, false];
		// Objects
		//myDog.age in console prints 6
		let myDog = {
			name: "rufus",
			breed: "retriever",
			size: "large",
			age: "6",
			goodDog: true
		};

		// STEP 5: Typing (JavaScript is a loosely-typed language)
		
