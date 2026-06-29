// --- VARIÁVEIS GLOBAIS E CONTROLE DE ESTADO ---
let bancoProtocolos = {};
let filaPacientesSimulada = [];

let protocoloAtual = "";
let niveisDisponiveis = [];
let indiceNivelAtual = 0;
let justificativasAcumuladas = [];

const coresRisco = {
    "EMERGÊNCIA": { cor: "#ef4444", texto: "Vermelho" },
    "MUITO URGENTE": { cor: "#f97316", texto: "Laranja" },
    "URGENTE": { cor: "#eab308", texto: "Amarelo" },
    "POUCO URGENTE": { cor: "#22c55e", texto: "Verde" },
    "NÃO URGENTE": { cor: "#3b82f6", texto: "Azul" }
};

// --- FUNÇÃO PRINCIPAL DE PROCESSAMENTO DOS DADOS ---
function carregarBancoDeProtocolos() {
    try {
        // Verifica se a variável do arquivo protocolos.js está acessível
        if (typeof dadosProtocolos === 'undefined') {
            throw new Error("A variável 'dadosProtocolos' não foi encontrada. Verifique se o arquivo 'protocolos.js' está na mesma pasta e mapeado no index.html.");
        }

        bancoProtocolos = {};
        let linhasProcessadas = 0;

        dadosProtocolos.forEach((linha, index) => {
            // Normaliza as chaves do objeto para letras minúsculas (previne divergências de conversores)
            const linhaLimpa = {};
            Object.keys(linha).forEach(key => {
                linhaLimpa[key.trim().toLowerCase()] = linha[key];
            });

            // Mapeia os dados baseado na estrutura real da sua planilha
            const protocolo = linhaLimpa["ds_sintoma"];
            const risco = linhaLimpa["ds_tipo_risco"];
            const idPerg = linhaLimpa["nr_ordem_pergunta"];
            const pergunta = linhaLimpa["ds_pergunta"];
            const explicacao = linhaLimpa["ds_explicacao"];

            // Validação de segurança: se faltar dados essenciais, pula a linha
            if (!protocolo || !risco || !pergunta) return;

            const protocoloTexto = String(protocolo).trim();
            const riscoNormalizado = String(risco).trim().toUpperCase();

            // Monta a árvore indexada por [Sintoma][Risco]
            if (!bancoProtocolos[protocoloTexto]) {
                bancoProtocolos[protocoloTexto] = {};
            }
            if (!bancoProtocolos[protocoloTexto][riscoNormalizado]) {
                bancoProtocolos[protocoloTexto][riscoNormalizado] = [];
            }

            const idString = String(idPerg || index).replace(/\s+/g, '');

            bancoProtocolos[protocoloTexto][riscoNormalizado].push({
                id: `${protocoloTexto.replace(/\s+/g, '')}_${idString}`,
                pergunta: String(pergunta).trim(),
                explicacao: explicacao ? String(explicacao).trim() : "Sem explicação adicional."
            });

            linhasProcessadas++;
        });

        console.log(`Sucesso! ${linhasProcessadas} linhas carregadas com window.onload.`, bancoProtocolos);

        // Alimenta o select/dropdown com os sintomas estruturados
        atualizarDropdownFiltros();

    } catch (erro) {
        console.error("Erro crítico na carga:", erro);
        alert(`Erro na Triagem:\n${erro.message}`);
    }
}

// --- INTERFACE E INTERAÇÃO COM O USUÁRIO ---
function atualizarDropdownFiltros() {
    const selectFiltro = document.getElementById('grande-filtro');
    if (!selectFiltro || !bancoProtocolos) return;

    selectFiltro.innerHTML = '<option value="">-- Selecione um Protocolo --</option>';

    // Pega as chaves dos sintomas (Agressão, Alergia, etc.) e ordena de A-Z
    const sintomasOrdenados = Object.keys(bancoProtocolos).sort();

    sintomasOrdenados.forEach(sintoma => {
        const opt = document.createElement('option');
        opt.value = sintoma;
        opt.textContent = sintoma;
        selectFiltro.appendChild(opt);
    });
}

