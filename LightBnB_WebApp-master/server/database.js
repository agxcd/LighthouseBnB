// const properties = require("./json/properties.json");
// const users = require("./json/users.json");
const { Pool } = require("pg");

/// Users
const pool = new Pool({
  user: "vagrant",
  password: "123",
  host: "localhost",
  database: "lightbnb",
});

/* Values */
let queryString, values;

/**
 * Get a single user from the database given their email.
 * @param {String} email The email of the user.
 * @return {Promise<{}>} A promise to the user.
 */
const getUserWithEmail = function (email) {
  queryString = `
  SELECT * FROM users
  WHERE email = $1;
  `;
  values = [email.toLowerCase()];
  return pool
    .query(queryString, values)
    .then((res) => {
      if (!res.rows.length) {
        return null;
      }
      return res.rows[0];
    })
    .catch((err) => {
      console.log(`Error:`, err);
    });
};
exports.getUserWithEmail = getUserWithEmail;

/**
 * Get a single user from the database given their id.
 * @param {string} id The id of the user.
 * @return {Promise<{}>} A promise to the user.
 */
const getUserWithId = function (id) {
  queryString = `
  SELECT * FROM users
  WHERE id = $1;
  `;
  values = [id];
  return pool
    .query(queryString, values)
    .then((res) => {
      if (!res.rows.length) {
        return null;
      }
      return res.rows[0];
    })
    .catch((err) => {
      console.log(`Error:`, err);
    });
};
exports.getUserWithId = getUserWithId;

/**
 * Add a new user to the database.
 * @param {{name: string, password: string, email: string}} user
 * @return {Promise<{}>} A promise to the user.
 */
const addUser = function (user) {
  queryString = `INSERT INTO users (
    name, email, password) 
    VALUES ($1, $2, $3)
    RETURNING *;`;
  values = [user.name, user.email, user.password];
  return pool
    .query(queryString, values)
    .then((res) => {
      console.log(res.rows[0]);
      return res.rows;
    })
    .catch((err) => {
      console.log(`Error:`, err);
    });
};
exports.addUser = addUser;

/// Reservations

/**
 * Get all reservations for a single user.
 * @param {string} guest_id The id of the user.
 * @return {Promise<[{}]>} A promise to the reservations.
 */
const getAllReservations = function (guest_id, limit = 10) {
  return getAllProperties(null, 2);
};
exports.getAllReservations = getAllReservations;

/// Properties

/**
 * Get all properties.
 * @param {{}} options An object containing query options.
 * @param {*} limit The number of results to return.
 * @return {Promise<[{}]>}  A promise to the properties.
 */

const getAllProperties = function (options, limit = 10) {
  queryString = `
  SELECT * FROM properties
  LIMIT $2
  `;
  values = [options, limit];
  return pool.query(queryString, values).then((res) => {
    res.rows.forEach((prop) => {
      `${prop.title} is $ ${prop.cost_per_night / 100} per night and has ${
        prop.number_of_bedrooms
      } bedrooms`;
    });
  });
};
exports.getAllProperties = getAllProperties;

/**
 * Add a property to the database
 * @param {{}} property An object containing all of the property details.
 * @return {Promise<{}>} A promise to the property.
 */
const addProperty = function (property) {
  const propertyId = Object.keys(properties).length + 1;
  property.id = propertyId;
  properties[propertyId] = property;
  return Promise.resolve(property);
};
exports.addProperty = addProperty;
