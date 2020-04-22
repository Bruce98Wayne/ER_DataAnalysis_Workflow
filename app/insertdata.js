
const stateMap = {}
const cityMap = {}
const userMap = {}
const dateMap = {}
const timeMap = {}
const dateTimeMap = {}


//Creating states
const loadState = async (resolve) => {
  let temp = []
  await fs.createReadStream('../csv/state.csv')
          .pipe(csv())
          .on('data', (row) => {
            const stateName = row.state
            temp.push(stateName)
          })
          .on('end', () => {
            resolve(temp) 
          });
  }
const createStates = async (states) => 
  {
    for(let state in states){
      const stateModel =  await models.State.create({
          name: states[state]
      }, {logging:false});
      stateMap[states[state]] = stateModel.id
      // console.log(`Created state: ${states[state]} with id: ${stateModel.id} `)
    }
      console.log(`Created ${Object.keys(stateMap).length} states.....  `)
  }

const createCites = async () => {
    const loadCities = async (resolve) => {
      let temp = []
      await fs.createReadStream('../csv/city.csv')
              .pipe(csv())
              .on('data', (row) => {
                const cityName = row.city
                const stateId = stateMap[row.state]
                temp.push({
                  'cityName' : cityName,
                  'stateId' : stateId,
                })
              })
              .on('end', () => {
                resolve(temp) 
              });
      }
      const cityMapPromise = (new Promise(loadCities))
      cityMapPromise.then( async (cities) => 
      {
        for(let city in cities){
          const cityModel =  await models.City.create({
              name: cities[city].cityName,
              StateId : cities[city].stateId
          }, {logging:false});
          cityMap[cities[city].cityName] = cityModel.id
          // console.log(`Created state: ${cities[city].cityName} with id: ${cityModel.id} `)
        }
        console.log(`Created ${Object.keys(cityMap).length} cities.....`)
      })
  }
  
const createUsers = async () => {
  const loadUsers = async (resolve) => {
    let temp = []
    await fs.createReadStream('../csv/userProfile.csv')
            .pipe(csv())
            .on('data', (row) => {
              const userId = row.id
              const userName = row.name
              const cityId = cityMap[row.city]
              temp.push({
                'userId' : userId,
                'userName': userName,
                'cityId' : cityId,
              })
            })
            .on('end', () => {
              resolve(temp) 
            });
    }
    const userMapPromise = (new Promise(loadUsers))
    userMapPromise.then( async (users) => 
    {
      for(let user in users){
        const userModel =  await models.User.create({
            name: users[user].userName,
            userId : users[user].userId,
            CityId : users[user].cityId
        }, {logging:false});
        userMap[users[user].userId] = userModel.id
        // console.log(`Created state: ${cities[city].cityName} with id: ${cityModel.id} `)
      }
      console.log(`Created ${Object.keys(userMap).length} user.....`)
    })
}

const createDates = async () => {
  const loadDates = async (resolve) => {
    let temp = []
    await fs.createReadStream('../csv/date.csv')
            .pipe(csv())
            .on('data', (row) => {
              const date = row.date
              temp.push({
                'date' : date,
              })
            })
            .on('end', () => {
              resolve(temp) 
            });
    }
    const dateMapPromise = (new Promise(loadDates))
    dateMapPromise.then( async (dates) => 
    {
      for(let date in dates){
        const dateModel =  await models.Date.create({
            date: dates[date].date,
        }, {logging:false});
        dateMap[dates[date].date] = dateModel.id
        // console.log(`Created state: ${cities[city].cityName} with id: ${cityModel.id} `)
      }
      console.log(`Created ${Object.keys(dateMap).length} dates.....`)
    })
}


const createTimes = async () => {
  const loadTimes = async (resolve) => {
    let temp = []
    await fs.createReadStream('../csv/time.csv')
            .pipe(csv())
            .on('data', (row) => {
              const time = row.time
              temp.push({
                'time' : time,
              })
            })
            .on('end', () => {
              resolve(temp) 
            });
    }
    const timeMapPromise = (new Promise(loadTimes))
    timeMapPromise.then( async (times) => 
    {
      for(let time in times){
        const timeModel =  await models.Time.create({
            time: times[time].time,
        }, {logging:false});
        timeMap[times[time].time] = timeModel.id
        // console.log(`Created state: ${cities[city].cityName} with id: ${cityModel.id} `)
      }
      console.log(`Created ${Object.keys(timeMap).length} times.....`)
    })
}


const createDateTimes = async () => {
  const loadDateTimes = async (resolve) => {
    let temp = []
    await fs.createReadStream('../csv/datetime.csv')
            .pipe(csv())
            .on('data', (row) => {
              const dateId = dateMap[row.date]
              const timeId = timeMap[row.time]
              temp.push({
                'timeId' : timeId,
                'dateId': dateId,                })
            })
            .on('end', () => {
              resolve(temp) 
            });
    }
    const DateTimeMapPromise = (new Promise(loadDateTimes))
    DateTimeMapPromise.then( async (DateTimes) => 
    {
      for(let DateTime in DateTimes){
        const DateTimeModel =  await models.DateTime.create({
            DateId: DateTimes[DateTime].dateId,
            TimeId: DateTimes[DateTime].timeId,
        }, {logging:false});
        let dateTimeString = `${DateTimes[DateTime].dateId} ${DateTimes[DateTime].timeId}`;
        dateTimeMap[dateTimeString] = DateTimeModel.id
        //console.log(`Created ${dateTimeString} .....`)
      }
      console.log(`Created ${Object.keys(dateTimeMap).length} DateTime.....`)
    })
}

const createMessages = async () => {
  const loadMessage = async (resolve) => {
    let temp = []
    await fs.createReadStream('../csv/userMessage.csv')
            .pipe(csv())
            .on('data', (row) => {
              const dateId = dateMap[row.date]
              const timeId = timeMap[row.time]
              const userId = userMap[row.id]
              const dateTimeId = dateTimeMap[`${dateId} ${timeId}`]
              const message = row.text
              temp.push({
                'userId' : userId,
                'dateTimeId': dateTimeId,
                'message' : message,             
              })
            })
            .on('end', () => {
              resolve(temp) 
            });
    }
    const MessageMapPromise = (new Promise(loadMessage))
    MessageMapPromise.then( async (Messages) => 
    {
      for(let Message in Messages){
        const MessageModel =  await models.Text.create({
            message: Messages[Message].message,
            UserId: Messages[Message].userId,
            DateTimeId: Messages[Message].dateTimeId,
        }, {logging:false});
      }
      console.log(`Created ${Object.keys(Messages).length} Message.....`)
    })
}

const load = () => {
  
  const stateMapPromise = (new Promise(loadState))
    stateMapPromise
                  .then(createStates)
                  .then(createDates)
                  .then(createTimes)
                  .then(createCites)
                  //.then(createDateTimes)

  setTimeout(createUsers, 4000);
  setTimeout(createDateTimes, 9000);
  setTimeout(createMessages, 90000);
}