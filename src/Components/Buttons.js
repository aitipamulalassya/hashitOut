import style from 'styled-components';
export const Button = style.button`
width: 100px;
height: 50px;
color: white;
font-weight: bolder;
border-radius: 10px;
justify-content: center;
text-align: center;
background-color: ${(props) => props.color};
&:hover {
cursor: pointer;
background-color: ${(props) => props.darkcolor};
}
`;