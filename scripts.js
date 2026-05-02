const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const items = document.querySelectorAll('.item');
const dots = document.querySelectorAll('.dot');
// CORREÇÃO: O JS estava procurando .number, mas no HTML a classe era .numbers
const numberIndicators = document.querySelector('.numbers'); 

let active = 0;
const totalItems = items.length;
let timer;

function update(direction) {
    // Remove as classes ativo do item e do ponto atual
    items[active].classList.remove('ativo');
    dots[active].classList.remove('ativo'); 

    // Calcula o próximo índice de forma circular
    if (direction === 1) {
        active = (active + 1) % totalItems;
    } else {
        active = (active - 1 + totalItems) % totalItems;
    }

    // Adiciona a classe ativo no novo item e ponto
    items[active].classList.add('ativo');
    dots[active].classList.add('ativo');

    // Atualiza o indicador numérico (ex: 01, 02)
    numberIndicators.textContent = String(active + 1).padStart(2, '0');
}

// Timer para passar sozinho (opcional)
timer = setInterval(() => {
    update(1);
}, 7000);

prevButton.addEventListener('click', () => {
    clearInterval(timer); // Para a rotação automática se o usuário clicar
    update(-1);
});

nextButton.addEventListener('click', () => {
    clearInterval(timer); // Para a rotação automática se o usuário clicar
    update(1);
});

const themeToggle = document.getElementById('temaToggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    // Alterna a classe no body
    body.classList.toggle('tema-claro');
    
    // Alterna a visibilidade dos ícones (lua <-> sol)
    const icoLua = themeToggle.querySelector('.icone-lua');
    const icoSol = themeToggle.querySelector('.icone-sol');
    icoLua.style.display = icoLua.style.display === 'none' ? 'inline' : 'none';
    icoSol.style.display = icoSol.style.display === 'none' ? 'inline' : 'none';
    
    // Salva a preferência do usuário no navegador
    const isLight = body.classList.contains('tema-claro');
    localStorage.setItem('tema', isLight ? 'claro' : 'escuro');
});

// Verifica se o usuário já tinha escolhido um tema antes
if (localStorage.getItem('tema') === 'claro') {
    body.classList.add('tema-claro');
    const icoLua = themeToggle.querySelector('.icone-lua');
    const icoSol = themeToggle.querySelector('.icone-sol');
    icoLua.style.display = 'none';
    icoSol.style.display = 'inline';
}

const informacoesProjetos = {
    nexus: {
        titulo: "Nexus - Arquitetura e Segurança",
        descricao: "Decisão Técnica: Implementei criptografia AES-128 de ponta a ponta para garantir que a privacidade não dependesse do servidor.",
        metricas: "Resultado: Latência de criptografia menor que 10ms em conexões locais."
    },
    merlin: {
        titulo: "Merlin - IA e Automação",
        descricao: "Desafio: O maior obstáculo foi a latência da resposta verbal. Usei processamento assíncrono em Python para otimizar o fluxo.",
        metricas: "Diferencial: Capacidade de busca em tempo real integrada ao assistente de voz."
    }
};

