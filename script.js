document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('infix-display');

    // Declare an object to store memory registers
    let memoryRegisters = {};

    // Function to display array contents
    function displayArray() {
        // Access the memory display input element
        const memoryDisplayinfix = document.getElementById("memory-display-infix");
        const memoryDisplayrpn = document.getElementById("memory-display-rpn");
        const memoryDisplayoop = document.getElementById("memory-display-oop");



        // Iterate through memoryRegisters keys and concatenate their values
        var memoryOutput = "";
        for (let key in memoryRegisters) {
            // Concatenate key and value
            memoryOutput += key + " - " + memoryRegisters[key] + "\n"; // Add each element followed by a newline
        }

        // Update the value of the memory display input element
        memoryDisplayinfix.value = memoryOutput;
        memoryDisplayrpn.value = memoryOutput;
        memoryDisplayoop.value = memoryOutput;
    }


    // Function to save value to memory register
    function saveToMemoryRegister(register, value) {
        memoryRegisters[register] = value;
        displayArray();

    }

    // Function to recall value from memory register
    function recallFromMemoryRegister(register) {
        if (memoryRegisters.hasOwnProperty(register)) {
            display.value = memoryRegisters[register];
            output.value = memoryRegisters[register];
            stackDisplay.value = memoryRegisters[register];

        } else {
            display.value = 'Undefined';
        }
    }


    // Function to clear memory register
    function clearMemoryRegister(register) {
        delete memoryRegisters[register];
        displayArray();
    }

    // Add event listeners for memory buttons in the infix-brackets calculator section
    document.querySelectorAll('.infix-memory-save').forEach(button => {
        button.addEventListener('click', function () {
            const register = prompt('Enter memory register (e.g., A1):');
            if (register) {
                saveToMemoryRegister(register, parseFloat(display.value));
            }
        });
    });

    document.querySelectorAll('.infix-memory-recall').forEach(button => {
        button.addEventListener('click', function () {
            const register = prompt('Enter memory register to recall (e.g., A1):');
            if (register) {
                recallFromMemoryRegister(register);
            }
        });
    });

    document.querySelectorAll('.infix-memory-clear').forEach(button => {
        button.addEventListener('click', function () {
            const register = prompt('Enter memory register to clear (e.g., A1):');
            if (register) {
                clearMemoryRegister(register);
            }
        });
    });

    // Add event listeners for memory buttons in the RPN calculator section
    document.querySelectorAll('.rpn-memory-save').forEach(button => {
        button.addEventListener('click', function () {
            const register = prompt('Enter memory register (e.g., A1):');
            if (register) {
                saveToMemoryRegister(register, parseFloat(stackDisplay.value));
            }
        });
    });

    document.querySelectorAll('.rpn-memory-recall').forEach(button => {
        button.addEventListener('click', function () {
            const register = prompt('Enter memory register to recall (e.g., A1):');
            if (register) {
                recallFromMemoryRegister(register);
            }
        });
    });

    document.querySelectorAll('.rpn-memory-clear').forEach(button => {
        button.addEventListener('click', function () {
            const register = prompt('Enter memory register to clear (e.g., A1):');
            if (register) {
                clearMemoryRegister(register);
            }
        });
    });

    // Add event listeners for memory buttons in the infix calculator section
    document.querySelectorAll('.infix-brackets-memory-save').forEach(button => {
        button.addEventListener('click', function () {
            const register = prompt('Enter memory register (e.g., A1):');
            if (register) {
                saveToMemoryRegister(register, parseFloat(output.value));
            }
        });
    });

    document.querySelectorAll('.infix-brackets-memory-recall').forEach(button => {
        button.addEventListener('click', function () {
            const register = prompt('Enter memory register to recall (e.g., A1):');
            if (register) {
                recallFromMemoryRegister(register);
            }
        });
    });

    document.querySelectorAll('.infix-brackets-memory-clear').forEach(button => {
        button.addEventListener('click', function () {
            const register = prompt('Enter memory register to clear (e.g., A1):');
            if (register) {
                clearMemoryRegister(register);
            }
        });
    });


    function addToDisplay(value) {
        display.value += value;
    }

    function calculate() {
        try {
            // Split the expression by operators
            const tokens = display.value.split(/([+\-x\/])/);

            // Initialize result to the first number
            let result = parseFloat(tokens[0]);

            // Iterate through the tokens and perform calculations
            for (let i = 1; i < tokens.length; i += 2) {
                const operator = tokens[i];
                const operand = parseFloat(tokens[i + 1]);
                if (operator === '+') {
                    result += operand;
                } else if (operator === '-') {
                    result -= operand;
                } else if (operator === 'x') {
                    result *= operand;
                } else if (operator === '/') {
                    result /= operand;
                }
            }

            display.value = result;

            // Log the result to the server
            logKeypress(`Result: ${result}`, 'infix');
        } catch (error) {
            display.value = 'Error';
        }
    }

    function clearDisplay() {
        display.value = '';
    }

    // Add event listeners for buttons in the infix calculator
    document.getElementById('button-infix-1').addEventListener('click', function () {
        addToDisplay('1');
        logKeypress('1', 'infix');
    });
    document.getElementById('button-infix-2').addEventListener('click', function () {
        addToDisplay('2');
        logKeypress('2', 'infix');
    });
    document.getElementById('button-infix-3').addEventListener('click', function () {
        addToDisplay('3');
        logKeypress('3', 'infix');
    });
    document.getElementById('button-infix-4').addEventListener('click', function () {
        addToDisplay('4');
        logKeypress('4', 'infix');
    });
    document.getElementById('button-infix-5').addEventListener('click', function () {
        addToDisplay('5');
        logKeypress('5', 'infix');
    });
    document.getElementById('button-infix-6').addEventListener('click', function () {
        addToDisplay('6');
        logKeypress('6', 'infix');
    });
    document.getElementById('button-infix-7').addEventListener('click', function () {
        addToDisplay('7');
        logKeypress('7', 'infix');
    });
    document.getElementById('button-infix-8').addEventListener('click', function () {
        addToDisplay('8');
        logKeypress('8', 'infix');
    });
    document.getElementById('button-infix-9').addEventListener('click', function () {
        addToDisplay('9');
        logKeypress('9', 'infix');
    });
    document.getElementById('button-infix-0').addEventListener('click', function () {
        addToDisplay('0');
        logKeypress('0', 'infix');
    });
    document.getElementById('button-infix-plus').addEventListener('click', function () {
        addToDisplay('+');
        logKeypress('+', 'infix');
    });
    document.getElementById('button-infix-minus').addEventListener('click', function () {
        addToDisplay('-');
        logKeypress('-', 'infix');
    });
    document.getElementById('button-infix-multiply').addEventListener('click', function () {
        addToDisplay('x');
        logKeypress('x', 'infix');
    });
    document.getElementById('button-infix-divide').addEventListener('click', function () {
        addToDisplay('/');
        logKeypress('/', 'infix');
    });
    // Add event listeners for other buttons in the infix calculator

    document.getElementById('button-infix-equal').addEventListener('click', function () {
        logKeypress('=', 'infix');
        calculate();
    });

    document.getElementById('button-infix-clear').addEventListener('click', function () {
        clearDisplay();
        // Send a request to clear the CSV for the 'infix' calculator
        fetch('/clear', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ type: 'infix' }),
        })
            .then(response => {
                if (!response.ok) {
                    console.error('Failed to clear CSV');
                }
            })
            .catch(error => {
                console.error('Error clearing CSV:', error);
            });
    });

    const rpnDisplay = document.getElementById('rpn-display');
    const stackDisplay = document.getElementById('stack-display');
    const stack = []; // Array to store values in the stack

    function addToRPNDisplay(value) {
        rpnDisplay.value += value;
    }

    function clearRPNDisplay() {
        rpnDisplay.value = '';
        // Send a request to clear the CSV for the 'rpn' calculator
    }

    function updateStackDisplay(currentValue) {
        stackDisplay.value = currentValue;
    }

    function performOperation(operator, operand1, operand2) {
        if (operator === '+') {
            return operand1 + operand2;
        } else if (operator === '-') {
            return operand1 - operand2;
        } else if (operator === 'x') {
            return operand1 * operand2;
        } else if (operator === '/') {
            return operand1 / operand2;
        }
    }

    // Add event listeners for buttons in the RPN calculator
    document.getElementById('button-rpn-1').addEventListener('click', function () {
        addToRPNDisplay('1');
        logKeypress('1', 'rpn');
    });
    document.getElementById('button-rpn-2').addEventListener('click', function () {
        addToRPNDisplay('2');
        logKeypress('2', 'rpn');
    });
    document.getElementById('button-rpn-3').addEventListener('click', function () {
        addToRPNDisplay('3');
        logKeypress('3', 'rpn');
    });
    document.getElementById('button-rpn-4').addEventListener('click', function () {
        addToRPNDisplay('4');
        logKeypress('4', 'rpn');
    });
    document.getElementById('button-rpn-5').addEventListener('click', function () {
        addToRPNDisplay('5');
        logKeypress('5', 'rpn');
    });
    document.getElementById('button-rpn-6').addEventListener('click', function () {
        addToRPNDisplay('6');
        logKeypress('6', 'rpn');
    });
    document.getElementById('button-rpn-7').addEventListener('click', function () {
        addToRPNDisplay('7');
        logKeypress('7', 'rpn');
    });
    document.getElementById('button-rpn-8').addEventListener('click', function () {
        addToRPNDisplay('8');
        logKeypress('8', 'rpn');
    });
    document.getElementById('button-rpn-9').addEventListener('click', function () {
        addToRPNDisplay('9');
        logKeypress('9', 'rpn');
    });
    document.getElementById('button-rpn-0').addEventListener('click', function () {
        addToRPNDisplay('0');
        logKeypress('0', 'rpn');
    });
    document.getElementById('button-rpn-enter').addEventListener('click', function () {
        const currentValue = parseFloat(rpnDisplay.value);
        if (!isNaN(currentValue)) {
            stack.push(currentValue); // Add the new value to the stack
            rpnDisplay.value = ''; // Clear the RPN display after 'Enter'
            updateStackDisplay(currentValue); // Update the stack display
        }
        logKeypress('enter', 'rpn');
    });

    document.getElementById('button-rpn-clear').addEventListener('click', function () {
        rpnDisplay.value = '';
        stackDisplay.value = '';

        fetch('/clear', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ type: 'rpn' }),
        })
            .then(response => {
                if (!response.ok) {
                    console.error('Failed to clear CSV');
                }
            })
            .catch(error => {
                console.error('Error clearing CSV:', error);
            });
    });


    // Add event listeners for operator buttons in the RPN calculator
    document.getElementById('button-rpn-plus').addEventListener('click', function () {
        logKeypress('+', 'rpn');
        updateStackDisplay(parseFloat(stackDisplay.value) + parseFloat(rpnDisplay.value));
        logKeypress(`Result: ${stackDisplay.value}`, 'rpn');
        rpnDisplay.value = '';
    });
    document.getElementById('button-rpn-minus').addEventListener('click', function () {
        logKeypress('-', 'rpn');
        updateStackDisplay(parseFloat(stackDisplay.value) - parseFloat(rpnDisplay.value));
        logKeypress(`Result: ${stackDisplay.value}`, 'rpn');
        rpnDisplay.value = '';
    });

    document.getElementById('button-rpn-multiply').addEventListener('click', function () {
        logKeypress('x', 'rpn');
        updateStackDisplay(parseFloat(stackDisplay.value) * parseFloat(rpnDisplay.value));
        logKeypress(`Result: ${stackDisplay.value}`, 'rpn');
        rpnDisplay.value = '';
    });

    document.getElementById('button-rpn-divide').addEventListener('click', function () {
        logKeypress('/', 'rpn');
        updateStackDisplay(parseFloat(stackDisplay.value) / parseFloat(rpnDisplay.value));
        logKeypress(`Result: ${stackDisplay.value}`, 'rpn');
        rpnDisplay.value = '';
    });


    const output = document.getElementById("oop-display");
    const buttons = document.getElementById("infix-brackets-buttons");

    // Function to handle button clicks
    function handleClick(event) {
        const buttonClicked = event.target;

        // Check if the clicked element is a button
        if (buttonClicked.nodeName !== 'BUTTON') {
            return; // Exit the function early if not a button
        }

        const buttonValue = buttonClicked.textContent;

        if (buttonValue === "Enter") {
            try {
                // Replace 'x' with '*' before evaluating the expression
                const expression = output.value.replace(/x/g, '*');
                const result = eval(expression); // Using eval for simplicity, consider using a safer evaluation method
                output.value = result;
            } catch (error) {
                output.value = "Error";
            }
            // Log the 'Enter' button press (you might want to log the result here as well)
            logKeypress('Enter', 'order');
            logKeypress(`Result: ${output.value}`, 'order');
        } else if (buttonValue === "Clear") {
            output.value = "";

            //Clear the CSV for the 'order' calculator
            fetch('/clear', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ type: 'order' }),
            })
                .then(response => {
                    if (!response.ok) {
                        console.error('Failed to clear CSV');
                    }
                })
                .catch(error => {
                    console.error('Error clearing CSV:', error);
                });
        } else if (buttonValue === "Memory Save" || buttonValue === "Memory Clear" || buttonValue === "Memory Recall") {
            return;
        } else {
            output.value += buttonValue;
            // Log numeric and operator button presses
            logKeypress(buttonValue, 'order');
        }
    }

    // Attach click event listener to all buttons
    buttons.addEventListener("click", handleClick);
});


function logKeypress(buttonValue, calculatorType) {
    const timestamp = new Date().toISOString(); // Get current time in ISO format

    // Send a POST request to the server with the timestamp, button value, and calculator type
    fetch('/log', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ timestamp, button: buttonValue, type: calculatorType }),
    })
        .then(response => {
            if (!response.ok) {
                console.error('Failed to log keypress');
            }
        })
        .catch(error => {
            console.error('Error logging keypress:', error);
        });
}