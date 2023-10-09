import { rest } from 'msw';

export const handlers = [
	rest.get('https://jsonplaceholder.typicode.com/users/1', (req, res, ctx) => {
		return res(
			ctx.status(200),
			ctx.json({
				name: 'John Doe',
				email: 'test@test.com',
				username: 'testUser',
				website: 'xyz.com',
			})
		);
	}),
];
