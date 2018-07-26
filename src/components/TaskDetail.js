import React, {Component} from 'react';
import styled from 'styled-components';

export default class TaskDetail extends Component{
    constructor(props){
        super(props);
        this.state = {
            visible:props.visible
        }
    }
    render(){
        console.log('Modal',this.props.visible)
        return (
            <Modal visible={this.props.visible}>
                <Detail>
                    <TitleTask>{this.props.detalle.taskTitulo}</TitleTask>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam tempore fuga quas dolore ut saepe cupiditate deserunt quo recusandae harum ab, error facere hic sint mollitia obcaecati sit blanditiis reprehenderit. Animi illum exercitationem dolores aut! Veniam vel nulla totam, quidem mollitia temporibus expedita natus magni, ad impedit a. Corrupti, quo.</p>
                </Detail>
            </Modal>
        );
    }
}

const Modal = styled.div.attrs({
    display: props => props.visible=='on' ? 'block' : 'none',
})`
    display: ${props => props.visible=='on' ? 'block' : 'none'};
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(18, 8, 39, 0.85);
    top: 0;
`
const Detail = styled.div`
    position: relative;
    width: 500px;
    height: 300px;
    background: rgba(255,255,255,.8);
    color: #000;
    margin: 0 auto;
    top: 30%;
    padding: 15px 50px;
    border-radius: 5px;
`
const TitleTask = styled.h1`
    color: #000;
    margin: 25px 35px;
    display: inline-block;
`;
