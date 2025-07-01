// Alternador de tema
document.getElementById("themeToggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
});

// Mostrar status quando executar exercício
function mostrarStatus(exercicio) {
    const status = document.getElementById("status");
    status.style.display = "block";
    status.innerHTML = `✅ <strong>Exercício ${exercicio} executado com sucesso!</strong>`;
    
    // Esconder após 3 segundos
    setTimeout(() => {
        status.style.display = "none";
    }, 3000);
}

// Função para mostrar saída no console visual
function mostrarConsole(texto) {
    const consoleOutput = document.getElementById("console-output");
    consoleOutput.style.display = "block";
    consoleOutput.textContent = texto;
}

// Função para limpar console
function limparConsole() {
    const consoleOutput = document.getElementById("console-output");
    consoleOutput.style.display = "none";
    consoleOutput.textContent = "";
}

// Função principal para executar os exercícios
function executarExercicio(n) {
    try {
        limparConsole();
        
        switch(n) {
            case 1:
                // Exercício 1: Contador de Tempo
                let tempo;
                
                do {
                    tempo = Number(prompt("⏰ Digite um tempo (em segundos) entre 1 e 59:"));
                } while (tempo < 1 || tempo > 59 || isNaN(tempo));

                let saida = "";
                let i = 0;
                
                const intervalo = setInterval(() => {
                    saida += `${i} s\n`;
                    mostrarConsole(saida);

                    if (i >= tempo) {
                        clearInterval(intervalo);
                        saida += "FIM!";
                        mostrarConsole(saida);
                        alert("⏰ Contagem finalizada!");
                    }
                    i++;
                }, 1000);

                mostrarStatus(1);
                break;

            case 2:
                // Exercício 2: Tabuada
                let numero = parseInt(prompt("🔢 Digite um número inteiro para ver sua tabuada:"));
                
                if (isNaN(numero)) {
                    alert("❌ Por favor, digite um número válido!");
                    return;
                }
                
                let tabuada = `Tabuada do ${numero}:\n\n`;
                for (let i = 0; i <= 10; i++) {
                    let multiplicacao = numero * i;
                    tabuada += `${numero} × ${i} = ${multiplicacao}\n`;
                }
                
                mostrarConsole(tabuada);
                alert(`✅ Tabuada do ${numero} gerada com sucesso!`);
                mostrarStatus(2);
                break;

            case 3:
                // Exercício 3: Números Ímpares
                let numero1 = Number(prompt("🔢 Digite o primeiro número inteiro:"));
                let numero2 = Number(prompt("🔢 Digite o segundo número inteiro:"));
                
                if (isNaN(numero1) || isNaN(numero2)) {
                    alert("❌ Por favor, digite números válidos!");
                    return;
                }
                
                if (numero1 === numero2) {
                    alert("⚠️ Você digitou números iguais!");
                    return;
                }
                
                // Ajustar para começar com ímpar
                if (numero1 % 2 === 0) numero1++;
                if (numero2 % 2 === 0) numero2++;
                
                let impares = "Números ímpares no intervalo:\n\n";
                
                if (numero1 < numero2) {
                    for (let i = numero1 - 1; i < numero2; i += 2) {
                        if (i % 2 !== 0) impares += `${i}\n`;
                    }
                } else {
                    for (let i = numero2 - 1; i < numero1; i += 2) {
                        if (i % 2 !== 0) impares += `${i}\n`;
                    }
                }
                
                mostrarConsole(impares);
                alert("✅ Números ímpares listados no console!");
                mostrarStatus(3);
                break;

            case 4:
                // Exercício 4: Jogo de Adivinhação
                const numero_secreto = Number(prompt("🎮 Jogador 1, escolha um número secreto:"));
                
                if (isNaN(numero_secreto)) {
                    alert("❌ Número inválido!");
                    return;
                }
                
                alert("🔄 Limpe a tela para o Jogador 2!");
                
                const tentativa = Number(prompt("🎯 Jogador 2, tente adivinhar o número:"));
                
                if (isNaN(tentativa)) {
                    alert("❌ Tentativa inválida!");
                    return;
                }
                
                const diferenca = Math.abs(tentativa - numero_secreto);
                
                if (tentativa === numero_secreto) {
                    alert("🎉 Parabéns! Você acertou!");
                } else {
                    let mensagem = "";
                    
                    if (tentativa < numero_secreto) {
                        mensagem += "📈 Muito baixo.\n";
                    } else {
                        mensagem += "📉 Muito alto.\n";
                    }
                    
                    if (diferenca <= 2) {
                        mensagem += "🔥 Tá quente!";
                    } else if (diferenca <= 5) {
                        mensagem += "🌡️ Quase lá!";
                    } else {
                        mensagem += "🧊 Tá frio...";
                    }
                    
                    alert(mensagem);
                }
                
                mostrarStatus(4);
                break;

            case 5:
                // Exercício 5: Sistema de Login Avançado
                const login_correto = "RamosJv";
                const senha_correta = "9999";
                let tentativas = 0;

                alert("🔐 Seja bem-vindo ao sistema!");

                while (tentativas < 3) {
                    const login_digitado = prompt("👤 Digite seu login:");
                    const senha_digitada = prompt("🔒 Insira sua senha:");

                    if (login_digitado === login_correto && senha_digitada === senha_correta) {
                        alert("✅ Acesso permitido! Bem-vindo!");
                        break;
                    } else {
                        tentativas++;
                        let mensagemErro = "";

                        if (login_digitado !== login_correto) {
                            mensagemErro += "❌ Login incorreto.\n";
                        }

                        if (senha_digitada !== senha_correta) {
                            mensagemErro += "❌ Senha incorreta.\n";
                        }

                        if (tentativas === 2) {
                            mensagemErro += "\n⚠️ Última tentativa! Mais um erro e seu acesso será bloqueado!";
                        }

                        if (tentativas === 3) {
                            mensagemErro = "🚫 Acesso bloqueado! Número de tentativas excedido.";
                        }

                        alert(mensagemErro);
                    }
                }

                mostrarStatus(5);
                break;

            case 6:
                // Exercício 6: Pirâmide de Estrelas
                const andares = Number(prompt("🏔️ Digite o número de andares da pirâmide:"));
                
                if (isNaN(andares) || andares < 1) {
                    alert("❌ Digite um número válido maior que 0!");
                    return;
                }
                
                let piramide = "Pirâmide de Estrelas:\n\n";
                
                for (let linha = 1; linha <= andares; linha++) {
                    let linhaTexto = "";

                    // Adiciona espaços
                    for (let espacos = 1; espacos <= andares - linha; espacos++) {
                        linhaTexto += " ";
                    }

                    // Adiciona estrelas
                    for (let estrelas = 1; estrelas <= (2 * linha - 1); estrelas++) {
                        linhaTexto += "*";
                    }

                    piramide += linhaTexto + "\n";
                }
                
                mostrarConsole(piramide);
                alert("✅ Pirâmide criada com sucesso!");
                mostrarStatus(6);
                break;

            case 7:
                // Exercício 7: Retângulo de Estrelas
                let altura = parseInt(prompt("📏 Digite a altura do retângulo:"));
                let largura = parseInt(prompt("📐 Digite a largura do retângulo:"));
                
                if (isNaN(altura) || isNaN(largura) || altura < 1 || largura < 1) {
                    alert("❌ Digite valores válidos maiores que 0!");
                    return;
                }
                
                let retangulo = "Retângulo de Estrelas:\n\n";
                
                for(let j = 1; j <= altura; j++){
                    let linha = "";
                    for(let i = 1; i <= largura; i++){
                        linha += "* ";
                    }
                    retangulo += linha + "\n";
                }
                
                mostrarConsole(retangulo);
                alert("✅ Retângulo criado com sucesso!");
                mostrarStatus(7);
                break;

            default:
                alert("❌ Exercício inválido!");
        }
    } catch (error) {
        alert("❌ Erro inesperado! Tente novamente.");
        console.error("Erro:", error);
    }
}

// Mensagem de boas-vindas
console.log("🚀 Lista 3 de Exercícios carregada com sucesso!");
console.log("💡 Clique nos botões para executar os exercícios!");