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

// Máscara Automática de CPF
document.getElementById('cpf').addEventListener('input', function (e) {
    let valor = e.target.value.replace(/\D/g, "");
    if (valor.length <= 11) {
        valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
        valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
        valor = valor.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    }
    e.target.value = valor;
});

// Máscara de Data DD/MM/AAAA — sempre começa no DD
(function() {
    const displayInput = document.getElementById('data_nascimento_display');
    const hiddenInput = document.getElementById('data_nascimento');

    displayInput.addEventListener('focus', function() {
        // Garante que o cursor vai pro início ao focar
        setTimeout(() => { this.setSelectionRange(0, 0); }, 0);
    });

    displayInput.addEventListener('click', function() {
        // Ao clicar em qualquer lugar, posiciona no segmento correto
        const pos = this.selectionStart;
        const val = this.value;
        let segStart = 0;
        if (pos <= 2) segStart = 0;
        else if (pos <= 5) segStart = 3;
        else segStart = 6;
        setTimeout(() => { this.setSelectionRange(segStart, segStart); }, 0);
    });

    displayInput.addEventListener('keydown', function(e) {
        const pos = this.selectionStart;
        const val = this.value.split('');

        // Apenas números e teclas de controle
        if (!/^\d$/.test(e.key) && e.key !== 'Backspace' && e.key !== 'Delete' && e.key !== 'Tab' && e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') {
            e.preventDefault();
            return;
        }

        if (e.key === 'Backspace') {
            e.preventDefault();
            // Apaga o dígito antes do cursor, pulando barras
            let p = pos - 1;
            if (p === 2 || p === 5) p--;
            if (p < 0) return;
            val[p] = '_';
            this.value = val.join('');
            setTimeout(() => { this.setSelectionRange(p, p); }, 0);
            syncHidden(this.value);
            return;
        }

        if (/^\d$/.test(e.key)) {
            e.preventDefault();
            let p = pos;
            if (p === 2 || p === 5) p++; // pula a barra
            if (p > 9) return;
            val[p] = e.key;
            this.value = val.join('');
            let next = p + 1;
            if (next === 2 || next === 5) next++;
            setTimeout(() => { this.setSelectionRange(next, next); }, 0);
            syncHidden(this.value);
        }
    });

    // Inicializa o campo com placeholder formatado
    displayInput.value = 'DD/MM/AAAA'.replace(/[DMA]/g, '_').replace(/\//g, '/');
    // Na verdade deixa vazio e usa placeholder HTML
    displayInput.value = '';
    displayInput.placeholder = 'DD/MM/AAAA';

    displayInput.addEventListener('focus', function() {
        if (!this.value) this.value = '__/__/____';
        setTimeout(() => { this.setSelectionRange(0, 0); }, 0);
    });

    displayInput.addEventListener('blur', function() {
        if (this.value === '__/__/____') this.value = '';
        syncHidden(this.value);
    });

    function syncHidden(displayVal) {
        // Converte DD/MM/AAAA para AAAA-MM-DD para o hidden input
        const match = displayVal.match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
        hiddenInput.value = match ? `${match[3]}-${match[2]}-${match[1]}` : '';
    }
})();

// Controle de Fluxo entre os Passos do Formulário
function irParaPasso(numeroPasso) {
    if (numeroPasso > 1) {
        const nome = document.getElementById('nome').value.trim();
        const cpf = document.getElementById('cpf').value.trim();
        const dataNas = document.getElementById('data_nascimento_display').value.trim();

        if (!nome || !cpf || !dataNas || dataNas === '__/__/____') {
            alert("Por favor, preencha todos os campos do Passo 1 (Nome, CPF e Nascimento) antes de avançar.");
            return;
        }
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
            <div class="linha-pergunta">
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
    const dataNas = document.getElementById('data_nascimento').value;

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
            consciente: true
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
            const local = dadosLocaisTriagem[item.id_triagem] || {};
            // Usa hora_entrada diretamente como string para evitar fuso horário
            const horaStr = item.data_entrada
                ? item.data_entrada.substring(11, 16)
                : new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
            return {
                id_triagem: item.id_triagem,
                nome: item.nome_paciente,
                protocolo: local.protocolo || item.classificacao,
                sintomas: local.sintomas || [],
                comorbidades: local.comorbidades || [],
                justificativas: local.justificativas || [],
                hora: horaStr,
                riscoTexto: item.classificacao,
                riscoCor: coresRiscoMap[item.classificacao] || "#888",
                weight: item.prioridade
            };
        });
        atualizarTabelaFila();
    } catch (erro) {
        console.error("Erro ao carregar fila:", erro);
    }
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

        // Veredito clínico (perguntas que deram SIM)
        const justTexto = p.justificativas && p.justificativas.length
            && p.justificativas[0] !== "Nenhum critério de risco específico assinalado nos questionários do protocolo clínico."
            ? p.justificativas.join('<br>')
            : null;

        const isEmergenciaDireta = p.protocolo === 'EMERGÊNCIA DIRETA';
        const veredito = justTexto ? (
            isEmergenciaDireta
                ? `<div class="bloco-explicacao" style="margin-top:0.4rem;">
                       <div class="explicacao-texto">${justTexto}</div>
                   </div>`
                : `<button class="btn-explicacao" onclick="toggleExplicacao('exp-${idx}', this)" title="Ver veredito clínico">
                       💬 Explicação
                   </button>
                   <div class="bloco-explicacao" id="exp-${idx}" style="display:none;">
                       <div class="explicacao-texto">${justTexto}</div>
                   </div>`
        ) : '';

        tbody.innerHTML += `
            <tr>
                <td><strong>${p.nome}</strong></td>
                <td>
                    <div style="font-size:0.85rem;font-weight:600;color:var(--texto-mutado);margin-bottom:0.5rem;">📋 ${p.protocolo}</div>
                    ${sintomasHtml}
                    ${comorbHtml}
                    ${veredito}
                </td>
                <td>
                    <span style="background-color:${p.riscoCor};color:white;padding:0.35rem 0.6rem;border-radius:6px;font-size:0.8rem;font-weight:bold;text-transform:uppercase;">
                        ${p.riscoTexto}
                    </span>
                    <br><small style="color:var(--texto-mutado);display:inline-block;margin-top:4px;">${p.hora}</small>
                </td>
                <td class="texto-direita">
                    <button class="btn-voltar" style="padding:0.5rem 1rem;font-size:0.95rem;" onclick="chamarPaciente(${idx})">Chamar</button>
                </td>
            </tr>`;
    });
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
    const horaAtual = new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });

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