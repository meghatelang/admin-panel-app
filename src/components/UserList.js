import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../components/action';


const UserList = () => {
    const _dispatch = useDispatch();
    const _userState = useSelector(state => state.userReducer);

    const [usersList, setUsers] = useState([]);

    useEffect(() => {
        _dispatch(userActions.getUsers())

    },[]);
    useEffect(()=>{
        setUsers(_userState.usersList)

    },[_userState.usersList,_userState.loading,_userState.usersError])

  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>User Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
         {usersList.map((data,i)=>{
             return(
                 <tr key={`userData ${i}`}> 
                     <td key={`id ${i}`}>{data.id}</td>
                     <td key={`fn ${i}`}>{data.first_name}</td>
                     <td key={`ln ${i}`}>{data.last_name}</td>
                     <td key={`email ${i}`}>{data.email}</td>
                 </tr>
             )

         })}
        </tbody>
      </table>
    </div>
  );
};
export default UserList;
