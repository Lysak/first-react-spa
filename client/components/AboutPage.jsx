import React from 'react';

import './AboutPage.less';
const AboutPage = React.createClass({
    render() {
        return (
            <div className='AboutPage'>
                <h2 className='title'>
                    This is message aplication
                </h2>
                <div className='text'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit vero consectetur facere itaque ea sequi sint nobis, delectus eius, numquam quae repellendus recusandae ratione illum ut? Ipsam maxime sed aperiam.</p>
                </div>
            </div>
        );
    }
});
export default AboutPage;