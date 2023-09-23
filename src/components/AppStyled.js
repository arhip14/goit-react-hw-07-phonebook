import styled from 'styled-components';

export const AppContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f0f0f0;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  text-align: center;
  color: #3498db;
  margin-bottom: 20px;
  font-size: 36px;
`;

export const FilterWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const FilterInput = styled.input`
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 5px;
  flex-grow: 1;
  font-size: 18px;
  margin-left: 10px;
`;

export const ContactListContainer = styled.div`
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 20px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NoContactsMessage = styled.p`
  font-size: 18px;
  text-align: center;
  margin-top: 20px;
  color: red; 
  font-weight: bold; 
`;

export const ContactListHeader = styled.h2`
  font-size: 24px;
  color: #333;
  text-align: center;
  margin-bottom: 15px;
`;

export const ContactListItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 15px;
  padding: 10px;
  background-color: #f7f7f7;
  border-radius: 10px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #f0f0f0;
    transform: translateY(-3px);
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const ContactName = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;

export const ContactNumber = styled.span`
  font-size: 14px;
  color: #555;
`;

export const DeleteButton = styled.button`
  background-color: #e74c3c;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 7px 12px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #c0392b;
  }
`;

