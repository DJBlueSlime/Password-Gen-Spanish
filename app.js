(function(){
    var app = document.getElementById('app');
    var inputCaracteres = document.getElementById('numero-caracteres');

    var configuracion = {
        caracteres: parseInt(inputCaracteres.value),
        simbolos: true,
        numeros:true,
        mayusculas:true,
        minusculas:true
    }

   var caracteres = {
       numeros: '0 1 2 3 4 5 6 7 8 9 ',
       simbolos: ' * ^ º Ç # | % / ) ( $ ? ‚ : ; . , { } < > - + = @ &',
       mayusculas: 'Q W E R T Y U I O P A S D F G H J K L Ñ Z X C V B N M',
       minusculas: 'q w e r t y u i o p a s d f g h j k l ñ z x c v b n m'
   } 

   app.addEventListener('submit', function(e){
       e.preventDefault(); 
   });

   app.elements.namedItem('btn-mas-uno').addEventListener('click',function(){
    configuracion.caracteres++;
    inputCaracteres.value = configuracion.caracteres;
    
   });

   app.elements.namedItem('btn-menos-uno').addEventListener('click',function(){
      if (configuracion.caracteres > 1) {
          configuracion.caracteres--;
          inputCaracteres.value = configuracion.caracteres;
        }
          
    });

    app.elements.namedItem('btn-simbolos').addEventListener('click', function(){
      btnToggle(this);
      configuracion.simbolos = !configuracion.simbolos;  
    })

    app.elements.namedItem('btn-numeros').addEventListener('click', function(){
        btnToggle(this);
        configuracion.numeros = !configuracion.numeros;  
      })

      app.elements.namedItem('btn-mayusculas').addEventListener('click', function(){
        btnToggle(this);
        configuracion.mayusculas = !configuracion.mayusculas;  
    })

    app.elements.namedItem('btn-generar').addEventListener('click', function(){
        generarPassword();
    });

    app.elements.namedItem('input-password').addEventListener('click', function(){
        copiarPassword();
    })
        
            function btnToggle (elemento){
              elemento.classList.toggle('false');
              elemento.childNodes[0].classList.toggle('fa-check');
              elemento.childNodes[0].classList.toggle('fa-times');   
          }
          
          function generarPassword(){
              var caracteresFinales = '';
              var password = '';

              for(propiedad in configuracion){
                 if(configuracion[propiedad] == true){
                     caracteresFinales += caracteres[propiedad] + ' ';
                     console.log(caracteresFinales);
                     
                 }
             }
             console.log(caracteresFinales);

             caracteresFinales = caracteresFinales.trim();
             caracteresFinales = caracteresFinales.split(' ');

             console.log(caracteresFinales);

             for(var i = 0; i < configuracion.caracteres; i++){
                 password += caracteresFinales[Math.floor(Math.random() * caracteresFinales.length)];
            }
            
            app.elements.namedItem('input-password').value = password;
          }

          function copiarPassword(){
              app.elements.namedItem('input-password').select();
              document.execCommand('copy');
              document.getElementById('alerta-copiado').classList.add('active');

              setTimeout(function (){
                document.getElementById('alerta-copiado').classList.remove('active');
              }, 2000);
          }

     generarPassword();     
}())
