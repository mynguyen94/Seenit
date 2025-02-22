import styled from 'styled-components';

export const Style = styled.div`
body {font-family: Arial, Helvetica, sans-serif;}
form {
  border: 3px solid #f1f1f1; 
}

/* Full-width inputs */
input[type=text], input[type=password] , input[type=email]{
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

/* Set a style for all buttons */
button {
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
}

/* Add a hover effect for buttons */
button:hover {
  opacity: 0.8;
}

.center{
  text-align: center;
}

`;
