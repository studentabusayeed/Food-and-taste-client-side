import React from 'react';
import { Container } from 'react-bootstrap';
const Blog = () => {
    return (
        <Container className='my-6'>
            <div className='bg-slate-400 p-8 rounded bg-opacity-25 mx-24 my-4'>
                <h4 className='blog-container font-bold'>Tell us the differences between uncontrolled and controlled components.</h4>
                <p className='blog-container'>Ans: In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.</p>
            </div>
            <div className='bg-slate-400 p-8 rounded bg-opacity-25 mx-24 my-4'>
                <h4 className='blog-container font-bold'>How to validate React props using PropTypes?</h4>
                <p className='blog-container'>Ans: React PropTypes is a library that allows you to define the types of props that a component should receive. This helps catch bugs and errors early on in the development process, and also provides useful documentation for other developers who may be working with your code.</p>
            </div>
            <div className='bg-slate-400 p-8 rounded bg-opacity-25 mx-24 my-4'>
                <h4 className='blog-container font-bold'>Tell us the difference between nodejs and express js.</h4>
                <p className='blog-container'>Ans: Node.js is a runtime environment for executing JavaScript code on the server side, while Express.js is a web application framework built on top of Node.js that provides a set of tools and utilities for building web applications</p>
            </div>
            <div className='bg-slate-400 p-8 rounded bg-opacity-25 mx-24 my-4'>
                <h4 className='blog-container font-bold'>
                What is a custom hook, and why will you create a custom hook?
                </h4>
                <p className='blog-container'>In React, a custom hook is a reusable function that allows you to extract and share stateful logic between components. Custom hooks are a way to reuse stateful logic without having to repeat code or use higher-order components, render props, or other patterns.A custom hook can be created for any piece of reusable logic that involves state management or other React-specific functionality, such as fetching data from an API or handling browser events.Overall, custom hooks can help make your code more modular, maintainable, and reusable, which can save you time and effort in the long run.</p>
            </div>
        </Container>
    );
};

export default Blog;