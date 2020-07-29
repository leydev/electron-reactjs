import React from 'react';
import { logo } from '../assets'
import './index.css'

export default function leydev() {
    return (
        <div className="view">
            <img src={logo} width="100" alt="Logo leydev" />
            <h1>Electron & Reactjs Bolerplate</h1>
            <a href="https://github.com/leydev/electron-reactjs" target="_blank" rel="noopper nofollow">https://github.com/leydev/electron-reactjs</a>
        </div>
    )
}
