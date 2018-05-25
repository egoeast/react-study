import React, {Component} from 'react';
import Article from './Article';
//import articles from '../fixtures';

class ArticleList extends Component {
    render() {
        ///const articles = this.props.articles
        const ArticleElements = this.props.articles.map(article => <li><Article article = {article}/></li>);
        return (
            <ul>
                {ArticleElements}
            </ul>)
    }
}

export default ArticleList;