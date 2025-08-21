# JavaSCript inline 
 (INSIDE HTML)


# OnClick
The onClick ebent makes the button display an alert when clicked.
Javascript runs inside the browser without extra setup.

Example: 

< body>

    <h1>Welcome to JavaScript</h1>
    <button onclick="alert('Hello JavaScript')">Click Me</button>

# External JavaScript 
to link: place the following insdie < head>

< head>

< script src="script.js">< /script>


inside the .js file type 'console.log' to write a message to the console.

# onLoad

inside .js file onLoad will share a message once the page has loaded

window.onload = function () {
    alert('Welcome to JavaScript')
}

