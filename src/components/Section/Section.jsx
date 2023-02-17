// import css from './Section.module.css'


const Section = ({ title, children }) => {
    console.log(children)
    return <>
        <h1 className="Feedback__heading">{title}</h1>
        {children}
    </>
}

export default Section