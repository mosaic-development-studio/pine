import { ArticleModel } from '../../models/ArticleModel';
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
    const {
        title = 'default title',
        subtitle = 'default subtitle',
        type = 'default type',
        assetPath = 'defaultassetpath.jpg',
    } = req.body;

    const article = new ArticleModel({
        title,
        subtitle,
        type,
        assetPath,
        url: title.trim().replace(/ /g, '_')
    });

    article.save((err, article) => {
        if (err) {
            return console.error(err);
        }

        console.log('Article created', article);
    });

    res.send({
        message: 'Article created'
    });
};

// should not be in this file
export const getArticlesWithURL = () => {
    return ArticleModel.find({}, function(err, articles) {
        if (err) {
            return console.log(err);
        }

        return articles;
    }).select('url');
}

export const getArticleData = (req, res) => {
    getArticlesWithURL()
        .then(data => {
            res.send(data.reduce((list, article) => article.url
                ? (acc => {
                    acc.push({ url: article.url});

                    return acc;
                })(list) : list, []));
        })
        .catch(console.log);
};