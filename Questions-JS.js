const userData = [
  {
    id: '111',
    name: 'Peter',
    favorites: {
      food: ['burgers', 'pizza'],
      activites: ['basketball', "baseball"]
    },
  },
  {
    id: '222',
    name: 'John',
    favorites: {
      food: ['burgers', 'tacos'],
      activites: ['football', "golf"]
    },
  },
  {
    id: '333',
    name: 'Mary',
    favorites: {
      food: ['pizza', 'tacos', 'fried chicken'],
      activites: ['volleyball', "softball"]
    },
  }
];

// 5. Given the data above, use ".map" to make an array of objects.
// Each object should have the id of the user and the amount of favorite foods they have.
// example: [{id: '111', favoriteFoods: 2}]

const userMap = userData.map((user) => {
  return {
    "id" : user.id,
    "favoriteFoods" : user.favorites.food.length
  }
})

console.log("Question 6.", userMap)



// 6. Given the data above, use ".reduce" to make an array of all the names
// of the people who have pizza as one of their favorite foods.
// example: ['Peter', 'Mary']

const userReduce = userData.reduce((accumulator, user) => {
  const isPizza = user.favorites.food.includes('pizza')
  if(isPizza){
    return [...accumulator, user.name]
  }
  return accumulator
}, [])

console.log("Question 7.", userReduce)


// 7. Show us an example of a switch statement being used

const randomInt = Math.ceil(Math.random() * 6)
switch(randomInt){
  case 6 :
    console.log("Question 8. Boom!! Rolled a 6!!!")
    break
  case 5:
    console.log("Question 8. You almost had it, you Rolled a 5.")
    break
  default:
    console.log(`Question 8. Bummer, you rolled a ${randomInt}, it's too low.`)
}
