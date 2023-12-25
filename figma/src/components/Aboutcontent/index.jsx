import "./index.scss"
import { CiShop } from "react-icons/ci";
import { ImCoinDollar } from "react-icons/im";
import { CiGift } from "react-icons/ci";
import { TbMoneybag } from "react-icons/tb";


function Aboutcontent() {
    return (
        <section id="squares">
            <div className="container">
                <div className="squarescontent">
                    <div className="square">
                        <div className="icon">
                            <CiShop />
                        </div>
                        <h2>2ucl k</h2>
                        <p>Chelsea</p>
                    </div>
                    <div className="square">
                        <div className="icon">
                            <ImCoinDollar />
                        </div>
                        <h2>1907k</h2>
                        <p>Fenerbahce</p>
                    </div>
                    <div className="square">
                        <div className="icon">
                            <CiGift />
                        </div>
                        <h2>1937k</h2>
                        <p>Neftci</p>
                    </div>
                    <div className="square">
                        <div className="icon">
                            <TbMoneybag />
                        </div>
                        <h2>Cristianoo</h2>
                        <p>The Best player in the world</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Aboutcontent