import { useState } from 'react';
import { ProdutosStyle } from '../css/ProdutosStyle';
import chuteira from '../assets/chuteira.jpg';
import bolabasquet from '../assets/bolabasq.jpg';
import bolafut from '../assets/bolafut.jpg';
import bottle from '../assets/bottle.jpg';
import halter from '../assets/halter.jpg';
import volei from '../assets/volei.jpg';
import bolafutamericano from '../assets/bolafutamericano.jpg';
import raquete from '../assets/raquete.jpg';
import tennis from '../assets/tennis.jpg';
import baseball from '../assets/baseball.jpg';

const Produtos = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleSelectProduct = (product) => {
        setSelectedProduct(product);
    };

    return (
        <ProdutosStyle>
            <section className="produtos">
                <div
                    className={`card ${selectedProduct === 'Produto 1' ? 'selected' : ''}`}
                    onClick={() => handleSelectProduct('Produto 1')}
                >
                    <img className="card-image" src={chuteira} alt="Produto 1"/>
                    <h2>Produto 1</h2>
                    <p>10$</p>
                </div>
                <div
                    className={`card ${selectedProduct === 'Produto 2' ? 'selected' : ''}`}
                    onClick={() => handleSelectProduct('Produto 2')}
                >
                    <img className="card-image" src={bolabasquet} alt="Produto 2"/>
                    <h2>Produto 2</h2>
                    <p>10$</p>
                </div>
                <div
                    className={`card ${selectedProduct === 'Produto 3' ? 'selected' : ''}`}
                    onClick={() => handleSelectProduct('Produto 3')}
                >
                    <img className="card-image" src={bolafut} alt="Produto 3"/>
                    <h2>Produto 3</h2>
                    <p>10$</p>
                </div>
                <div
                    className={`card ${selectedProduct === 'Produto 4' ? 'selected' : ''}`}
                    onClick={() => handleSelectProduct('Produto 4')}
                >
                    <img className="card-image" src={bottle} alt="Produto 4"/>
                    <h2>Produto 4</h2>
                    <p>10$</p>
                </div>
                <div
                    className={`card ${selectedProduct === 'Produto 5' ? 'selected' : ''}`}
                    onClick={() => handleSelectProduct('Produto 5')}
                >
                    <img className="card-image" src={halter} alt="Produto 5"/>
                    <h2>Produto 5</h2>
                    <p>10$</p>
                </div>
                <div
                    className={`card ${selectedProduct === 'Produto 6' ? 'selected' : ''}`}
                    onClick={() => handleSelectProduct('Produto 6')}
                >
                    <img className="card-image" src={volei} alt="Produto 6"/>
                    <h2>Produto 6</h2>
                    <p>10$</p>
                </div>
                <div
                    className={`card ${selectedProduct === 'Produto 7' ? 'selected' : ''}`}
                    onClick={() => handleSelectProduct('Produto 7')}
                >
                    <img className="card-image" src={bolafutamericano} alt="Produto 7"/>
                    <h2>Produto 7</h2>
                    <p>10$</p>
                </div>
                <div
                    className={`card ${selectedProduct === 'Produto 8' ? 'selected' : ''}`}
                    onClick={() => handleSelectProduct('Produto 8')}
                >
                    <img className="card-image" src={raquete} alt="Produto 8"/>
                    <h2>Produto 8</h2>
                    <p>10$</p>
                </div>
                <div
                    className={`card ${selectedProduct === 'Produto 9' ? 'selected' : ''}`}
                    onClick={() => handleSelectProduct('Produto 9')}
                >
                    <img className="card-image" src={tennis} alt="Produto 9"/>
                    <h2>Produto 9</h2>
                    <p>10$</p>
                </div>
                <div
                    className={`card ${selectedProduct === 'Produto 10' ? 'selected' : ''}`}
                    onClick={() => handleSelectProduct('Produto 10')}
                >
                    <img className="card-image" src={baseball} alt="Produto 10"/>
                    <h2>Produto 10</h2>
                    <p>10$</p>
                </div>
            </section>
        </ProdutosStyle>
    );
};

export default Produtos;