const dadosProjetos = {
    merlin: {
        titulo: "MERLIN — Agente de Voz e Automação",
        problema: "Executar tarefas em ambientes onde o uso manual é limitado, exigindo interação rápida e eficiente sem uso das mãos.",
        solucao: "Criação de um agente multimodal com processamento assíncrono em Python e integração com APIs de voz, permitindo execução de comandos em tempo real com baixa latência.",
        tecnologias: "Python, processamento assíncrono, APIs de voz, automação",
        resultados: "Interface funcional hands-free com respostas rápidas e execução automatizada de tarefas.",
        aplicacao: "Aplicável em ambientes industriais, operações logísticas e cenários onde eficiência operacional e agilidade são essenciais.",
        github: "https://github.com/Guilherme-Lopesz/Merlin-voice-agent",
        // Mídia: preencha com os caminhos reais dos seus arquivos
        video: "./video/merlin-em-breve.mp4",          // ex: "assets/merlin-demo.mp4"
        imagem: "./img/merlin.mae1.jpg"          // ex: "assets/merlin-arquitetura.png"
    },
    nexus: {
        titulo: "NEXUS — Sistema de Comunicação Seguro",
        problema: "Garantir comunicação privada em ambientes onde a exposição de dados representa risco crítico.",
        solucao: "Desenvolvimento de uma plataforma com arquitetura cliente-servidor e criptografia de ponta a ponta utilizando AES-128, assegurando a confidencialidade das mensagens durante toda a comunicação.",
        tecnologias: "Python, criptografia AES-128, arquitetura cliente-servidor",
        resultados: "Comunicação protegida contra interceptação, com validação da segurança diretamente no código.",
        aplicacao: "Pode ser aplicado em ambientes corporativos que exigem troca segura de informações, como sistemas internos, operações sensíveis e comunicação entre equipes.",
        github: "https://github.com/Guilherme-Lopesz/Nexus",
        // Mídia: preencha com os caminhos reais dos seus arquivos
        video: "./video/nexus-video2.mp4",          // ex: "assets/nexus-demo.mp4"
        imagem: "./img/nexus-sala.png"          // ex: "assets/nexus-arquitetura.png"
    },
    classificador: {
        titulo: "GIRO — Classificador Inteligente",
        problema: "Erros humanos e baixa eficiência em processos de auditoria financeira e análise de dados.",
        solucao: "Desenvolvimento de um sistema híbrido combinando regras de negócio e inteligência artificial para classificação automatizada de dados.",
        tecnologias: "Python, lógica de negócio, inteligência artificial",
        resultados: "Redução do tempo de processamento e maior consistência nas análises.",
        aplicacao: "Pode ser utilizado em áreas financeiras, auditoria e análise de grandes volumes de dados corporativos.",
        github: "https://github.com/Guilherme-Lopesz/Classificador-Inteligente-de-Transa-es",
        // Mídia: preencha com os caminhos reais dos seus arquivos
        video: "./video/giro-video.mp4",          // ex: "assets/giro-demo.mp4"
        imagem: "./img/Giro-tela-Inicial.png"          // ex: "assets/giro-arquitetura.png"
    }
};

function abrirModal(projeto) {
    const info = dadosProjetos[projeto];
    const corpo = document.getElementById('modal-corpo');

    // ── Bloco de mídia: vídeo (topo) + imagem estática (abaixo) ──────
    const videoHTML = info.video
        ? `<video
                src="${info.video}"
                autoplay
                muted
                loop
                playsinline
                style="width:100%; height:100%; object-fit:cover; border-radius:10px;">
           </video>`
        : `<div style="width:100%; height:100%; display:flex; flex-direction:column;
                        align-items:center; justify-content:center; gap:0.5rem;
                        color:rgba(255,255,255,0.3); font-size:0.75rem; letter-spacing:0.1em; text-transform:uppercase;">
               <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                   <polygon points="5 3 19 12 5 21 5 3"/>
               </svg>
               Vídeo Demo (MP4)
           </div>`;

    const imagemHTML = info.imagem
        ? `<img src="${info.imagem}" alt="Diagrama de arquitetura"
               style="width:100%; height:100%; object-fit:cover; border-radius:10px;" />`
        : `<div style="width:100%; height:100%; display:flex; flex-direction:column;
                        align-items:center; justify-content:center; gap:0.5rem;
                        color:rgba(255,255,255,0.3); font-size:0.75rem; letter-spacing:0.1em; text-transform:uppercase;">
               <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                   <rect x="3" y="3" width="18" height="18" rx="2"/>
                   <circle cx="8.5" cy="8.5" r="1.5"/>
                   <polyline points="21 15 16 10 5 21"/>
               </svg>
               Diagrama de Arquitetura
           </div>`;

    corpo.innerHTML = `
        <!-- Título acima das colunas -->
        <h2 style="
            color: var(--primaria);
            font-family: 'Germania One', serif;
            font-size: clamp(1.2rem, 3vw, 1.6rem);
            margin: 0 0 1.5rem 0;
            letter-spacing: 0.04em;
        ">${info.titulo}</h2>

        <!-- Grade de duas colunas -->
        <div class="modal-grade">

            <!-- ── COLUNA ESQUERDA: narrativa ── -->
            <div class="modal-narrativa">

                <div class="modal-bloco">
                    <h4 class="modal-label">🎯 Problema</h4>
                    <p>${info.problema}</p>
                </div>

                <div class="modal-bloco">
                    <h4 class="modal-label">💡 Solução</h4>
                    <p>${info.solucao}</p>
                </div>

                <div class="modal-bloco">
                    <h4 class="modal-label">🛠️ Tecnologias</h4>
                    <p>${info.tecnologias}</p>
                </div>

                <div class="modal-bloco">
                    <h4 class="modal-label">✅ Resultados</h4>
                    <p>${info.resultados}</p>
                </div>

                <div class="modal-bloco">
                    <h4 class="modal-label">🚀 Aplicação</h4>
                    <p>${info.aplicacao}</p>
                </div>

                <a href="${info.github}" target="_blank" class="btn-projeto" style="display:block; text-align:center; margin-top:auto;">
                    🔗 Ver Repositório Completo
                </a>

            </div><!-- /modal-narrativa -->

            <!-- ── COLUNA DIREITA: mídia ── -->
            <div class="modal-midia">

                <!-- Caixa 1: Vídeo Demo -->
                <div class="modal-media-box">
                    ${videoHTML}
                </div>

                <!-- Caixa 2: Imagem Estática -->
                <div class="modal-media-box">
                    ${imagemHTML}
                </div>

            </div><!-- /modal-midia -->

        </div><!-- /modal-grade -->
    `;

    document.getElementById('modal-projeto').style.display = 'block';
}

