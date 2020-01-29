import {
    applicationMarkup,
    convertApplicationToString
} from './markup';

export function setupRouteForRendering(config) {
    const { getData, Application } = config;

    return function(req, res, next) {
        const applicationString = convertApplicationToString(Application);
        const applicationData = getData();

        res.send(applicationMarkup(applicationString, applicationData));
    };
}