/* eslint-disable react/prop-types */

const Part = (props) => {
    return (
        <p> {props.object.name} {props.object.exercises} </p>
    )
}

export default Part;