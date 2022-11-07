var cadastros = new Array(); //Guardar as informações.
var cadastrosA = new Array(); //Guardar as informações.

function cadastrarPessoas() {
    var iNome = document.getElementById('name');
    var iChild = document.getElementById('kids');
    var cadastroP = new Array();

    cadastroP.nome = iNome.value;
    cadastroP.qtdChild = iChild.value;

    cadastros.push(cadastroP); // o array de dentro da função irá ser empurrado para o array fora da função.
    console.log(cadastros);

    iNome.value="";
    iChild.value=""; //como se fosse uma cx em branco que irá receber um texto.

    y(); //função y
    x(); //função x
   
}

function cadastrarIngredientes() { 
    var iIngrediente = document.getElementById('ingrediente');
    var iqtdA = document.getElementById('qtdA');
    var iqtdC = document.getElementById('qtdC');
    var iValor = document.getElementById('valor');
    var cadastroI = new Array();

    

    cadastroI.ingt = iIngrediente.value;
    cadastroI.qtdA = iqtdA.value;
    cadastroI.qtdC = iqtdC.value;
    cadastroI.valor = iValor.value;

    // cadastroI.qtd = iqtd.value;

    cadastrosA.push(cadastroI);
    console.log(cadastrosA);

    z(); //função z
    x(); //função y
    
    iIngrediente.value="";
    iqtdA.value="";
    iqtdC.value="";
    iValor.value="";
    // iqtd.value="";
}   

// function excluirPessoa(e) {
//     console.log("Excluindo"+e.value);
//     cadastros.splice(e.value,1);
//     x();
//     y();
//     z();
// }

function x() {
    var corpoTabela1 = document.getElementById("corpoTabela1");
    corpoTabela1.innerHTML=""; //O corpo tabela 1 irá receber um texto.
       
    cadastros.forEach(function(convidado){    

    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var tdt3 = document.createElement("td"); 
        
        td1.innerHTML=convidado.nome;
        tr.appendChild(td1);

            var vtpessoa=0;
            
            cadastrosA.forEach(function(produto){
                
                var unidaddeconviados = parseFloat(produto.qtdA) + (parseFloat(produto.qtdC) * parseFloat(convidado.qtdChild));

                valorT = ((parseFloat(unidaddeconviados) / 1000) * parseFloat(produto.valor))

                vtpessoa += valorT;
            });
        
            td2.innerText=vtpessoa.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});
            tr.appendChild(td2);
            
            corpoTabela1.appendChild(tr);
        })

        
        }


function y() {
    var corpoTabela2 = document.getElementById("corpoTabela2");
    corpoTabela2.innerHTML=""; //O corpo tabela 2 irá receber um texto.

    for (var index = 0; index < cadastros.length; index++) {
        var trDependentes = document.createElement("tr"); //tr é linha.
        var td2 = document.createElement("td"); //td é célula dentro da linha.
        var td3 = document.createElement("td"); //td é célula dentro da linha.

        var cadastroP = cadastros[index];

        td2.innerText=cadastroP.nome;
        trDependentes.appendChild(td2);

        td3.innerText=cadastroP.qtdChild;
        trDependentes.appendChild(td3);

        corpoTabela2.appendChild(trDependentes);
    }
}

    function z() {
        var corpoTabela3 = document.getElementById("corpoTabela3");
        corpoTabela3.innerHTML=""; //O corpo tabela 3 irá receber um texto.
        
        for (var index = 0; index < cadastrosA.length; index++) {
            var trIngredientes = document.createElement("tr"); //tr é linha.
            var td4 = document.createElement("td"); //td é célula dentro da linha.
            var td5 = document.createElement("td"); //td é célula dentro da linha.
            

            var cadastroI = cadastrosA[index];

            td4.innerText = cadastroI.ingt;
            trIngredientes.appendChild(td4);

            cadastros.forEach(teste => {
                 var iqtd = (parseFloat(cadastroI.qtdA) + (parseFloat(cadastroI.qtdC) * parseFloat(teste.qtdChild))); //soma a quantidade em kg/g dos ingredientes.
            td5.innerText = iqtd;
            trIngredientes.appendChild(td5);
            });

            
           

            corpoTabela3.appendChild(trIngredientes);
        }
    }

