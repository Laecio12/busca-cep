import styled from 'styled-components';


export const Container = styled.div`
  
  max-width: 1120px;
  padding: 0 2rem;
  margin: 0 auto;
  
  
  
  main {
    
   height: 99vh;
   display: flex;
   align-items: center;
   justify-content: center;
   
  }



`;

export const Form = styled.form`
  border-radius: 0.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 400px;
  width: 400px;
  border: 1px solid #ffd700;
  box-shadow:0 0 1em #000;

  h1 {
    color: #ffd700;
  }

  input {
    padding: 0.5rem;
    border: none;
    border-radius: 0.25rem;
    margin-right: 0.5rem;
    width: 310px;
  }
  input:disabled {
    background: #fff;
    width: 150px;
  }

  label {
    display: flex;
    flex-direction: column;
    color: #ffd700;
  }
  
  button {
    font-size: 1rem;
    margin-top: 1rem;
    width: 150px;
    background: #ffd700;
    border-radius: 0.25rem;
    border: none;
    padding: 0.5rem;
  }

  .fields {
    display: flex;
    flex-direction: row;
    
  }

    transition: filter 0.2s;
  button:hover {
    filter: brightness(0.9)
    
  }



`;