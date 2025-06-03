import { useEffect, useState } from "react";

function Counter() {
    const [daily, setDaily] = useState(0);
    const [weekly, setWeekly] = useState(0);
    const [yearly, setYearly] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(`${import.meta.env.VITE_DOMAIN}/api/counter`);
            const data = await response.json();
            setDaily(data.day);
            setWeekly(data.week);
            setYearly(data.year);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        const intervalId = setInterval(fetchData, 100);
        return () => clearInterval(intervalId);
      }, []);
    return (
        <div className="mx-auto max-w-[85rem]">
        <div className="px-4 m-5 py-10 sm:px-6 lg:px-8 lg:py-14 bg-white rounded-2xl">
            <div className="grid gap-6 grid-cols-2 sm:gap-12 lg:grid-cols-3 lg:gap-8 uppercase text-center">
                <div className="mx-auto">
                    <h4 className="text-lg sm:text-xl font-bold text-gray-800">Daily</h4>
                    <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-black text-[#CA1D62]">{daily}</p>
                    <p className="mt-1 text-gray-500">link shorting</p>
                </div>
                <div className="mx-auto">
                    <h4 className="text-lg sm:text-xl font-bold text-gray-800">Weekly</h4>
                    <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-black text-[#CA1D62]">{weekly}</p>
                    <p className="mt-1 text-gray-500">link shorting</p>
                </div>
                <div className="mx-auto">
                    <h4 className="text-lg sm:text-xl font-bold text-gray-800">Yearly</h4>
                    <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-black text-[#CA1D62]">{yearly}</p>
                    <p className="mt-1 text-gray-500">link shorting</p>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Counter;