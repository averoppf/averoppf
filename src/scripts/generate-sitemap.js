import { SitemapStream } from 'sitemap';
import { createWriteStream } from 'fs';

const hostname = 'https://www.averoppf.com.au';

// Define your URLs, including static routes and dynamically generated ones
const urls = [
  { url: '/', changefreq: 'weekly', priority: 1.0 },
  { url: '/about', changefreq: 'weekly', priority: 0.9 },
  { url: '/contact', changefreq: 'weekly', priority: 0.9 },
  { url: '/services/ceramic', changefreq: 'weekly', priority: 0.8 },
  { url: '/services/ppf', changefreq: 'weekly', priority: 0.8 },
  { url: '/services/taren-point', changefreq: 'weekly', priority: 0.7 },
  { url: '/services/miranda', changefreq: 'weekly', priority: 0.7 },
  { url: '/services/caringbah', changefreq: 'weekly', priority: 0.7 },
  { url: '/services/cronulla', changefreq: 'weekly', priority: 0.7 },
  { url: '/services/sans-souci', changefreq: 'weekly', priority: 0.7 },
  { url: '/services/sylvania-waters', changefreq: 'weekly', priority: 0.7 },
  { url: '/services/hurstville', changefreq: 'weekly', priority: 0.7 },
  { url: '/services/sutherland', changefreq: 'weekly', priority: 0.7 },
  { url: '/services/gymea', changefreq: 'weekly', priority: 0.7 },
  { url: '/services/sydney', changefreq: 'weekly', priority: 0.7 },
];

const sitemap = new SitemapStream({ hostname });
const writeStream = createWriteStream('./public/sitemap.xml');

sitemap.pipe(writeStream);

urls.forEach(url => sitemap.write(url));
sitemap.end();

writeStream.on('finish', () => {
  console.log('Sitemap generated successfully!');
});