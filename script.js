async function searchSubdomains() {
    const domain = document.getElementById('domainInput').value;
    if (!domain) {
        alert('Por favor, ingresa un dominio.');
        return;
    }

    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '<p>Buscando subdominios...</p>';

    try {
        const response = await fetch(https://api.securitytrails.com/v1/domain/${domain}/subdomains, {
            method: 'GET',
            headers: {
                'APIKEY': 'tu_api_key_aquí' // Reemplaza con tu API key de SecurityTrails
            }
        });

        const data = await response.json();

        if (data.subdomains) {
            resultsDiv.innerHTML = '';
            data.subdomains.forEach(subdomain => {
                const div = document.createElement('div');
                div.textContent = subdomain;
                resultsDiv.appendChild(div);
            });
        } else {
            resultsDiv.innerHTML = '<p>No se encontraron subdominios.</p>';
        }
    } catch (error) {
        resultsDiv.innerHTML = '<p>Error al buscar subdominios: ' + error.message + '</p>';
    }
}
