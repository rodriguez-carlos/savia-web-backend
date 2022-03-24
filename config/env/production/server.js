module.exports = ({ env }) => ({
	url: env('APP_URL'),
	proxy: true,
	app: {
		keys: env.array('APP_KEYS', ['afe7405d57f206b6', '63e90c6711630990'])
	}
});