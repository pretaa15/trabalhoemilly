document.addEventListener('DOMContentLoaded', () => {
    const productListings = [
        {
            id: 'p1',
            name: 'Camiseta Masculina Básica',
            price: 69.90,
            image: 'https://via.placeholder.com/250x300/f39c12/ffffff?text=Camiseta+Basica'
        },
        {
            id: 'p2',
            name: 'Tênis de Corrida Feminino',
            price: 249.90,
            image: 'https://via.placeholder.com/250x300/9b59b6/ffffff?text=Tenis+Corrida'
        },
        {
            id: 'p3',
            name: 'Calça Jeans Slim Fit',
            price: 139.90,
            image: 'https://via.placeholder.com/250x300/34495e/ffffff?text=Calca+Jeans'
        },
        {
            id: 'p4',
            name: 'Vestido Floral Verão',
            price: 189.90,
            image: 'https://via.placeholder.com/250x300/e67e22/ffffff?text=Vestido+Floral'
        },
        {
            id: 'p5',
            name: 'Bota Masculina Casual',
            price: 329.90,
            image: 'https://via.placeholder.com/250x300/1abc9c/ffffff?text=Bota+Masculina'
        },
        {
            id: 'p6',
            name: 'Jaqueta de Couro Feminina',
            price: 499.90,
            image: 'https://via.placeholder.com/250x300/7f8c8d/ffffff?text=Jaqueta+Couro'
        }
    ];

    const productGrid = document.getElementById('product-list');
    const cartCountSpan = document.getElementById('cart-count');
    let cart = []; // Array para armazenar os itens do carrinho

    // Função para renderizar os produtos na página
    function renderProducts() {
        productGrid.innerHTML = ''; // Limpa a grid antes de adicionar
        productListings.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p class="price">R$ ${product.price.toFixed(2).replace('.', ',')}</p>
                <button class="add-to-cart" data-id="${product.id}" data-name="${product.name}" data-price="${product.price}">Adicionar ao Carrinho</button>
            `;
            productGrid.appendChild(productCard);
        });
    }

    // Função para atualizar o contador do carrinho
    function updateCartCount() {
        cartCountSpan.textContent = cart.length;
    }

    // Adiciona um item ao carrinho
    function addToCart(productId, productName, productPrice) {
        const item = { id: productId, name: productName, price: productPrice, quantity: 1 };
        // Em um carrinho real, você verificaria se o item já existe e incrementaria a quantidade
        cart.push(item);
        updateCartCount();
        alert(`${productName} adicionado ao carrinho!`);
        console.log('Carrinho atual:', cart);
    }

    // Event Listener para os botões "Adicionar ao Carrinho"
    productGrid.addEventListener('click', (event) => {
        if (event.target.classList.contains('add-to-cart')) {
            const button = event.target;
            const id = button.dataset.id;
            const name = button.dataset.name;
            const price = parseFloat(button.dataset.price);
            addToCart(id, name, price);
        }
    });

    // Event listener para os botões de promoção (já definidos no HTML)
    document.querySelectorAll('.product-card .add-to-cart').forEach(button => {
        button.addEventListener('click', (event) => {
            const id = event.target.dataset.id;
            const name = event.target.dataset.name;
            const price = parseFloat(event.target.dataset.price);
            addToCart(id, name, price);
        });
    });


    // Inicializa a renderização dos produtos e o contador do carrinho
    renderProducts();
    updateCartCount();

    // Exemplo de como você faria uma chamada API para buscar produtos (apenas um exemplo)
    // fetch('/api/products')
    //     .then(response => response.json())
    //     .then(data => {
    //         productListings = data; // Atualiza a lista de produtos com dados do backend
    //         renderProducts();
    //     })
    //     .catch(error => console.error('Erro ao buscar produtos:', error));
});