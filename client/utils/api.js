export default {
	published: `${process.env.baseURL}/app/api/news/`,
	all: `${process.env.baseURL}/app/api/news/all`,
	create: `${process.env.baseURL}/app/api/news/create`,
	update: (id) => `${process.env.baseURL}/app/api/news/update/${id}`,
	delete: (id) => `${process.env.baseURL}/app/api/news/${id}`,
	login: `${process.env.baseURL}/app/api/auth/login`,
	registration: `${process.env.baseURL}/app/api/auth/registration`,
	check: `${process.env.baseURL}/app/api/auth/me`
}