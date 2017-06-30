import React from 'react';
import {Link} from 'react-router';

import './HeadApp.less';

const Lab1 = React.createClass({
    render() {
        return (
            <div className='App'>
                <div className='menu-bar'>
                    <div className='menu-item'>
                        <Link className='menu-item-link' to='/lab1'>Lab1</Link>
                    </div>
                    <div className='menu-item'>
                        <Link className='menu-item-link' to='/lab2'>Lab2</Link>
                    </div>
                    <div className='menu-item'>
                        <Link className='menu-item-link' to='/lab3'>NotesApp (Lab3)</Link>
                    </div>
                    <div className='menu-item'>
                        <Link className='menu-item-link' to='/about'>About</Link>
                    </div>
                </div>
                {this.props.children}
                <div className='Lab1'>
                    <h2 className='title'>
                        Курсовий Проект
                    </h2>
                    <div className='title'>
                        <p>Dmytrii Lysak 2017</p>
                    </div>
                </div>
            </div>
        );
    }
});
export default Lab1;