import Navbar from "./Navbar"
import Email from "../Email"
import End from "../End"
import Backroundimg from "./Backroundimg"
import Date from "../Date"

function Home(){
   
return(
    <>
    
    
<br /><br />
<Navbar /><br />
<Backroundimg /> <br /><br /><br />

<h1 className="col-md-12 text-center">Daily Update</h1><br />
        {/* <Fruit/><br /><br /> */}
        {/* <Vegtable /><br /><br /><br /> */}
        <Date /><br />
        {/* <Customer/><br /><br /> */}
        {/* <Icon/><br /><br /><br /><br /> */}
        <Email /><br /><br />
        <End />
    </>
)




}



export default Home