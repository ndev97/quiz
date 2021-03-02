function Listo() {

    let contador = 0;
    let preg1 = document.form.pregunta1.value;
    let preg2 = document.form.pregunta2.value;
    let preg3 = document.form.pregunta3.value;
    let preg4 = document.form.pregunta4.value;

    if(preg1 == "" || preg2 == "" || preg3 =="" || preg4 == ""){
        alert("FALTA COMPLETAR");
        return;
    }

    const pregun1 = document.getElementById("pregun1");
    const element1 = document.createElement("div");
    if (preg1 == "2007"){
        contador++;
        element1.innerHTML =
        `<div class="correcto">
            <p>Correcto!</p>
        </div>`;
        pregun1.appendChild(element1);
        setTimeout(function() {
            document.querySelector(".correcto").remove();
        }, 6000);
    } else {
        element1.innerHTML = 
        `<div class="incorrecto">
            <p>Incorrecto!</p>
        </div>`;
        pregun1.appendChild(element1);
        setTimeout(function() {
            document.querySelector(".incorrecto").remove();
        }, 6000);
    }

    const pregun2 = document.getElementById("pregun2");
    const element2 = document.createElement("div");
    if (preg2 == "SRV"){
        contador++;
        element2.innerHTML =
        `<div class="correcto">
            <p>Correcto!</p>
        </div>`;
        pregun2.appendChild(element2);
        setTimeout(function() {
            document.querySelector(".correcto").remove();
        }, 6000);
    } else {
        element2.innerHTML = 
        `<div class="incorrecto">
            <p>Incorrecto!</p>
        </div>`;
        pregun2.appendChild(element2);
        setTimeout(function() {
            document.querySelector(".incorrecto").remove();
        }, 6000);
    }

    const pregun3 = document.getElementById("pregun3");
    const element3 = document.createElement("div");
    if (preg3 == "Ru"){
        contador++;
        element3.innerHTML =
        `<div class="correcto">
            <p>Correcto!</p>
        </div>`;
        pregun3.appendChild(element3);
        setTimeout(function() {
            document.querySelector(".correcto").remove();
        }, 6000);
    } else {
        element3.innerHTML = 
        `<div class="incorrecto">
            <p>Incorrecto!</p>
        </div>`;
        pregun3.appendChild(element3);
        setTimeout(function() {
            document.querySelector(".incorrecto").remove();
        }, 6000);
    }

    const pregun4 = document.getElementById("pregun4");
    const element4 = document.createElement("div");
    if (preg1 == "2007"){
        contador++;
        element4.innerHTML =
        `<div class="correcto">
            <p>Correcto!</p>
        </div>`;
        pregun4.appendChild(element4);
        setTimeout(function() {
            document.querySelector(".correcto").remove();
        }, 6000);
    } else {
        element4.innerHTML = 
        `<div class="incorrecto">
            <p>Incorrecto!</p>
        </div>`;
        pregun4.appendChild(element4);
        setTimeout(function() {
            document.querySelector(".incorrecto").remove();
        }, 6000);
    }

    if(contador == 1){
        alert(`${contador}/4, mejor suerte la proxima`);
    } else if(contador == 2){
        alert(`${contador}/4, bien!`)
    } else if (contador == 3){
        alert(`${contador}/4, muy bien! casi!`)
    } else if (contador == 4){
        alert(`${contador}/4, PERFECTO!`)
    } else {
        alert(`${contador}/4, muy mal`);
    }

    document.getElementById("form").reset();
}