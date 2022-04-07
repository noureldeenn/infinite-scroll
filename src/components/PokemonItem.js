import _ from "lodash";
import React, { useEffect, useMemo } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { bindActionCreators } from "redux";
import {
  loadPokemonList,
  displayMorePokemon,
} from "../redux/modules/pokemonList";
import ListItemLoader from "./ListItemLoader";

const PokemonItem = ({ pokemonList, fetchActionCreator, isLoading, error }) => {
  console.log(pokemonList);
  const { id: pokemonId } = useParams();
  useEffect(() => {
    fetchActionCreator();
  }, [fetchActionCreator]);

  const pokemonItem = useMemo(
    () => pokemonList.find((item) => item.id === parseInt(pokemonId)),
    [pokemonList, pokemonId]
  );
  console.log(pokemonItem);
  console.log(typeof pokemonId);
  if ((_.isEmpty(pokemonList) && isLoading) || !pokemonItem) return <ListItemLoader />;
  if (error) return <p>Error</p>;
  return (
    <>
      <div>
        <img
          className="d-block mx-auto"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonItem.id}.png`}
          alt={pokemonItem.name}
        />
      </div>
      <div className="text-center">
        <p>{_.capitalize(pokemonItem.name)}</p>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  isLoading: state.pokemonListReducer.isLoading,
  error: state.pokemonListReducer.error,
  pokemonList: state.pokemonListReducer.pokemonList,
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      fetchActionCreator: loadPokemonList,
      displayMore: displayMorePokemon,
    },
    dispatch
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(PokemonItem);
