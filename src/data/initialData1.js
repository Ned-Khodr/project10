import testImage1 from '../images/test-post-image1.jpg'
import downArrowHover from '../images/down-arrow-hover.png'


const longTitle = 'THE 2018 F2 CHAMPION, DESPITE TAKING ONLY 2 VICTORIES FROM A POSSIBLE 24, THE NUMBER 19 CARLIN OF LANDO NORRIS!'

export const initial = [
  {id: '1', score: 9999, title: 'Wink', image: testImage1, username: 'someGuy', time: '8 hours ago', numComments: 67, comments:[11, 12]},
  {id: '2', score: 36, title: longTitle, image: '', username: 'OfficialF2', time: '9 hours ago', numComments: 91, comments:[13, 14]},
  {id: '3', score: 2, title: 'Run it Back', image: testImage1, username: 'ADN', time: '19 minutes ago', numComments: 4, comments:[15, 16]},
  {id: '4', score: 12, title: 'AQ', image: downArrowHover, username: 'StingRay', time: '8 days ago', numComments: 24, comments:[13]},
]

const comment1  = 'Liam Lawson started last and worked his way all the way to 9th. This man should have got a contact a long time ago'
const comment2  = 'AlanaStevens4 is spot on. AlphaTauri/whatever the fuck they are called have been an embarassment, their only real talent was stuck in the garage.'
const comment3  = 'What a strange season, the top 2 in the championship, the 2 clear best drivers of the season combined for just 1/4 of the available wins'
const comment4  = 'The most Lando Norris way to win lol'
const comment5  = 'W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W W'
const comment6  = 'Man fell asleep on the W key lmao'

export const selectCommentsByPostId = {
  11: {id: 11, username: 'AlanaStevens4', time: '9 hours ago', body: comment1},
  12: {id: 12, username: 'SargeantExMachina', time: '8 hours ago', body: comment2},
  13: {id: 13, username: 'SargeantExMachina', time: '5 hours ago', body: comment3},
  14: {id: 14, username: 'IronFire', time: '13 minutes ago', body: comment4},
  15: {id: 15, username: 'DullSimilie22', time: '17 minutes ago', body: comment5},
  16: {id: 16, username: 'ElRossoMercado', time: '3 minutes ago', body: comment6},
}

export const subreddits = [
  { id: 1, name: 'r/LandoNorris' },
  { id: 2, name: 'r/AlexanderAlbon' },
  { id: 3, name: 'r/NyckdeVries' },
  { id: 4, name: 'r/ArtemMarkelov' },
  { id: 5, name: 'r/SergioSetteCamara' },
  { id: 6, name: 'r/NicholasLatifi' },
  { id: 7, name: 'r/JackAitken' },
  { id: 8, name: 'r/TadsukeMakino' },
  { id: 9, name: 'r/MaximillianGunther' },
  { id: 10, name: 'r/SeanGelael' },
  { id: 11, name: 'r/DorianBoccolacci' },
  { id: 12, name: 'r/AlessioLorandi' },
  { id: 13, name: 'r/LouisDeletraz' },
  { id: 14, name: 'r/NikitaMazepin' },
  { id: 15, name: 'r/ZhouGuanyu' },
  { id: 16, name: 'r/MickSchumacher' },
  { id: 17, name: 'r/JuanManuelCorrea' },
  { id: 18, name: 'r/AnthoineHubert' },
  { id: 19, name: 'r/RyanTveter' },
]

function myFunction(event) {
  event.preventDefault()
  if (document.getElementById('topBar').style.backgroundColor === 'seagreen')
    document.getElementById('topBar').style.backgroundColor = 'violet'
  else {
    document.getElementById('topBar').style.backgroundColor = 'seagreen'
  }
}