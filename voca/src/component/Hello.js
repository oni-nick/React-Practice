import { useState } from 'react';

export default function Hello(props) {
    const [nameState, nameStateChange] = useState('마이크');
    const [age, ageChange] = useState(props.age)

    console.log(props)
    
    return(  
        <div>
            <h3>{nameState} ({age})</h3>

            <button onClick={() => {
                nameStateChange(nameState === '마이크' ? '닉' : '마이크' )
                ageChange(age+1)
                }}>
                
                  State Button
                </button>
        </div>
    );
}