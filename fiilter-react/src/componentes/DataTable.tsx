import * as React from 'react';
import { DataGrid, GridColDef, GridRowsProp } from '@material-ui/data-grid';
import DadosLocais from '../api/localfunds.json';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'Código', width: 130 },
  { field: 'setor', headerName: 'Setor', width: 200 },
  { field: 'precoAtual', headerName: 'Preço', type: 'number', width: 120 },
  { field: 'dividendo', headerName: 'Ultimo Div', type: 'number', width: 150 },
  { field: 'dy', headerName: 'Último DY', type: 'number', width: 140 },
  { field: 'dy12Media', headerName: 'DY médio', type: 'number', width: 140 },
  { field: 'pvpa', headerName: 'P/VPA', type: 'number', width: 120 },
  {
    field: 'qtdeAtivos',
    headerName: 'Qt Ativos',
    type: 'number',
    width: 150,
  },
];

const rows: GridRowsProp = DadosLocais;

export default function DataTable() {
  return (
    <div style={{ height: 550, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={8} />
    </div>
  );
}
