import Header from "../components/header";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
const PropDrill = () => {
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
        })})
    return (
        <>
            <Header />
            <hr />
            <main className="container">
                

                <h3 className="text-center">About the Problem</h3>
                <p className="fs-5">
                    Prop drilling is a concept in React where you pass data as props from a parent component to deeply nested child components,
                    even if some of the intermediate components don't need the data themselves.
                </p>

                <h5>Example:</h5>
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
                    In the above example, we have a <strong>GrandParent</strong> component that declares a <code>message</code> variable and passes it as a prop to the <strong>Parent</strong> component.
                    Then, the <strong>Parent</strong> component again passes it down to the <strong>Child</strong> component, which finally displays it in the UI.
                    <br />
                    Here, you can clearly see that the <strong>Parent</strong> component has no use for the <code>message</code> itself — it simply forwards it.
                    <br />
                    Now imagine a case where there are five intermediate components like this, and the prop is passed all the way down. This situation is exactly what defines <strong>prop drilling</strong>.
                </p>

                <h3 className="text-center">Consequences of Prop Drilling</h3>
                <ol>
                    <li className="fs-5">
                        <strong>Increased Complexity:</strong> As the component tree grows, passing props through multiple layers increases the complexity of the application.
                    </li>
                    <li className="fs-5">
                        <strong>Hard to Maintain:</strong> You may end up repeating the same pattern across many components just to pass props, which makes the code harder to maintain.
                    </li>
                    <li className="fs-5">
                        <strong>Scalability Issues:</strong> As the application grows, prop drilling becomes a barrier to scalability and maintainability.
                    </li>
                </ol>

                <p className="fs-5">
                    Passing props is a great way to transfer data from a parent to a lower-level component.
                    However, it becomes inconvenient when the data needs to be passed deeply through the tree or when multiple components need access to the same data.
                </p>

                <h3 className="text-center">Context API: A Solution to Prop Drilling</h3>
                <p className="fs-5">Context API offers a solution to this problem by acting like a global store for data. Instead of passing props through every level, you can use a Context Provider to share data at a higher level. Then, any component in the tree can access that data directly using useContext(), bypassing the need to pass props down manually. This approach simplifies code, improves scalability, and makes managing global data easier.</p>
                <h3 className="text-center">State Management libraries like redux: A solution to prop drilling</h3>
                <p className="fs-5">Redux solves prop drilling by providing a centralized store for managing global state. Instead of passing data through multiple components, you can directly connect any component to the store and access the required data. Redux uses actions to update the store and reducers to handle state changes. This approach eliminates the need for prop passing, making the app more maintainable and scalable.</p>
            </main>
            
        </>
    );
};

export default PropDrill;
