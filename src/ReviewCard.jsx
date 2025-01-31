const ReviewCard = ({ review, reviews, setReviews }) => {
    const { _id, title, rating, description, date, user } = review;
  
    const handleDelete = _id => {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`http://localhost:5000/review/${_id}`, { method: 'DELETE' })
            .then(res => res.json())
            .then(data => {
              if (data.deletedCount > 0) {
                Swal.fire({
                  title: "Deleted!",
                  text: "Your review has been deleted.",
                  icon: "success"
                });
                const remainingReviews = reviews.filter(review => review._id !== _id);
                setReviews(remainingReviews);
              } else {
                Swal.fire({
                  title: "Error!",
                  text: "Something went wrong, please try again.",
                  icon: "error"
                });
              }
            })
            .catch(() => {
              Swal.fire({
                title: "Error!",
                text: "Something went wrong, please try again.",
                icon: "error"
              });
            });
        }
      });
    };
  
    return (
      <div className="card card-side bg-base-100 shadow-xl flex items-center justify-center mx-5 p-5">
        <div className="card-body">
          <h2 className="card-title">Review Title: {title}</h2>
          <p>Rating: {rating}</p>
          <p>Description: {description}</p>
          <p>By: {user}</p>
          <p>Date: {date}</p>
        </div>
  
        <div className="card-actions">
          <div className="join join-vertical space-y-7">
            <button className="btn join-item">Explore Details</button>
            <Link to={`updatereview/${_id}`}>
              <button className="btn join-item">Edit</button>
            </Link>
            <button onClick={() => handleDelete(_id)} className="btn join-item bg-orange-600">
              X
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default ReviewCard;
  