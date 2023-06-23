import React from "react";
import NavigationBar from "./navbar";
import Footer from "./footer";

/*
    Layout page is to replace the main section of every
    page in the pages folder.
*/

function PageLayout(props) {
    return (
        <>
            <NavigationBar />
            <main>
                {props.children}
            </main>
            <Footer />
        </>
    )
}

export default PageLayout;