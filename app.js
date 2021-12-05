var mainBox = document.getElementById("mainBox");
// console.log(mainBox);

function addItem() {
    var titleInp = document.getElementById("titleInp");
    var textInp = document.getElementById("textInp");

    if (titleInp.value.length > 2 && textInp.value.length > 2) {
        //create box//
        var box = document.createElement("div");
        box.setAttribute("class", "myBox animate__animated animate__backInUp");

        //create section
        var section = document.createElement("section");
        section.setAttribute("class", "list");
        box.appendChild(section);

        // create h4 for title
        var h4 = document.createElement("h4");
        var h4Text = document.createTextNode(titleInp.value);
        h4.appendChild(h4Text);
        section.appendChild(h4);

        // create p for input text
        var para = document.createElement("p");
        var paraText = document.createTextNode(textInp.value);
        para.appendChild(paraText);
        section.appendChild(para);

        //create h6 for set edit icon and 
        var h6 = document.createElement("h6");
        h6.innerHTML = "<i onclick='dlt(this)' class='fas fa-minus-circle'></i><i onclick='edit(this)' class='fas fa-edit'></i>";
        section.appendChild(h6);

        // console.log(h6);
        // console.log(box);
        mainBox.appendChild(box);
        textInp.value = "";
        titleInp.value = "";
    }else{
        alert("Enter Value Please...!")
    }
}

//delete All Function
function dltAll() {
    mainBox.innerHTML = "";
}

//one remove function
function dlt(e) {
    // console.log(e.parentNode.parentNode.parentNode)
    e.parentNode.parentNode.parentNode.remove();
}

//edit function
function edit(e) {
    // console.log(e.parentNode.parentNode.firstChild.nextSibling);
    var val = e.parentNode.parentNode.firstChild.innerHTML;
    var editTitle = prompt("Edit Title Sir", val);
    e.parentNode.parentNode.firstChild.innerHTML = editTitle;
    var val2 = e.parentNode.parentNode.firstChild.nextSibling.innerHTML;
    var editText = prompt("Edit Text Sir", val2);
    e.parentNode.parentNode.firstChild.nextSibling.innerHTML = editText;


}