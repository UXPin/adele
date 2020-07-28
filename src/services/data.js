import data from '../data/data.JSON';
import { clearKey } from '../helpers/text';

const DB = new Map(data.map((record) => {
  return [
    clearKey(record.system.data),
    { ...record },
  ];
}));

export function getData() {
  return [...DB.values()];
}

export function getHeaders() {
  if (DB.size < 1) {
    return [];
  }

  return Object.keys(getData()[0]);
}

export function getRow(id) {
  return DB.get(id);
}
