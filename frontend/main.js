document.addEventListener('DOMContentLoaded', () => {
    fetchAvailableApps();
    fetchRunningApps();
});

function fetchAvailableApps() {
    fetch('/api/available-apps')
        .then(response => response.json())
        .then(data => {
            const section = document.getElementById('enable-new-apps');
            section.innerHTML = data.apps.map(app => `
                <div>
                    ${app.name} 
                    <button onclick="enableApp('${app.name}')">Enable ${app.name}</button>
                </div>
            `).join('');
        });
}

function fetchRunningApps() {
    fetch('/api/running-apps')
        .then(response => response.json())
        .then(data => {
            const section = document.getElementById('existing-apps');
            section.innerHTML = data.runningApps.map(app => `
                <div>
                    ${app.name} 
                    <button onclick="startApp('${app.name}')">Start</button>
                    <button onclick="restartApp('${app.name}')">Restart</button>
                    <button onclick="stopApp('${app.name}')">Stop</button>
                    <button onclick="disableApp('${app.name}')">Disable</button>
                </div>
            `).join('');
        });
}

function enableApp(appName) {
    fetch(`/api/enable-app?appName=${appName}`, { method: 'POST' })
        .then(() => {
            fetchAvailableApps();
            fetchRunningApps();
        });
}

function startApp(appName) {
    fetch(`/api/start-app?appName=${appName}`, { method: 'POST' })
        .then(() => fetchRunningApps());
}

function restartApp(appName) {
    fetch(`/api/restart-app?appName=${appName}`, { method: 'POST' })
        .then(() => fetchRunningApps());
}

function stopApp(appName) {
    fetch(`/api/stop-app?appName=${appName}`, { method: 'POST' })
        .then(() => fetchRunningApps());
}

function disableApp(appName) {
    fetch(`/api/disable-app?appName=${appName}`, { method: 'POST' })
        .then(() => {
            fetchAvailableApps();
            fetchRunningApps();
        });
}
