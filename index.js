let data = [
    {id: 5, username: 'hardcorecoder', followers: 90800},
    {id: 3, username: 'hardcorecoder69', followers: 90},
    {id: 2, username: '69hardcorecoder', followers: 748748},
    {id: 1, username: 'hardcore_coder', followers: 36273326},
    {id: 4, username: 'hardcorecoder420', followers: 0},
    {id: 9, username: 'coding.levelup', followers: 100},
    {id: 8, username: 'coding_levelup', followers: 900}
]


// let filteredData = data.filter(item => !item.username.includes('hardcore'))

let filteredFollowers = data.filter(item => item.followers < 1000)

filteredFollowers.forEach(user => console.log(user.username))
// console.log(filteredData);
// console.log(filteredFollowers);