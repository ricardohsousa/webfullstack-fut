import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

function FiltroRodadas({ rodadasDisponiveis = [], rodadaSelecionada, onRodadaChange }) {
  return (
    <FormControl fullWidth margin="normal">
      <InputLabel id="filtro-rodada-label">Rodada</InputLabel>
      <Select
        labelId="filtro-rodada-label"
        value={rodadaSelecionada}
        label="Rodada"
        onChange={onRodadaChange}
      >
        {rodadasDisponiveis.map((rodada) => (
          <MenuItem key={rodada} value={rodada}>
            {rodada.replace('Regular Season -', 'Rodada')}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default FiltroRodadas;