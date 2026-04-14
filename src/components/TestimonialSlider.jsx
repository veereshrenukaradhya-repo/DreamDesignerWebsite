export default function Testimonials(){

const reviews=[
{
name:"Rahul Sharma",
text:"Amazing design experience. My house looks fantastic."
},
{
name:"Priya Singh",
text:"Professional designers and great execution."
},
{
name:"Arjun Mehta",
text:"Highly recommended for modern interiors."
}
]

return(

<section style={{
padding:"80px",
background:"#f7f7f7"
}}>

<h2 style={{textAlign:"center"}}>
Customer Stories
</h2>

<div style={{
maxWidth:"800px",
margin:"40px auto",
textAlign:"center"
}}>

{reviews.map((r,i)=>(

<div key={i} style={{
marginBottom:"30px"
}}>

<p style={{fontSize:"18px"}}>
"{r.text}"
</p>

<strong>{r.name}</strong>

</div>

))}

</div>

</section>

)

}