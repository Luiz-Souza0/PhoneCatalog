import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Form, Button, Container } from 'react-bootstrap';
import api from '../api/api';
import Swal from 'sweetalert2'



const UpdatePhone = () => {
  const { id } = useParams();

  const [phone, setPhone] = useState({
    Marca: '',
    Modelo: '',
    Memoria: '',
    Lancamento: '',
  });


  useEffect(() => {
    const fetchPhoneDetails = async () => {
      try {
        const response = await api.get(`/phone/${id}`);
        setPhone(response.data);
      } catch (error) {
        console.error('Error fetching phone data:', error);
      }
    };
    fetchPhoneDetails();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPhone((prevPhone) => ({ ...prevPhone, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!phone.Marca || !phone.Modelo || !phone.Lancamento || !phone.Memoria) {
      Swal.fire("Changes are not saved", "All fields are required", "error");
    } else {
      try {
        Swal.fire({
          title: "Do you want to save the changes?",
          showDenyButton: true,
          showCancelButton: true,
          confirmButtonText: "Save",
          denyButtonText: `Don't save`
        }).then((result) => {
          if (result.isConfirmed) {
            api.put(`/phone/${id}`, phone);
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
        console.error('Error updating the phone:', error);
        Swal.fire("Changes are not saved", "", "warning");
      }
    }
  };

  return (
    <div >

      <h1 className="container-title">Celular</h1>
      <Container>
        <div className="container-wrapper">
          <Form className="my-5" onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Marca  </Form.Label>
              <Form.Control
                type="text"
                name="Marca"
                value={phone.Marca}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Modelo  </Form.Label>
              <Form.Control
                type="text"
                name="Modelo"
                value={phone.Modelo}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Memória  </Form.Label>
              <Form.Control
                type="number"
                name="Memoria"
                value={phone.Memoria}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Lançamento  </Form.Label>
              <Form.Control
                type="date"
                name="Lancamento"
                value={phone.Lancamento}
                onChange={handleInputChange}
              />
            </Form.Group>
            <div className='div_buttons'>
              <Button className="Button_Atualizar" type="submit">
                Atualizar Celular
              </Button>
              <Button className="Button_Cancelar" href="/">
                Cancelar
              </Button>
            </div>
          </Form>
        </div>
      </Container>
    </div>
  );
};

export default UpdatePhone;
