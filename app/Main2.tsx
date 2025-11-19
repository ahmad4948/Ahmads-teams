async function Main(){
    const res = await fetch(
       "https://raw.githubusercontent.com/openfootball/football.json/master/2024-25/en.1.json"
    );
    const data = await res.json();
const teamIDs: Record<string, number> = {
  "Arsenal FC": 42,
  "Aston Villa FC": 66,
  "Bournemouth": 35,
  "Brentford FC": 55,
  "Brighton & Hove Albion FC": 51,
  "Burnley FC": 44,
  "Chelsea FC": 49,
  "Crystal Palace FC": 52,
  "Everton FC": 45,
  "Fulham FC": 36,
  "Liverpool FC": 40,
  "Luton Town FC": 1359,
  "Manchester City FC": 50,
  "Manchester United FC": 33,
  "Newcastle United FC": 34,
  "Nottingham Forest FC": 65,
  "Sheffield United FC": 62,
  "Tottenham Hotspur FC": 47,
  "West Ham United FC": 48,
  "Wolverhampton Wanderers FC": 39,
  "Southampton FC": 41,
  "Leicester City FC": 46,
  "AFC Bournemouth": 35,
};
  const filtered:any[] = [];
  for(let i=0;i<data.matches.length;i++){
    const m = data.matches[i];
    if(m.team1 == "Liverpool FC" || m.team2 =="Liverpool FC" || 
    m.team1 == "Manchester United FC" || m.team2 == "Manchester United FC"){
        filtered.push(m);
    }
  }
  console.log(filtered);
return(
    <div>
     {filtered.map((match,i) => {
      return(
        <div key={i} className="grid grid-cols-5 md:grid-cols-[auto_1fr_auto_1fr_auto] mt-32 bg-white items-center
         w-[95%] mx-auto rounded  gap-x-7 md:gap-x-16 mb-12">
       <img src={match.team1 === "Ipswich Town FC"? 
       "https://upload.wikimedia.org/wikipedia/en/4/43/Ipswich_Town.svg"
      : `https://media.api-sports.io/football/teams/${teamIDs[match.team1]}.png` } 
        className="h-16 w-12 md:h-38 md:w-28"/>

           <span className="text-sm md:text-4xl text-[#28282C] font-semibold">{match.team1} </span> 
           <span className="text-xs md:text-3xl">{match.date} </span> 
           <span className="text-sm md:text-4xl text-[#28282C] font-semibold"> {match.team2} </span>
               <img src={match.team2 === "Ipswich Town FC"? 
       "https://upload.wikimedia.org/wikipedia/en/4/43/Ipswich_Town.svg"
      : `https://media.api-sports.io/football/teams/${teamIDs[match.team2]}.png` }
          className="h-16 w-12 md:h-38 md:w-28" />
           </div>
      )
     }
     )}
    </div>
)
}
export default Main;