// Validação de CPF (dígitos verificadores + bloqueia sequências repetidas)
function validarCPF(cpf) {
    const nums = cpf.replace(/\D/g, '');
    if (nums.length !== 11) return false;
    if (nums === '00000000000') return false; // bloqueia só 000.000.000-00
    return true;
}

function mostrarErroCampo(id, msg) {
    let el = document.getElementById('erro-' + id);
    if (!el) {
        el = document.createElement('span');
        el.id = 'erro-' + id;
        el.style.cssText = 'color:#ef4444;font-size:0.78rem;margin-top:0.25rem;display:block;';
        document.getElementById(id).parentNode.appendChild(el);
    }
    el.textContent = msg;
}

function limparErroCampo(id) {
    const el = document.getElementById('erro-' + id);
    if (el) el.textContent = '';
}

// Máscara Automática de CPF — limita a 11 dígitos + validação inline
document.getElementById('cpf').addEventListener('input', function (e) {
    let valor = e.target.value.replace(/\D/g, "").slice(0, 11);
    valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
    valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
    valor = valor.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    e.target.value = valor;
    const nums = valor.replace(/\D/g, '');
    if (nums.length === 11) {
        if (!validarCPF(valor)) {
            mostrarErroCampo('cpf', '⚠️ CPF inválido. Verifique os números digitados.');
        } else {
            limparErroCampo('cpf');
        }
    } else {
        limparErroCampo('cpf');
    }
});

// Máscara de Data DD/MM/AAAA — input livre com formatação automática
(function() {
    const displayInput = document.getElementById('data_nascimento_display');
    const hiddenInput = document.getElementById('data_nascimento');

    function syncHidden(displayVal) {
        const match = displayVal.match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
        hiddenInput.value = match ? `${match[3]}-${match[2]}-${match[1]}` : '';
    }

    function formatarData(raw) {
        // Remove tudo que não é dígito
        const nums = raw.replace(/\D/g, '').slice(0, 8);
        let resultado = nums;
        if (nums.length > 2) resultado = nums.slice(0, 2) + '/' + nums.slice(2);
        if (nums.length > 4) resultado = nums.slice(0, 2) + '/' + nums.slice(2, 4) + '/' + nums.slice(4);
        return resultado;
    }

    displayInput.placeholder = 'DD/MM/AAAA';
    displayInput.setAttribute('inputmode', 'numeric');

    displayInput.addEventListener('input', function(e) {
        const cursorPos = this.selectionStart;
        const valorAntes = this.value;
        const digitosAntes = valorAntes.replace(/\D/g, '').length;

        const formatted = formatarData(this.value);
        this.value = formatted;

        // Reposiciona o cursor inteligentemente
        const digitosDepois = formatted.replace(/\D/g, '').length;
        let novoCursor = cursorPos;
        // Se o cursor está numa barra, pula pra frente
        if (formatted[novoCursor - 1] === '/' && digitosDepois >= digitosAntes) novoCursor++;
        this.setSelectionRange(novoCursor, novoCursor);

        syncHidden(formatted);
        // Valida ao completar
        if (formatted.length === 10) validarDataInline(formatted);
        else limparErroCampo('data_nascimento_display');
    });

    displayInput.addEventListener('blur', function() {
        const val = this.value;
        if (!val) { limparErroCampo('data_nascimento_display'); syncHidden(''); return; }
        validarDataInline(val);
        syncHidden(val);
    });
})();

