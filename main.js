let Alimentos = [
    {
        "Nombre": "Plátano",
        "Health": true,
        "Imagen": "images/platanos.png",
        "Audio": "Nos entrega vitaminas y minerales para el correcto funcionamiento de nuestro cuerpo"
    }, {
        "Nombre": "Manzana",
        "Health": true,
        "Imagen": "images/manzana.jpeg",
        "Audio": "Nos entrega vitaminas y minerales necesarias para crecer sanos y fuertes"
    },{
        "Nombre": "Hamburguesa",
        "Health": false,
        "Imagen":"images/hamburgesa.jpg",
        "Audio": "Contiene grasa dañina para la salud de tu corazón"
    },{
        "Nombre": "Pizza",
        "Health": false,
        "Imagen": "images/pizza.jpg",
        "Audio": "Si lo consumes en exceso puede provocar obesidad"
    },{
        "Nombre": "Porotos",
        "Health": true,
        "Imagen": "images/porotos.jpg",
        "Audio": "Nos entrega fibra para mejorar tu digestión"
    },{
        "Nombre": "Leche",
        "Health": true,
        "Imagen": "images/leche.jpg",
        "Audio": "Fortalece tus huesos y dientes"
    },{
        "Nombre": "Tomate",
        "Health": true,
        "Imagen": "images/tomates.jpg",
        "Audio": "Posee vitaminas, minerales y fibra para evitar enfermedades"
    },{
        "Nombre": "Pescado",
        "Health": true,
        "Imagen": "images/pescado.jpg",
        "Audio": "Poseen grasas beneficiosas para la salud de tu corazón"
    },{
        "Nombre": "Avena",
        "Health": true,
        "Imagen": "images/avena.jpg",
        "Audio": "Te entrega energía para desarrollar tus actividades diarias"
    },{
        "Nombre": "Huevo",
        "Health": true,
        "Imagen": "images/huevo.jpg",
        "Audio": "Contienen proteínas necesarias para tu crecimiento y desarrollo"
    },{
        "Nombre": "Papas fritas",
        "Health": false,
        "Imagen": "images/papafritas.jpg",
        "Audio": "Contienen grasas que dañan tu corazón"
    },{
        "Nombre": "Carne",
        "Health": true,
        "Imagen": "images/carne.jpg",
        "Audio": "Contienen proteínas que te ayudan a crecer sano y fuerte"
    },{
        "Nombre": "Pan",
        "Health": true,
        "Imagen": "images/pan.jpg",
        "Audio": "Nos entrega energía para tus actividades diarias, no lo debes consumir en exceso"
    },{
        "Nombre": "Completo",
        "Health": false,
        "Imagen": "images/completos.jpg",
        "Audio": "Contiene grasa, colesterol y sodio perjudicial para tu crecimiento y desarrollo"
    },{
        "Nombre": "Galletas",
        "Health": false,
        "Imagen": "images/galletas.jpg",
        "Audio": "Si lo consumes en exceso puede provocar obesidad y enfermedades como diabetes"
    },{
        "Nombre": "Chocolate",
        "Health": false,
        "Imagen": "images/chocolate.jpg",
        "Audio": "Contiene azúcar que no tiene ningún beneficio para tu salud"
    },{
        "Nombre": "Golosinas",
        "Health": false,
        "Imagen": "images/golosina.jpg",
        "Audio": "Su consumo puede generar la aparición de caries en tus dientes"
    },{
        "Nombre": "Bebida",
        "Health": false,
        "Imagen": "images/bebida.jpg",
        "Audio": "Contiene azúcar, sodio y colorantes perjudiciales para tu salud"
    },{
        "Nombre": "Brócoli",
        "Health": true,
        "Imagen": "images/brocoli.jpg",
        "Audio": "te entrega vitaminas y minerales para un correcto funcionamiento de tu cuerpo"
    },{
        "Nombre": "Queso",
        "Health": false,
        "Imagen": "images/queso.jpg",
        "Audio": "Posee grasa y sodio dañina para tu salud. Su consumo en exceso puede provocar enfermedades"
    }
];



