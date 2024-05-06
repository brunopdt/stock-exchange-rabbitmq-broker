//Função para realizar requisições GET para a API
async function getApi(path) {
    const response = await fetch(`https://stock-exchange-rabbitmq-broker.onrender.com/${path}`, { method: "GET" });
    //Para rodar local descomentar o código abaixo
    //const response = await fetch(`http://localhost:8080/${path}`, { method: "GET" });
    return response;
}

//Função para realizar requisições POST para a API
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

//Função para listar as ações disponíveis para compra
async function getSharesForPurchase() {
    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get('userId');
    const brokerId = userId ?? 1;
    localStorage.setItem('brokerId', brokerId);

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

    let currentShareCode = null;
    const buyModal = document.getElementById('buyDialog');
    try {
        
        const buyButtons = document.querySelectorAll('.btn-buy');
        buyButtons.forEach(button => {
            button.addEventListener('click', () => {
                currentShareCode = button.parentElement.querySelector('strong').textContent.split(' - ')[0];
                
                if (buyModal) {
                    const modalTitle = buyModal.querySelector('.modal-title');
                    if (modalTitle) {
                        modalTitle.textContent = `Compra de ${currentShareCode}`;
                    }
                    buyModal.showModal(); 
                }
            });
        });

        const confirmBuyButton = document.getElementById('confirmBuy');
        const cancelBuyButton = document.getElementById('cancelBuy');
        cancelBuyButton.addEventListener('click', async (event) => { 
            event.preventDefault();
            buyModal.close();
        });
        confirmBuyButton.addEventListener('click', async (event) => { 
            event.preventDefault();
            const quantity = document.getElementById('quantity').value;
            const value = document.getElementById('price').value;

            try {
                const brokerId = localStorage.getItem('brokerId') ?? 1;
                //para rodar local trocar a url para http://localhost:8080/transaction/buy
                const response = await fetch('https://stock-exchange-rabbitmq-broker.onrender.com/transaction/buy', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        brokerId: brokerId,
                        active: currentShareCode,
                        stockAmount: quantity,
                        price: value
                    })
                });
                if (response.ok) {
                    console.log('Compra realizada com sucesso!');
                    buyModal.close()
                } else {
                    console.error('Erro ao realizar compra:', response.statusText);
                }
            } catch (error) {
                console.error('Erro ao realizar compra:', error);
            }
        });

    } catch (error) {
        console.error('Error:', error);
    }
}

//Função para listar as ações compradas
async function getPurchasedShares() {
    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get('userId');
    const brokerId = userId ?? 1;

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
                <button class="btn btn-buy btn-sell float-right" data-toggle="modal" data-target="#sellModal">VENDER</button>
                <button class="btn btn-buy float-right" data-toggle="modal" data-target="#trackModal">ACOMPANHAR</button>
            `;
            sharesList.appendChild(li);
        });
    }

let currentShareCode = null;
const sellModal = document.getElementById('sellDialog');
try {
    
    const sellButtons = document.querySelectorAll('.btn-sell');
    sellButtons.forEach(button => {
        button.addEventListener('click', () => {
            currentShareCode = button.parentElement.querySelector('strong').textContent.split(' - ')[0];
            
            if (sellModal) {
                const modalTitle = sellModal.querySelector('.modal-title-sell');
            if (modalTitle) {
                modalTitle.textContent = `Venda de ${currentShareCode}`;
            }
                sellModal.showModal();
            }
        });
    });

    const confirmSellButton = document.getElementById('confirmSell');
    const cancelSellButton = document.getElementById('cancelSell');
    cancelSellButton.addEventListener('click', async (event) => { 
        event.preventDefault();
        sellModal.close();
    });
    confirmSellButton.addEventListener('click', async (event) => { 
        event.preventDefault();
        const quantity = document.getElementById('quantity-sell').value;
        const value = document.getElementById('price-sell').value;

        try {
            //para rodar local trocar url para http://localhost:8080/transaction/sell
            const response = await fetch('https://stock-exchange-rabbitmq-broker.onrender.com/transaction/sell', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    brokerId: brokerId,
                    active: currentShareCode,
                    stockAmount: quantity,
                    price: value
                })
            });
            if (response.ok) {
                console.log('Venda realizada com sucesso!');
                sellModal.close()
            } else {
                console.error('Erro ao realizar venda:', response.statusText);
            }
        } catch (error) {
            console.error('Erro ao realizar venda:', error);
        }
    });

} catch (error) {
    console.error('Error:', error);
}

}

//Função para listar as transações realizadas
async function getTransactions() {
    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get('userId');
    const brokerId = userId ?? 1;

    const response = await getApi(`transaction/broker/${brokerId}`);
    const shares = await response.json();


    const sharesList = document.getElementById('shares-for-purchase-list');

    sharesList.innerHTML = '';

    if (shares && shares.length > 0) {
        shares.forEach(share => {
            const li = document.createElement('li');
            li.className = "list-group-item";
            li.innerHTML = `
                <div>
                    <strong>Transação realizada em: ${share.transactionDate} no valor de: ${share.value} e com quantidade:  ${share.quantity}</strong>
                    <br>
                    <span>Ação: ${share.share.code} - ${share.share.name}</span>
                </div>
            `;
            sharesList.appendChild(li);
        });
    }
}


    