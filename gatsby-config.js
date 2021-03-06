module.exports = {
    siteMetadata: {
        title: `Cole Johnson`,
        description: `Cole Johnson's Portfolio`,
        author: `Cole Johnson`,
        image:
            'https://user-images.githubusercontent.com/44681780/83470784-e7f57080-a437-11ea-8b45-14befcc4ed2f.jpg',
        twitterUsername: 'cburnjohnson'
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`
            }
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/favicon.png` // This path is relative to the root of the site.
            }
        },
        `gatsby-plugin-sass`
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ]
};
