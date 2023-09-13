import './card.css'
const Card = ({ singleCountryData, handleCountry }) => {


    const { name, flags, capital, population, languages, cioc } = singleCountryData;

    return (
        <div className="">
            <div className="my-8 card ">
                <h2 className='text-center font-semibold mb-8'>Country Name: {name.common} </h2>
                <img className="w-[500px] h-[300px]  " src={flags.png} alt="" />
                <p className='text-center font-semibold mt-6'>Population: {population} </p>
                <p className='text-center font-semibold'>Capital: {capital} </p>
                <p className='text-center font-semibold'>Languages: {languages?.fra} </p>
                <p className='text-center font-semibold'>CIOC: {cioc}</p>
               <div className='flex justify-center'>
               <button onClick={() => handleCountry(name.common)} className="bg-pink-600 p-3 rounded-lg mt-4 text-white mb-10">Mark As</button>
               </div>
            </div>
        </div>
    );
};

export default Card;