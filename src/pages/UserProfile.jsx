import { useEffect, useState } from "react";
import axios from "axios";

const UserProfile = ({ id }) => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const getUser = async (id) => {
    setLoading(true);
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
      setUserData(response.data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };
  useEffect(() => {
    getUser(id);
  }, [id]);

  if (loading) return <div>로딩중..</div>;

  if (!userData) return <h1>유저가 없어요</h1>;
  const { username, email } = userData;

  return (
    <div>
      <p>
        <b>유저명: </b>
        {username}
      </p>
      <p>
        <b>이메일: </b>
        {email}
      </p>
    </div>
  );
};

export default UserProfile;
