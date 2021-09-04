import { useEffect, useState } from 'react';
import axios from 'axios';
import { baseURL } from '../baseURL';
import { Bar as BarChart } from 'react-chartjs-2';

interface SeveDaysMemeType {
  createdAt: string;
  total: number;
}

const Stats = () => {
  const [sevenDaysMeme, setSevenDaysMeme] = useState<SeveDaysMemeType[] | []>(
    []
  );

  useEffect(() => {
    async function fetchData() {
      const data = await axios.get(baseURL + '/api/meme/getSevenDaysMemes');

      if (data) {
        setSevenDaysMeme(data.data);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="mt-3 px-3">
      <p className="font-thin text-2xl">Stats</p>
      <hr />
      <div className="w-full">
        <BarChart
          data={{
            labels: sevenDaysMeme.map((el) => el?.createdAt),
            datasets: [
              {
                label: 'Meme uploaded per day last 7 days',
                data: sevenDaysMeme.map((el) => el.total),
                backgroundColor: 'rgba(143, 196, 235)',
                borderColor: 'rgb(0, 145, 252)',
                borderWidth: 1,
              },
            ],
          }}
        />
      </div>
    </div>
  );
};

export default Stats;