function click(condition) {
    let h = document.getElementsByClassName("container-vacio")[0];
    let index = document.getElementsByClassName("counter")[0].id;
    let actual = Alimentos[index];
    let puntaje = document.getElementsByClassName("puntaje")[0].innerHTML;
    if (condition) {
        if (actual.Health) {
            h.innerHTML = '<div class="correct">\n <img src="img_pag/true.png" alt="" id="true-false" class="img-icon">\n </div>';
            input = h.getElementsByClassName("correct")[0];
            input.classList.add('s-input-right');
            let x = setInterval(() =>{
                input.classList.remove('s-input-right');
                clearInterval(x);
            }, 900);
            document.getElementsByClassName("puntaje")[0].innerHTML = '' + (parseInt(puntaje, 10) + 1) + '';
            score.push(true);
        } else {
            h.innerHTML = '<div class="incorrect">\n <img src="img_pag/false.png" alt="" id="true-false" class="img-icon">\n </div>';
            input = h.getElementsByClassName("incorrect")[0];
            input.classList.add('s-input-error');
            let x = setInterval(() =>{
                input.classList.remove('s-input-error');
                clearInterval(x);
            }, 900);
            score.push(false);
        }
    } else {
        if (actual.Health) {
            h.innerHTML = '<div class="incorrect">\n <img src="img_pag/false.png" alt="" id="true-false" class="img-icon">\n </div>';
            input = h.getElementsByClassName("incorrect")[0];
            input.classList.add('s-input-error');
            let x = setInterval(() =>{
                input.classList.remove('s-input-error');
                clearInterval(x);
            }, 900);
            score.push(false);
        } else {
            h.innerHTML = '<div class="correct">\n <img src="img_pag/true.png" alt="" id="true-false" class="img-icon">\n </div>';
            input = h.getElementsByClassName("correct")[0];
            input.classList.add('s-input-right');
            let x = setInterval(() =>{
                input.classList.remove('s-input-right');
                clearInterval(x);
            }, 900);
            document.getElementsByClassName("puntaje")[0].innerHTML = '' + (parseInt(puntaje, 10) + 1) + '';
            score.push(true);
        }
    }
    console.log(score);
    document.getElementsByClassName('button-opcion')[0].style.cssText = 'pointer-events: none; cursor: none; ';
    document.getElementsByClassName('button-opcion')[1].style.cssText = 'pointer-events: none; cursor: none; ';
    document.getElementsByClassName('button-segute')[0].style.cssText = 'pointer-events: auto; cursor: auto; ';
}
let score = [];
let used = [];


function valid(used) {
    let index = Math.floor(Math.random()*19 + 0);
    console.log("tamano: " + used.length);
    let cond = true;
    if(used.length > 0){
        while(cond){
            if (used.includes(index)){
                console.log("Repetida: " + index in used);
                index = Math.floor(Math.random()*19 + 0);  
            }else{
                cond = false;
                used.push(index);
            }
        }
    }else{
        used[0] = index;
    }
    return index;
}

function bad() {
    let salida = "";
    if((score.findIndex(element => element == false)) >= 0){
        salida = '<div class="container-respuestas">\n'+'<h4>Respuestas incorrectas:</h4>\n';
        for(let i = 0; i < used.length; i++){
            if(score[i] == false){
                let list = Alimentos[used[i]+1];
                salida +='<h4> -'+ list.Nombre +'</h4>\n';
            }
        }
        salida += '<h4>Sigue mejorando!!!</h4>\n' + '</div>';
    }else{
        salida = '<div class="container-respuestas">\n'+'<h4>Muy bien, sigue asi.</h4>\n' + '</div>';
    }
    
    document.getElementsByClassName("container-vacio")[1].innerHTML = salida;
}

