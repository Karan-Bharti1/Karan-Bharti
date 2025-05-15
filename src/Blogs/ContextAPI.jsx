import Header from "../components/header";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap/gsap-core";

const ContextAPI = () => {
    useGSAP(() => {
        gsap.from("h3, h5", {
            opacity: 0,
            y: 20,
            duration: 0.6,
            stagger: 0.2,
            ease: "power3.out",
        });

        gsap.from("p.fs-5, ol", {
            opacity: 0,
            y: 30,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out",
        });

        gsap.from("pre", {
            opacity: 0,
            scale: 0.9,
            duration: 0.7,
            ease: "back.out(1.7)",
        });
    });

    return (
        <>
            <Header />
            <hr />
            <main className="container">
                <h2 className="text-center">Context: API</h2>
                <p className="fs-5">
                    The Context API is a powerful feature in React that allows data to be shared across components without the need to pass props manually through every level of the component tree.
                </p>

                <h3 className="text-center my-3">Prop Drilling: The Problem</h3>
                <pre className="bg-dark text-white p-3 rounded">
                    <code>
{`const GrandParent = () => {
    const message = "Hello from GrandParent";
    return <Parent message={message} />;
};

const Parent = ({ message }) => {
    return <Child message={message} />;
};

const Child = ({ message }) => {
    return <p>{message}</p>;
};`}
                    </code>
                </pre>
                <p className="fs-5">
                    In the example above, the <code>GrandParent</code> component declares a message and passes it to <code>Parent</code>, which then passes it to <code>Child</code>. This is an example of <strong>prop drilling</strong>—the process of passing data through multiple levels of components unnecessarily.
                </p>

                <h3 className="text-center">The Solution</h3>
                <p className="fs-5">
                    Imagine having a global store that holds data and allows any component to access it directly—no matter how deeply nested it is. The Context API offers this kind of solution. Let’s learn how to implement it in a React application.
                </p>

                <h3 className="text-center">Implementation</h3>
                <p className="fs-5">
                    Implementing Context API involves 3 main steps:
                </p>
                <ol>
                    <li className="fs-5">Create Context</li>
                    <li className="fs-5">Provide Context</li>
                    <li className="fs-5">Consume Context</li>
                </ol>

                <h3 className="text-center">Step 1: Create Context</h3>
                <pre className="bg-dark text-white p-3 rounded">
                    <code>
{`import { createContext } from "react";
const MessageContext = createContext();`}
                    </code>
                </pre>
                <p className="fs-5">
                    Think of context as a store for your state. Start by creating a new file for your context, then import <code>createContext</code> from React and initialize your context. In this example, we are storing a message, so we name our context <code>MessageContext</code>.
                </p>

     <h3 className="text-center">Step 2: Provide Context</h3>

<p className="fs-5">
    Once you have created a context, the next step is to <strong>provide</strong> it to  your app that needs access to the shared data. For this, we create a <code>Provider Component</code> that wraps other components and supplies the data.
</p>

<h5 className="mt-4"> MessageProvider Component</h5>

<pre className="bg-dark text-white p-3 rounded">
<code>{`// MessageProvider.js
import { useState } from "react";
import { MessageContext } from "./MessageContext";

const MessageProvider = ({ children }) => {
    const [messageData, setMessage] = useState("We love JavaScript");

    const markAsRead = () => {
        console.log("Message marked as read");
    };

    return (
        <MessageContext.Provider value={{ messageData, markAsRead }}>
            {children}
        </MessageContext.Provider>
    );
};

export default MessageProvider;`}</code>
</pre>

<p className="fs-5">
    Here we create a reusable <code>MessageProvider</code> component that wraps any child components which need access to context.We might pass both state variables,state and helper function in as <code>value</code> in return statement of the component.
</p>

<h5 className="mt-4"> Wrapping the App</h5>

<p className="fs-5">
    Now we need to wrap our main <code>App</code> component with <code>MessageProvider</code> so that the context is available across the application.
</p>

<pre className="bg-dark text-white p-3 rounded">
<code>{`// main.jsx or index.js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import MessageProvider from "./MessageProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <MessageProvider>
            <App />
        </MessageProvider>
    </React.StrictMode>
);`}</code>
</pre>

<p className="fs-5">
    By wrapping the <code>&lt;App /&gt;</code> inside <code>&lt;MessageProvider /&gt;</code>, we make the shared state and methods accessible to all components inside the app. This eliminates the need for prop drilling.
</p>


                <h3 className="text-center">Step 3: Consume Context</h3>
                <pre className="bg-dark text-white p-3 rounded">
                    <code>
{`import { useContext } from "react";
import { MessageContext } from "./MessageContext";

const Child = () => {
    const { messageData, markAsRead } = useContext(MessageContext);
    
    return <p>{messageData}</p>;
};`}
                    </code>
                </pre>
                <p className="fs-5">
                    Finally, in any component that needs access to the context, use the <code>useContext</code> hook to consume the context. Now you can directly access the shared data or functions without prop drilling.
                </p>

                <h3 className="text-center">Conclusion</h3>
                <p className="fs-5">
                    The Context API is a simple yet powerful way to manage state globally in a React app. It helps in writing cleaner code and avoids unnecessary prop passing. However, for very complex applications with deeply interdependent state, you might still consider state management libraries like Redux.
                </p>
            </main>
        </>
    );
};

export default ContextAPI;
