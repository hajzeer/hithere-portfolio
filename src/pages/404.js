import React from "react"

import SEO from "../components/seo"
import {Helmet} from "react-helmet";

const NotFoundPage = () => (
  <>
    <SEO title="404: Not found" />
      <Helmet
          title='hiThere Studio | Web development for All'
      />
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </>
)

export default NotFoundPage
