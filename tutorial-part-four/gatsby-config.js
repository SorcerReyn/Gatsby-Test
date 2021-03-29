module.exports = {
  siteMetadata: {
		title: `Pandas Eating Lots`,
		description: `A simple description about pandas eating lots...`,
		author: `Ryan`,
	},
	plugins: [
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `src`,
				path: `${__dirname}/src/`,
			},
		},
		`gatsby-transformer-remark`,
		`gatsby-plugin-emotion`,
		{
			resolve: `gatsby-plugin-typography`,
			options: {
				pathToConfigModule: `src/utils/typography`,
			},
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `GatsbyJS`,
				short_name: `GatsbyJs`,
				start_url: `/`,
				background_color: `#6b37bf`,
				theme_color: `#6b37bf`,
				display: `standalone`,
				icon: `src/images/icon.jpg`
			},
		},
		`gatsby-plugin-offline`,
		`gatsby-plugin-react-helmet`,
	],
}
