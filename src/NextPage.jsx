import Navbar1 from "./Navbar1"
import "./Nextpage.css"


function NextPage() {


    return (

        <>
        <Navbar1/>
            <div className="aboutcontainer-fluid col-md-12 cg-img mt-5">
                <div className="row justify-content-around cards">
                    <h6>Home About Us</h6>
                    <p>ABOUT US</p>

                </div>

            </div><br />


            <div className="backimgcontainer">
                <div className="row justify-content-around">
                    <div className="col-md-5">
                        <img className="img-fluid" src="https://preview.colorlib.com/theme/vegefoods/images/about.jpg.webp" s alt="" />
                    </div>
                    <div className="col-md-5">
                        <h2 className="heading">
                            Welcome to Vegefoods an eCommerce website
                        </h2>
                        <p>
                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
                        </p><br />
                        <p>
                            But nothing the copy said could convince her and so it didn't take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their.

                        </p>
                    </div>

                </div>

            </div>


        </>
    )

}



export default NextPage