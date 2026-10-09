import { Card, CardContent, CardHeader, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Alert, Button, Chip } from '@mui/material'
import React from 'react'

function TropasTable({ tropas = [], onEliminar = null }) {

  if (!tropas?.length) {
    return <Alert severity="info">No hay tropas registradas en el ejército.</Alert>
  }

  const handleEliminar = (guerrero) => {
    onEliminar(guerrero);
  }

  return (
    <Card>
      <CardHeader title="Despliegue del Ejército"></CardHeader>
      <CardContent>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Nombre del Guerrero</TableCell>
                <TableCell>Tipo</TableCell>
                <TableCell>Categoría / Rango</TableCell>
                <TableCell>Nivel</TableCell>
                <TableCell>Clasificación</TableCell>
                <TableCell>Acción</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tropas.map((g) =>
                <TableRow key={g.id}>
                  <TableCell>{g.nombre}</TableCell>
                  <TableCell>{g.tipo}</TableCell>
                  <TableCell>{g.categoria}</TableCell>
                  <TableCell>{g.nivel}</TableCell>
                  <TableCell>
                    <Chip
                      label={g.tipo}
                      color={g.tipo === "Orco" ? "error" : "primary"}
                    />
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="outlined"
                      color="error"
                      onClick={() => handleEliminar(g)}
                    >
                      Asesinado por la aparición
                    </Button>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  )
}

export default TropasTable
