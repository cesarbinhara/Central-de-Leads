lucide.createIcons();

const configDepts = {
    leads: {
        label: "CENTRAL DE LEADS",
        topicos: [
            { id: "central", label: "CENTRAL DE LEADS", icon: "layout", url: "https://lookerstudio.google.com/embed/reporting/cdb43200-132d-4fdd-87c5-ed3a7e27ab0f/page/p_my12rcbczd" },
            { id: "ia", label: "RESULTADO IA", icon: "sparkles", url: "https://lookerstudio.google.com/embed/reporting/cdb43200-132d-4fdd-87c5-ed3a7e27ab0f/page/p_8470vk5e0d" },
            { id: "alertas", label: "ALERTAS E ELOGIOS", icon: "megaphone", url: "https://lookerstudio.google.com/embed/reporting/cdb43200-132d-4fdd-87c5-ed3a7e27ab0f/page/p_7wno4cbczd" },
            { id: "pesq_alerta", label: "PESQUISA - ALERTA", icon: "search", url: "https://lookerstudio.google.com/embed/reporting/cdb43200-132d-4fdd-87c5-ed3a7e27ab0f/page/p_grlredbczd" },
            { id: "pesq_elogio", label: "PESQUISA - ELOGIO", icon: "message-square", url: "https://lookerstudio.google.com/embed/reporting/cdb43200-132d-4fdd-87c5-ed3a7e27ab0f/page/p_okcimnze0d" },
            { id: "fechamentos", label: "FECHAMENTOS", icon: "check-circle", url: "https://lookerstudio.google.com/embed/reporting/cdb43200-132d-4fdd-87c5-ed3a7e27ab0f/page/p_8mw52qsrzd" },
            { id: "envios", label: "ENVIOS", icon: "send", url: "https://lookerstudio.google.com/embed/reporting/cdb43200-132d-4fdd-87c5-ed3a7e27ab0f/page/p_xwrr520n0d" },
            { id: "sdr", label: "RESULTADO SDR", icon: "user-check", url: "https://lookerstudio.google.com/embed/reporting/cdb43200-132d-4fdd-87c5-ed3a7e27ab0f/page/p_lxmsmldczd" },
            { id: "marcas", label: "TOP MARCAS E UNIDADES", icon: "building", url: "https://lookerstudio.google.com/embed/reporting/cdb43200-132d-4fdd-87c5-ed3a7e27ab0f/page/p_y468r25hzd" },
            { id: "vendedores", label: "TOP VENDEDORES", icon: "users", url: "https://lookerstudio.google.com/embed/reporting/cdb43200-132d-4fdd-87c5-ed3a7e27ab0f/page/p_r8rfdr6hzd" },
            { id: "veiculos", label: "TOP VEÍCULOS", icon: "car", url: "https://lookerstudio.google.com/embed/reporting/cdb43200-132d-4fdd-87c5-ed3a7e27ab0f/page/p_snljnw6hzd" }
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