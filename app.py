from flask import Flask, jsonify, send_from_directory
import os

app = Flask(__name__)

# Dados de exemplo de produtos (simulando um banco de dados)
products_data = [
    {"id": "p1", "name": "Camiseta Masculina Básica", "price": 69.90, "image": ""},
    {"id": "p2", "name": "Tênis de Corrida Feminino", "price": 249.90, "image": "https://via.placeholder.com/250x300/9b59b6/ffffff?text=Tenis+Corrida"},
    {"id": "p3", "name": "Calça Jeans Slim Fit", "price": 139.90, "image": "https://via.placeholder.com/250x300/34495e/ffffff?text=Calca+Jeans"},
    {"id": "p4", "name": "Vestido Floral Verão", "price": 189.90, "image": "https://via.placeholder.com/250x300/e67e22/ffffff?text=Vestido+Floral"},
    {"id": "p5", "name": "Bota Masculina Casual", "price": 329.90, "image": "https://via.placeholder.com/250x300/1abc9c/ffffff?text=Bota+Masculina"},
    {"id": "p6", "name": "Jaqueta de Couro Feminina", "price": 499.90, "image": "https://via.placeholder.com/250x300/7f8c8d/ffffff?text=Jaqueta+Couro"}
]

# Rota para servir o arquivo index.html (página inicial)
@app.route('/')
def index():
    return send_from_directory('.', 'index.html')

# Rota para servir os arquivos estáticos (CSS, JS)
@app.route('/<path:filename>')
def static_files(filename):
    return send_from_directory('.', filename)

# API endpoint para buscar produtos
@app.route('/api/products', methods=['GET'])
def get_products():
    return jsonify(products_data)

# API endpoint para adicionar um item ao carrinho (exemplo simples, sem persistência)
@app.route('/api/add_to_cart', methods=['POST'])
def add_to_cart():
    # Em um sistema real, você receberia dados do carrinho, validaria e persistiria
    # Por enquanto, apenas um exemplo de resposta.
    return jsonify({"message": "Item adicionado ao carrinho (simulado)!"}), 200

if __name__ == '__main__':
    # Para rodar o servidor:
    # 1. Certifique-se de ter Flask instalado (`pip install Flask`)
    # 2. Navegue até a pasta onde salvou o arquivo app.py no terminal.
    # 3. Execute: `python app.py`
    # 4. Acesse http://127.0.0.1:5000 no seu navegador.
    app.run(debug=True) # debug=True reinicia o servidor automaticamente em caso de mudanças