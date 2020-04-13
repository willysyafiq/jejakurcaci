import React from 'react';
import './style.scss';


const Subscription = () => (
    <section className="subscription">
        <div className="columns container">
            <div className="column is-4">
                <h2>
                Catch up
with our latest
love stories.
                </h2>
            </div>
            <div className="column is-8">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit!
Sed do euismod tempor incididunt!</p>

                <div className="columns">
                    <div className="column is-8">
                        <input className="input" type="text" placeholder="Your Email Address"></input>
                    </div>
                    <div className="column is-4">
                        <button className="button">SUBSCRIBE</button>
                    </div>
                </div>

            </div>
        </div>
    </section>
);

export default Subscription;