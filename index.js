const express = require('express');
const cors = require("cors");
const PORT = 3000;

const app = express();

app.use(express.json());
app.use(cors());



const users = [
    {
      id: 1,
      username: 'octocat',
      name: 'The Octocat',
      repoCount: 8,
      location: 'San Francisco',
    },
    {
      id: 2,
      username: 'torvalds',
      name: 'Linus Torvalds',
      repoCount: 25,
      location: 'Portland',
    },
    {
      id: 3,
      username: 'gaearon',
      name: 'Dan Abramov',
      repoCount: 50,
      location: 'London',
    },
    {
      id: 4,
      username: 'addyosmani',
      name: 'Addy Osmani',
      repoCount: 42,
      location: 'Mountain View',
    },
    {
      id: 5,
      username: 'tj',
      name: 'TJ Holowaychuk',
      repoCount: 150,
      location: 'Victoria',
    },
  ];

const games = [
{
    id: 1,
    title: 'The Legend of Zelda: Breath of the Wild',
    genre: 'Action-adventure',
    platform: 'Nintendo Switch',
    releaseYear: 2017,
},
{
    id: 2,
    title: 'God of War',
    genre: 'Action-adventure',
    platform: 'PlayStation 4',
    releaseYear: 2018,
},
{
    id: 3,
    title: 'Cyberpunk 2077',
    genre: 'Role-playing',
    platform: 'PC',
    releaseYear: 2020,
},
{
    id: 4,
    title: 'Hollow Knight',
    genre: 'Metroidvania',
    platform: 'PC',
    releaseYear: 2017,
},
{
    id: 5,
    title: 'Minecraft',
    genre: 'Sandbox',
    platform: 'Multi-platform',
    releaseYear: 2011,
},
];


const players = [
    {
      id: 1,
      name: 'Virat Kohli',
      country: 'India',
      role: 'Batsman',
      runs: 12000,
      wickets: 4,
    },
    {
      id: 2,
      name: 'James Anderson',
      country: 'England',
      role: 'Bowler',
      runs: 1243,
      wickets: 600,
    },
    {
      id: 3,
      name: 'Kane Williamson',
      country: 'New Zealand',
      role: 'Batsman',
      runs: 7000,
      wickets: 29,
    },
    {
      id: 4,
      name: 'Pat Cummins',
      country: 'Australia',
      role: 'Bowler',
      runs: 750,
      wickets: 250,
    },
    {
      id: 5,
      name: 'Ben Stokes',
      country: 'England',
      role: 'All-rounder',
      runs: 4500,
      wickets: 150,
    },
  ];





app.get("/users", (req, res) => {
    res.json({users});
});

app.get("/users/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(user => user.id === id);

    if(user){
        res.json({user});
    }
    else{
        res.status(404).json({message: "User not found."});
    }
});


app.get("/games", (req, res) => {
    res.json({games});
});

app.get("/games/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const game = games.find(game => game.id === id);

    if(game){
        res.json({game});
    }
    else{
        res.status(404).json({message: "Game not found."});
    }
});


app.get("/players", (req, res) => {
    res.json({players});
});

app.get("/players/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const player = players.find(player => player.id === id);

    if(player){
        res.json({player});
    }
    else{
        res.status(404).json({message: "Player not found."});
    }
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})