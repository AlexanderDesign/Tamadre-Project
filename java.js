
        const talk = document.querySelector('.microphone');
        const voice2text = document.querySelector('.uservoicetext');
        const voice2text2 = document.querySelector('.uservoicetext2');

        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        const recorder = new SpeechRecognition();

        recorder.onstart = () => {
            console.log('La Voz esta iniciada, Hable');
        };

        recorder.onresult = (event) => {
            console.log(event);
        };

        talk.addEventListener('click', () => {
            recorder.start();
        });

        recorder.onresult = (event) => {
            const current = event.resultIndex;
            const transcript = event.results[current][0].transcript;
            voice2text.textContent = transcript;
        };

        function botVoice(message){

            const speech = new SpeechSynthesisUtterance();
            speech.text = "No te entiendo";

            if(message.includes('Hola')){
                speech.text = "Hola buenos dias, tardes y noches";
            }
            
            if(message.includes('Cómo estás')){
                speech.text = "Estoy bien gracias y tu?";
            }
            
            if(message.includes('función')){
                speech.text = "Ayudarte de la manera mas eficaz posible";
            }

          
            
            if(message.includes('ejemplo')){
                speech.text = "Pídeme lo que quieras";
            }

            if(message.includes('fecha')){
                var getdate = new Date();
    
                var day = getdate.getDate();
                var month= getdate.getMonth()+1;
                var year = getdate.getFullYear();
    
                speech.text = 'La fecha es '+day+'/'+month+'/'+year;
            }
            
          
            
            if(message.includes('hora')){
                var gethora = new Date();
    
            var hora = gethora.getHours();
            var minutos = gethora.getMinutes();
            var segundos = gethora.getSeconds();

            speech.text = 'La hora es '+hora+':'+minutos+':'+segundos;
            }
            
            if(message.includes('cuando naciste')){
                speech.text = "cuando me programaron";
            }
            
            if(message.includes('adiós')){
                speech.text = "bye";
            }

            voice2text2.textContent = speech.text;

            speech.volume = 1;
            speech.rate = 1;
            speech.pitch = 1;
            window.speechSynthesis.speak(speech)

        };

        recorder.onresult = function(event){
            const current = event.resultIndex;
            const transcript = event.results[current][0].transcript;
            voice2text.textContent = transcript;
            botVoice(transcript);
        };
