import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import './App.css';
import home from './pages/home';
import Navbar from './components/Navbar';
import Profile from './pages/profile';
import About from './pages/about.js';
import PublicProfile from './components/PublicProfile';
import { ReactQueryDevtools } from 'react-query-devtools';

function App() {
    const { isLoading } = useAuth0();

    if (isLoading) return <p>Loading</p>;
    return (
        <div className="container mx-auto p-4 pb-6">
            <ReactQueryDevtools initialIsOpen />
            <Navbar />

            <div className="max-w-4xl mx-auto">
                <Switch>
                    <Route component={home} path="/" exact />
                    <Route component={About} path="/about" />
                    <Route path="/users/:username" component={PublicProfile} />
                    <Route path="/profile" component={Profile} />
                </Switch>
            </div>
        </div>
    );
}

export default App;
