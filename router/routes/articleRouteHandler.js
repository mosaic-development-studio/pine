import { ArticleView } from '../../client/components/views/ArticleView';
import { setupRouteForRendering } from '../../middleware/renderMiddleware';

const NAVIGATION = {
    actions: [
        {
            href: '.',
            text: 'Create page'
        }
    ],
    items: [
        {
            href: '.',
            text: 'Home'
        },
        {
            href: '',
            text: 'Log in'
        }
    ]
}

export const articleGETRouteHandler = setupRouteForRendering({
    getData: () => ({
        article: {
            content: {},
            heroImageSource: 'https://cdna.artstation.com/p/assets/images/images/007/838/882/large/sylvain-sarrailh-wandering.jpg?1508852567',
            subtitle: 'The Garden of the Gods',
            title: 'Inuun',
            type: 'location'
        },
        navigation: NAVIGATION
    }), // db layer function
    Application: ArticleView
});

export const articlePOSTRouteHandler = (req, res) => {
    res.send({
        message: 'hello world'
    });
};