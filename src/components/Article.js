import React, {Component} from 'react'

class Article extends Component {

    state = {
        isOpen: this.props.defaultOpen
    }


    componentWillMount() {
        console.log('---mounted')
    }

    componentWillReceiveProps(nextProps) {
        console.log('---will receive props')
        if( nextProps.defaultOpen !== this.props.defaultOpen) this.setState({
            isOpen: nextProps.defaultOpen
        })

    }

    render() {
        const
            article = this.props.article
        const
            body = this.state.isOpen && <section className="card-text">{article.text}</section>
        return (

            <div className="card">
                <div className="card-header">
                    <h2>{article.title}
                        <button className="btn btn-primary btn-lg" onClick={this.handleClick}>{this.state.isOpen ? 'Close' : 'Open'}</button>
                    </h2>
                </div>
                <div className="card-body">
                    <h6 className="card-subtitle text">Creation date: {(new Date(article.date)).toDateString()}</h6>
                    {body}
                </div>
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