SELECT Users.userId, COUNT(*)
FROM message_app.Texts
JOIN message_app.Users ON Users.id = Texts.UserId
JOIN message_app.Cities ON Cities.id = Users.CityId
JOIN message_app.States ON States.id = Cities.StateId
JOIN message_app.DateTimes ON DateTimes.id = Texts.DateTimeId
JOIN message_app.Dates ON DateTimes.DateId = Dates.id
JOIN message_app.Times ON DateTimes.TimeId = Times.id
WHERE States.name = 'Nebraska'
AND Times.`time` >= '08:00' 
AND Times.`time` <= '09:00'
GROUP BY Users.userId
ORDER BY COUNT(*) DESC limit 1;