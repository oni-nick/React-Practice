
export default function Hello() {
    function ShowName(username) {
        console.log(username);
      }
    function ShowAge(age){
        console.log(age);
    }
    function ShowText(txt){
        console.log(txt);
    }
    return(  
        <div>
            <h1>Hello</h1>
            <button onClick={ShowName(9)}>Show Name</button>
            <button onClick={() => { ShowAge(30)}}>Show Age</button>
            <input 
                type="text"
                onChange={ (e) => {
                    const txt = e.target.value
                    ShowText(txt)
                }}
            />
        </div>
    );
}