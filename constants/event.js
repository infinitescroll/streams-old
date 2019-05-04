export default {
  name: 'message',
  mill: '/json',
  json_schema: {
    definitions: {},
    $schema: 'http://json-schema.org/draft-07/schema#',
    $id: 'http://example.com/root.json',
    type: 'object',
    title: 'Event',
    required: ['text', 'file'],
    properties: {
      text: {
        $id: '#/properties/text',
        type: 'string',
        title: 'Text Schema',
        default: '',
        examples: ['Hi'],
      },
      parent: {
        $id: '#/properties/parent',
        type: 'string',
        title: 'Parent Schema',
        default: '',
        examples: ['QmbFMke1KXqnYyBBWxB74N4c5SBnJMVAiMNRcGu6x1AwQH'],
      },
      file: {
        $id: '#/properties/file',
        type: 'string',
        title: 'File Schema',
        default: '',
        examples: ['QmbFMke1KXqnYyBBWxB74N4c5SBnJMVAiMNRcGu6x1AwQH'],
      },
    },
  },
}
