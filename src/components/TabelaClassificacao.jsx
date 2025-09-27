import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Avatar,
} from '@mui/material';

function TabelaClassificacao({ tabela = [] }) {
  if (tabela.length === 0) {
    return <p>Atualizando a Tabela</p>;
  }

  return (
    <TableContainer component={Paper} sx={{ marginTop: 2 }}>
      <Table aria-label="Tabela de Classificação">
        <TableHead>
          <TableRow>
            <TableCell>Pos</TableCell>
            <TableCell>Time</TableCell>
            <TableCell align="right">Pts</TableCell>
            <TableCell align="right">J</TableCell>
            <TableCell align="right">V</TableCell>
            <TableCell align="right">E</TableCell>
            <TableCell align="right">D</TableCell>
            <TableCell align="right">SG</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tabela.map((time) => (
            <TableRow key={time.id}>
              <TableCell component="th" scope="row">
                {time.posicao}
              </TableCell>
              <TableCell>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Avatar 
                    src={time.logo} 
                    alt={time.nome} 
                    sx={{ width: 24, height: 24, marginRight: 1 }} 
                  />
                  {time.nome}
                </Box>
              </TableCell>
              <TableCell align="right"><strong>{time.pontos}</strong></TableCell>
              <TableCell align="right">{time.jogos}</TableCell>
              <TableCell align="right">{time.vitorias}</TableCell>
              <TableCell align="right">{time.empates}</TableCell>
              <TableCell align="right">{time.derrotas}</TableCell>
              <TableCell align="right">{time.saldoGols}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TabelaClassificacao;