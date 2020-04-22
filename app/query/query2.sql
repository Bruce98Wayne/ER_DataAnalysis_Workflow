SELECT Users.userId, Users.name, Cities.name as city, States.name as state, Texts.message as message, Dates.`date`, Times.`time`
FROM message_app.Texts
JOIN message_app.Users ON Users.id = Texts.UserId
JOIN message_app.Cities ON Cities.id = Users.CityId
JOIN message_app.States ON States.id = Cities.StateId
JOIN message_app.DateTimes ON DateTimes.id = Texts.DateTimeId
JOIN message_app.Dates ON DateTimes.DateId = Dates.id
JOIN message_app.Times ON DateTimes.TimeId = Times.id
WHERE Times.`time` >= '08:00' 
AND Times.`time` <= '09:00';s