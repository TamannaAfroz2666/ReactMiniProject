import React from 'react';
// import Header from '../../components/Header/Header';
import { Outlet } from 'react-router-dom';
// import AssignmentMark from '../../components/AssignmentMarks/AssignmentMark';

const Main = () => {
    return (
        <div>
            {/* <Header></Header> <br /> <br /> */}
            {/* <AssignmentMark></AssignmentMark> */}
            <Outlet>
                  
            </Outlet>
        </div>
    );
};

export default Main;