INSERT INTO users (name, email, password) 
VALUES ('Eva Stanley', 'sebastinanguerra@ymail.com','$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.'),
('Louisa Meyer', 'jackonrose@hotmail.com','$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.'),
('Dominic Parks', 'victoriablackwell@outlook.com','$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.'),
('Sue Luna', 'jasonvincent@gmx.com','$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.'),
('Rosalie Garza', 'sjacksondavid@gmx.com','$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.'),
('Etta West', 'charlielevy@yahoo.com','$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.'),
('Margaret Wong', 'makaylaweiss@icloud.com','$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.'),
('Leroy Hart', 'jaycereyonlds@inbox.com','$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.');

INSERT INTO properties (owner_id, title, description, thumbnail_photo_url, cover_photo_url, cost_per_night, parking_spaces, number_of_bathrooms, number_of_bedrooms, country, street, city, province, post_code, active) 
VALUES (1, 'Speed lamp', 'description', 'https://images.pexels.com/photos/2086676/pexels-photo-2086676.jpeg?auto=compress&cs=tinysrgb&h=350', 'https://images.pexels.com/photos/2086676/pexels-photo-2086676.jpeg', 930, 6, 4, 5, 'Canada', '651 Nami Road', 'Bohbatev', 'Alberta', '83680', true),
(2, 'Blank corner', 'description', 'https://images.pexels.com/photos/2080018/pexels-photo-2080018.jpeg?auto=compress&cs=tinysrgb&h=350', 'https://images.pexels.com/photos/2080018/pexels-photo-2080018.jpeg', 85234, 0, 5, 6, 'Canada', '1650 Hejto Center', 'Genwezuj', 'NewFoundland And Labrador', '44583', true),
(3, 'Habit mix', 'description', 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&h=350', 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg', 46058, 0, 5, 5, 'Canada', '513 Powov Grove', 'Jaebvap', 'Ontari', '38051', true),
(4, 'Speed inn', 'description', 'https://images.pexels.com/photos/2086676/pexels-photo-2086676.jpeg?auto=compress&cs=tinysrgb&h=350', 'https://images.pexels.com/photos/2086676/pexels-photo-2086676.jpeg', 930, 6, 4, 5, 'Canada', '651 Nami Road', 'Bohbatev', 'Alberta', '83680', true),
(5, 'Blank place', 'description', 'https://images.pexels.com/photos/2080018/pexels-photo-2080018.jpeg?auto=compress&cs=tinysrgb&h=350', 'https://images.pexels.com/photos/2080018/pexels-photo-2080018.jpeg', 85234, 0, 5, 6, 'Canada', '1650 Hejto Center', 'Genwezuj', 'NewFoundland And Labrador', '44583', true),
(6, 'Ha mix', 'description', 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&h=350', 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg', 46058, 0, 5, 5, 'Canada', '513 Powov Grove', 'Jaebvap', 'Ontari', '38051', true),
(7, 'Samp', 'description', 'https://images.pexels.com/photos/2086676/pexels-photo-2086676.jpeg?auto=compress&cs=tinysrgb&h=350', 'https://images.pexels.com/photos/2086676/pexels-photo-2086676.jpeg', 930, 6, 4, 5, 'Canada', '651 Nami Road', 'Bohbatev', 'Alberta', '83680', true),
(8, 'Bler', 'description', 'https://images.pexels.com/photos/2080018/pexels-photo-2080018.jpeg?auto=compress&cs=tinysrgb&h=350', 'https://images.pexels.com/photos/2080018/pexels-photo-2080018.jpeg', 85234, 0, 5, 6, 'Canada', '1650 Hejto Center', 'Genwezuj', 'NewFoundland And Labrador', '44583', true);

INSERT INTO reservations (start_date, end_date, property_id, guest_id) 
VALUES ('2018-09-11', '2018-09-26', 2, 3),
('2019-01-04', '2019-02-01', 2, 2),
('2021-10-01', '2021-10-14', 1, 4),
('2014-10-21', '2014-10-21', 3, 5),
('2016-07-17', '2016-08-01', 3, 4),
('2018-05-01', '2018-05-27', 4, 8),
('2022-10-04', '2022-10-23', 5, 1),
('2015-09-13', '2015-09-30', 6, 8),
('2023-05-27', '2023-05-28', 4, 2),
('2023-04-23', '2023-05-02', 8, 1);

INSERT INTO property_reviews (guest_id, property_id, reservation_id, rating, message) 
VALUES (2, 5, 10, 3, 'message'),
(1, 4, 1, 4, 'message'),
(8, 1, 2, 4, 'message'),
(3, 8, 5, 4, 'message'),
(4, 2, 7, 5, 'message'),
(4, 3, 4, 4, 'message'),
(5, 6, 3, 5, 'message');
