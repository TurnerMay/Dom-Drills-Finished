document.addEventListener("DOMContentLoaded", function() {

let div = document.createElement("div");
div.className = "header-container";
let h1 = document.createElement("h1");
let h1Text = document.createTextNode("This is an h1");

h1.appendChild(h1Text);
div.appendChild(h1);
h1.className = "h1"
document.body.appendChild(div);

let h2 = document.createElement('h2')
let h2Text = document.createTextNode('This is an h2')
h2.appendChild(h2Text)
h2.className = "h2"
div.appendChild(h2)

let h3 = document.createElement('h3')
let h3Text = document.createTextNode('This is an h3')
h3.appendChild(h3Text)
h3.className = "h3"
div.appendChild(h3)

let h4 = document.createElement('h4')
let h4Text = document.createTextNode('This is an h4')
h4.appendChild(h4Text)
h4.className = "h4"
div.appendChild(h4)

let h5 = document.createElement('h5')
let h5Text = document.createTextNode('This is an h5')
h5.appendChild(h5Text)
h5.className = "h5"
div.appendChild(h5)

let h6 = document.createElement('h6')
let h6Text = document.createTextNode('This is an h6')
h6.appendChild(h6Text)
h6.className = "h6"
div.appendChild(h6)

let headingColors = ["#007bff", // Primary (Blue)
"#6c757d", // Secondary (Dark Grey)
"#28a745", // Success (Green)
"#dc3545", // Danger (Red)
"#ffc107", // Warning (Yellow)
"#17a2b8", // Info (Teal)
"#f8f9fa", // Light (Light Grey)
"#343a40" ]

function getColor() {
    let color = headingColors[Math.floor(Math.random()*headingColors.length)]

    return color
}

h1.addEventListener("dblclick", function() {
    let headingColors = getColor();
    h1.style.color = getColor();

})

h2.addEventListener("dblclick", function() {
    let headingColors = getColor();
    h2.style.color = getColor();

})

h3.addEventListener("dblclick", function() {
    let headingColors = getColor();
    h3.style.color = getColor();

})

h4.addEventListener("dblclick", function() {
    let headingColors = getColor();
    h4.style.color = getColor();

})

h5.addEventListener("dblclick", function() {
    let headingColors = getColor();
    h5.style.color = getColor();

})

h6.addEventListener("dblclick", function() {
    let headingColors = getColor();
    h6.style.color = getColor();

})

let ul = document.createElement("ul"); 
    div.appendChild(ul); 

    let liCount = 0;

    function addToList() {
        liCount++; 
        let li = document.createElement("li"); 
        let liTxt = document.createTextNode("This is list item " + liCount);
        li.appendChild(liTxt);
        ul.appendChild(li);

        let myRandomColor = getColor();
            li.style.color = myRandomColor;
        
        li.addEventListener("click", function() {
            let myRandomColor = getColor();
            li.style.color = myRandomColor;
        });

       
        li.addEventListener("dblclick", function() {
            this.remove();
        });
    };

    let Btn1 = document.getElementsByClassName ("Btn1")
    
    Btn1[0].addEventListener("click", addToList);


})