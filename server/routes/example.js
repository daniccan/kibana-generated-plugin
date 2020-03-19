export default function (server) {

  server.route({
    path: '/api/kibana-generated-plugin/example',
    method: 'GET',
    handler() {
      return { time: (new Date()).toISOString() };
    }
  });

}
