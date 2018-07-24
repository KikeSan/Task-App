import React from 'react';
import styled from 'styled-components';

const TaskListItem = ({titulo, state, id}) => {
    var colors = ["#03a9f4","#ffc107","#3dd843"];
    var nameStatus = ['To Do','In Progress','Done!']
    return (
        <Item key={id}>
            <ULtag>
                {
                    colors.map((color,index) => (
                        index===state?
                        <LItag key={index}><StateBtn color={color} active/></LItag>:
                        <LItag key={index}><StateBtn color={color}/></LItag>
                    ))
                }
            </ULtag>
            <Title>{titulo}</Title>
            <Parrafo>{nameStatus[state]}</Parrafo>
        </Item>
    )
}
export default TaskListItem

const Item = styled.li`
    display: inline-block;
    margin: 10px 2% 25px;
    background: rgba(0,0,0,.3);
    padding: 10px 20px 20px;
    width: 21%;
    border-radius: 5px;
`;

const Title = styled.p`
    margin:0;
    color:#fff;
    font-size:18px;
`;
const Parrafo = Title.extend`
    font-size:12px;
    color: #00BCD4;
`;

const StateBtn = styled.a.attrs({
    background: props => props.color,
    height: props => props.active ? '12px' : '8px'
})`
    display: block;
    background: ${props => props.color};
    width: 20px;
    height: ${props => props.active ? '12px' : '8px'};
    cursor: pointer;
`;

const ULtag = styled.ul`
    margin-bottom:15px;
    text-align:right;
`;
const LItag = styled.li`
    display: inline-block;
`;