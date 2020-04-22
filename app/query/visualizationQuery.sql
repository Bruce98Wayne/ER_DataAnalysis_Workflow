SELECT States.name, COUNT(*)
FROM message_app.Texts
JOIN message_app.Users ON Users.id = Texts.UserId
JOIN message_app.Cities ON Cities.id = Users.CityId
JOIN message_app.States ON States.id = Cities.StateId
GROUP BY States.name
ORDER BY COUNT(*) ASC;
