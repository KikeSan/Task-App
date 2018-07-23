import React, {Component} from 'react';
import styled from 'styled-components';

export default class TaskHeader extends Component{
    constructor(props){
        super(props);
        this.state = {
            title:props.titleTask
        }
    }
    render(){
        return (
            <div>
                <TitleTask>{this.state.title}</TitleTask>
                <Input type="text" placeholder="Search Task" />
            </div>
        );
    }
}

const TitleTask = styled.h1`
    color: #fff;
    margin: 25px 35px;
    display: inline-block;
`;

const Input = styled.input`
    border: 1px solid #a9a9ef;
    margin: 25px 35px;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #a9a9ef;
    border-radius: .25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    right:0;
    position:absolute;
    width: 320px;
`;