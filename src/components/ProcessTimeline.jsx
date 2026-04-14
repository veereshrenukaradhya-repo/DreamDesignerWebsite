export default function Process(){

const steps=[
"Book Consultation",
"Meet Designer",
"Design Finalization",
"Execution & Delivery"
]

return(

<section style={{padding:"70px"}}>

<h2 style={{textAlign:"center"}}>
Our Interior Design Process
</h2>

<div style={{
display:"flex",
justifyContent:"space-around",
marginTop:"40px"
}}>

{steps.map((step,i)=>(

<div key={i} style={{
textAlign:"center",
width:"200px"
}}>

<div style={{
width:"60px",
height:"60px",
borderRadius:"50%",
background:"#e63946",
color:"white",
display:"flex",
alignItems:"center",
justifyContent:"center",
margin:"auto"
}}>
{i+1}
</div>

<p style={{marginTop:"15px"}}>
{step}
</p>

</div>

))}

</div>

</section>

)

}