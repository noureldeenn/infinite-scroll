import React from 'react';
import PokemonList from '../components/PokemonList';

const ROUTE_POKEMON = [
  {
    exact: true,
    component: <PokemonList />,
    path: '/',
  },
  {
    // component: <PokemonListDetails />,
    path: '/view/:id',
  },
];

export default ROUTE_POKEMON;
