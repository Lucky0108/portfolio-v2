import React from "react";
import { Helmet } from "react-helmet";
import fav from '../images/favicon_io/favicon.ico';
import fav16 from '../images/favicon_io/favicon-16x16.png';
import fav32 from '../images/favicon_io/favicon-32x32.png';
import fav512 from '../images/favicon_io/android-chrome-512x512.png';
import appleTouchIcon from '../images/favicon_io/apple-touch-icon.png';

const SEO = () => {
    return (
        <Helmet>
            <meta charSet="utf-8" />
            <link rel="icon" href={fav} />
            <link rel="icon" type="image/png" sizes="32x32" href={fav32}></link>
            <link rel="icon" type ="image/png" sizes="16x16" href={fav16}></link>
            <meta name="author" content="Lakshay Yadav | Portfolio" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#FFF" />
            <meta name="description" content="Portfolio Website Of Lakshay Yadav." />
            <meta property='og:title' content='Lakshay Yadav' />
            <meta name="image" property='og:image' content={fav512} />
            <meta property='og:description' content='Portfolio Website' />
            <meta property='og:url' content='https://lakshayyadav.tech' />
            <link rel="apple-touch-icon" href={appleTouchIcon} />
            <title>Lakshay Yadav</title>
        </Helmet>
    )
}

export default SEO