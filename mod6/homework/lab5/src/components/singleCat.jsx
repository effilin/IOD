import BigCats from "./bigCats";

const SingleCats = (props) => {

    let catId = props.id;

    const deleteID = (catId) => {
        console.log(catId)
      return catId
    }

   return (
    <div style={{
        border:'1px solid black',
        borderRadius:'3px',
    }}>
        <p>{props.name}</p>
        <img src={props.src} alt={props.name} style={{objectFit:'scale-down',height:'30vw', width:'30vw'}}/>
        <button name={props.id}>Delete</button>
    </div>

   )
};

export default SingleCats