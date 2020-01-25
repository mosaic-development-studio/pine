import { ArticleView } from '../../components/ArticleView';
import { setupRouteForRendering } from '../../middleware/renderMiddleware';

export const articleRouteHandler = setupRouteForRendering({
    filePath: './dist/index.html',
    getData: () => ({ a: 1 }), // db layer function
    Application: ArticleView
});