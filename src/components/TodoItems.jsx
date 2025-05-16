import Todoitem from "./Todoitem"
import styles from "./Todoitems.module.css"
function Todoitems(props){
return (
    <div className={styles.itemsContainer}>

    {props.todoitems.map(
        (item)=>(<Todoitem name={item.name} date={item.duedate} onDelete={props.onDelete}></Todoitem>)

    )}
    </div>
)
}
export default Todoitems