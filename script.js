const formulario = document.querySelector("form");

const Inome = document.querySelector(".nome");
const Ichassi = document.querySelector(".chassi");
const Icor = document.querySelector(".cor");
const IquantPortas = document.querySelector(".quantPortas");
const ItipoCombustivel = document.querySelector(".tipoCombustivel");

function cadastrar (){
    fetch("http://localhost:8081/api/carros",
    {
        headers:{
            'Accept': 'application.jason',
            'Content-Type': 'application.jason'
        },
        method: "POST",
        body: JSON.stringify({
            nome: Inome.value,
            chassi: Ichassi.value,
            cor: Icor.value,
            quantPortas: IquantPortas.value,
            tipoCombustivel: ItipoCombustivel.value
        })
    })
    .then(function(res) {console.log(res)})
    .catch(function(res) {console.log(res)})
};

function limpar() {
    Inome.value = "";;
    Ichassi.value = "";
    Icor.value = "";
    IquantPortas.value = "";
    ItipoCombustivel.value = "";
};

formulario.addEventListener('submit', function (event){
    event.preventDefault();

    limpar();
    cadastrar();
});