from flask import Flask, jsonify, send_from_directory
import os

app = Flask(__name__)

# Dados de exemplo de produtos (simulando um banco de dados)
products_data = [
    {"id": "p1", "name": "Camiseta Masculina Básica", "price": 69.90, "image": "https://i.pinimg.com/736x/a1/9a/58/a19a58c15bbf36bedefaf1e010909bb8.jpg"},
    {"id": "p2", "name": "Tênis Nike dunk", "price": 989.99, "image": "https://i.pinimg.com/736x/3c/02/95/3c029582cfc9e6922eebd699a52a72b3.jpgs"},
    {"id": "p3", "name": "Tênis nike jordan 1", "price": 869.99, "image": "https://i.pinimg.com/736x/00/9c/6d/009c6d42586cb9c5371526656377dda5.jpg"},
    {"id": "p4", "name": "Tênis nike jordan", "price": 469.99, "image": "https://i.pinimg.com/736x/d3/f9/f7/d3f9f7140925513e7bd2f52ed724635f.jpg"},
    {"id": "p5", "name": "Bota Masculina Casual", "price": 329.90, "image": "https://i.pinimg.com/736x/f8/54/1b/f8541b11c766d4eed484b9c2270fbb42.jpg"},
    {"id": "p6", "name": "Jaqueta de Couro Feminina", "price": 499.90, "image": "https://i.pinimg.com/736x/f3/bf/f4/f3bff4bb4d1772121b4b227ec306a290.jpg"}
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