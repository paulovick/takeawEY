from json import dumps
from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

products = [
    {
        'id': '1',
        'name': 'Pizza',
        'price': 6,
        'day': True
    },
    {
        'id': '2',
        'name': 'Coffee',
        'price': 1,
        'day': False
    },
    {
        'id': '3',
        'name': 'Beer',
        'price': 1.60,
        'day': False
    },
    {
        'id': '4',
        'name': 'Bravas',
        'price': 3,
        'day': False
    },
    {
        'id': '5',
        'name': 'FiberBurguer',
        'price': 4.5,
        'day': False
    }

]


@app.route('/products/<product_id>')
def get_product(product_id):
    result = [x for x in products if x['id'] == product_id][0]
    return dumps(result)


@app.route('/products/')
def get_products():
    return dumps(products)


if __name__ == '__main__':
    app.run()
