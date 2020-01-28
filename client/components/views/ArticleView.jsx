import { Article, Footer, Navigation } from '../compositions';
import React from 'react';

export const ArticleView = props => {
    return [
        <Article {...props.article} />,
        <Footer />
    ];
};