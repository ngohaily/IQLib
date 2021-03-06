'use strict';
const db = require('@arangodb').db;
const collections = [
  "SurveyArea",
  "Dataset",
  "Datafile",
  "contains",
  "produces"
];

for (const localName of collections) {
  const qualifiedName = module.context.collectionName(localName);
  db._drop(qualifiedName);
}
