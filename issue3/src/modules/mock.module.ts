import { createServer, Factory, Model, Registry, Response } from 'miragejs';
import { ModelDefinition } from 'miragejs/-types';
import Schema from 'miragejs/orm/schema';
import dictionaries from '../data/dictionaries';
import requests from '../data/requests';
import EStatuses from '../types/enums/EStatuses';
import IDictionary from '../types/IDictionary';
import { IRequestFull } from '../types/IRequest';

const RequestModel: ModelDefinition<IRequestFull> = Model.extend({});
const DictionaryModel: ModelDefinition<IDictionary<object>> = Model.extend({});

type AppRegistry = Registry<
  { request: typeof RequestModel; dictionary: typeof DictionaryModel },
  {
    /* factories can be defined here */
  }
>;
type AppSchema = Schema<AppRegistry>;

export default function initMockServer() {
  createServer({
    models: {
      request: RequestModel,
      dictionary: DictionaryModel,
    },

    factories: {
      request: Factory.extend({
        id(i) {
          return i;
        },
        status() {
          return { code: EStatuses.DRAFT };
        },
        createDate() {
          return new Date().toISOString();
        },
      }),
    },

    seeds(server) {
      server.db.loadData({
        requests: requests,
        dictionaries: dictionaries,
      });
    },

    routes() {
      this.namespace = 'reg_service/api/v1/';

      this.get('/requests', (schema: AppSchema) => {
        const request = schema.all('request').models;

        return request;
      });

      this.get('/request/:id', (schema: AppSchema, req) => {
        const id = req.params.id;
        const request = schema.find('request', id)?.attrs;

        if (!request) return new Response(400, { errors: 'No such request' });

        return request;
      });

      this.get('/request/status/:id', (schema: AppSchema, req) => {
        const id = req.params.id;
        const request = schema.find('request', id);
        const status = request?.status?.code;

        if (!status) return new Response(400, { errors: 'No such request' });

        return status;
      });

      this.get('/request/processing', (schema: AppSchema) => {
        const requests = schema.all('request');
        const isProcessing =
          requests.filter((request) => {
            return request?.status?.code == EStatuses.PROCESSING;
          }).length > 0;

        return isProcessing;
      });

      this.post('/request', (schema: AppSchema, req) => {
        const attrs = JSON.parse(req.requestBody);
        attrs.status = { code: EStatuses.DRAFT };
        attrs.createDate = new Date().toISOString();

        // newRequest.id = null;
        // newRequest.status = null;
        // newRequest.createDate = null;

        return schema.create('request', attrs)?.attrs;
      });

      this.post('/request/registration', (schema: AppSchema, req) => {
        const attrs = JSON.parse(req.requestBody);
        attrs.status = { code: EStatuses.PROCESSING };
        attrs.createDate = new Date().toISOString();
        return schema.create('request', attrs)?.attrs;
      });

      this.put('/request', (schema: AppSchema, req) => {
        const newAttrs = JSON.parse(req.requestBody);
        const id = req.params.id;
        const request = schema.find('request', id);

        if (!request) return new Response(400, { errors: 'No such request' });

        request.update(newAttrs);

        return request;
      });

      this.get('/dictionary/:key', (schema: AppSchema, req) => {
        const key = req.params.key;
        const dictionary = schema.all('dictionary').models;

        return dictionary[0][key];
      });
    },
  });
}
