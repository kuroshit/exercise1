const Total = (props) => {
    return (
        <p>
            Number of exercies {props.exercise[0] + props.exercise[1] + props.exercise[2]}
        </p>
    )
}

export default Total;