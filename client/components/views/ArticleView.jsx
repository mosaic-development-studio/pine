import { Article, Footer, Navigation } from '../compositions';
import React from 'react';

export const ArticleView = props => {
    return [
        <Navigation {...props.navigation} />,
        <Article {...props.article} />,
        <Footer />
    ]

    ;
};