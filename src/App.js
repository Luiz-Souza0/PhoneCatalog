import './App.css';
import { Container, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2'
import api from './api/api';
import NewPhone from './Pages/NewPhone';
import UpdatePhone from './Pages/UpdatePhone';

function App() {
  const [phones, setPhone] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.get("/Phone");
        setPhone(response.data);
      } catch (error) {
        console.error('Error while fetching the phone data:', error);
      }
    }
    fetchData();
  }, []);

  const handleDeletePhone = async (phoneId) => {
    try {
      Swal.fire({
        title: "Do you want to delete?",
        showCancelButton: true,
        confirmButtonText: "Delete"
      }).then((result) => {
        if (result.isConfirmed) {
          api.delete(`/phone/${phoneId}`);
          setPhone((prevPhones) => prevPhones.filter((phone) => phone._id !== phoneId));
        }
      });
    } catch (error) {
      console.error(`Error while deleting the phone with ID ${phoneId}:`, error);
    }
  }

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={
            <main className='App'>
              <div style={{ marginBottom: "10px" }}>
                <Button
                  className='Button_NewPhone'
                  href="/NewPhone"
                >
                  Novo Celular
                </Button>
              </div >
              <div>
                <Container className="my-3">
                  <table>
                    <thead>
                      <tr>
                        <th>Marca</th>
                        <th>Modelo</th>
                        <th>Capacidade de Memória (GB)</th>
                        <th>Data de Lançamento</th>
                        <th>Alterar</th>
                        <th>Excluir</th>
                      </tr>
                    </thead>
                    <tbody>
                      {phones.map((phone) => (
                        <tr key={phone._id}>
                          <td>{phone.Marca}</td>
                          <td>{phone.Modelo}</td>
                          <td>{phone.Memoria}</td>
                          <td>{phone.Lancamento}</td>
                          <td>
                            <Button
                              className='Button_Excluir'
                              as={Link}
                              to={`/updatePhone/${phone._id}`}
                            >
                              Alterar
                            </Button>
                          </td>
                          <td>
                            <Button
                              className='Button_Excluir'
                              onClick={() => handleDeletePhone(phone._id)}
                            >
                              Excluir
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </Container>
              </div>
            </main>
          } />
          <Route path="/updatePhone/:id" element={<UpdatePhone />} />
          <Route path="/NewPhone" element={<NewPhone />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;

