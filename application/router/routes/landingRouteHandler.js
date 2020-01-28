import { LandingView } from '../../../client/components/views/LandingView';
import { getArticlesWithURL } from './articleRouteHandler';
import { setupRouteForRendering } from '../../middleware/renderMiddleware';

export const landingRouteHandler = setupRouteForRendering({
    getData: getArticlesWithURL,
    LandingView
});