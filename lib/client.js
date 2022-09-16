// import SanityClient from "@sanity/client";
// import { ImageUrlBuilder } from "next-sanity-image";

// export const client = SanityClient({
//     projectId: 'doape09s',
//     dataset: 'production',
//     apiVersion: '2022-08-09',
//     useCdn: true,
//     token: process.env.NEXT_PUBLIC_SANITY_TOKEN
// })

import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: 'doape09s',
    dataset: 'production',
    apiVersion: '2022-08-09',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);