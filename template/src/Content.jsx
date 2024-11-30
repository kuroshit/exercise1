/* eslint-disable react/prop-types */
import Part from './Part';


const Content = (props) => {
    return (
        <>
        <Part object = {props.part[0]} />
        <Part object = {props.part[1]} />
        <Part object = {props.part[2]} />
        </>
    )
}

export default Content;