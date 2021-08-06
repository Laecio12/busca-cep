import { FormEvent, useState } from 'react';
import { api } from '../../services/api';
import { Container, Form } from './styles';


interface IAddress {
    cep: number;
    state: string;
    city: string;
    neighborhood: string;
    street: string;
  
}

export function BuscaCep () {
  const [ address, setAddress] = useState<IAddress>()
  const [ cep, setCep] = useState(0)
  
   function handleSubmit(event: FormEvent) {
    event.preventDefault()
    
    api.get(`/cep/v1/${cep}`)
    .then((response) => setAddress(response.data))
    .catch((error) => {
      alert("Verifique o cep e tente novamente!");
   });

  }


  return (
    <Container>
      
      <main>

        <Form onSubmit={handleSubmit}>
          <h1>Busca CEP</h1>
          <div className="fields">
            <label>
              CEP
            <input
            required
            onChange={event => setCep(Number(event.target.value))}
            type="number" placeholder="Digite um CEP..." />   
            </label>

          </div>
          <div className="fields">
            <label>
              Cidade
              <input  disabled  value={address?.city} />   
            </label>
            <label>
              UF
              <input  disabled value={address?.state} />   
            </label>
          </div>
          <div className="fields">
            <label>
              Bairro
              <input  disabled  value={address?.neighborhood}  />   
            </label>
            <label>
              Rua
              <input  disabled  value={address?.street}  />   
            </label>

          </div>
          
          <button type="submit">Buscar</button>
          
        </Form>

        
    
      </main>

    </Container>
  )
}