function validarDataInline(val) {
    const match = val.match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
    if (!match) {
        mostrarErroCampo('data_nascimento_display', '⚠️ Data incompleta. Use o formato DD/MM/AAAA.');
        return false;
    }
    const dia = parseInt(match[1]), mes = parseInt(match[2]), ano = parseInt(match[3]);
    const dataObj = new Date(ano, mes - 1, dia);
    const hoje = new Date();
    if (dataObj.getDate() !== dia || dataObj.getMonth() !== mes - 1 ||
        dataObj.getFullYear() !== ano || mes < 1 || mes > 12 || dia < 1 || ano < 1900 || dataObj > hoje) {
        mostrarErroCampo('data_nascimento_display', '⚠️ Data inválida. Verifique dia, mês e ano.');
        return false;
    }
    limparErroCampo('data_nascimento_display');
    return true;
}


// Controle de Fluxo entre os Passos do Formulário
function irParaPasso(numeroPasso) {
    if (numeroPasso > 1) {
        const nome = document.getElementById('nome').value.trim();
        const cpf = document.getElementById('cpf').value.trim();
        const dataNas = document.getElementById('data_nascimento_display').value.trim();

        let erros = false;

        if (!nome) {
            mostrarErroCampo('nome', '⚠️ Nome obrigatório.');
            erros = true;
        } else {
            limparErroCampo('nome');
        }

        const cpfNums = cpf.replace(/\D/g, '');
        if (cpfNums.length !== 11) {
            mostrarErroCampo('cpf', '⚠️ CPF deve ter 11 dígitos.');
            erros = true;
        } else if (!validarCPF(cpf)) {
            mostrarErroCampo('cpf', '⚠️ CPF inválido. Verifique os números digitados.');
            erros = true;
        } else {
            limparErroCampo('cpf');
        }

        if (!dataNas) {
            mostrarErroCampo('data_nascimento_display', '⚠️ Data obrigatória. Use o formato DD/MM/AAAA.');
            erros = true;
        } else if (!validarDataInline(dataNas)) {
            erros = true;
        }

        if (erros) return;
    }


    document.querySelectorAll('.conteudo-passo').forEach(p => p.classList.remove('ativo'));
    document.querySelectorAll('.passo').forEach(ind => ind.classList.remove('ativo'));

    document.getElementById(`passo-${numeroPasso}`).classList.add('ativo');
    for (let i = 1; i <= numeroPasso; i++) {
        document.getElementById(`ind-passo${i}`).classList.add('ativo');
    }
}

function toggleCampoOutro() {
    const chkOutro = document.getElementById('chk-outro-sintoma');
    const grupoOutroInput = document.getElementById('grupo-outro-sintoma');
    grupoOutroInput.style.display = chkOutro.checked ? 'block' : 'none';
    if (chkOutro.checked) document.getElementById('outro_sintoma_texto').focus();
}

function toggleCampoOutraComorbidade() {
    const chkOutra = document.getElementById('chk-outra-comorbidade');
    const grupoOutraInput = document.getElementById('grupo-outra-comorbidade');
    grupoOutraInput.style.display = chkOutra.checked ? 'block' : 'none';
    if (chkOutra.checked) document.getElementById('outra_comorbidade_texto').focus();
}

// --- ENGINE DE EXECUÇÃO EM CASCATA POR BLOCOS ---
function carregarPerguntasDoFiltro() {
    const filtroSelecionado = document.getElementById('grande-filtro').value;
    const container = document.getElementById('container-perguntas-protocolo');
    const btnAvancar = document.getElementById('btn-avancar-bloco');

    if (!filtroSelecionado) {
        container.innerHTML = "";
        btnAvancar.style.display = "none";
        return;
    }

    protocoloAtual = filtroSelecionado;

    // Define a ordem cronológica estrita de varredura (da maior gravidade para a menor)
    const ordemTeorica = ["EMERGÊNCIA", "MUITO URGENTE", "URGENTE", "POUCO URGENTE", "NÃO URGENTE"];
    niveisDisponiveis = ordemTeorica.filter(nivel => bancoProtocolos[protocoloAtual][nivel] !== undefined);

    indiceNivelAtual = 0;
    justificativasAcumuladas = [];

    btnAvancar.style.display = "block";
    btnAvancar.textContent = "Avaliar Bloco ➔";

    renderizarBlocoAtual();
}

