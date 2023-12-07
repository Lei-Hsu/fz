/** @type {import('next').NextConfig} */
// 幫我放入 https://cdn.sanity.io 這個網址的圖片許可
 
const nextConfig = {
    images: {
        domains: ['cdn.sanity.io'],
      },
}

module.exports = nextConfig
