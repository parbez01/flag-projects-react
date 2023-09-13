import { useState } from "react";
import { useEffect } from "react";
import Card from "../Card/Card";

const Country = () => {

    const [country, setCountry] = useState([])

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountry(data))
    }, [])



    const [countryData, setCountryData] = useState([])
    // const [countryFlags, setCountryFlags] = useState([])

    const handleCountry = (data) => {
        setCountryData([...countryData, data])
    }

    // const handleCountry = (flag) => {
    //     setCountryFlags([...countryFlags, flag])
    // }


    return (
        <div>
            <h3 className="ml-24 font-bold">Total Country:{country.length}</h3>

            <ul className="ml-4 font-bold text-center">
                {
                    countryData.map((countryName) => <li>{countryName}</li>)
                }
               
                {/* {
                    countryFlags.map((singleFlag)=><li>{singleFlag}</li>)
                }
            */}
            </ul>

            

            <div className="max-w-screen-xl mx-auto grid grid-cols-3 my-4">
                {
                    country.map((singleCountryData, idx) => <Card key={idx} handleCountry={handleCountry} singleCountryData={singleCountryData}></Card>)
                }
            </div>
        </div>
    );
};

export default Country;