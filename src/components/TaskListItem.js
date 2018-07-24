import React,{Component} from 'react';
import styled from 'styled-components';

export default class TaskListItem extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: props.titulo,
            status:props.state,
            idtask: props.id,
            colors: props.colors,
        }
        this.setStatusItem = this.setStatusItem.bind(this);
    }
    setStatusItem(idt){
        this.setState({
            status:idt.currentTarget.dataset.id,
        });
        console.log('Cambia estado item ',idt.currentTarget.dataset.id)
    }
    render(){
        return(
            <Item key={this.state.idtask}>
            <ULtag>
                <LItagLavel key="0">Change Status: </LItagLavel>
                {
                    this.state.colors.map((color,index) => (
                        index===this.state.status?
                        <LItag key={index+1}><StateBtn onClick={this.setStatusItem} data-id={index} color={color} active/></LItag>:
                        <LItag key={index+1}><StateBtn onClick={this.setStatusItem} data-id={index} color={color}/></LItag>
                    ))
                }
            </ULtag>
            <Title>{this.state.name}</Title>
            <Parrafo>Description task!</Parrafo>
        </Item>
        )
    }
}


const Item = styled.li`
    display: inline-block;
    margin: 10px 2% 25px;
    background: rgba(0,0,0,.3);
    padding: 10px 20px 20px;
    width: 21%;
    border-radius: 7px;
    border: 5px solid rgba(255,255,255,.15);
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
    background: props => props.active? props.color : 'transparent',
    transform: props => props.active ? 'scale(1.2)' : 'scale(1)'
})`
    display: block;
    background: ${props => props.active? props.color : 'transparent'};
    border: 1px solid ${props => props.color};
    width: 10px;
    height: 10px;
    border-radius:50%;
    margin: 1px;
    transform: ${props => props.active ? 'scale(1.2)' : 'scale(1)'};
    cursor: pointer;
`;

const ULtag = styled.ul`
    margin-bottom:15px;
    text-align:right;
    vertical-align:top;
    position:relative;
`;
const LItag = styled.li`
    display: inline-block;
`;
const LItagLavel = LItag.extend`
    color: #fff;
    right: 44px;
    font-size: 10px;
    position: absolute;
    width: 80px;
    top: 4px;
`;