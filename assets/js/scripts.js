
      var opt = window.document.getElementById('estados')
     var apiUrl = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome';
     var txt = 'masoq'

     fetch(apiUrl).then(response => {
       return response.json();
     }).then(data => {
        data.map(function(estado) {
            console.log(estado.sigla);
            
        })
       console.log(data);
     }).catch(err => {
       // Do something for an error here
     });
   

   


