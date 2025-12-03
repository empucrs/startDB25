import React from "react";

const ChildrenComponent = (props: { children: React.ReactNode }) => {
    return (
        <div>
            <h1>Componente children</h1>
            <span>
                <p>oi </p>
                <p> Há {React.Children.count(props.children)} elementos</p>
            </span>
            {React.Children.map( props.children, 
                child =>
                <div style={{ border: '1px solid'}}>
                    {child}
                </div>
            )}
        </div>
    );
}
 
export default ChildrenComponent;