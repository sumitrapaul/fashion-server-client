/* eslint-disable react/prop-types */



const Review = ({r}) => {
   
    return (
        <tr>
           <td><img className="w-16 h-12 rounded-md" src={r.image} alt="" /></td>
           <td>{r.brand_name}</td> 
           <td>{r.name}</td> 
           <td>{r.email}</td> 
           <td>{r.message}</td> 
           <td>{r.price}</td> 
        </tr>
    );
};

export default Review;