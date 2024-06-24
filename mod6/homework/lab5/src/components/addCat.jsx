import { useState } from "react";


const AddCatForm = ({onAddCat}) => {
    const [submitResult, setSumbitResult] = useState('');
    const [name, setCatName] = useState('');
    const [src, setCatImage] = useState('');
    const [latinName, setLatinName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if(name.length > 10) {
            setCatName('Cat Name too long. may not exeed 10 characters');
        }
        else if (src.includes('http' || '.jpg') === false) {
            setCatImage('Must enter a URL');
        }
        else {
            setSumbitResult('Submit Sucessful');
            onAddCat({name, latinName, src});
        }
    }
        return (
        <div>
            <form  name='catForm' onSubmit={handleSubmit} style={{ border:"1px solid #0049B7", borderRadius:"2px", backgroundColor:"#12343b", color:"#fff5d7", padding:"3vw"}}>
                <div>
                    <label style={{margin:'1vw'}} name="catName">Cat Name</label>
                    <input onChange={(e) => setCatName(e.target.value)} 
                    style={{margin:'1vw', padding:'.5vw'}} 
                    type="text" id="catName" name="catName" value={name} ></input>
                </div>
                <div>
                    <label style={{margin:'1vw'}} name="catLatinName">Latin Name</label>
                    <input onChange={(e) => setLatinName(e.target.value)} 
                    style={{margin:'1vw', padding:'.5vw'}} 
                    type="text" id="catLatinName" name="catLatinName" value={latinName} ></input>
                </div>
                <div>
                    <label style={{margin:'1vw'}} name="catImg">Cat Image</label>
                    <input onChange={(e) => setCatImage(e.target.value)}
                     style={{margin:'1vw', padding:'.5vw'}}
                      type="url" id="catImage" name="catImage" value={src} ></input>
                </div>
                <button onChange={(e) => setSumbitResult(e.target.value)} 
                type="submit">Submit</button>

            </form>
        </div>
    )

};

export default AddCatForm;