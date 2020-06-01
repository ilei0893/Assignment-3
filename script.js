console.log("hello")
 //q1
const container = document.getElementById('container')
 //q2
const jqcontainer= document.querySelector("#container")
//q3
const second=document.getElementsByClassName('second')
//q4
container.getElementsByClassName('third')[1]
//q5
const newtext=document.createTextNode("Hello!")
container.appendChild(newtext)
//q6
const footer=document.getElementsByClassName('footer')
const element=document.createElement('div')
element.className="main";
footer[0].appendChild(element)
//q7
footer[0].removeChild(element)
//q8
const newlielement=document.createElement('li')
//q9
newlielement.innerText="four"
//q10
const ul=document.getElementsByTagName('ul')
ul[0].appendChild(newlielement)
//q12
li=document.getElementsByTagName('li')
for(var i=4;i<7;i++){
    li[i].style.backgroundColor="green"
}
//q13
footer[0].parentNode.removeChild(footer[0])
