export default {
  mill: '/json',
  name: 'streamEvent',
  pin: true,
  json_schema: {
    $schema: 'http://json-schema.org/draft-07/schema#',
    $id: 'https://gist.github.com/Schwartz10/15a159e237a47bea4692d13b1cf013ea',
    title: 'StreamEvent',
    description: 'An event in a stream',
    type: 'object',
    properties: {
      type: {
        description: 'The type of stream event that occured',
        type: 'string',
      },
      data: {
        description: 'The data associated with the stream event',
        type: 'object',
      },
      files: {
        description: 'The root hash of an IPFS file(s) DAG',
        type: 'array',
        items: {
          type: 'object',
          properties: {
            cid: {
              type: 'string',
            },
          },
          required: ['cid'],
        },
        uniqueItems: true,
      },
    },
    required: ['type', 'data'],
  },
}
