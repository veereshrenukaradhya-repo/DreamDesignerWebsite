export default function GalleryGrid(){

const images=[
"images/kitchen.avif",
"images/bedroom.avif",
"images/wardobe.avif",
"images/poojaunit.avif",
"images/tvUnit.avif",
"images/homepage.avif",
]

return(

<section style={{padding:"60px"}}>

<h2 style={{textAlign:"center"}}>Latest Interior Designs</h2>

<div style={{
marginTop:"40px",
display:"grid",
gridTemplateColumns:"repeat(4,1fr)",
gap:"20px"
}}>

{images.map((img,i)=>(

<div key={i} style={{
overflow:"hidden",
borderRadius:"10px"
}}>

<img
src={img}
style={{
width:"100%",
transition:"0.4s"
}}
/>

</div>

))}

</div>

</section>

)

}