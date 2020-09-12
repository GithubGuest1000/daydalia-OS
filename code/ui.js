function $window(name, width, height, code, xbutton){
  var close = function(){
    console.log("triffer")
  }
  let element = document.createElement('div')
  if(xbutton){
    let elementX = document.createElement('button');
    elementX.innerHTML = "X"
    elementX.setAttribute( "onClick", "document.getElementById('container').removeChild("+name+")");
    console.log(elementX)
    elementX.id = name+"X"
    elementX.className = "xbutton";
    element.appendChild(elementX)

  }
  element.id = name
  element.className = "ui-widget-content"
  element.style.width = width.toString()+"px";
  element.style.height = height.toString()+"px";
  element.innerHTML += code
  document.getElementById('container').appendChild(element)
  $(function() {
     $("#"+name).draggable().resizable();
  });
          
}