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
    
    var trp = document.createElement("tr");
            var tdt1 = document.createElement("td");
            var tdt2 = document.createElement("td");
            var tdt3 = document.createElement("td");
       
    cadastros.forEach(function(convidado){
            

            tdt1.innerHTML=convidado.nome;
            trp.appendChild(tdt1);

            var vtpessoa=0;
            
            cadastrosA.forEach(function(produto){
                var valoruniad = 0;
                var valorunicr = 0;
                var unidaddeconviados = parseFloat(produto.qtdA) + parseFloat(produto.qtdC);
                var valorunicr = ((((produto.qtdC * 100) / unidaddeconviados) / 100 ) * produto.valor ) * parseInt(convidado.qtdChild); 
                var valoruniad = ((((produto.qtdA * 100) / unidaddeconviados) / 100 ) * produto.valor); 
                vtpessoa += (valorunicr + valoruniad);
            });
        
            tdt2.innerText=vtpessoa.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});
            trp.appendChild(tdt2);
        })
        
        

        corpoTabela1.appendChild(trp);
        }

        // doacoes.forEach(function(conviado){
        //     var trp = document.createElement("tr");
        //     var tdt1 = document.createElement("td");
        //     var tdt2 = document.createElement("td");
        //     var tdt3 = document.createElement("td");
        
        //     tdt1.innerText=conviado.nome;
        //     trp.appendChild(tdt1);
        
        //     var vtpessoa=0;
        //     listaprodutos.forEach(function(produto){
        //         valoruniad = 0;
        //         valorunicr = 0;
        //         var unidaddeconviados = parseFloat(produto.qntadulto) + parseFloat(produto.quantcr);
        //         var valorunicr = ((((produto.quantcr * 100) / unidaddeconviados) / 100 ) * produto.valor ) * parseInt(conviado.cr); 
        //         var valoruniad = ((((produto.qntadulto * 100) / unidaddeconviados) / 100 ) * produto.valor); 
        //         vtpessoa += (valorunicr + valoruniad);
        //     });
        
        //     tdt2.innerText=vtpessoa.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});
        //     trp.appendChild(tdt2);


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

            
            var iqtd = parseFloat(cadastroI.qtdA) + parseFloat(cadastroI.qtdC); //soma a quantidade em kg/g dos ingredientes.
            td5.innerText = iqtd;
            trIngredientes.appendChild(td5);

            corpoTabela3.appendChild(trIngredientes);
        }
    }


























// function atualizarTabela() {
//     var corpoTabela1 = document.getElementById("corpoTabela1");
//     corpoTabela1.innerHTML=""; //O corpo tabela 1 irá receber um texto.
//     var corpoTabela2 = document.getElementById("corpoTabela2");
//     corpoTabela2.innerHTML=""; //O corpo tabela 2 irá receber um texto.
//     var corpoTabela3 = document.getElementById("corpoTabela3");
//     corpoTabela3.innerHTML=""; //O corpo tabela 3 irá receber um texto.

//     var tdoacoes=0;
//     var tdoadores=0;

//     for (var index = 0; index < cadastros.length; index++) {
//         var tr = document.createElement("tr"); //tr é linha.
//         var tr2 = document.createElement("tr");
//         // var tr3 = document.createElement("tr");
//         var td1 = document.createElement("td"); //td é célula dentro da linha.
//         var td2 = document.createElement("td");

//         var td3 = document.createElement("td");
//         var td4 = document.createElement("td");
        
//         var cadastro = cadastros[index];

//         function tabela1() {
//             td1.innerText=cadastro.nome;
//             tr.appendChild(td1);

//             var btn = document.createElement('button');
//             btn.innerText="X";
//             btn.value=index;
//             btn.setAttribute("onclick","excluirPessoa(this)");

//             corpoTabela1.appendChild(tr);
//         }

        // function tabela2() {
        //     td1.innerText=cadastro.nome;
        //     tr.appendChild(td1);

        //     td2.innerText=cadastro.qtd;
        //     tr.appendChild(td2);

        //     var btn = document.createElement('button');
        //     btn.innerText="X";
        //     btn.value=index;
        //     btn.setAttribute("onclick","excluirPessoa(this)");

        //     corpoTabela2.appendChild(tr);
        // }

        

        // function tabela3() {
        //     corpoTabela3.appendChild(tr);
        // }

        


        

        // td4.innerText=cadastro.nome;
        // tr2.appendChild(td4);


        // td3.appendChild(btn);
        // tr.appendChild(td3);

        // corpoTabela1.appendChild(tr2);
        // corpoTabela2.appendChild(tr);
        // tdoadores++;
        // tdoacoes += parseFloat(cadastro.valor);
//     }
// }





/*Proxima tabela ingredientes*/



// var ingredientes = new Array();

// function cadastrarIngredientes(){
//     var ingrediente = new Array();
//     var iIngrediente = document.getElementById('ingrediente');
//     var iqtdA = document.getElementById('qtdA');
//     var iqtdC = document.getElementById('qtdC');
//     var qtdTotal = iqtdA.value + iqtdC.value;

//     ingrediente.nome = iIngrediente.value;
//     ingrediente.valor = qtdTotal.value;
//     ingredientes.push(ingrediente);
//     console.log(ingredientes);
//     atualizarTabela2();
//     qtdTotal.value="";
//     iIngrediente.value="";
// }

// // function excluirPessoa(e) {
// //     console.log("Excluindo"+e.value);
// //     ingredientes.splice(e.value,1);
// //     atualizarTabela();
// // }

// function atualizarTabela2() {
//     var corpoTabela3 = document.getElementById("corpoTabela3");

//     corpoTabela3.innerHTML="";
//     var tvalor=0;
//     var tvalores=0;

//     for (var index = 0; index < pessoas.length; index++) { 
//         var tr = document.createElement("tr");
        
//         var ingrediente = ingrediente[index];

//         td1.innerText=ingrediente.nome;
//         tr.appendChild(td1);

//         td2.innerText=ingrediente.valor;
//         tr.appendChild(td2);

//         // var btn = document.createElement('button');
//         // btn.innerText="X";
//         // btn.value=index;
//         // btn.setAttribute("onclick","excluirPessoa(this)");

//         // td3.appendChild(btn);
//         // tr.appendChild(td3);

//         corpoTabela3.appendChild(tr);
//         tvalores++;
//         tvalor += parseFloat(ingrediente.valor);
//     }
// }

