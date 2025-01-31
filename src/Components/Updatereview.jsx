import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2'
const Updatereview = () => {
    const game = useLoaderData();
    const {_id,name,difficulty,moment,feature,photo,rating} = game;

    const handleupdate = event =>{

        event.preventDefault();


        const form = event.target;
        const name = form.name.value;
        const difficulty = form.difficulty.value;
        const moment = form.moment.value;
        const feature = form.feature.value;
        const photo = form.photo.value;
        const rating = form.rating.value;
 const updategame = {name,difficulty,moment,feature,photo,rating}


console.log(updategame)
//send data to the server
fetch(`http://localhost:5000/game/${_id}`,{
    method :"PUT",
headers:{'content-type':'application/json'},
body:JSON.stringify(updategame)
}
    
)
.then(res => res.json())
.then(data =>{
    console.log(data)
    if(data.modifiedCount >0){

       
             
              Swal.fire({
                title: "succsed!",
                text: "game review added succsessfully.",
                icon: "success"
              });
            
        
    }
})



    }


    return (
        <div className=' bg-orange-100 '>
            <h2 className='text-orange-700 text-center py-7 text-2xl'> Update Game Review </h2>
           
           <div className=' flex justify-center items-center min-h-screen'>
           <form onSubmit={handleupdate}  className='w-1/2'>
           {/* from name */}
             <div className="join flex-col w-1/2 py-7">

                <span className='items-start text-left -mb-3 py-1 text-1xl border-orange-600 p-5'> Game name</span> <br />
    <input name ="name" defaultValue={name} className="input input-bordered join-item mr-4 " placeholder="Game Name" />
    

</div>

 {/* difficulty level */}
<div className="join flex-col w-1/2">

<span className='items-start text-left -mb-5 text-1xl py-1'>Difficulty level</span> <br />
<input name='difficulty' defaultValue={difficulty} className="input input-bordered join-item" placeholder="Difficulty level" />


</div>
 {/* Best Moment in the game*/}
             <div className="join flex-col w-1/2">

                <span className='items-start text-left py-1 -mb-5 text-xl'> Best Moment in the game</span> <br />
    <input name ='moment'  defaultValue={moment} className="input input-bordered join-item mr-4" placeholder="Best Moment in the game" />
    

</div>

 {/* Favorite feature of the game */}
             <div className="join flex-col w-1/2 py-7">

                <span className='items-start text-left py-1 -mb-5 text-xl'> Favorite feature of the game </span> <br />
    <input name ='feature' defaultValue={feature} className="input input-bordered join-item" placeholder="Favorite feature of the game " />
    




    

</div>


 {/* Graphics Qualty*/}
<div className="join flex-col w-1/2 py-7">

<span className='items-start text-left py-1 -mb-5 text-xl'>Photo URL</span> <br />
<input name='photo' defaultValue={photo} className="input input-bordered join-item mr-4" placeholder="Photo URL" />


</div>

 {/* overall rating */}

<div className="join flex-col w-1/2 py-7">

<span className='items-start text-left -mb-5 text-xl'>overall rating </span> <br />
<input name ='rating' defaultValue={rating} className="input input-bordered join-item py-7" placeholder="overall rating " />


</div>



<input className='btn btn-block bg-orange-00 text-white' type="submit" value='Update review'/>


             </form>
           </div>
            
        </div>
    );
};

export default Updatereview;