import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { fetchPost } from '../../api/posts';
import { baseURL } from '../../constant/config';

const handlers = [
  rest.get(`${baseURL}/posts`, (req, res, ctx) => {
    return res(
      ctx.json([
          {
            id: 'f79e82e8-c34a-4dc7-a49e-9fadc0979fda',
            title: 'John',
            lastName: 'Maverick',
          },
          {
            id: 'f79e82e8-c34a-4dc7-a49e-9fadc0979fdb',
            title: 'John1',
            lastName: 'Maverick',
          }
        ]
      )
    );
  }),
];

const server = setupServer(...handlers);

describe('request', () => {
  beforeAll(() => {
    // Enable the mocking in tests.
    server.listen();
  });

  afterEach(() => {
    // Reset any runtime handlers tests may use.
    server.resetHandlers();
  });

  afterAll(() => {
    // Clean up once the tests are done.
    server.close();
  });
  it('should get response when request success', (done) => {
    fetchPost().then((res) => {
      expect(res).not.toBeFalsy();
      done();
    });
  });
});
