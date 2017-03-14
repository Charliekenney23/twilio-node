'use strict';

var _ = require('lodash');
var Holodeck = require('../../../holodeck');
var Request = require('../../../../../lib/http/request');
var Response = require('../../../../../lib/http/response');
var RestException = require('../../../../../lib/base/RestException');
var Twilio = require('../../../../../lib');


var client;
var holodeck;

describe('Service', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', 'AUTHTOKEN', holodeck);
  });
  it('should generate valid fetch request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.chat.v1.services('ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').fetch();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var solution = {
        sid: 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var url = _.template('https://ip-messaging.twilio.com/v1/Services/<%= sid %>')(solution);

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid fetch response',
    function() {
      var body = JSON.stringify({
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'consumption_report_interval': 100,
          'date_created': '2015-07-30T20:00:00Z',
          'date_updated': '2015-07-30T20:00:00Z',
          'default_channel_creator_role_sid': 'RLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'default_channel_role_sid': 'RLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'default_service_role_sid': 'RLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'friendly_name': 'friendly_name',
          'limits': {
              'actions_per_second': 20,
              'channel_members': 100,
              'user_channels': 250
          },
          'links': {},
          'notifications': {},
          'post_webhook_url': 'post_webhook_url',
          'pre_webhook_url': 'pre_webhook_url',
          'reachability_enabled': false,
          'read_status_enabled': false,
          'sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'typing_indicator_timeout': 100,
          'url': 'http://www.example.com',
          'webhook_filters': [
              'webhook_filters'
          ],
          'webhook_method': 'webhook_method',
          'webhooks': {}
      });

      holodeck.mock(new Response(200, body));

      var promise = client.chat.v1.services('ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').fetch();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
  it('should generate valid remove request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.chat.v1.services('ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').remove();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var solution = {
        sid: 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var url = _.template('https://ip-messaging.twilio.com/v1/Services/<%= sid %>')(solution);

      holodeck.assertHasRequest(new Request({
        method: 'DELETE',
        url: url
      }));
    }
  );
  it('should generate valid delete response',
    function() {
      var body = JSON.stringify(null);

      holodeck.mock(new Response(204, body));

      var promise = client.chat.v1.services('ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').remove();
      promise = promise.then(function(response) {
        expect(response).toBe(true);
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
  it('should generate valid create request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var opts = {
        friendlyName: 'friendlyName'
      };
      var promise = client.chat.v1.services.create(opts);
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var url = 'https://ip-messaging.twilio.com/v1/Services';

      var values = {
        FriendlyName: 'friendlyName',
      };
      holodeck.assertHasRequest(new Request({
          method: 'POST',
          url: url,
          data: values
      }));
    }
  );
  it('should generate valid create response',
    function() {
      var body = JSON.stringify({
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'consumption_report_interval': 100,
          'date_created': '2015-07-30T20:00:00Z',
          'date_updated': '2015-07-30T20:00:00Z',
          'default_channel_creator_role_sid': 'RLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'default_channel_role_sid': 'RLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'default_service_role_sid': 'RLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'friendly_name': 'friendly_name',
          'limits': {
              'actions_per_second': 20,
              'channel_members': 100,
              'user_channels': 250
          },
          'links': {},
          'notifications': {},
          'post_webhook_url': 'post_webhook_url',
          'pre_webhook_url': 'pre_webhook_url',
          'reachability_enabled': false,
          'read_status_enabled': false,
          'sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'typing_indicator_timeout': 100,
          'url': 'http://www.example.com',
          'webhook_filters': [
              'webhook_filters'
          ],
          'webhook_method': 'webhook_method',
          'webhooks': {}
      });

      holodeck.mock(new Response(201, body));

      var opts = {
        friendlyName: 'friendlyName'
      };
      var promise = client.chat.v1.services.create(opts);
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
  it('should generate valid list request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.chat.v1.services.list();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var url = 'https://ip-messaging.twilio.com/v1/Services';

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid read_empty response',
    function() {
      var body = JSON.stringify({
          'meta': {
              'first_page_url': 'https://ip-messaging.twilio.com/v1/Services?Page=0&PageSize=50',
              'key': 'services',
              'next_page_url': null,
              'page': 0,
              'page_size': 0,
              'previous_page_url': null,
              'url': 'https://ip-messaging.twilio.com/v1/Services'
          },
          'services': []
      });

      holodeck.mock(new Response(200, body));

      var promise = client.chat.v1.services.list();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
  it('should generate valid read_full response',
    function() {
      var body = JSON.stringify({
          'meta': {
              'first_page_url': 'https://ip-messaging.twilio.com/v1/Services?Page=0&PageSize=50',
              'key': 'services',
              'next_page_url': null,
              'page': 0,
              'page_size': 1,
              'previous_page_url': null,
              'url': 'https://ip-messaging.twilio.com/v1/Services'
          },
          'services': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'consumption_report_interval': 100,
                  'date_created': '2015-07-30T20:00:00Z',
                  'date_updated': '2015-07-30T20:00:00Z',
                  'default_channel_creator_role_sid': 'RLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'default_channel_role_sid': 'RLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'default_service_role_sid': 'RLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'friendly_name': 'friendly_name',
                  'limits': {
                      'actions_per_second': 20,
                      'channel_members': 100,
                      'user_channels': 250
                  },
                  'links': {},
                  'notifications': {},
                  'post_webhook_url': 'post_webhook_url',
                  'pre_webhook_url': 'pre_webhook_url',
                  'reachability_enabled': false,
                  'read_status_enabled': false,
                  'sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'typing_indicator_timeout': 100,
                  'url': 'http://www.example.com',
                  'webhook_filters': [
                      'webhook_filters'
                  ],
                  'webhook_method': 'webhook_method',
                  'webhooks': {}
              }
          ]
      });

      holodeck.mock(new Response(200, body));

      var promise = client.chat.v1.services.list();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
  it('should generate valid update request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.chat.v1.services('ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').update();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var solution = {
        sid: 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var url = _.template('https://ip-messaging.twilio.com/v1/Services/<%= sid %>')(solution);

      holodeck.assertHasRequest(new Request({
        method: 'POST',
        url: url
      }));
    }
  );
  it('should generate valid update response',
    function() {
      var body = JSON.stringify({
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'consumption_report_interval': 100,
          'date_created': '2015-07-30T20:00:00Z',
          'date_updated': '2015-07-30T20:00:00Z',
          'default_channel_creator_role_sid': 'RLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'default_channel_role_sid': 'RLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'default_service_role_sid': 'RLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'friendly_name': 'friendly_name',
          'limits': {
              'actions_per_second': 20,
              'channel_members': 500,
              'user_channels': 600
          },
          'links': {},
          'notifications': {},
          'post_webhook_url': 'post_webhook_url',
          'pre_webhook_url': 'pre_webhook_url',
          'reachability_enabled': false,
          'read_status_enabled': false,
          'sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'typing_indicator_timeout': 100,
          'url': 'http://www.example.com',
          'webhook_filters': [
              'webhook_filters'
          ],
          'webhook_method': 'webhook_method',
          'webhooks': {}
      });

      holodeck.mock(new Response(200, body));

      var promise = client.chat.v1.services('ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').update();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
});

