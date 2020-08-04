// Esta función de JS hace que cambie la hoja de estilos dinámicamente en el HTML dándole al botón switch (parte superior derecha)

function changeStyleSheet() {
	var changeBG = document.getElementById('change-bg');

	if (changeBG.checked) {
		document.getElementById('white-sheet').href = './assets/styles.css';
		changeBG.checked = false;
	} else {
		document.getElementById('white-sheet').href = './assets/black-theme.css';
		changeBG.checked = true;
	}
	console.log(changeBG);
}
