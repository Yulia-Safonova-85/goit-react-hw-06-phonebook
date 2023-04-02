import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "redux/slice";
import { getFilter } from "redux/selectors";
import { FindFilter } from "./Filter.styled";


  export const Filter = () => {
 const dispatch = useDispatch();
 const filter = useSelector(getFilter);

const  changeFilter = evt => {
dispatch(setFilter(evt.target.value ));

  };

    return (
        <FindFilter>
            Find contacts by name
            <input type="text" 
            name="filter" value={filter} 
            placeholder="Find contact" 
            onChange={changeFilter} />
        </FindFilter>
    )
};