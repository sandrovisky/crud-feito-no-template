
//Preencher o combobox com os estados
var apiUrl = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome';
var estados = document.getElementById("estado");
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
    var estado = document.getElementById("estado").value
    var apiUrl = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estado}/distritos?orderBy=nome`;
    var cidades = document.getElementById("cidade");

    var length = cidades.options.length;
    for (i = length-1; i >= 0; i--) {
        cidades.options[i] = null;
    }

    var opt = document.createElement("option")
    opt.value = '';
    opt.text = '';
    cidades.add(opt, cidades.options);

    if (estado !== ''){
        cidades.disabled = false
    }else {
        cidades.disabled = true        
        opt.value = '';
        opt.text = 'Selecione o Estado primeiro';
        cidades.add(opt, cidades.options); 
    }
    

    fetch(apiUrl).then(response => {
        return response.json();
    }).then(data => {
        data.map(function(cidade, x) {
            var opt = document.createElement("option")
            opt.value = (cidade.nome);
            opt.text = (cidade.nome);
            
            cidades.add(opt, cidades.options[x]);            
        })
        console.log(data)
    }).catch(err => {
    
    });

}
//---------------------------------------------------------------------------

function cadastrar(){

    //Objeto contendo os dados que serao cadastrados no banco de dados
    let dados = {
        nome: window.document.getElementById('nome').value,
        nascimento: nascimento = window.document.getElementById('nascimento').value,
        sexo: sexo = window.document.getElementById('sexo').value,
        estado: window.document.getElementById('estado').value,
        cidade: window.document.getElementById('cidade').value
    }

    //window.alert(dados.nome + " " + dados.nascimento + ' ' + dados.sexo + ' ' + dados.estado + ' ' + dados.cidade)

    let obj = Object.entries(dados)
    let aviso = 'Favor verificar os campos:'
     for(let i = 0; i < 5;i++){
            for(let k = 0; k < 2; k++){
                if(obj[i][k] === ''){
                    aviso += '\n' + obj[i][0]
                }
            }
    }
    if (aviso !== 'Favor verificar os campos:'){
        alert(aviso)
    }else{
        axios.post('http://localhost:3333/cadastro', {
            nome: dados.nome,
            nascimento: dados.nascimento,
            sexo: dados.sexo,
            estado: dados.estado,
            cidade: dados.cidade
          })
          .then(async function () {
            alert('CADASTRADO COM SUCESSO');
          })
          .catch(async function (error) {
            alert('ALGO DE ERRADO NAO ESTA CERTO \n' + error);
          });
          window.location.href = "file:///C:/Users/Sandro/Documents/GitHub/crud-feito-no-template/index.html?name=&nascimento=#";
    }
}

function excluir(){
    alert("oi")
}


var table = document.getElementById("lista");

fetch('http://localhost:3333/cadastro').then(response => {
    return response.json();
}).then(data => {
    data.map(function(cadastro,x) {
        var row = table.insertRow(x);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1)
        var cell3 = row.insertCell(2)
        var cell4 = row.insertCell(3)
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
        var cell7 = row.insertCell(6);
        cell1.innerHTML = cadastro.id;
        cell2.innerHTML = cadastro.nome;
        cell3.innerHTML = cadastro.nascimento;
        cell4.innerHTML = cadastro.sexo;
        cell5.innerHTML = cadastro.estado;
        cell6.innerHTML = cadastro.cidade;
        cell7.innerHTML = `<input type = 'button' id = ${cadastro.id} value = 'Editar' class='small'><input type = 'button' value = 'Excluir' onclick= 'excluir()' class='small'>`;
    })
    console.log(data)
}).catch(err => {

});




