import { fetchData } from '../../api';
import React from 'react';

const TEMP_BUTTON_CLICK_HANDLER = () => {
    console.log('hello world')
    return fetchData({
        url: '/api/articles',
        options: {
            method: 'POST'
        },
        success: console.log,
        fail: console.log
    })
};

export class LandingView extends React.Component {
    constructor() {
        super();

        this.state = {
            articleLinks: []
        }

        this.form = React.createRef();

        this.createArticle = this.createArticle.bind(this);
        this.fetchArticles = this.fetchArticles.bind(this);
        this.handleFetchSuccess = this.handleFetchSuccess.bind(this);
        this.updateForm = this.updateForm.bind(this);
    }

    componentDidMount() {
        // this.fetchArticles();
    }

    createArticle() {
        console.log(this.state);

        return fetchData({
            url: '/api/articles',
            options: {
                body: JSON.stringify(this.state),
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST'
            },
            success: console.log,
            fail: console.log
        });
    }

    fetchArticles() {
        //
    }

    handleFetchSuccess(data) {
        console.log(data);
        this.setState(() => ({
            articleLinks: data.articleLinks
        }));
    }

    updateForm(e) {
        const target = e.target;

        console.log(target.id);

        this.setState(() => ({
            [target.id]: target.value
        }));
    }

    render() {
        return [
            <h1 key="articles-header">Articles</h1>,
            <ul key="articles-list">
                {this.state.articleLinks.map(link => (
                    <li key={`${link.text}`}>
                        <a href={link.href}>{link.text}</a>
                    </li>
                ))}
            </ul>,
            <form>
                <label htmlFor="title">Title</label>
                <input type="text" id="title" onChange={this.updateForm} />
                <label htmlFor="subtitle">Subtitle</label>
                <input type="text" id="subtitle" onChange={this.updateForm} />
                <label htmlFor="assetPath">Asset</label>
                <input type="text" id="assetPath" onChange={this.updateForm} />
                <label htmlFor="type">Type</label>
                <input type="text" id="type" onChange={this.updateForm} />
            </form>,
            <button onClick={this.createArticle}>Make request</button>
        ];
    }
};