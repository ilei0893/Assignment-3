console.log("hello")
//1: Select the section with an id of container without using querySelector.
const container = document.getElementById('container')
//2: Select the section with an id of container using querySelector.
const jqcontainer= document.querySelector("#container")
//3: Select all of the list items with a class of "second".
const second=document.getElementsByClassName('second')
//4: Select a list item with a class of third, but only the list item inside of the ol tag.
container.getElementsByClassName('third')[1]
//5: Give the section with an id of container the text "Hello!".
const newtext=document.createTextNode("Hello!")
container.appendChild(newtext)
//6: Add the class main to the div with a class of footer.
const footer=document.getElementsByClassName('footer')
const element=document.createElement('div')
element.className="main";
footer[0].appendChild(element)
//7: Remove the class main on the div with a class of footer.
footer[0].removeChild(element)
//8: Create a new li element.
const newlielement=document.createElement('li')
//9: Give the li the text "four".
newlielement.innerText="four"
//10: Append the li to the ul element.
const ul=document.getElementsByTagName('ul')
ul[0].appendChild(newlielement)
//12: Loop over all of the lis inside the ol tag and give them a background color of "green".
li=document.getElementsByTagName('li')
for(var i=4;i<7;i++){
    li[i].style.backgroundColor="green"
}
//13: Remove the div with a class of footer.
footer[0].parentNode.removeChild(footer[0])