function renderizarBlocoAtual() {
    const container = document.getElementById('container-perguntas-protocolo');
    const nivelDeRisco = niveisDisponiveis[indiceNivelAtual];
    const perguntas = bancoProtocolos[protocoloAtual][nivelDeRisco];

    let htmlPerguntas = `
        <div class="bloco-risco-container" id="bloco-${nivelDeRisco}">
            <div class="bloco-titulo" style="color: ${coresRisco[nivelDeRisco].cor}">
                Avaliando Nível: ${nivelDeRisco} (${coresRisco[nivelDeRisco].texto})
            </div>
    `;

    perguntas.forEach((p) => {
        htmlPerguntas += `
            <div class="linha-pergunta" style="flex-direction:column;align-items:flex-start;gap:0.5rem;">
                <div style="display:flex;justify-content:space-between;align-items:center;width:100%;">
                    <span class="texto-pergunta">${p.pergunta}</span>
                    <div class="opcoes-sim-nao">
                        <label>
                            <input type="radio" name="perg_${p.id}" value="SIM" class="btn-radio btn-radio-sim" required>
                        </label>
                        <label>
                            <input type="radio" name="perg_${p.id}" value="NÃO" class="btn-radio btn-radio-nao" checked>
                        </label>
                    </div>
                </div>
                <button type="button" class="btn-explicacao" onclick="toggleExplicacao('exp-prot-${p.id}', this)" style="margin-top:0.2rem;">
                    💬 Explicação
                </button>
                <div class="bloco-explicacao" id="exp-prot-${p.id}" style="display:none;width:100%;">
                    <div class="explicacao-texto">${p.explicacao}</div>
                </div>
            </div>
        `;
    });

    htmlPerguntas += `</div>`;
    container.innerHTML = htmlPerguntas;
}

function processarBlocoAtual() {
    const nivelDeRisco = niveisDisponiveis[indiceNivelAtual];
    const perguntas = bancoProtocolos[protocoloAtual][nivelDeRisco];

    let teveAlgumSim = false;
    let blocoJustificativas = [];

    for (let p of perguntas) {
        const inputSelecionado = document.querySelector(`input[name="perg_${p.id}"]:checked`);

        if (!inputSelecionado) {
            alert("Por favor, responda todas as perguntas do bloco atual.");
            return;
        }

        if (inputSelecionado.value === "SIM") {
            teveAlgumSim = true;
            blocoJustificativas.push(`[${p.pergunta}]: ${p.explicacao}`);
        }
    }

    if (teveAlgumSim) {
        justificativasAcumuladas = blocoJustificativas;
        finalizarTriagemComSucesso(nivelDeRisco);
    } else {
        indiceNivelAtual++;

        if (indiceNivelAtual < niveisDisponiveis.length) {
            renderizarBlocoAtual();
        } else {
            justificativasAcumuladas = ["Nenhum critério de risco específico assinalado nos questionários do protocolo clínico."];
            finalizarTriagemComSucesso("NÃO URGENTE");
        }
    }
}

// --- FINALIZAÇÃO E ATUALIZAÇÃO DA FILA ---
// Armazena dados locais da triagem para exibir na fila
let dadosLocaisTriagem = {};

