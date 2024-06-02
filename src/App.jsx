import React from 'react'
import Card from './card'

{/* above import is third way of the method  */}

function App() {

  //1.it's a javascript variable
  //1.let name = ["abu ","iron "]
 
  //compulsary fragment <> starting nearby return 

  //2. we use object for creatiing multiple cards instead of using
  // many html div elements
  
  let data = [
    {
      title : "Foggy Mountains",
      description : "The Misty Mountains, also named Hithaeglir (Sindarin: hîth, mist, + aeglir, range of mountain peaks), was a mountain range stretching 1280 kilometres (796 miles) from Mount Gundabad in the far north to Methedras in the south of Middle-earth, between Eriador and Rhovanion.",
      imageUrl : "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      imageAlt : "https://via.placeholder.com/700x400"
    },
    {
      title : "Reddish Mountains",
      description : "The Red Mountains are an extensive mountain range in the south of Westeros. They form a barrier between Dorne to the south, the Stormlands to the north, and the Reach to the west. There are two major passes through the mountains, the Prince's Pass and the Boneway.",
      imageUrl : "https://images.unsplash.com/photo-1477346611705-65d1883cee1e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      imageAlt : "https://via.placeholder.com/700x400"
    },
    {
      title : "Snow Mountains",
      description : "The sky is clear with a bright blue sky and puffy white clouds, and the crisp breeze is flowing throughout the covered porch of our cabin. The trees covered with snow for as far as the eyes can see, and the ground covered with inches of white,fluffy snow.",
      imageUrl : "https://images.unsplash.com/photo-1543532224-f27c14ca2540?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      imageAlt : "https://via.placeholder.com/700x400"
    }
  ]


  return <>
  {/* this is used for command  */}
  {/*1.  
     <h1>Welcome {name} to first React App</h1>
  {
    //using js so {}
    
    //map & filter only return foreach not return 

    //you should give every element with unique key
    // i-index is unique for every element 
    name.map((e,i)=>{
      return <h1 key={i}>name using map {e}</h1>
    })

    

  }
  */}


{/* using cards */}



{/*Page Content */}
<div className="container">

  {/*Page Heading */}
  <h1 className="my-4">React Reusable Components</h1>
  <div className="row">

{/* we use map for iterate the object  we use javascript so using it inside the {}*/}
  {

    data.map((e,i)=>{

      {/* this is first way to iterate the object  */}
      {/*
      return <div className="col-lg-4 col-sm-6 mb-4" key={i}>
      <div className="card h-100">
        <a href="#"><img className="card-img-top" src={e.imageUrl} alt={e.imageAlt} /></a>
        <div className="card-body">
          <h4 className="card-title">
            <a href="#">{e.title}</a>
          </h4>
          <p className="card-text">{e.description}</p>
        </div>
      </div>
    </div>
    */}

    {/* this is the second way */}
    {/* using the Card function for this */}
     
    {/*return < Card data = {e} />*/}

    {/*also we use the object destructurng method for easy way */}

    {/*we used it in the third way */}
    return <Card
       imageUrl = {e.imageUrl}
       imageAlt = {e.imageAlt}
       description = {e.description}
       title = {e.title} 
       i = {i}
       />


    })
  }
    
  </div>
</div>
</>
}

export default App

{/* this is second way for iterate object in react  */}
{/*props is used as a parameter for the properties like e */}

{/*
function Card(props){

  return <div className="col-lg-4 col-sm-6 mb-4">
      <div className="card h-100">
        <a href="#"><img className="card-img-top" src={props.data.imageUrl} alt={props.data.imageAlt} /></a>
        <div className="card-body">
          <h4 className="card-title">
            <a href="#">{props.data.title}</a>
          </h4>
          <p className="card-text">{props.data.description}</p>
        </div>
      </div>
    </div>

}
*/}