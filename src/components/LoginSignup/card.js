import "./userProfile.css";

export default function Card(props) {
    return(
        <>
        <div className="parent">
            <div className="userImg" style={{
            backgroundImage: `url(${props.img})`,
            width:"300px" ,
            height: "300px",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center", 
            borderRadius:"12px",}}>

            </div>
            <div className="words" >    
                <h2 className="title">{props.title}</h2>
                <h4 className="desc">{props.desc}</h4>
            </div>
            
        </div>
        </>
    )
    
}