// Fechar modal ao clicar no X ou fora da caixa
document.querySelector('.fechar-modal').onclick = () => {
    document.getElementById('modal-projeto').style.display = "none";
};

window.onclick = (event) => {
    const modal = document.getElementById('modal-projeto');
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

// ==================== BOTÕES "SAIBA MAIS" ====================
const botoesSaibaMais = document.querySelectorAll('.btn-saiba-mais');
const projetosMap = ['merlin', 'classificador', 'nexus']; // Ordem dos projetos no slider

botoesSaibaMais.forEach((botao, index) => {
    botao.addEventListener('click', () => {
        abrirModal(projetosMap[index]);
    });
});
// ==================== MODAL DE CERTIFICADOS ====================
function abrirCertificado(caminhoPDF, titulo) {
    const modal = document.getElementById('modal-certificado');
    const corpo = document.getElementById('modal-certificado-corpo');
    
    // Criar um iframe para visualizar o PDF
    corpo.innerHTML = `
        <div style="text-align: center; margin-bottom: 1rem;">
            <h3 style="color: var(--primaria); font-family: 'Germania One';">${titulo}</h3>
        </div>
        <iframe 
            src="${caminhoPDF}#toolbar=0&navpanes=0&scrollbar=1" 
            width="100%" 
            height="600px" 
            style="border: none; border-radius: 8px;">
        </iframe>
        <div style="text-align: center; margin-top: 1.5rem;">
            <a href="${caminhoPDF}" target="_blank" class="cert-btn" style="margin-right: 1rem;">
                📥 Baixar PDF
            </a>
            <button onclick="fecharCertificado()" class="cert-btn" style="background: var(--secundaria);">
                ✕ Fechar
            </button>
        </div>
    `;
    
    modal.style.display = 'block';
}

function fecharCertificado() {
    document.getElementById('modal-certificado').style.display = 'none';
}

// Fechar modal ao clicar fora
window.addEventListener('click', (event) => {
    const modal = document.getElementById('modal-certificado');
    if (event.target === modal) {
        fecharCertificado();
    }
});
// ==================== ANIMAÇÕES DE SCROLL (Intersection Observer) ====================
(function () {
    // Verifica se o usuário prefere movimento reduzido no sistema operacional
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Se o usuário prefere menos movimento, não aplica as classes iniciais
    // Os elementos já ficam visíveis pelo fallback do CSS — nada a fazer no JS
    if (prefersReduced) return;

    // ── Configuração do Observer ──────────────────────────────────────
    const observerConfig = {
        threshold: 0.12,          // dispara quando 12% do elemento está visível
        rootMargin: '0px 0px -30px 0px'
    };

    // ── Observer: Sobre Mim — Fade-in Up ─────────────────────────────
    const sobreObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('anim-visivel');
                sobreObserver.unobserve(entry.target); // anima só uma vez
            }
        });
    }, observerConfig);

    // Seleciona apenas os cards dentro de #sobre e aplica estado inicial
    document.querySelectorAll('#sobre .sobre-card').forEach((card) => {
        card.classList.add('anim-fade-up');
        sobreObserver.observe(card);
    });

    // ── Observer: Estudos — Fade-in Left com Stagger de 0.2s ─────────
    const estudosObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('anim-visivel');
                estudosObserver.unobserve(entry.target); // anima só uma vez
            }
        });
    }, observerConfig);

    // Seleciona apenas os cert-cards dentro de #estudos
    // Aplica atraso escalonado de 0.2s por card (efeito cascata)
    document.querySelectorAll('#estudos .cert-card').forEach((card, index) => {
        card.classList.add('anim-fade-left');
        card.style.transitionDelay = `${index * 0.2}s`;
        estudosObserver.observe(card);
    });

})();