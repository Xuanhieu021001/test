import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';
import { useState } from 'react';
import Todo from './views/Todo';
import Covid from './views/Covid';
import { useEffect } from 'react';
import { CountDown, NewCountDown } from './views/CountDown';
import { Route, Routes } from 'react-router-dom';
import Blog from './views/BlogApp';
import DetailBlog from './views/DetailBlog';
import AddNewBlog from './views/AddNewBlog';

function App() {
    return (
        <div className="App">
            <Nav />
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to Hieu abc.
                </p>
            </header>
            <Routes>
                <Route path="/" element={<Covid />}></Route>
                <Route path="/todos" element={<Todo />}></Route>
                <Route path="/countdown" element={<CountDown />}></Route>
                <Route path="/secret" element={<Covid />}></Route>
                <Route path="/blog" element={<Blog />}></Route>
                <Route path="/blog/:id" element={<DetailBlog />}></Route>
                <Route path="/blog/add-new-blog" element={<AddNewBlog />}></Route>
            </Routes>
        </div>
    );
}

export default App;
