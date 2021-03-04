import React, { useContext } from 'react';
import { ThemeContext } from '../Contexts/ThemeContext';
import Menu from './Menu';

const Home = () => {

    const { lightTheme } = useContext(ThemeContext);
    const theme = !lightTheme ? ' darkmode' : '';

    return (
        <div className={"" + (theme)}>
            <div className="main-body">
                <Menu/>
            </div>
        </div>
    )
}

export default Home;
