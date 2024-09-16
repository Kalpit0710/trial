import React from 'react';
import './activity3.css';

const Activity3 = () => {
    return (
        <div>
            <div className="table-container">
                <p>Details</p>
                <table>
                    <thead>
                        <tr>
                            <th>Company</th>
                            <th>Contact</th>
                            <th>Country</th>
                        </tr>
                    </thead>
                    <tr>
                        <td>Allied Futterkiste</td>
                        <td>Maria Anders</td>
                        <td>Germany</td>
                    </tr>
                    <tr>
                        <td>Centro commercial Moctezuma</td>
                        <td>Francisco Chang</td>
                        <td>Mexico</td>
                    </tr>
                </table>
                <div className='Text'>
                    <pre>
                        React JS<br></br>
                        &nbsp;&nbsp;&nbsp;&nbsp;- React JS is a free library for making websites look and feel cool. It's like a special helper for JavaScript. People from Facebook and other communities work together to keep it awesome and <b>up-to-date</b>
                    </pre>
                    <pre>
                        ReactDOM<br></br>
                        &nbsp;&nbsp;&nbsp;&nbsp;- <b>ReactDOM</b> is a package in React that provides DOM specific methods that can be used at the top level of a web app to enable an efficient way of managing <b>DOM elements</b> of the web page.
                    </pre>
                </div>

            </div>
        </div>
    );
};

export default Activity3;
