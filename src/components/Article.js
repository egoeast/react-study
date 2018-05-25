import React, {Component} from 'react'

class Article extends Component {

    state = {
        isOpen: false
    }

    render() {
        const
            article = this.props.article
        const
            body = this.state.isOpen && <section>{article.text}</section>
        return (

            <div className={'hello'} style={{color: 'red'}}>
                <h2>{article.title}
                    <button onClick={this.handleClick}>{this.state.isOpen ? 'Close' : 'Open'}</button>
                </h2>
                {body}
                <h3>Creation date: {(new Date(article.date)).toDateString()}</h3>
            </div>
        )
    }

    handleClick = () => {
        this.setState({
             isOpen: !this.state.isOpen
            })
    }
}

export default Article