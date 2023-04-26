const panels = document.querySelectorAll('.panel');

for (let i = 0; i < panels.length; i++) {
	panels[i].addEventListener('click', function() {
		for (let j = 0; j < panels.length; j++) {
			if (i !== j) {
				panels[j].classList.remove('expanded');
			}
		}

		panels[i].classList.toggle('expanded');
	});
}
