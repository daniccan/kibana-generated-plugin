import { resolve } from 'path';
import { existsSync } from 'fs';

import exampleRoute from './server/routes/example';

export default function (kibana) {
  return new kibana.Plugin({
    require: ['elasticsearch'],
    name: 'kibana_generated_plugin',
    uiExports: {
      app: {
        title: 'Kibana Generated Plugin',
        description: 'An awesome Kibana plugin',
        main: 'plugins/kibana_generated_plugin/app',
      },
      hacks: [
        'plugins/kibana_generated_plugin/hack'
      ],
      styleSheetPaths: [resolve(__dirname, 'public/app.scss'), resolve(__dirname, 'public/app.css')].find(p => existsSync(p)),
    },

    config(Joi) {
      return Joi.object({
        enabled: Joi.boolean().default(true),
      }).default();
    },

    init(server, options) { // eslint-disable-line no-unused-vars
      // Add server routes and initialize the plugin here
      exampleRoute(server);
    }
  });
}
