import React, {Component} from 'react'
import styled, { css } from 'styled-components'
import ButtonStatus from "./ButtonStatusTask"

export default class TaskStatus extends Component{
    render(){
        return(
            <Sidebar>
                <div>
                    <Input type="text" placeholder="Add new task" />
                    <Button >Add Task</Button>
                </div>
                <WrapperButtons>
                    <ButtonStatus idStatus="1" color="#17a2b8" texto="To do"/>
                    <ButtonStatus idStatus="2" color="#ffc107" texto="In Progress"/>
                    <ButtonStatus idStatus="3" color="#28a745" texto="Done"/>
                </WrapperButtons>
            </Sidebar>
        )
    }
}


const Sidebar = styled.div`
  background-color: rgba(255,255,255,.08);
  overflow: hidden;
  display: inline-block;
  height: 99vh;
  width: 20%;
  text-align: center;
` 
const Input = styled.input`
  border: 1px solid #a9a9ef;
  margin: 15px auto;
  padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #a9a9ef;
    border-radius: .25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
`;
const Button = styled.button`
    display: block;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    margin: 0 auto;
    color: #fff;
    background-color: #007bff;
    border-color: #007bff;
    border: 1px solid transparent;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .25rem;
`;

const WrapperButtons = styled.div`
    margin: 45px 0;
`;