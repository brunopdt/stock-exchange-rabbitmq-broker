async function getApi(path) {
    const response = await fetch(`http://localhost:8080/${path}`, { method: "GET" });
    return response;
}

document.addEventListener('DOMContentLoaded', async () => {
    try {
        await getSharesForPurchase();
        const tabs = document.querySelectorAll('.nav-link');
        tabs.forEach(tab => {
            tab.addEventListener('click', async () => {
                const tabId = tab.getAttribute('id');

                tabs.forEach(t => t.classList.remove('active'));

                switch (tabId) {
                    case 'shares-for-purchase-tab':
                        await getSharesForPurchase();
                        break;
                    case 'purchased-shares-tab':
                        await getPurchasedShares();
                        break;
                    case 'track-transaction-tab':
                        getTransactions();
                        break;
                    default:
                        break;
                }
                tab.classList.add('active');
            });
        });

    } catch (error) {
        console.error('Error:', error);
    }
});

async function getSharesForPurchase() {
    const response = await getApi('share/');
    const shares = await response.json();

    const sharesList = document.getElementById('shares-for-purchase-list');
    sharesList.innerHTML = '';

    shares.forEach(share => {
        const li = document.createElement('li');
        li.className = "list-group-item";
        li.innerHTML = `
                <div>
                    <strong>${share.code} - ${share.name}</strong>
                    <br>
                    <span>${share.activity}</span>
                </div>
                <button class="btn btn-buy float-right" data-toggle="modal" data-target="#buyModal">COMPRAR</button>
            `;
        sharesList.appendChild(li);
    });
}

async function getPurchasedShares() {
    //const brokerId = localStorage.getItem('brokerId'); //TODO ajustar para pegar dinamicamente o id do usu logado
    const brokerId = 1;

    const response = await getApi(`offersBook/broker/${brokerId}`);
    const shares = await response.json();


    const sharesList = document.getElementById('shares-for-purchase-list');

    sharesList.innerHTML = '';

    if (shares && shares.length > 0) {
        shares.forEach(share => {
            const li = document.createElement('li');
            li.className = "list-group-item";
            li.innerHTML = `
                <div>
                    <strong>${share.share.code} - ${share.share.name}</strong>
                    <br>
                    <span>Comprada por: ${share.price} - Quantidade: ${share.quantity}</span>
                </div>
                <button class="btn btn-buy float-right" data-toggle="modal" data-target="#sellModal">VENDER</button>
                <button class="btn btn-buy float-right" data-toggle="modal" data-target="#trackModal">ACOMPANHAR</button>
            `;
            sharesList.appendChild(li);
        });
    }
}

async function getTransactions() {
    //const brokerId = localStorage.getItem('brokerId'); //TODO ajustar para pegar dinamicamente o id do usu logado
    const brokerId = 1;

    const response = await getApi(`transaction/broker/${brokerId}`);
    const shares = await response.json();


    const sharesList = document.getElementById('shares-for-purchase-list');
    console.log(sharesList)

    sharesList.innerHTML = '';

    if (shares && shares.length > 0) {
        shares.forEach(share => {
            const li = document.createElement('li');
            li.className = "list-group-item";
            li.innerHTML = `
                <div>
                    <strong>Transação realizada em: ${share.transactionDate} no valor de: ${share.price} e com quantidade:  ${share.quantity}</strong>
                    <br>
                    <span>Ação: ${share.share.code} - ${share.share.name}</span>
                </div>
            `;
            sharesList.appendChild(li);
        });
    }
}
