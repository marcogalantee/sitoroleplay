const elementiCorso = document.querySelectorAll(".corso");
    
        // Aggiungi un gestore per l'evento click a ciascun elemento
        elementiCorso.forEach(function(elemento) {
            elemento.addEventListener("click", function() {
                // Cambia il colore del testo in rosso
               if( this.style.color === "red"){
                this.style.color = "black";
               }
               else{
                this.style.color = "red";
               }
            });
        });

