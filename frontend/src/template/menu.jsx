import React from "react";

export default function Menu(props) {
    return (
    <nav className="navbar navbar-inverse bg-inverse">
        <div className="container">
            <a className="navbar-brand" href="/">
                <i className="fa fa-calendar-check-o"></i>
            </a>
            <div id="navbar" className="navbar-collapse collapse">
                <ul className="nav navbar-nav">
                    <li><a href="#/todos">Tarefas</a></li>
                    <li><a href="#/about">Sobre</a></li>
                </ul>
            </div>
        </div>
    </nav>
    );
}