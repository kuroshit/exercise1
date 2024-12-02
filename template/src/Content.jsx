/* eslint-disable react/prop-types */
import Part from './Part';

const Content = ({ part }) => {
    return (
        <>
        <Part name = {part[0].name} exercises = {part[0].exercises} />
        <Part name = {part[1].name} exercises = {part[1].exercises} />
        <Part name = {part[2].name} exercises = {part[2].exercises} />
        </>
    )
}

export default Content;