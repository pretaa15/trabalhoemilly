document.addEventListener('DOMContentLoaded', () => {
    const productListings = [
        {
            id: 'p1',
            name: 'Camiseta Masculina Básica',
            price: 69.90,
            image: 'https://i.pinimg.com/736x/a1/9a/58/a19a58c15bbf36bedefaf1e010909bb8.jpg'
        },
        {
            id: 'p2',
            name: 'Tênis nike jordan 1',
            price: 869.99,
            image: 'https://i.pinimg.com/736x/00/9c/6d/009c6d42586cb9c5371526656377dda5.jpg'
        },
        {
            id: 'p3',
            name: 'Tênis nike dunk',
            price: 989.99,
            image: 'https://i.pinimg.com/736x/3c/02/95/3c029582cfc9e6922eebd699a52a72b3.jpgs'
        },
        {
            id: 'p4',
            name: 'Tênis Nike Jordan',
            price: 469.99,
            image: 'https://i.pinimg.com/736x/d3/f9/f7/d3f9f7140925513e7bd2f52ed724635f.jpg'
        },
        {
            id: 'p5',
            name: 'Bota Masculina Casual',
            price: 329.90,
            image: 'https://i.pinimg.com/736x/f8/54/1b/f8541b11c766d4eed484b9c2270fbb42.jpg'
        },
        {
            id: 'p6',
            name: 'Jaqueta de Couro Feminina',
            price: 499.90,
            image: 'https://i.pinimg.com/736x/f3/bf/f4/f3bff4bb4d1772121b4b227ec306a290.jpg'
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