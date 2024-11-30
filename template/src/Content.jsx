/* eslint-disable react/prop-types */
import Part from './Part';


const Content = (props) => {
    return (
        <>
        <Part name = {props.part[0]} exercise = {props.exercise[0]} />
        <Part name = {props.part[1]} exercise = {props.exercise[1]} />
        <Part name = {props.part[2]} exercise = {props.exercise[2]} />
        </>
    )
}

export default Content;