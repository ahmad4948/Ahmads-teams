function Header(){
return(
<div className="flex justify-around py-6 font-mont bg-white flex-wrap md:flex-nowrap">
    
 <div className="flex items-center gap-3"><img src="ball.png" className="h-5 md:h-9"/>
 <span className="text-[#28282C] text-xs md:text-2xl font-semibold">Ahmad's Teams</span> </div>
 <span className="text-[#28282C] text-xs md:text-2xl font-semibold">Home</span>
 <span className="text-[#28282C] text-xs md:text-2xl font-semibold">Team</span>
 <span className="text-[#28282C] text-xs md:text-2xl font-semibold">Tickets</span>
 <span className="text-[#28282C] text-xs md:text-2xl font-semibold">Shop</span>
 <div className="flex">
    <img src="facebook.png" className="h-5 md:h-10"/>
    <img src="twitter.png" className="h-5 md:h-10"/>
    <img src="linkedin.png" className="h-5 md:h-10"/>
 </div>
</div>
)
}
export default Header;