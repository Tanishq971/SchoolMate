import React from 'react';

const RightHeader = () => {
    // authentication sei user ka name nikalenge
    return (
        <div className="bg-white p-4 border-b border-gray-200 flex items-center justify-between">
            <h1 className="text-xl font-semibold text-gray-800">Dashboard</h1>
            
            <div className="flex items-center space-x-4">
                <span className="text-gray-600">Welcome, User</span>
                <button className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600">
                    Logout
                </button>
            </div>
        </div>
    );
};

export default RightHeader;