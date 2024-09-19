
import "./DateStyle.css"

function Datebase() {


    function myfunc() {
        let came=document.getElementById("cam")
        let bame=document.getElementById("bam")
        let date=new Date()
        const day=["Sunday","Monday","Thuesday","Wednesday","Thursday","Friday"]

        let month=date.getDay()
        console.log(date);
        bame.innerHTML=day[month]
        


    }
    return (
        <>

            <section className="container2">
                <div className="row justify-content-around">
                    <div className="col-10">
                        <div className="menu1">
                            <i>Best Price For You</i><br />
                            <h1>Deal of the day</h1><br />
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p><br /><br />
                            <button id="cam" onClick={myfunc}>TODAY</button>
                            <h1 id="bam">..</h1>
                            <i><h4>Spinach</h4></i>
                            <h6>$10 now $5 only</h6>
                        </div>
                    </div>
                </div>
            </section>



        </>
    )


}

export default Datebase;