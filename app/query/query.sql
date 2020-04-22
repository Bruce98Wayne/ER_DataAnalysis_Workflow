SELECT Users.userId, Users.name, Cities.name as city, States.name as state
FROM message_app.Users 
JOIN message_app.Cities ON Cities.id = Users.CityId 
JOIN message_app.States ON States.id = Cities.StateId
WHERE States.name = 'Nebraska';