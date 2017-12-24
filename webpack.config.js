module.exports = {
	devServer: {
		inline: true,
		port: 4200,
		contentBase: './',
		clientLogLevel: 'none'
	},
	entry: ['./src/app.js'],
	output: {
		filename: './public/scripts/bundle.js'
	},
	devtool: 'source-map',
	resolve: {
		extensions: ['.js']
	}
};