async function finalizarTriagemComSucesso(classificacaoFinal) {
    const nome = document.getElementById('nome').value.trim();
    const cpf = document.getElementById('cpf').value.trim();
    // Converte a data do display (DD/MM/AAAA) para YYYY-MM-DD no momento do envio
    const dataDisplay = document.getElementById('data_nascimento_display').value.trim();
    const dataMatch = dataDisplay.match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
    const dataNas = dataMatch ? `${dataMatch[3]}-${dataMatch[2]}-${dataMatch[1]}` : '';
    if (!dataNas) {
        alert("Data de nascimento inválida. Volte ao Passo 1 e corrija.");
        return;
    }

    // Coleta sintomas selecionados
    const sintomasSelecionados = Array.from(document.querySelectorAll('input[name="sintomas"]:checked'))
        .map(el => el.value);
    const outroSintoma = document.getElementById('outro_sintoma_texto').value.trim();
    if (outroSintoma) sintomasSelecionados.push(outroSintoma);

    // Coleta comorbidades selecionadas
    const comorbidadesSelecionadas = Array.from(document.querySelectorAll('input[name="comorbidades"]:checked'))
        .map(el => el.value);
    const outraComorbidade = document.getElementById('outra_comorbidade_texto').value.trim();
    if (outraComorbidade) comorbidadesSelecionadas.push(outraComorbidade);

    try {
        // 1. Cria ou busca o paciente no banco
        const paciente = await buscarOuCriarPaciente(nome, cpf, dataNas);

        // 2. Salva a triagem no banco com a classificação já decidida
        const resultado = await salvarTriagem({
            id_paciente: paciente.id_paciente,
            id_enfermeiro: 1,
            classificacao: classificacaoFinal,
            consciente: true,
            sintomas_texto: sintomasSelecionados.join('|'),
            comorbidades_texto: comorbidadesSelecionadas.join('|'),
            veredito_texto: justificativasAcumuladas.join('||'),
            protocolo_texto: protocoloAtual
        });

        // 3. Guarda os dados locais para exibir na fila
        if (resultado && resultado.id_triagem) {
            dadosLocaisTriagem[resultado.id_triagem] = {
                sintomas: sintomasSelecionados,
                comorbidades: comorbidadesSelecionadas,
                justificativas: [...justificativasAcumuladas],
                protocolo: protocoloAtual
            };
        }

        // 4. Recarrega a fila do banco
        await carregarFilaDoBanco();

        document.getElementById('form-triagem').reset();
        document.getElementById('data_nascimento_display').value = '';
        document.getElementById('container-perguntas-protocolo').innerHTML = "";
        document.getElementById('btn-avancar-bloco').style.display = "none";
        document.getElementById('grupo-outro-sintoma').style.display = 'none';
        document.getElementById('grupo-outra-comorbidade').style.display = 'none';

        alert(`Triagem concluída com sucesso! Classificação: ${classificacaoFinal}`);
        irParaPasso(1);

    } catch (erro) {
        alert("Erro ao salvar triagem: " + erro.message);
    }
}

async function carregarFilaDoBanco() {
    try {
        const fila = await buscarFila();
        const coresRiscoMap = {
            "EMERGÊNCIA": "#ef4444",
            "MUITO URGENTE": "#f97316",
            "URGENTE": "#eab308",
            "POUCO URGENTE": "#22c55e",
            "NÃO URGENTE": "#3b82f6"
        };
        filaPacientesSimulada = fila.map(item => {
            // Usa dados do banco — persistem em qualquer dispositivo
            const sintomas = item.sintomas_texto ? item.sintomas_texto.split('|').filter(Boolean) : [];
            const comorbidades = item.comorbidades_texto ? item.comorbidades_texto.split('|').filter(Boolean) : [];
            const justificativas = item.veredito_texto ? item.veredito_texto.split('||').filter(Boolean) : [];
            const protocolo = item.protocolo_texto || item.classificacao;

            let horaStr;
            if (item.data_entrada) {
                // Garante que trata como UTC independente do formato que vier
                const dataStr = item.data_entrada.endsWith('Z') ? item.data_entrada : item.data_entrada + 'Z';
                const dataUTC = new Date(dataStr);
                horaStr = dataUTC.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit', timeZone: 'America/Sao_Paulo' });
            } else {
                horaStr = new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit', timeZone: 'America/Sao_Paulo' });
            }

            return {
                id_triagem: item.id_triagem,
                nome: item.nome_paciente,
                protocolo: protocolo,
                sintomas: sintomas,
                comorbidades: comorbidades,
                justificativas: justificativas,
                hora: horaStr,
                riscoTexto: item.classificacao,
                riscoCor: coresRiscoMap[item.classificacao] || "#888",
                weight: item.prioridade,
                data_nascimento: item.data_nascimento || null
            };
        });
        atualizarTabelaFila();
    } catch (erro) {
        console.error("Erro ao carregar fila:", erro);
    }
}

