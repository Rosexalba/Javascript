# JavaScript Events 
What you will learn
- understanding javascript events
- handling user interactions (click,keydown,mouseover, etc.)
- adding and removing event listeners
- mini project: interactive color changer 

# Understanding an event 
: event is an action that happens in the browser, like a click, key press or a mouse move and javascript can listen for these events and run code when they happen. common events are like click, double click, mouse over,mouse out, key down, key up, change, and submit. 

# Handeling user interaction

# click 
 - handling mouse clicks you can handle clicks directly in HTML
 adding through javascript
 
 < body>

    <button id="btn">Click Me</button>
    <script>
        function sayHello() {
            alert("Hello,Javascript");
        }
        
        const button = document.getElementById("btn")

        button.addEventListener("click", sayHello);

# Hover effects 

 ## mouseover 

< body>

    <p id="hoverText">Hover over me!</p>
    
 < script>
      
        button.addEventListener("click", () => {
            alert("Hello from JAVA")
        });


        const text = document.getElementById("hoverText");

        text.addEventListener("mouseover", function(){
            text.style.color = "red";
        });
   - now when you hover over the text it will turn red but it wont turn back that is where you add a mouseout 

 ## mouseout

   < script>
   
        text.addEventListener("mouseout", function () {
            text.style.color = "black";
        });

## keydown / key up 
: everytime a key is realeased the input value is displayed

< body>

    <input type="text" id="textInput" placeholder="Type something..." />
    <p id="displayText"></p>

    < script>

        const input = document.getElementById("textInput"); 
        const display = document.getElementById("displayText");

        input.addEventListener("keyup", function (event) {
            display.textContent = "You Typed: " + event.target.value;
        });

## change 
: detecting input changes so it detects when a user changes a drop-down selection

< body>

    <select id="dropdown">
        <option value="">Please select</option>
        <option value="apple">Apple</option>
        <option value="banana">banana</option>
        <option value="cherry">cherry</option>
           
    </select>

    <p id="output"></p>

 < script>

        const dropdown = document.getElementById("dropdown");
        const output = document.getElementById("output")

        dropdown.addEventListener("change", function () {
            output.textContent = "you selected:" + dropdown.value;
        });

# Removing event listeners 
: remove listener always needs to have a name function and to know what to do 

   < script>

        function handleClick() {
            console.log("handle click");
            btn.removeEventListener("click", handleClick)
        }
