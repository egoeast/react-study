import React, {Component} from 'react';
import Article from './Article';
import './style.css';

//import articles from '../fixtures';

class ArticleList extends Component {
    render() {
        ///const articles = this.props.articles
        const ArticleElements = this.props.articles.map((article, index) =>
            <li className="article-list__li" key={article.id}>
                <Article defaultOpen={index === 0} article={article}/>
            </li>);
        return (
            <ul>
                {ArticleElements}
            </ul>)
    }
}

export default ArticleList;