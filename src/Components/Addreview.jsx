import Swal from 'sweetalert2'

const Addreview = () => {

    const handleaddreview = event =>{

        event.preventDefault();


        const form = event.target;
        const name = form.name.value;
        const difficulty = form.difficulty.value;
        const moment = form.moment.value;
        const feature = form.feature.value;
        const photo = form.photo.value;
        const rating = form.rating.value;
 const newreview = {name,difficulty,moment,feature,photo,rating}


console.log(newreview)
//send data to the server
fetch('http://localhost:5000/game',{
    method :"POST",
headers:{'content-type':'application/json'},
body:JSON.stringify(newreview)
}
    
)
.then(res => res.json())
.then(data =>{
    console.log(data)
    if(data.insertedId){

       
             
              Swal.fire({
                title: "succsed!",
                text: "user added succsessfully.",
                icon: "success"
              });
            
        
    }
})



    }
    return (
        <div  className=' bg-orange-100 '>
            <h2 className='text-orange-700 text-center py-5 text-2xl font-extrabold'> Add Games Reviews </h2>





            <div className=' flex justify-center items-center min-h-screen'>
            <form onSubmit={handleaddreview}  className='w-1/2'>
           {/* from name */}
             <div className="join flex-col w-1/2 py-7">

                <span className='items-start text-left -mb-3 py-1 text-1xl'> Game name</span> <br />
    <input name ="name" className="input input-bordered join-item mr-4" placeholder="Game Name" />
    

</div>

 {/* difficulty level */}
<div className="join flex-col w-1/2">

<span className='items-start text-left -mb-5 text-1xl py-1'>Difficulty level</span> <br />
<input name='difficulty' className="input input-bordered join-item" placeholder="Difficulty level" />


</div>
 {/* Best Moment in the game*/}
             <div className="join flex-col w-1/2">

                <span className='items-start text-left py-1 -mb-5 text-1xl'> Best Moment in the game</span> <br />
    <input name ='moment' className="input input-bordered join-item mr-4" placeholder="Best Moment in the game" />
    

</div>

 {/* Favorite feature of the game */}
             <div className="join flex-col w-1/2 py-7">

                <span className='items-start text-left py-1 -mb-5 text-1xl'> Favorite feature of the game </span> <br />
    <input name ='feature' className="input input-bordered join-item" placeholder="Favorite feature of the game " />
    




    

</div>


 {/* Graphics Qualty*/}
<div className="join flex-col w-1/2 py-7">

<span className='items-start text-left py-1 -mb-5 text-1xl'>Photo URL</span> <br />
<input name='photo' className="input input-bordered join-item mr-4" placeholder="Photo URL" />


</div>

 {/* overall rating */}

<div className="join flex-col w-1/2 py-7">

<span className='items-start text-left -mb-5 text-1xl'>overall rating </span> <br />
<input name ='rating' className="input input-bordered join-item py-5" placeholder="overall rating " />


</div>



<input className='btn btn-block bg-orange-600 text-white' type="submit" value='add review'/>


             </form>
              </div>

             
        </div>
    );
};

export default Addreview;
