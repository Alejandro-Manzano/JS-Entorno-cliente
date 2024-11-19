let win;

        document.getElementById("b1").onclick = () => {
            window.print();
        }

        document.getElementById("b2").onclick = () => {
            win = window.open('', '','location=yes,left=1300px');
            win.resizeTo(600,200);
            win.document.write("Ventana creada con open");
            win.focus();

        };

        document.getElementById("b3").onclick = () => {
            if (win) { 
                win.focus();
                win.resizeTo(win.outerWidth+10, win.outerHeight+10); 
            } 
        };

        document.getElementById("b4").onclick = () => {
            if (win) { 
                win.focus();
                win.resizeTo(win.outerWidth-10, win.outerHeight-10); 
            } 
        }

        document.getElementById("b5").onclick = () => {
            if (win) { 
                win.focus();
                win.resizeTo(600,600); 
            } 
        }

        document.getElementById("b6").onclick = () => {
            if (win) { 
                win.focus();
                win.moveTo(1,1000);
            } 
        }

        document.getElementById("b7").onclick = () => {
            if (win) {
                win.close();
            }
        }

