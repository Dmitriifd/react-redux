import './employees-list-item.css';


const EmployeesListItem = (props) => {


    const { name, salary, onDelete, increase, rise, onToggleProp } = props;


    let classNames = "list-group-item d-flex justify-content-between";
    if (increase) {
        classNames += " increase";
    }
    if (rise) {
        classNames += " like";
    }

    return (
        <li className={classNames}>
            <span
                onClick={onToggleProp}
                className="list-group-item-label"
                data-toggle="rise">{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary + '$'} />
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    onClick={onToggleProp}
                    data-toggle="increase"
                    className="btn-cookie btn-sm ">
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                    onClick={onDelete}
                    className="btn-trash btn-sm ">
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )

}

export default EmployeesListItem;