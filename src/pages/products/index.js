import React, { Component } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';

import './styles.css';

export default class Main extends Component {
    state = {
        product: {}
    }

    async componentDidMount() {
        const { id } = this.props.match.params;

        const response = await api.get(`/products/${id}`);

        this.setState({ product: response.data });
    }

    render() {
        const { product } = this.state;

        return (
            <div className="product-info">
                <h1>{product.title}</h1>
                <p>{product.description}</p>
                <p>
                    Link: <a href={product.url}>{product.url}</a>
                </p>
                <Link className="back-products" to="/"><span>Voltar</span></Link>
            </div>
        );
    }
}