const item = document.querySelector('.item');
document.querySelectorAll('.placeholder').forEach(element => {
   element.ondragover = event => event.preventDefault();
   
   element.ondragenter = event => event.target.classList.add('hovered');
   
   element.ondragleave = event => removeHovered(event.target);

   element.ondrop = event => {
      let that = event.target;
      removeHovered(that);
      if (!that.contains(item)) that.append(item);
   }
})

function removeHovered (area) {
   area.classList.remove('hovered');
}