-- All My Reservations
SELECT reservations.*, properties.*, avg(property_reviews.rating) as average_rating
FROM properties
JOIN reservations
ON properties.id =  reservations.property_id
JOIN property_reviews
ON properties.id = property_reviews.property_id
JOIN users
ON users.id = reservations.guest_id
WHERE reservations.guest_id = 1
AND reservations.end_date < now()::date
GROUP BY properties.id, reservations.id
ORDER BY reservations.start_date
LIMIT 10;
