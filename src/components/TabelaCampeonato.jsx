import React, { useEffect, useReducer } from 'react';
import { CircularProgress, Alert } from '@mui/material';

const initialState = {
  loading: true,
  error: null,
  rodadasDisponiveis: [],
  partidas: [],
  rodadaSelecionada: '',
  tabelaCalculada: []
};

function reducer(state, action) {
  switch (action.type) {
    case 'CARREGADO':
      const { rodadas, partidas } = action.payload;
      return {
        ...state,
        loading: false,
        rodadasDisponiveis: rodadas,
        partidas: partidas,
        rodadaSelecionada: rodadas.length || '' 
      };
    case 'ERRO':
      return { ...state, loading: false, error: 'Falha ao buscar dados da API.' };
    default:
      return state;
  }
}

function TabelaCampeonato() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      const apiKey = import.meta.env.VITE_API_FOOTBALL_KEY;
      
      const headers = {
        'x-rapidapi-host': 'v3.football.api-sports.io',
        'x-rapidapi-key': apiKey,
      };

      try {
        const [resRodadas, resPartidas] = await Promise.all([
          fetch('https://v3.football.api-sports.io/fixtures/rounds?league=71&season=2023', { headers }),
          fetch('https://v3.football.api-sports.io/fixtures?league=71&season=2023', { headers })
        ]);

        const dataRodadas = await resRodadas.json();
        const dataPartidas = await resPartidas.json();

        dispatch({
          type: 'CARREGADO',
          payload: {
            rodadas: dataRodadas.response,
            partidas: dataPartidas.response
          }
        });

      } catch (error) {
        dispatch({ type: 'ERRO' });
      }
    };

    fetchData();
  }, []); 

    if (state.loading) {
    return <CircularProgress />;
  }

  if (state.error) {
    return <Alert severity="error">{state.error}</Alert>;
  }

  return (
    <div>
      <h2>Tabela Brasileirão 2023</h2>
      <p>Rodada selecionada: {state.rodadaSelecionada}</p>
    </div>
  );  
}

export default TabelaCampeonato;
