# DOM Manipulation
What we will learn
- Understanding the document object model (DOM)
- Selecting Elements (getElementByld, querySelector, querySelectorAll)
- Modifying Elements (textContent, innerHTML, Style)
- creating, adding, and removing elements 
- mini project: interactive TO-DO list 

# Understanding the DOM
what is the DOM?
The document object model is a tree like structure that represents an HTML document. Javascript can access and modify the DOM to change webpage content dynamically 


- below we are creating a button and once you click it the "welcome to java script" will change to "Dom manipulation" 

< body>

    <h1 id="main-heading">Welcome to Javascript</h1>
    <p class="description">This is a paragraph</p>
    <button onclick= "changeText()">Click Me</button>

    < script>

        function changeText() {
            document.getElementById("main-heading").textContent = 
            "DOM Manipulation is awesome.";
        }

# Selecting Elements in the DOM

1. getElementById:

console.log(document.getElementById("main-heading").textContent)

2. getElementsByClass

const paragraphs = document.getElementsByClassName("description")
<br/>
         // console.log("paragraphs=", paragraphs);
        <br/> or
        // console.log('paragraphs[0].textContent=', paragraphs [0].textContent);

3. getElementsByTagName

 const buttons = document.getElementsByTagName("button");
        <br/>
        console.log("buttons =", buttons);

- whenever it has an S at the end of elements youre always going to expect an array or and HTML collection and if it just element you can expect just on single element. 

4. querySelector()

  const firstParagraph = document.querySelector(".description");
         <br/>
        console.log(firstParagraph.textContent);
- queryselector() gets the first find from top to bottom of the query

If you want all of them: 

const allParagraphs = document.querySelectorAll(".description");
<br/>
        allParagraphs.forEach((para) => console.log(para.textContent));


#  Modifying Elements 
const heading = document.getElementById("main-heading");

1.  textContent : change text of header
 heading.textContent = "NEW HEADING";

2. innerHTML : change style of header 
 heading.innerHTML = "< span style='color: red'>styled< /span>heading"

3. style : change style using .style

        heading.style.color = "blue";
<br/>
        heading.style.fontSize = "24px";
<br/>
        heading.style.textAlign = "Center";

- youll notice these styling properties are very much like Css but they're camel cased and theres not hypen in the middle. not kabob cased.
        