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
  queryString = `
  SELECT reservations.* FROM reservations
  JOIN properties ON properties.id =  reservations.property_id
  JOIN users ON users.id = reservations.guest_id
  WHERE guest_id = $1
  AND start_date < now()::date
  GROUP BY reservations.id
  ORDER BY reservations.start_date DESC
  LIMIT $2;
  `;
  values = [guest_id, limit];
  return pool
    .query(queryString, values)
    .then((res) => {
      return res.rows[0];
    })
    .catch((err) => {
      console.log(`Error:`, err);
    });
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
  const queryParams = [];
  let queryString = `
  SELECT properties.*, avg(property_reviews.rating) as average_rating
  FROM properties
  JOIN property_reviews ON properties.id = property_id
  `;

  if (options.city) {
    queryParams.push(`%${options.city}%`);
    queryString += `WHERE city LIKE $${queryParams.length} `;
  }

  if (options.minimum_price_per_night) {
    queryParams.push(`${options.minimum_price_per_night}`);
    queryString += `AND cost_per_night >= $${queryParams.length} `;
  }

  if (options.maximum_price_per_night) {
    queryParams.push(`${options.maximum_price_per_night}`);
    queryString += `AND cost_per_night <= $${queryParams.length} `;
  }

  if (options.minimum_rating) {
    queryParams.push(`${options.minimum_rating}`);
    queryString += `AND rating >= $${queryParams.length} `;
  }

  queryParams.push(limit);

  queryString += `
  GROUP BY properties.id
  ORDER BY cost_per_night
  LIMIT $${queryParams.length};
  `;

  console.log(queryString, queryParams);
  // console.log(limit);

  return pool.query(queryString, queryParams).then((res) => res.rows);
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
