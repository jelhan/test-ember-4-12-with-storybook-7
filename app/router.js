import EmberRouter from '@ember/routing/router';
import config from 'test-ember-4-12-with-storybook-7/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {});
