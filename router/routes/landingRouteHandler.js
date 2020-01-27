import { getArticlesWithURL } from './articleRouteHandler';
import { LandingView } from '../../client/components/views/LandingView';
import { setupRouteForRendering } from '../../middleware/renderMiddleware';

const ARTICLES = [
    {
        href: '.',
        text: 'Article 1'
    },
    {
        href: '.',
        text: 'Article 2'
    }
];

export const landingRouteHandler = setupRouteForRendering({
    getData: getArticlesWithURL, // db layer function
    Application: LandingView
});