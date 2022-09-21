import React from 'react';

import { ThreeDots } from 'react-loader-spinner';

const Loader = () => {
    return (
        <div style={{
            width: "100%",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            marginTop: "2rem"
        }}>
            <ThreeDots
                height="80"
                width="80"
                radius="9"
                color="grey"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
            />
        </div>
    );
};

export default Loader;