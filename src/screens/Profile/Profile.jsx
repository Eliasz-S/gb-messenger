import { Button } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form } from "../../components/Form/Form";
import { logOut } from "../../services/firebase";
import { initProfileTrack, setNameFB, setShowNameFB, stopProfileTrack } from "../../store/profile/actions";
import { selectName, selectShowName } from "../../store/profile/selectors";

export const Profile = () => {
    const dispatch = useDispatch();
    
    const name = useSelector(selectName); // useSelector принимает импортированный селектор
    const showName = useSelector(selectShowName);
    
    const handleCheckbox = () => {
        dispatch(setShowNameFB(!showName));
        console.log(showName);
    };

    const handleSubmit = (text) => {
        dispatch(setNameFB(text));
    };

    useEffect(() => {
        dispatch(initProfileTrack());

        return () => {
            dispatch(stopProfileTrack());
        };
    }, [dispatch]);

    return (
        <>
            <h3>This is your profile page</h3>
            <Button onClick={logOut} variant="outlined" >Logout</Button>
            <div style={ {height: 40} }>
                {showName && <span>{name}</span>}
            </div>
            <div>
                <input id="toggle_name" type="checkbox" onChange={handleCheckbox}/>
                <label htmlFor="toggle_name">Show user name</label>
            </div>
            <Form onSubmit={handleSubmit} />
        </>
    );
};

// const ProfileToConnect = ({ name, showName, changeName, changeCheckbox }) => {
//     console.log(name, showName);
//     // const dispatch = useDispatch()
//     const state = useSelector(state => state);
//     console.log(state);
//     const handleCheckbox = () => {
//         changeCheckbox();
//     };

//     const handleSubmit = (text) => {
//         changeName(text);
//     };

//     return (
//         <>
//             <h3>This is your profile page</h3>
//             <div style={ {height: 40} }>
//                 {showName && <span>{name}</span>}
//             </div>
//             <div>
//                 <input id="toggle_name" type="checkbox" onChange={handleCheckbox}/>
//                 <label htmlFor="toggle_name">Show user name</label>
//             </div>
//             <Form onSubmit={handleSubmit} />
//         </>
//     );
// };

// const mapStateToProps = (state) => ({
//     name: state.profile.name,
//     showName: state.profile.showName,
// });

// const mapDispatchToProps = {
//     changeName: setName,
//     changeCheckbox: () => toggleCheckbox,
// }

// export const Profile = connect(
//     mapStateToProps, 
//     mapDispatchToProps
// )(ProfileToConnect);