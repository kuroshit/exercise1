/* eslint-disable react/prop-types */

const Content = (props) => {
    return (
        <>
        <p>
            {props.part[0]} {props.exercise[0]}
        </p>
        <p>
            {props.part[1]} {props.exercise[1]}
        </p>
        <p>
            {props.part[2]} {props.exercise[2]}
        </p>
        </>
    )
}

export default Content;