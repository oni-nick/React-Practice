import { useState } from 'react';

export default function Hello() {
    const [nameState, nameStateChange] = useState('마이크');
    let name = "Mike";

    function ChangeName(){
        name = name === 'Mike' ? 'Nick' : 'Mike';
        document.getElementById("name").innerText = name;
        console.log(name)
    }
    return(  
        <div>
            <h3 id="name">{name}</h3>
            <h3>{nameState}</h3>
            <button onClick={ChangeName}>Change</button>
            <button onClick={() => {nameStateChange(nameState === '마이크' ? '닉' : '마이크' )}}>State Button</button>
        </div>
    );
}