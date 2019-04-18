import styled from 'styled-components';

const Button = styled.button`
  display: inline-block;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 10px;
  height : 45px;
`;

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: palevioletred;
  background: papayawhip;
  border: none;
  border-radius: 15px;
  height : 25px;
  width : 25%;
  font-size : 25px;
  :focus {
    outline : none;
  }
`;

const Element1 = styled.div`
    display:inline-block;
    margin-right:20px;
    width:20%; 
`;

const Element2 = styled.div`
    display:inline-block;
    width:75%; 
`;

export { Button, Input, Element2, Element1 };