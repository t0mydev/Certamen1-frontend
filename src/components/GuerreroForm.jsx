import { Button, Card, CardActions, CardContent, CardHeader, FormControlLabel, MenuItem, Radio, RadioGroup, Rating, Select, Slider, TextField } from '@mui/material'
import React, { useState } from 'react'

function GuerreroForm({ onCreateGuerrero = () => {} }) {
  const categorias = [{ label: "Capitán", value: "Capitán" },
    { label: "Berserker", value: "Berserker" },
    { label: "Explorador", value: "Explorador" },
    { label: "Asediador", value: "Asediador" }];

  const [nombre, setNombre] = useState("");
  const [tipo, setTipo] = useState("Orco");
  const [nivel, setNivel] = useState(50);
  const [categoria, setCategoria] = useState(categorias[0].value);
  const [amenaza, setAmenaza] = useState(1);

  const limpiarFormulario = () => {
    setNombre("");
    setTipo("Orco");
    setNivel(50);
    setCategoria(categorias[0].value);
    setAmenaza(1);
  }

  const handleClick = () => {
    const guerrero = {};
    guerrero.id = Date.now();
    guerrero.nombre = nombre;
    guerrero.tipo = tipo;
    guerrero.nivel = nivel;
    guerrero.categoria = categoria;
    guerrero.amenaza = amenaza;

    onCreateGuerrero(guerrero);
    limpiarFormulario();
  }

  return (
    <Card raised>
      <CardHeader title="Registrar Guerrero"></CardHeader>
      <CardContent>
        <div className="mt-3">
          <TextField
            label="Nombre del Guerrero"
            value={nombre}
            onChange={e => setNombre(e.target.value)}
            fullWidth
            id="nombre-guerrero"
          />
        </div>

        <div className="mt-3">
          <label>Tipo de Guerrero</label>
          <RadioGroup
            row
            value={tipo}
            onChange={e => setTipo(e.target.value)}
          >
            <FormControlLabel value="Orco" control={<Radio />} label="Orco" />
            <FormControlLabel value="Uruk" control={<Radio />} label="Uruk" />
          </RadioGroup>
        </div>

        <div className="mt-3">
          <label>Nivel de Combate: {nivel}</label>
          <Slider
            value={nivel}
            onChange={(e, val) => setNivel(val)}
            min={1}
            max={100}
            valueLabelDisplay="auto"
          />
        </div>

        <div className="mt-3">
          <div><label>Categoría / Rango</label></div>
          <Select
            fullWidth
            value={categoria}
            onChange={e => setCategoria(e.target.value)}
            id="categoria-guerrero"
          >
            {categorias.map(c => (
              <MenuItem key={c.value} value={c.value}>{c.label}</MenuItem>
            ))}
          </Select>
        </div>

        <div className="mt-3">
          <div><label>Nivel de Amenaza / Furia</label></div>
          <Rating
            value={amenaza}
            onChange={(e, val) => {
              if (val !== null) {
                setAmenaza(val)
              }
            }}
          />
        </div>
      </CardContent>

      <CardActions>
        <Button
          onClick={handleClick}
          fullWidth
          variant="contained"
          color="primary"
        >
          Registrar Guerrero
        </Button>
      </CardActions>
    </Card>
  )
}

export default GuerreroForm
