import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({ data, onDelete }) => {

    const elements = data.map(item => {
        // return <EmployeesListItem name={item.name} salary={item.salary} increase={item.increase} />

        const { id, ...itemProps } = item;
        // Развертывание пропсов через оператор расширения
        return <EmployeesListItem
            key={id}
            {...itemProps}
            onDelete={() => onDelete(id)}
        />
    })

    return (
        <ul className="app-list list-group">
            {/* {data.map(item => {
                return <EmployeesListItem name={item.name} salary={item.salary} increase={item.increase} />
            })} */}
            {elements}
        </ul>
    )
}

export default EmployeesList;