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
for (const area of data.research) externalUrls.push(area.related.url);
for (const publication of data.publications) {
  externalUrls.push(publication.url);
  if (publication.code) externalUrls.push(publication.code);
}

const pi = data.principalInvestigator;
if (!pi || typeof pi !== 'object') throw new Error('principalInvestigator must be an object');
if (!pi.email?.includes('@')) throw new Error('Invalid PI email');
externalUrls.push(pi.homepage, pi.profile, pi.photoSource);

const localImages = [pi.photo];
for (const person of data.people) {
  if (!['phd', 'master'].includes(person.group)) throw new Error(`Invalid group for ${person.name}`);
  if (!person.name || !person.role || !person.roleZh) throw new Error(`Incomplete member record: ${person.name}`);
  localImages.push(person.photo);
}

for (const image of localImages) {
  if (typeof image !== 'string' || !image.startsWith('/people/')) throw new Error(`Invalid local image path: ${image}`);
  if (!fs.existsSync(path.resolve('public', image.slice(1)))) throw new Error(`Missing local image: ${image}`);
}

for (const item of data.news) {
  if (!item.url.startsWith('#')) externalUrls.push(item.url);
  if (item.source) externalUrls.push(item.source);
}
for (const resource of data.resources) externalUrls.push(resource.url, resource.github);

for (const url of externalUrls) {
  if (typeof url !== 'string' || !url.startsWith('https://')) {
    throw new Error(`Expected an HTTPS URL, received: ${url}`);
  }
}

const ids = data.research.map((item) => item.id);
if (new Set(ids).size !== ids.length) throw new Error('Duplicate research IDs');

const names = data.people.map((person) => person.name);
const photos = data.people.map((person) => person.photo);
if (new Set(names).size !== names.length) throw new Error('Duplicate member names');
if (new Set(photos).size !== photos.length) throw new Error('Duplicate member photos');

const phdCount = data.people.filter((person) => person.group === 'phd').length;
const mastersCount = data.people.filter((person) => person.group === 'master').length;
if (phdCount !== 4 || mastersCount !== 6) {
  throw new Error(`Expected 4 PhD and 6 master's students; received ${phdCount} and ${mastersCount}`);
}

console.log(
  `Validated ${data.research.length} research areas, ${data.publications.length} publications, ` +
  `1 PI, ${data.people.length} students, ${data.news.length} news items, and ${data.resources.length} resources.`,
);
