
import React from 'react';
import Icon from './Icon';

const StatCard: React.FC<{ icon: string; title: string; value: string; change: string; changeType: 'increase' | 'decrease' }> = ({ icon, title, value, change, changeType }) => {
    const isIncrease = changeType === 'increase';
    return (
        <div className="bg-white rounded-lg shadow-md p-6 flex items-start">
            <div className={`p-3 rounded-full ${isIncrease ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                <Icon name={icon} className="w-6 h-6" />
            </div>
            <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">{title}</p>
                <p className="text-2xl font-bold text-gray-800">{value}</p>
                <p className={`text-xs ${isIncrease ? 'text-green-500' : 'text-red-500'}`}>
                    {change} {isIncrease ? 'increase' : 'decrease'}
                </p>
            </div>
        </div>
    );
};


const Dashboard: React.FC = () => {
  return (
    <div>
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard icon="users" title="Total Users" value="10,240" change="+12%" changeType="increase" />
            <StatCard icon="media" title="New Media" value="3,150" change="+5.4%" changeType="increase" />
            <StatCard icon="analytics" title="Site Traffic" value="1.2M" change="-2.1%" changeType="decrease" />
            <StatCard icon="settings" title="Conversion Rate" value="2.5%" change="+0.8%" changeType="increase" />
        </div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6">
                <h2 className="text-lg font-semibold text-gray-700 mb-4">Recent Activity</h2>
                <ul>
                    <li className="flex items-center justify-between py-3 border-b">
                        <div className="flex items-center">
                            <img className="w-8 h-8 rounded-full object-cover" src="https://picsum.photos/100/100?random=1" alt="avatar" />
                            <p className="ml-4 text-sm text-gray-600"><span className="font-bold">John Doe</span> uploaded a new image.</p>
                        </div>
                        <span className="text-xs text-gray-400">2 min ago</span>
                    </li>
                    <li className="flex items-center justify-between py-3 border-b">
                        <div className="flex items-center">
                            <img className="w-8 h-8 rounded-full object-cover" src="https://picsum.photos/100/100?random=2" alt="avatar" />
                            <p className="ml-4 text-sm text-gray-600"><span className="font-bold">Jane Smith</span> updated their profile.</p>
                        </div>
                        <span className="text-xs text-gray-400">15 min ago</span>
                    </li>
                    <li className="flex items-center justify-between py-3">
                        <div className="flex items-center">
                            <img className="w-8 h-8 rounded-full object-cover" src="https://picsum.photos/100/100?random=3" alt="avatar" />
                            <p className="ml-4 text-sm text-gray-600"><span className="font-bold">Admin</span> changed a setting.</p>
                        </div>
                        <span className="text-xs text-gray-400">1 hour ago</span>
                    </li>
                </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-lg font-semibold text-gray-700 mb-4">System Status</h2>
                <div className="space-y-4">
                    <div>
                        <div className="flex justify-between text-sm mb-1">
                            <span className="font-medium text-gray-600">CPU Usage</span>
                            <span className="text-gray-500">34%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div className="bg-blue-500 h-2.5 rounded-full" style={{width: '34%'}}></div>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between text-sm mb-1">
                            <span className="font-medium text-gray-600">Memory</span>
                            <span className="text-gray-500">5.2/16 GB</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div className="bg-green-500 h-2.5 rounded-full" style={{width: '32.5%'}}></div>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between text-sm mb-1">
                            <span className="font-medium text-gray-600">Storage</span>
                            <span className="text-gray-500">78% Full</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div className="bg-red-500 h-2.5 rounded-full" style={{width: '78%'}}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Dashboard;
