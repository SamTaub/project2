let part;
function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("image", ev.target.id);
  console.log("dragging"); 
  // console.log(ev.target.id);
  part = ev.target.dataset.part;
  console.log(ev.target.dataset.part);
  
}

function drop(ev) {
  ev.preventDefault();
  console.log("dropped");
  var data = ev.dataTransfer.getData("image");
  document.querySelector(".wrapper")
  .appendChild(document.getElementById(data));
  document.querySelector(".wearing[data-part="+ part +"]").style.display = "block";
 // pictures still show at the bottom.
 // I no longer need to append the images
}
