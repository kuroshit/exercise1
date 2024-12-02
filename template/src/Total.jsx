/* eslint-disable react/prop-types */
const Total = ({ total }) => {
    const totalExercises = total.reduce((sum, part) => sum + part.exercises, 0);

    return (
        <p>
            Number of exercies {totalExercises}
        </p>
    )
}

export default Total;