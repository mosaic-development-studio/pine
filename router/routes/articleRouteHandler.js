import { ArticleView } from '../../components/ArticleView';
import { setupRouteForRendering } from '../../server/render';

export const articleRouteHandler = setupRouteForRendering({
    filePath: './dist/index.html',
    getData: () => ({ a: 1 }),
    Application: ArticleView
});