function calcularIdade(dataNascStr) {
    if (!dataNascStr) return null;
    const nasc = new Date(dataNascStr + 'T00:00:00');
    if (isNaN(nasc)) return null;
    const hoje = new Date();
    let anos = hoje.getFullYear() - nasc.getFullYear();
    let meses = hoje.getMonth() - nasc.getMonth();
    if (meses < 0 || (meses === 0 && hoje.getDate() < nasc.getDate())) anos--;
    meses = ((hoje.getMonth() - nasc.getMonth()) + 12) % 12;
    if (hoje.getDate() < nasc.getDate()) meses = (meses + 11) % 12;
    if (anos < 0) return null;
    if (anos === 0) return meses <= 0 ? 'Recém-nascido' : `${meses} ${meses === 1 ? 'mês' : 'meses'}`;
    return `${anos} ${anos === 1 ? 'ano' : 'anos'}`;
}

function atualizarTabelaFila() {
    const tbody = document.getElementById('tabela-pacientes');
    if (!tbody) return;

    if (filaPacientesSimulada.length === 0) {
        tbody.innerHTML = `<tr class="linha-vazia"><td colspan="4"><div class="feedback-vazio">🏥 Nenhum paciente na fila.</div></td></tr>`;
        return;
    }

    tbody.innerHTML = '';
    filaPacientesSimulada.forEach((p, idx) => {
        // Sintomas com quadradinho azul
        const sintomasHtml = p.sintomas && p.sintomas.length
            ? `<div style="margin-bottom:0.3rem;">
                   <span style="display:inline-flex;align-items:center;gap:0.3rem;font-size:0.8rem;font-weight:700;color:#0369a1;">
                       <span style="width:10px;height:10px;background:#0369a1;border-radius:2px;display:inline-block;"></span>
                       SINTOMAS
                   </span>
                   <div class="tags-container" style="margin-top:0.2rem;">
                       ${p.sintomas.map(s => `<span class="tag-sintoma">${s}</span>`).join('')}
                   </div>
               </div>`
            : '';

        // Comorbidades com quadradinho roxo
        const comorbHtml = p.comorbidades && p.comorbidades.length
            ? `<div style="margin-bottom:0.3rem;">
                   <span style="display:inline-flex;align-items:center;gap:0.3rem;font-size:0.8rem;font-weight:700;color:#7e22ce;">
                       <span style="width:10px;height:10px;background:#7e22ce;border-radius:2px;display:inline-block;"></span>
                       COMORBIDADES
                   </span>
                   <div class="tags-container" style="margin-top:0.2rem;">
                       ${p.comorbidades.map(c => `<span class="tag-comorbidade">${c}</span>`).join('')}
                   </div>
               </div>`
            : '';

        // Veredito removido da fila — explicação fica só no formulário
        const veredito = '';

        tbody.innerHTML += `
            <tr>
                <td>
                    <strong>${p.nome}</strong>
                    ${calcularIdade(p.data_nascimento) && p.data_nascimento !== '1900-01-01' ? `<br><small style="color:var(--texto-mutado);font-size:0.78rem;">${calcularIdade(p.data_nascimento)}</small>` : ''}
                </td>
                <td>
                    <div style="font-size:0.85rem;font-weight:700;color:${p.riscoCor};margin-bottom:0.5rem;display:inline-flex;align-items:center;gap:0.3rem;">
                        <span style="width:10px;height:10px;background:${p.riscoCor};border-radius:2px;display:inline-block;flex-shrink:0;"></span>
                        ${coresRisco[p.riscoTexto] ? coresRisco[p.riscoTexto].texto.toUpperCase() : p.riscoTexto}
                    </div>
                    ${p.protocolo === 'EMERGÊNCIA DIRETA' && p.justificativas && p.justificativas.length
                        ? `<div style="font-size:0.82rem;color:var(--texto-mutado);font-style:italic;margin-bottom:0.3rem;">${p.justificativas[0]}</div>`
                        : `<div style="font-size:0.82rem;color:var(--texto-mutado);margin-bottom:0.3rem;">📋 ${p.protocolo}</div>`
                    }
                    ${sintomasHtml}
                    ${comorbHtml}
                    ${veredito}
                </td>
                <td>
                    <span style="background-color:${p.riscoCor};color:white;padding:0.35rem 0.6rem;border-radius:6px;font-size:0.8rem;font-weight:bold;text-transform:uppercase;">
                        <span style="color:white;">${p.riscoTexto}</span>
                    </span>
                    <br><small style="color:var(--texto-mutado);display:inline-block;margin-top:4px;">${p.hora}</small>
                </td>
                <td class="texto-direita">
                    <button class="btn-voltar" style="padding:0.5rem 1rem;font-size:0.95rem;" onclick="chamarPaciente(${idx})">Chamar</button>
                </td>
            </tr>`;
    });
}

