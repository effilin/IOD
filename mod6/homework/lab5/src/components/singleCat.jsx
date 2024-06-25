import BigCats from "./bigCats";

const SingleCats = (props) => {


   return (
    <div style={{
        border:'1px solid black',
        borderRadius:'3px',
    }}>
        <p>{props.name}</p>
        <img src={props.src} alt={props.name} style={{objectFit:'scale-down',height:'30vw', width:'30vw'}}/>
        <button onClick={() => handleDelete(props.id)}>Delete</button>
    </div>

   )
};

export default SingleCats