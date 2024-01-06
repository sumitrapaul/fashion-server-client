/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useParams } from "react-router-dom";
import Review from "./Review";

const MyReview = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const [review, setReview] = useState([]);
  const { _id } = useParams();
  
  useEffect(() => {
    if(user) {
      fetch(`http://localhost:5000/reviews?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setReview(data);
        });
    }
  }, [user]);

  return (
    <div>
      <h2 className="text-2xl text-center font-bold underline decoration-rose-300">
        My Review
      </h2>

      <br />

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Image</th>
              <th>Brand_Name</th>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {review.map((r) => (
              <Review key={r._id} r={r}></Review>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyReview;