function toggleExplicacao(id, btn) {
    const bloco = document.getElementById(id);
    const visivel = bloco.style.display !== 'none';
    bloco.style.display = visivel ? 'none' : 'block';
    btn.classList.toggle('ativo', !visivel);
}

async function chamarPaciente(index) {
    const paciente = filaPacientesSimulada[index];
    try {
        if (paciente.id_triagem) {
            await chamarPacienteAPI(paciente.id_triagem);
        }
    } catch (erro) {
        console.error("Erro ao chamar paciente no banco:", erro);
    }
    alert(`Chamando paciente: ${paciente.nome}`);
    filaPacientesSimulada.splice(index, 1);
    atualizarTabelaFila();
}

function acionarEmergenciaImediata() {
    document.getElementById('emerg-nome').value = '';
    document.getElementById('emerg-obs').value = '';
    document.getElementById('modal-emergencia').style.display = 'flex';
    setTimeout(() => document.getElementById('emerg-nome').focus(), 100);
}

function fecharModalEmergencia(event) {
    if (event && event.target !== document.getElementById('modal-emergencia')) return;
    document.getElementById('modal-emergencia').style.display = 'none';
}

async function confirmarEmergenciaDireta() {
    const nome = document.getElementById('emerg-nome').value.trim() || 'PACIENTE NÃO IDENTIFICADO';
    const obs = document.getElementById('emerg-obs').value.trim() || 'Acionamento direto de emergência.';
    const horaAtual = new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit', timeZone: 'America/Sao_Paulo' });

    try {
        await registrarEmergenciaDireta(nome, obs);
        await carregarFilaDoBanco();
    } catch (erro) {
        // Se falhar no banco, adiciona local mesmo assim
        filaPacientesSimulada.unshift({
            nome: nome + ' 🚨',
            protocolo: 'EMERGÊNCIA DIRETA',
            sintomas: [],
            comorbidades: [],
            justificativas: [obs],
            hora: horaAtual,
            riscoTexto: 'EMERGÊNCIA',
            riscoCor: coresRisco['EMERGÊNCIA'].cor,
            weight: 0
        });
        atualizarTabelaFila();
    }

    document.getElementById('modal-emergencia').style.display = 'none';
}

// --- GATILHO INFALÍVEL DE CARGA DO NAVEGADOR ---
window.onload = () => {
    carregarBancoDeProtocolos();
    carregarFilaDoBanco();
    // Atualiza a fila automaticamente a cada 30 segundos
    setInterval(carregarFilaDoBanco, 30000);
};
