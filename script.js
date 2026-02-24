lucide.createIcons();

const configDepts = {
    leads: {
        label: "CENTRAL DE LEADS",
        topicos: [
            { id: "central", label: "CENTRAL DE LEADS", icon: "layout", url: "https://lookerstudio.google.com/embed/reporting/cdb43200-132d-4fdd-87c5-ed3a7e27ab0f/page/p_7wno4cbczd" },
            { id: "ia", label: "RESULTADO IA", icon: "sparkles", url: "https://lookerstudio.google.com/embed/reporting/cdb43200-132d-4fdd-87c5-ed3a7e27ab0f/page/p_8470vk5e0d" },
            { id: "alertas", label: "ALERTAS E ELOGIOS", icon: "megaphone", url: "URL_ALERTAS" },
            { id: "pesq_alerta", label: "PESQUISA - ALERTA", icon: "search", url: "URL_PESQ_ALERTA" },
            { id: "pesq_elogio", label: "PESQUISA - ELOGIO", icon: "message-square", url: "URL_PESQ_ELOGIO" },
            { id: "fechamentos", label: "FECHAMENTOS", icon: "check-circle", url: "URL_FECHAMENTOS" },
            { id: "envios", label: "ENVIOS", icon: "send", url: "URL_ENVIOS" },
            { id: "sdr", label: "RESULTADO SDR", icon: "user-check", url: "URL_SDR" },
            { id: "marcas", label: "TOP MARCAS E UNIDADES", icon: "building", url: "URL_MARCAS" },
            { id: "vendedores", label: "TOP VENDEDORES", icon: "users", url: "URL_VENDEDORES" },
            { id: "veiculos", label: "TOP VEÍCULOS", icon: "car", url: "URL_VEICULOS" }
        ]
    },
    mkt: {
        label: "MARKETING",
        topicos: [
            { id: "performance", label: "PERFORMANCE ADS", icon: "trending-up", url: "URL_MKT_ADS" },
            { id: "investimento", label: "INVESTIMENTO", icon: "dollar-sign", url: "URL_MKT_INVEST" }
        ]
    }
};

let currentDept = 'leads';

function switchDept(deptKey) {
    currentDept = deptKey;
    document.querySelectorAll('.dept-opt').forEach(btn => btn.classList.remove('active'));
    if(deptKey === 'leads') document.querySelectorAll('.dept-opt')[0].classList.add('active');
    else document.querySelectorAll('.dept-opt')[1].classList.add('active');
    document.getElementById('current-dept-label').innerText = configDepts[deptKey].label;
    renderMenu();
}

function renderMenu() {
    const nav = document.getElementById('menu-nav');
    nav.innerHTML = '';
    const topicos = configDepts[currentDept].topicos;
    topicos.forEach((t, index) => {
        const btn = document.createElement('button');
        btn.className = `menu-item ${index === 0 ? 'active' : ''}`;
        btn.onclick = (e) => loadView(t.url, t.label, e);
        btn.innerHTML = `<i data-lucide="${t.icon}" style="width:14px"></i> ${t.label}`;
        nav.appendChild(btn);
    });
    lucide.createIcons();
    loadView(topicos[0].url, topicos[0].label);
}

function loadView(url, title, event = null) {
    const separator = url.includes('?') ? '&' : '?';
    document.getElementById('report-frame').src = `${url}${separator}navLayout=hidden`;
    document.getElementById('current-view-title').innerText = title;
    if (event) {
        document.querySelectorAll('.menu-item').forEach(b => b.classList.remove('active'));
        event.currentTarget.classList.add('active');
    }
}

document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    document.getElementById('login-screen').style.display = 'none';
    document.getElementById('main-app').style.display = 'flex';
    document.getElementById('user-display').innerText = "Cesar Binhara";
    switchDept('leads');
});