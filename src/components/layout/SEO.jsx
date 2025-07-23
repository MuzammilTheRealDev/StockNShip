import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, url, image }) => {
    const siteName = 'StockNShip';
    const defaultTitle = 'StockNShip | Amazon FBA Prep & Fulfillment Services';
    const fullTitle = title ? `${title} ` : defaultTitle;
    const defaultDescription = description || 'StockNShip offers fast, reliable, and affordable prep and fulfillment services for Amazon FBA sellers and e-commerce businesses. We handle storage, labeling, bundling, and shipping so you can focus on growing your business.';
    const defaultUrl = url || 'https://stocknship.com';
    const defaultImage = image || 'https://stocknship.com/images/logo.svg';

    return (
        <Helmet>
            <title>{fullTitle}</title>
            <meta name="description" content={defaultDescription} />
            <meta name="robots" content="index, follow" />

            <meta property="og:type" content="website" />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={defaultDescription} />
            <meta property="og:url" content={defaultUrl} />
            <meta property="og:image" content={defaultImage} />
            <meta property="og:site_name" content={siteName} />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={defaultDescription} />
            <meta name="twitter:image" content={defaultImage} />
        </Helmet>
    );
};

export default SEO;
