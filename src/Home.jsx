import Navbar1 from "./Navbar1"
import Email from "../Email"
import End from "../End"
import Backroundimg from "./Backroundimg"
import Datebase from "./Datebase"
function Home(){
   
return(
    <>
    
    
<br /><br />
<Navbar1 /><br />
<Backroundimg /> <br /><br /><br />

<h1 className="col-md-12 text-center">Daily Update</h1><br />
        {/* <Fruit/><br /><br /> */}
        {/* <Vegtable /><br /><br /><br /> */}
        <Datebase /><br />
        {/* <Customer/><br /><br /> */}
        {/* <Icon/><br /><br /><br /><br /> */}
        <Email /><br /><br />
        <End />
    </>
)




}



export default Home