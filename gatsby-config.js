module.exports = {
  siteMetadata: {
    title: `hiThere Studio | Web development for All`,
    description: `Marzysz o szybkiej, responsywnej oraz bezpiecznej stronie internetowej lub sklepie, który jest dodatkowo zaprojektowany pod sprawne pozycjonowanie i spełnia twoje cele biznesowe? Potrafię stworzyć dla Ciebie dokładnie to czego potrzebujesz. Dlaczego ja? Przede wszystkim nie korzystam z gotowych szablonów. Każdy mój projekt został stworzony z myślą bycia unikalnym. Po drugie, Moje prace są kodowane w najnowszych technologiach. Nie wykorzystuję gotowych kreatorów stron, które generują masę zbędnego kodu na twojej stronie który utrudnia działanie. Dodatkowo ty jako mój klient posiadasz z mojej strony pełne wsparcie techniczne. Zainteresowany? Porozmawiajmy w takim razie  `,
    author: `hiThere Studio`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    'gsap',
    'emailjs-com',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
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
        icon: `src/images/my-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        path: `${__dirname}/src/intl`,
        languages: [`en`, `pl`],
        defaultLanguage: `en`,
        redirect: true,
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
