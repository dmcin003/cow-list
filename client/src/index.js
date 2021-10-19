import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';

var list = [

  {name:'Buttercup',description:	'a herbaceous plant with bright yellow cup-shaped flowers, common in grassland and as a garden weed. All kinds are poisonous and generally avoided by livestock.'},
  {name: 'Daisy'	, description:'a small grassland plant that has flowers with a yellow disk and white rays. It has given rise to many ornamental garden varieties.'},
  {name: 'Milkshake',description:'	a cold drink made of milk, a sweet flavoring such as fruit or chocolate, and typically ice cream, whisked until it is frothy.'},
  {name: 'Bessie',description: "a person's best or closest friend."},
  {name: 'MooDonna',description:'	archaic : lady -- used as a form of respectful address.'},
  {name: 'MooLawn', description:	'a legendary Chinese warrior from the Northern and Southern dynasties period (420–589) of Chinese history.'}


]

ReactDOM.render(<App cowlist={list}/>, document.getElementById('app'));