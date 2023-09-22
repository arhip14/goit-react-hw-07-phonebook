import styled from 'styled-components';

export const FormContainer = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  border-left: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 20px;
  width: 400px;
  margin: 0 auto;

  h2 {
    margin-top: 0;
    margin-bottom: 20px;
    font-size: 28px;
    color: #333;
    text-align: center;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  label {
    font-size: 18px;
    color: #333;
  }

  input[type='text'],
  input[type='tel'] {
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    color: #333;
    width: 250px;
    transition: border-color 0.3s ease;
  }

  input[type='text']:focus,
  input[type='tel']:focus {
    border-color: #3498db;
  }

  button[type='submit'] {
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 12px 20px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    font-size: 18px;

    &:hover {
      background-color: #2980b9;
    }

    &:disabled {
      background-color: #ccc;
      cursor: not-allowed;
    }
  }

  .error-message {
    color: #e74c3c;
    font-size: 14px;
  }

  .form-group {
    display: flex;
    flex-direction: column;
  }

  .form-group label {
    margin-bottom: 5px;
  }

  .form-group input[type='text'],
  .form-group input[type='tel'] {
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    color: #333;
    width: 100%;
    transition: border-color 0.3s ease;
  }

  .form-group input[type='text']:focus,
  .form-group input[type='tel']:focus {
    border-color: #3498db;
  }
`;
