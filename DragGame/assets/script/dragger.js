function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);

    var dragIcon = document.createElement("img");
    var img = ev.target.src;
    dragIcon.src = img;
    dragIcon.style.width = "100px";
    var div = document.createElement('div');
    div.appendChild(dragIcon);
    div.style.position = "absolute"; div.style.top = "0px"; div.style.left= "-500px";
    document.querySelector('body').appendChild(div);
    ev.dataTransfer.setDragImage(div,50,50);

}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    if ( ev.target.nodeName !== "IMG" ) {
      ev.target.appendChild(document.getElementById(data));
    }
}
