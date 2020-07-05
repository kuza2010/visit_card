import React from "react";

/**
 * Wrap component to container div. It is standard grid has 12 columns.
 */
const Container = (Wrapped) => {
    return () => {
        return (
            <div className="container">
                <Wrapped/>
            </div>
        );
    };
}

/**
 * Wrap component to row div.
 */
const ContainerRow = (Wrapped) => {
    return () => {
        return (
            <div className="row">
                <Wrapped/>
            </div>
        );
    };
}

/**
 * Combine containers with a provided component
 */
const combine = (...containers) => (Component) =>
    containers.reduceRight((prev, curr) => {
        return curr(prev);
    }, Component);


export {
    Container,
    ContainerRow,
    combine
};