import fs from 'node:fs';
import path from 'node:path';

const contentPath = path.resolve('data/site.json');
const data = JSON.parse(fs.readFileSync(contentPath, 'utf8'));
const requiredCollections = ['research', 'publications', 'people', 'news', 'resources'];

for (const key of requiredCollections) {
  if (!Array.isArray(data[key]) || data[key].length === 0) {
    throw new Error(`${key} must be a non-empty array`);
  }
}

const externalUrls = [];
for (const publication of data.publications) externalUrls.push(publication.url);
for (const person of data.people) {
  externalUrls.push(person.homepage, person.profile);
  if (!person.email.includes('@')) throw new Error(`Invalid email for ${person.name}`);
}
for (const item of data.news) {
  if (!item.url.startsWith('#')) externalUrls.push(item.url);
}
for (const resource of data.resources) externalUrls.push(resource.url, resource.github);

for (const url of externalUrls) {
  if (typeof url !== 'string' || !url.startsWith('https://')) {
    throw new Error(`Expected an HTTPS URL, received: ${url}`);
  }
}

const ids = data.research.map((item) => item.id);
if (new Set(ids).size !== ids.length) throw new Error('Duplicate research IDs');

console.log(
  `Validated ${data.research.length} research areas, ${data.publications.length} publications, ` +
  `${data.people.length} people, ${data.news.length} news items, and ${data.resources.length} resources.`,
);
