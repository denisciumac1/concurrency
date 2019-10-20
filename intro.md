skillvalue

1. concurrency / asynchronuous programming
  *primitives: - Callback
               - Event loop
               - Promise
                   - *generator function(*,yield)
               - async/await
 2. Exception / try / catch
        *Exception - un tip specific de eroare care poate fi capturata si prelucrata(tratata)
                   - acel tip de eroare care apare deja cind rulezi scriptul!!!
                   - (sursa de date nu este accesibila, transformari de valori, erori de memorie ...)
                   - throw XXXX

                 function a(){
                        b(){
                            c(){
                                throw "xxxxx";
                            }
                        }
                 }
                    - chain of responsability
                        application (website) ----> (fetch API, Canvas API, Audio API, Geolocation API)

                        application -> logic ---> fail
                                   <----throw exception


 3. script < fetch / multiple sources


