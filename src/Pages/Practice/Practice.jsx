import PropTypes from 'prop-types';

function Practice(props) {
    return (
        <>
            <h1>Practice Page</h1>
            {props.children}
        </>
    );
}

Practice.propTypes = {
    children: PropTypes.node,
}

export default Practice;
