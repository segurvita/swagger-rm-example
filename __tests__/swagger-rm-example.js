'use strict';
const swaggerRmExample = require('../lib/swagger-rm-example');

// sample yaml with example for test
const sampleWithExample = `swagger: '2.0'
info:
  description: sample
  title: sample
paths:
  '/rooms/{room-id}':
    get:
      description: room
      parameters:
        - name: room-id
          in: path
          type: integer
      responses:
        '200':
          description: OK
          schema:
            type: object
            properties:
              id:
                type: integer
                example: 404
              comment:
                type: string
                example: 404
`;

// sample yaml without exammple for test
const sampleWithoutExample = `swagger: '2.0'
info:
  description: sample
  title: sample
paths:
  '/rooms/{room-id}':
    get:
      description: room
      parameters:
        - name: room-id
          in: path
          type: integer
      responses:
        '200':
          description: OK
          schema:
            type: object
            properties:
              id:
                type: integer
              comment:
                type: string
`;

// test of removeExample
test('sample test', () => {
    const resultRmExample = swaggerRmExample.removeExample(sampleWithExample);
    expect(resultRmExample).toBe(sampleWithoutExample);
});