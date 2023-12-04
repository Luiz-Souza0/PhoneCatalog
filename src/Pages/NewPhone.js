import React from "react";
import api from "../api/api";
import { useState } from "react";
import { Container, Button, Form } from "react-bootstrap";
import './Style.css';
import Swal from 'sweetalert2'


function NewPhone() {
  const [newPhone, setNewPhone] = useState({
    Marca: '',
    Modelo: '',
    Memoria: '',
    Lancamento: '',
  });

  const handleNewPhone = async () => {
    if (!newPhone.Marca || !newPhone.Modelo || !newPhone.Lancamento || !newPhone.Memoria) {
      Swal.fire("Changes are not saved", "All fields are required", "error");
    } else {
      try {
        Swal.fire({
          title: "Do you want to save?",
          showDenyButton: true,
          showCancelButton: true,
          confirmButtonText: "Save",
          denyButtonText: `Don't save`
        }).then((result) => {
          if (result.isConfirmed) {
            const response = api.post('/phone', newPhone, {
              headers: {
                'Content-Type': 'application/json',
              },
            });

            setNewPhone({
              Marca: '',
              Modelo: '',
              Memoria: '',
              Lancamento: '',
            });

            Swal.fire({
              position: "center",
              icon: "success",
              title: "Your phone information has been saved",
              showConfirmButton: true
            }).then((result) => {
              if (result.isConfirmed || result.dismiss === Swal.DismissReason.backdrop) {
                window.location.href = '/';
              }
            });
          } else if (result.isDenied) {
            Swal.fire("Changes are not saved", "", "info");
          }
        });
      } catch (error) {
        console.error('Error trying to add a phone:', error);
      }
    }
  };

  return (
    <div >

      <h1 className="container-title">Celular</h1>
      <Container>
        <div className="container-wrapper">

          <Form>
            <Form.Group controlId="formImage">
              <Form.Label>Marca do Celular  </Form.Label>
              <Form.Control
                type="text"
                placeholder="Marca"
                value={newPhone.Marca}
                onChange={(e) => setNewPhone({ ...newPhone, Marca: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="Modelo">
              <Form.Label>Modelo do Celular  </Form.Label>
              <Form.Control
                type="text"
                placeholder="Modelo"
                value={newPhone.Modelo}
                onChange={(e) => setNewPhone({ ...newPhone, Modelo: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="Memoria">
              <Form.Label>Memoria do Celular  </Form.Label>
              <Form.Control
                type="number"
                placeholder="Memoria"
                value={newPhone.Memoria}
                onChange={(e) => setNewPhone({ ...newPhone, Memoria: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="Lancamento">
              <Form.Label>Data de lançamento do Celular  </Form.Label>
              <Form.Control
                type="date"
                placeholder="Lancamento"
                value={newPhone.Lancamento}
                onChange={(e) => setNewPhone({ ...newPhone, Lancamento: e.target.value })}
              />
            </Form.Group>
          </Form>
        </div>
        <div className="div_buttons">
          <Button className="Button_Cancelar" href="/">
            Cancelar
          </Button>
          <Button className="Button_Salvar" onClick={handleNewPhone}>
            Salvar
          </Button>
        </div>
      </Container>
    </div>
  );
}

export default NewPhone;