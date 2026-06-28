// api.js — Camada de comunicação com o backend
const BASE_URL = "https://hospital-geren2.onrender.com";

// ─── PACIENTES ───────────────────────────────────────────
async function buscarOuCriarPaciente(nome, cpf, dataNascimento) {
    const res = await fetch(`${BASE_URL}/pacientes`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, cpf, data_nascimento: dataNascimento })
    });
    if (!res.ok) {
        let detalhe = "";
        try { const err = await res.json(); detalhe = JSON.stringify(err); } catch {}
        throw new Error(`Erro ao criar/buscar paciente (HTTP ${res.status}): ${detalhe}`);
    }
    return res.json();
}

// ─── TRIAGEM ─────────────────────────────────────────────
async function salvarTriagem(dados) {
    const res = await fetch(`${BASE_URL}/triagens`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dados)
    });
    if (!res.ok) {
        let detalhe = "";
        try { const err = await res.json(); detalhe = JSON.stringify(err); } catch {}
        throw new Error(`Erro ao salvar triagem (HTTP ${res.status}): ${detalhe}`);
    }
    return res.json();
}

// ─── FILA ────────────────────────────────────────────────
async function buscarFila() {
    const res = await fetch(`${BASE_URL}/fila`);
    if (!res.ok) throw new Error("Erro ao buscar fila");
    return res.json();
}

async function chamarPacienteAPI(id_triagem) {
    const res = await fetch(`${BASE_URL}/fila/${id_triagem}/chamar`, {
        method: "PATCH"
    });
    if (!res.ok) throw new Error("Erro ao chamar paciente");
    return res.json();
}

// ─── EMERGÊNCIA DIRETA ───────────────────────────────────
async function registrarEmergenciaDireta(nome, observacao) {
    const res = await fetch(`${BASE_URL}/emergencia`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, observacao })
    });
    if (!res.ok) throw new Error("Erro ao registrar emergência");
    return res.json();
}
