import React, { useState } from 'react'
import GuerreroForm from '../components/GuerreroForm'
import TropasTable from '../components/TropasTable'
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'

function TropasContainer() {
  const [tropas, setTropas] = useState([])
  const [alertaVisible, setAlertaVisible] = useState(false)

  const handleCreate = (guerrero) => {
    setTropas([...tropas, guerrero])
    setAlertaVisible(true)
  }

  const handleDelete = (guerrero) => {
    const filtrada = tropas.filter((g) => g.id !== guerrero.id)
    setTropas(filtrada)
  }

  return (
    <>
      <div className="container mt-4 mb-4">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6 mb-4">
            <GuerreroForm onCreateGuerrero={handleCreate} />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <TropasTable tropas={tropas} onEliminar={handleDelete} />
          </div>
        </div>
      </div>

      <Snackbar
        open={alertaVisible}
        onClose={() => setAlertaVisible(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        autoHideDuration={2000}
      >
        <Alert
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
          Guerrerro reclutado con éxito
        </Alert>
      </Snackbar>
    </>
  )
}

export default TropasContainer
