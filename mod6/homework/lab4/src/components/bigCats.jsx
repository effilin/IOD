import { useState } from "react";
import SingleCats from "./singleCat";
const BigCats = () => {
    const cats = [
        { id: 1, name: 'Cheetah', latinName: 'Acinonyx jubatus', src:'https://cdn.britannica.com/98/152298-050-8E45510A/Cheetah.jpg'},
        { id: 2, name: 'Cougar', latinName: 'Puma concolor', src:'https://www.victoriabuzz.com/wp-content/uploads/2015/08/11794484_519023821578479_4438940737525636256_o.jpg' },
        { id: 3, name: 'Jaguar', latinName: 'Panthera onca', src:'https://upload.wikimedia.org/wikipedia/commons/3/3b/Jaguar_animal_panthera_onca.jpg' },
        { id: 4, name: 'Leopard', latinName: 'Panthera pardus', src:'https://pixfeeds.com/images/animals/jaguars/1280-496565661-jaguar.jpg'},
        { id: 5, name: 'Lion', latinName: 'Panthera leo', src:'https://hdqwalls.com/wallpapers/adult-lion-gr.jpg' },
        { id: 6, name: 'Snow leopard', latinName: 'Panthera uncia', src:'https://s-i.huffpost.com/gen/1360371/images/o-SNOW-LEOPARD-facebook.jpg' },
        { id: 7, name: 'Tiger', latinName: 'Panthera tigris', src:'https://www.rainforesttrust.org/app/uploads/2022/06/India-male-Tiger-by-Ondrej-Prosicky-min.jpg' },
        ];

        const [catsList, setCats] = useState(cats);

        const catItems = catsList.map(cat => (
            <SingleCats key={cat.id} name={cat.name} src={cat.src} />
        ))

        const reverseCats = () => {
           
            let newCats = [...catsList];
            newCats.reverse();
            setCats(newCats);
        };

        const alphabeticalCats = () => {
            
            let newCats = [...catsList];
            newCats.sort((a, b) => {
              if(a.name < b.name) {
                return -1;
              }
              if(a.name > b.name) {
                return 1;
              }
              return 0;
            });
            setCats(newCats);
        };

        const panthera =() => {
            const newCats = catsList.filter((cat) =>  {
                if ( cat.latinName.includes('Panthera')) {
                    return true;
                }
                return false;
            });
           setCats(newCats);
        
        };

        const reset = () => {
            setCats(cats);
        };



 return(
    <div className="BigCats componentBox" style={{
        border: "1px solid black",
        backgroundColor: "#3eb489",
        padding:"2vw",
    }}>
        <button style={{margin:'3vw',backgroundColor:"#a28089"}} onClick={alphabeticalCats}>List Alphabetically</button>
        <button style={{margin:'3vw',backgroundColor:"#a28089"}} onClick={reverseCats}>Reverse Order</button>
        <button style={{margin:'3vw',backgroundColor:"#a28089"}} onClick={panthera}>Panthera</button>
        <button style={{margin:'3vw',backgroundColor:"#a28089"}} onClick={reset}>Reset</button>
        <ul>
            {catItems}
        </ul>

    </div>
 )
};

export default BigCats;