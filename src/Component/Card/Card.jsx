import './card.css'
const Card = ({ singleCountryData, handleCountry }) => {


    const { name, flags, capital, population, languages, cioc } = singleCountryData;

    return (
        <div className="">
            <div className="my-8 card ">
                <h2>Country Name: {name.common} </h2>
                <img className="w-[500px] h-[300px]  " src={flags.png} alt="" />
                <p>Population: {population} </p>
                <p>Capital: {capital} </p>
                <p>Languages: {languages?.fra} </p>
                <p>CIOC: {cioc}</p>
               <div className='flex justify-center'>
               <button onClick={() => handleCountry(name.common)} className="bg-pink-600 p-3 rounded-lg mt-4 text-white mb-10">Mark As</button>
               </div>
            </div>
        </div>
    );
};

export default Card;