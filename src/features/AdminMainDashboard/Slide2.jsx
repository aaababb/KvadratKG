import React from 'react';
import { Card, CardContent, Typography, Divider, Select, MenuItem, FormControl } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const data = [
  { name: '21/06', uv: 4000, pv: 2400, amt: 2400 },
  { name: '22/06', uv: 3000, pv: 1398, amt: 2210 },
  { name: '23/06', uv: 2000, pv: 9800, amt: 2290 },
  { name: '24/06', uv: 2780, pv: 3908, amt: 2000 },
  { name: '25/06', uv: 1890, pv: 4800, amt: 2181 },
];

const pieData = [
  { name: 'Повторные посетители', value: 7 },
  { name: 'Новые посетители', value: 93 },
];

const trafficData = [
  { name: 'Direct', value: 100 },
];

const COLORS = ['#FFFFFF', '#FF0000'];

const Slide2 = ({ mobileOpen }) => {
  const [dateRange, setDateRange] = React.useState('21.06.24 - 25.06.24');

  const handleChange = (event) => {
    setDateRange(event.target.value);
    console.log("hii")
  };

  return (
    <div className={`h-auto px-5 py-1 bg-[#222224] text-white ml-[5%] transition-all duration-300 ${mobileOpen ? 'w-[90%]' : 'w-[90%]'}`}>
      <Card className="mb-6">
        <CardContent className='bg-[#222224]'>
          <div className='flex justify-between mb-[32px] text-white'>
            <div className='font-semibold text-[19px]'>
                Метрика сайта
            </div>
            <div className="relative">
                <select
                    value={dateRange}
                    onChange={handleChange}
                    className="text-white border-white bg-[#303030] h-10 pl-2 pr-8 rounded-md outline-none"
                >
                    <option value="21.06.24 - 25.06.24">21.06.24 - 25.06.24</option>
                    <option value="26.06.24 - 30.06.24">26.06.24 - 30.06.24</option>
                </select>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis hide={true} />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <div className='w-full flex gap-[19px] text-[15px] font-semibold'>
        <div className='w-[172px] h-[87px] bg-[#1D1D1D] p-5'>
            <p>Посещение</p>
            <p>266</p>
        </div>
        <div className='w-[172px] h-[87px] bg-[#1D1D1D] p-3'>
            <p>Просмотры страниц</p>
            <p>490</p>
        </div>
        <div className='w-[172px] h-[87px] bg-[#1D1D1D] p-5'>
            <p>Транзакции</p>
            <p>22</p>
        </div>
        <div className='w-[172px] h-[87px] bg-[#1D1D1D] p-5'>
            <p>Доход</p>
            <p>$2,456.88</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8 mt-10 text-center">
        <Card className='bg-[#1D1D1D]'>
          <CardContent className='bg-[#1D1D1D]'>
            <Typography variant="h6" component="div" className="mb-4 text-[19px] font-semibold text-white">
              Тип посетителей
            </Typography>
            <p className='text-[12px] font-semibold text-white'>Повторные посетители 7%</p>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie data={pieData} cx="50%" cy="50%" outerRadius={80} fill="#8884d8" dataKey="value">
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <p className='text-[12px] font-semibold text-white'>Новые посетители 93%</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className='bg-[#1D1D1D]'>
            <Typography variant="h6" component="div" className="mb-4 text-[19px] font-semibold text-white">
              Источники трафика
            </Typography>
            <p className='text-[12px] font-semibold text-white'>
              Направления 0%
            </p>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie data={trafficData} cx="50%" cy="50%" outerRadius={80} fill="#8884d8" dataKey="value">
                  {trafficData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <p className='text-[12px] font-semibold text-white'>
              Direct 100%
            </p>
          </CardContent>
        </Card>
      </div>

      <Divider className="bg-gray-700 mt-8" />
    </div>
  );
};

export default Slide2;
