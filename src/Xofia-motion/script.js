     
     
     
     let selectedThing = null;
     const things = document.querySelectorAll('.thing');
     const selectedThingText = document.getElementById('selectedThingText');
     const resetButton = document.getElementById('resetButton');

     const buttons = {
         animation1: document.getElementById('animation1'),
         animation2: document.getElementById('animation2'),
         animation3: document.getElementById('animation3'),  
     };

     things.forEach(thing => {
         thing.addEventListener('click', () => {
             if(selectedThing !== thing) {
                 if(selectedThing) {
                    thing.classList.add('red');
                     selectedThing.classList.remove('selected');
                 }
                 selectedThing = thing;
                 selectedThing.classList.add('selected');
                 selectedThingText.textContent = `Seleccionaste: ${thing.querySelector('p').textContent}`;
                 enableButtons();
             }
         });
     });

  // Habilitar seleccionar cosas
  function enableButtons() {
    Object.values(buttons).forEach(button => 
        button.disabled = false);
}
  
  Object.entries(buttons).forEach(([animation, button]) => {
    button.addEventListener('click', () => {
        if (selectedThing) {
            selectedThing.className = 'thing selected'; // Reset classes but keep selection
            selectedThing.classList.add(animation);
            disableButtons(); // Disable buttons after selecting anima
            things.forEach(thing => thing.style.pointerEvents = 'none');
            resetButton.disabled = false;
        }
    });
  });

 function disableButtons() {
 Object.values(buttons).forEach(button => 
 button.disabled = true);
 }

 resetButton.addEventListener('click', () => {
     if(selectedThing) {
         selectedThing.className = 'thing';
         selectedThing = null;
         selectedThingText.textContent = 'Selecciona una cosa';

         things.forEach(thing => thing.style.pointerEvents = 'auto' );
         resetButton.disabled = true;
         disableButtons();
     }
 });


// Add styles selected thing
// let toggleStateThing = true;
// things.forEach(thing => thing.addEventListener('click', () => {    
//     if(toggleStateThing) {        
//         thing.classList.add('red');    
//     }    else {        
//         thing.style.backgroundColor = 'red';
//     } 
//     toggleStateThing = !toggleStateThing;
// }));


