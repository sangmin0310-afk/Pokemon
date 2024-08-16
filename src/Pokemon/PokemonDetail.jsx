import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPokemonDetail } from '../redux/pokemonSlice.jsx';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const DetailWrapper = styled.div`
  padding: 16px;
  text-align: center;
`;

const PokemonDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const detail = useSelector((state) => state.pokemon.detail);

  useEffect(() => {
    dispatch(fetchPokemonDetail(id));
  }, [dispatch, id]);

  return (
    <DetailWrapper>
      {detail ? (
        <>
          <h1>{detail.name}</h1> {/* 한국어 이름 표시 */}
          <img src={detail.sprites.front_default} alt={detail.name} />
          <p>키: {detail.height}m</p>
          <p>몸무게: {detail.weight}kg</p>
          <p>
            {
              detail.speciesData.flavor_text_entries.find(
                (entry) => entry.language.name === 'ko'
              ).flavor_text
            }
          </p>{' '}
          {/* 한국어 설명 */}
        </>
      ) : (
        <p>불러오는 중...</p>
      )}
    </DetailWrapper>
  );
};

export default PokemonDetail;
