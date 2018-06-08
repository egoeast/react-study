import React from 'react';
import {Component} from 'react';
import articles from '../fixtures';
import ArticleList from './ArticleList';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
    state = {
        reversed: false
    }

    render() {
        return (

            <div className="container">
                <div className="jumbotron">
                    <h1 className="display-3">App name</h1>
                    <button onClick={
                        this.revert
                    }>Reverse</button>
                </div>
                <ArticleList articles={this.state.reversed ? articles.reverse() : articles }/>
            </div>
        )
    }

    revert = () => this.setState(
        {
            reversed: !this.state.reversed
    })
}

export default App