import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";


const Space = () => {
    return (
        <MDBFooter color="blue" className="font-small pt-4 mt-4">
            <MDBContainer fluid className="text-center text-md-left">
                <MDBRow>
                </MDBRow>
            </MDBContainer>
            <div className="footer-copyright text-center py-3">
                <MDBContainer fluid>
                    {/*&copy; {new Date().getFullYear()} Copyright: <a> mybel Store - House & Furniture </a>*/}
                </MDBContainer>
            </div>
        </MDBFooter>
    );
}

export default Space;
