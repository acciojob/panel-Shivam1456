//your JS code here. If required.
const panels = document.querySelectorAll('.panel');

panels.forEach (panel => {

panel.addEventListener('click', () => { 

removeActiveclasses();
	panel.classList.add('active');

    })

})

function removeActiveClasses(){
  panels.forEach (panel => {
panel.classList.remove('active');

    })
}