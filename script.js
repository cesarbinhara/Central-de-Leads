lucide.createIcons();

const usuariosAutorizados = [
    { user: "cesar.binhara", pass: "barigui2026", nome: "Cesar Binhara", role: "admin" },
    { user: "diretor", pass: "barigui123", nome: "Diretoria", role: "user" }
];

document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const u = document.getElementById('username').value;
    const p = document.getElementById('password').value;
    const valid = usuariosAutorizados.find(x => x.user === u && x.pass === p);

    if (valid) {
        document.getElementById('login-screen').style.display = 'none';
        document.getElementById('main-app').style.display = 'flex';
        document.getElementById('user-display').innerText = valid.nome;
        if (valid.role === "admin") document.getElementById('admin-section').style.display = 'block';
    } else {
        alert("Acesso negado.");
    }
});

function load(url, e) {
    document.getElementById('dashboard-view').style.display = 'block';
    document.getElementById('monitor-view').style.display = 'none';
    
    // Injeta automaticamente o parâmetro para ocultar navegação nativa do Looker
    const separator = url.includes('?') ? '&' : '?';
    const finalUrl = url.includes('navLayout=hidden') ? url : `${url}${separator}navLayout=hidden`;
    
    document.getElementById('report-frame').src = finalUrl;
    document.querySelectorAll('.menu-item').forEach(b => b.classList.remove('active'));
    e.currentTarget.classList.add('active');
}

function showMonitor(e) {
    document.getElementById('dashboard-view').style.display = 'none';
    document.getElementById('monitor-view').style.display = 'flex';
    document.querySelectorAll('.menu-item').forEach(b => b.classList.remove('active'));
    e.currentTarget.classList.add('active');
}