function next() {
    /// desbloqueo de botones S y NS
    document.getElementsByClassName('button-opcion')[0].style.cssText = 'pointer-events: auto; cursor: auto; ';
    document.getElementsByClassName('button-opcion')[1].style.cssText = 'pointer-events: auto; cursor: auto; ';
    ///bloqueo next
    document.getElementsByClassName('button-segute')[0].style.cssText = 'pointer-events: none; cursor: auto; display: none;';
    //
    let difficult = document.getElementsByClassName("difficult")[0].innerHTML;
    if (difficult > 0) {
        
        let index = valid(used);
        
        let actual = Alimentos[index + 1];
        document.getElementsByClassName("container")[0].innerHTML = '<h3>' + actual.Nombre + '</h3>';
        document.getElementsByClassName("img-principal")[0].src = actual.Imagen;
        document.getElementsByClassName("container-vacio")[0].innerHTML = '<div class="indicator"> </div>';
        document.getElementsByClassName("counter")[0].id = '' + (index + 1) + '';
        document.getElementsByClassName("difficult")[0].innerHTML = '' + (parseInt(difficult, 10) - 1) + '';
        setTimeout(speech, 800);
        
    } else {
        let goods = document.getElementsByClassName("puntaje")[0].innerHTML;
        goods = parseInt(goods,10 );
        document.getElementsByClassName("container-main")[0].innerHTML = '<div class="container-title">\n' +
            '                <img src="img_pag/Escudo-UCN-Full-Color.png" alt="Titulo de prueba" class="img-principal">\n' +
            '            </div>\n' +
            '            <div class="container-vacio">\n' +
            '                <h3>Puntaje: ' + (goods * 50)+'</h3>\n' +
            '            </div>\n' +
            '            <div class="container-vacio">\n' + 
            '            </div>\n' + 
            '            <div class="container-vacio">\n' +
            '                <a href="javascript:end()" class="button-volver">Volver al inicio</a>\n' +
            '            </div>';
            bad()
    }
}


function speech() {
    let speech = new SpeechSynthesisUtterance();
    let index = document.getElementsByClassName("counter")[0].id;
    let actual = Alimentos[index];
    speech.lang = "es-CL";
    speech.text = actual.Audio;
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
}

function start(difficult){
    contain = document.getElementsByClassName("container-main")[0];
    
    contain.innerHTML = '<div class="container">\n' +
        '                <h3 id="parrafo">Platano</h3>\n' +
        '            </div>\n' +
        '            <div class="container-img">\n' +
        '                <img src="https://static2.abc.es/media/bienestar/2019/07/25/platano-beneficios-kIyF--620x349@abc.jpg" alt="imagen" title="imagen" class="img-principal" id="img-principal">\n' +
        '            </div>\n' +
        '            <div class="sound">\n' +
        '                <a href="javascript:speech()" class="button-sound"><img src="img_pag/audio.png" alt="" class="icon"></a>\n' +
        '            </div>\n' +
        '\n' +
        '            <div class="container-vacio">\n' +
        '                <div class="indicator">\n' +
        '\n' +
        '                </div>\n' +
        '            </div>\n' +
        '            <div class="container-opcion">\n' +
        '                <a href="javascript:click(true)" class="button-opcion" id="buttonH">Saludable</a>\n' +
        '                <a href="javascript:click(false)" class="button-opcion" id="buttonNH">No Saludable</a>\n' +
        '            </div>\n' +
        '            <div class="container-segute">\n' +
        '                <a href="javascript:next()" class="button-segute"><img src="img_pag/sig.png" alt="" class="icon"> </a>\n' +
        '                <div class="counter" id="0"></div>\n' +
        '                <div class="difficult">' + difficult + '</div>\n' +
        '                <div class="puntaje">0</div>\n' +
        '            </div>';
    next();
}

function end() {
    score.length = 0;
    used.length = 0;
    document.getElementsByClassName("container-main")[0].innerHTML = '<div class="container-title">\n' +
        '                <img src="img_pag/Escudo-UCN-Full-Color.png" alt="Titulo de prueba" class="img-principal">\n' +
        '            </div>\n' +
        '            <div class="container-vacio">\n' +
        '                <ul class="dif">\n' +
        '                    <li><a>Start</a>\n' +
        '                        <ul>\n' +
        '                            <li><a href="javascript:start(5)">Facil</a></li>\n' +
        '                            <li><a href="javascript:start(8)">Intermedio</a></li>\n' +
        '                            <li><a href="javascript:start(13)">Dificil</a></li>\n' +
        '                        </ul>\n' +
        '                    </li>\n' +
        '                </ul>\n' +
        '            </div>';
}