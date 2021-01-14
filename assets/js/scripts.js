
//Preencher o combobox com os estados
var apiUrl = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome';
var estados = document.getElementById("estados");
var opt = document.createElement("option")

fetch(apiUrl).then(response => {
    return response.json();
}).then(data => {
    data.map(function(estado, x) {
        var opt = document.createElement("option")
        opt.value = (estado.sigla);
        opt.text = (estado.nome);
        estados.add(opt, estados.options[x]);            
    })
    console.log(data)
}).catch(err => {

});
//------------------------------------------------------------------



//Função que vai preencher o combobox com as cidades
function selecionacidade(){
    var estado = document.getElementById("estados").value
    var apiUrl = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estado}/distritos?orderBy=nome`;
    var cidades = document.getElementById("cidades");
    
    var length = cidades.options.length;
    for (i = length-1; i >= 0; i--) {
        cidades.options[i] = null;
    }

    if (estado !== ''){
        cidades.disabled = false
    }else {
        cidades.disabled = true        
        var opt = document.createElement("option")
        opt.value = '';
        opt.text = 'Selecione o Estado primeiro';
        cidades.add(opt, cidades.options); 
    }
    

    fetch(apiUrl).then(response => {
        return response.json();
    }).then(data => {
        data.map(function(cidade, x) {
            var opt = document.createElement("option")
            opt.value = (cidade.sigla);
            opt.text = (cidade.nome);
            
            cidades.add(opt, cidades.options[x]);            
        })
        console.log(data)
    }).catch(err => {
    
    });

}
//---------------------------------------------------------------------------

