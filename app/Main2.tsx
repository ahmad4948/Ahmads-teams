async function Main(){
    const res = await fetch(
       "https://raw.githubusercontent.com/openfootball/football.json/master/2024-25/en.1.json"
    );
    const data = await res.json();
    console.log(data);
return(
    <div>
        this is main
    </div>
)
}
export default Main;