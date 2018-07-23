import React from 'React';
import styled from 'styled-components';

const ButtonStatusTask = ({color, texto, idStatus}) => (
    <Btn onClick={() => selectStatus(idStatus)}>
        <Icon color={color}/>
        <Text>{texto}</Text>
    </Btn>
);

export default ButtonStatusTask;

const Btn = styled.a`
    display: block;
    width: 80%;
    margin: 15px 10%;
    text-align:left;
`;
const Icon = styled.div.attrs({
    background: props => props.color || '#ffc107'
})`
    display: inline-block;
    height:24px;
    width:24px;
    border-radius: 50%;
    background: ${props => props.color}
`;

const Text = styled.div`
    color: #fff;
    display:inline-block;
    position: absolute;
    margin-left: 15px;
`;