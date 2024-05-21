import React from "react";
import './Content.css';
import Playstore from '../asessts/images/playstore.png'
import Appstore from '../asessts/images/appstore.png'

const Content = () => {
    return (
        <div className="content">
            <table cellSpacing="10" className="table">
                <tr>
                    <td>
                        <h2 className="content-text">Get the App</h2>
                    </td>
                    <td>
                        <a href="https://wallet-watch.github.io/">
                            <img src={Playstore} alt="playstore-img" className="playstore" />
                        </a>
                    </td>
                    <td>
                        <a href="https://wallet-watch.github.io/">
                            <img src={Appstore} alt="appstore-img" className="appstore" />
                        </a>
                    </td>
                </tr>
            </table>
        </div>
    )
}
export default Content