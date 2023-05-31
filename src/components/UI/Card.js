import classesModule from './Card.module.css'

function Card(props) {
    const classes = classesModule['card'] + ' ' + props.className;
    return (
        <div className={classes}>
            {props.children}
        </div>
    );
}
export default Card;