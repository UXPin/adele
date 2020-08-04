import data from '../data/data.json';
import { clearKey } from '../helpers/text';

/**
 * Initializes data only once, at the very beginning.
 */
const DB = new Map(data.map((record) => {
  return [
    clearKey(`${record.company.data}-${record.system.data}`),
    { ...record },
  ];
}));

/**
 * Gets all stored data.
 */
export function getData() {
  return [...DB.values()];
}

/**
 * Generates headers map - based on object's keys of the first element.
 */
export function getHeaders() {
  if (DB.size < 1) {
    return [];
  }

  return Object.keys(getData()[0]);
}

/**
 * Gets data based on a unique key.
 *
 * @param {string} id
 */
export function getRow(id) {
  return DB.get(id);
}
