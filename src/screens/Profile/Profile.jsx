import { useDispatch, useSelector } from "react-redux";
import { toggleCheckbox } from "../../store/profile/actions";

export const Profile = () => {
    const dispatch = useDispatch()
    const state = useSelector(state => state);
    console.log(state);
    const handleCheckbox = () => {
        dispatch(toggleCheckbox);
    }
    return (
        <>
            <h3>This is your profile page</h3>
            <div style={ {height: 40} }>
                {state.showName && <span>{state.name}</span>}
            </div>
            <div>
                <input id="toggle_name" type="checkbox" onChange={handleCheckbox}/>
                <label htmlFor="toggle_name">Show user name</label>
            </div>
        </>
    );
};