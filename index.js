const nome = "Rafael Andrade";
const dataNascimento = "1995-09-07";
const momentoAtual = new Date();
const dataNascimentoTipoDate = new Date(dataNascimento);

// Calcula o ano do próximo aniversário
const anoAtual = momentoAtual.getFullYear();
let proximoAniversario = new Date(
    anoAtual,
    dataNascimentoTipoDate.getMonth(),
    dataNascimentoTipoDate.getDate()
);

// Verifica se o aniversário deste ano já passou
if (momentoAtual > proximoAniversario) {
    proximoAniversario = new Date(
        anoAtual + 1,
        dataNascimentoTipoDate.getMonth(),
        dataNascimentoTipoDate.getDate()
    );
}

// Calcula os dias até o próximo aniversário
const diffEmMs = proximoAniversario - momentoAtual;
const diasAteProximoAniversario = Math.ceil(diffEmMs / (1000 * 60 * 60 * 24));

console.log(`${nome}, seu próximo aniversário é em ${diasAteProximoAniversario} dias.`);
