import Application from 'test-ember-4-12-with-storybook-7/app';
import config from 'test-ember-4-12-with-storybook-7/config/environment';
import * as QUnit from 'qunit';
import { setApplication } from '@ember/test-helpers';
import { setup } from 'qunit-dom';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

setup(QUnit.assert);

start();
