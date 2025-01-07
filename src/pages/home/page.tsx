import { useState } from "react";
import { LineChart, Line, BarChart, Bar, PieChart, Pie, AreaChart, Area, ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const DashboardPage = () => {
    const [chartData, setChartData] = useState([
        { name: "Jan", value: 400, sales: 240, visits: 800 },
        { name: "Feb", value: 300, sales: 139, visits: 950 },
        { name: "Mar", value: 200, sales: 980, visits: 600 },
        { name: "Apr", value: 278, sales: 390, visits: 750 },
        { name: "May", value: 189, sales: 480, visits: 820 },
        { name: "Jun", value: 239, sales: 380, visits: 900 },
    ]);

    const [pieData, setPieData] = useState([
        { name: "Product A", value: 400 },
        { name: "Product B", value: 300 },
        { name: "Product C", value: 300 },
        { name: "Product D", value: 200 },
    ]);

    const [scatterData, setScatterData] = useState([
        { x: 100, y: 200, z: 200 },
        { x: 120, y: 100, z: 260 },
        { x: 170, y: 300, z: 400 },
        { x: 140, y: 250, z: 280 },
        { x: 150, y: 400, z: 500 },
        { x: 110, y: 280, z: 200 },
    ]);

    const handleChartDataChange = (index: number, field: keyof typeof chartData[0], value: string) => {
        const newData = [...chartData];
        (newData[index] as any)[field] = Number(value);
        setChartData(newData);
    };

    const handlePieDataChange = (index: number, field: keyof typeof pieData[0], value: string) => {
        const newData = [...pieData];
        (newData[index] as any)[field] = Number(value);
        setPieData(newData);
    };

    const handleScatterDataChange = (index: number, field: keyof typeof scatterData[0], value: string) => {
        const newData = [...scatterData];
        newData[index][field] = Number(value);
        setScatterData(newData);
    };

    const handleDataChange = (index: number, field: string, value: string, dataType: string) => {
        if (dataType === "chart") {
            handleChartDataChange(index, field as keyof typeof chartData[0], value);
        } else if (dataType === "pie") {
            handlePieDataChange(index, field as keyof typeof pieData[0], value);
        } else if (dataType === "scatter") {
            handleScatterDataChange(index, field as keyof typeof scatterData[0], value);
        }
    };

    return (
        <div className="min-h-screen bg-gray-900 p-6">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-white mb-4">Analytics Dashboard</h1>
                <p className="text-gray-400">Real-time data visualization and analytics</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Line Chart */}
                <div className="bg-gray-800 p-4 rounded-lg">
                    <h2 className="text-xl font-semibold text-white mb-4">Revenue Trend</h2>
                    <div className="mb-4 max-h-40 overflow-y-auto">
                        {chartData.map((item, index) => (
                            <div key={index} className="flex gap-2 mb-2">
                                <input
                                    type="number"
                                    value={item.value}
                                    onChange={(e) => handleDataChange(index, "value", e.target.value, "chart")}
                                    className="bg-gray-700 text-white p-1 rounded w-24"
                                />
                                <span className="text-white">{item.name}</span>
                            </div>
                        ))}
                    </div>
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={chartData}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                            <XAxis dataKey="name" stroke="#9CA3AF" />
                            <YAxis stroke="#9CA3AF" />
                            <Tooltip contentStyle={{ backgroundColor: "#1F2937" }} />
                            <Legend />
                            <Line type="monotone" dataKey="value" stroke="#60A5FA" strokeWidth={2} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>

                {/* Bar Chart */}
                <div className="bg-gray-800 p-4 rounded-lg">
                    <h2 className="text-xl font-semibold text-white mb-4">Sales Analysis</h2>
                    <div className="mb-4 max-h-40 overflow-y-auto">
                        {chartData.map((item, index) => (
                            <div key={index} className="flex gap-2 mb-2">
                                <input
                                    type="number"
                                    value={item.sales}
                                    onChange={(e) => handleDataChange(index, "sales", e.target.value, "chart")}
                                    className="bg-gray-700 text-white p-1 rounded w-24"
                                />
                                <span className="text-white">{item.name}</span>
                            </div>
                        ))}
                    </div>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={chartData}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                            <XAxis dataKey="name" stroke="#9CA3AF" />
                            <YAxis stroke="#9CA3AF" />
                            <Tooltip contentStyle={{ backgroundColor: "#1F2937" }} />
                            <Legend />
                            <Bar dataKey="sales" fill="#34D399" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                {/* Pie Chart */}
                <div className="bg-gray-800 p-4 rounded-lg">
                    <h2 className="text-xl font-semibold text-white mb-4">Product Distribution</h2>
                    <div className="mb-4 max-h-40 overflow-y-auto">
                        {pieData.map((item, index) => (
                            <div key={index} className="flex gap-2 mb-2">
                                <input
                                    type="number"
                                    value={item.value}
                                    onChange={(e) => handleDataChange(index, "value", e.target.value, "pie")}
                                    className="bg-gray-700 text-white p-1 rounded w-24"
                                />
                                <span className="text-white">{item.name}</span>
                            </div>
                        ))}
                    </div>
                    <ResponsiveContainer width="100%" height={300}>
                        <PieChart>
                            <Pie
                                data={pieData}
                                cx="50%"
                                cy="50%"
                                outerRadius={80}
                                fill="#8B5CF6"
                                dataKey="value"
                                label
                            />
                            <Tooltip contentStyle={{ backgroundColor: "#1F2937" }} />
                            <Legend />
                        </PieChart>
                    </ResponsiveContainer>
                </div>

                {/* Area Chart */}
                <div className="bg-gray-800 p-4 rounded-lg">
                    <h2 className="text-xl font-semibold text-white mb-4">Visitor Statistics</h2>
                    <div className="mb-4 max-h-40 overflow-y-auto">
                        {chartData.map((item, index) => (
                            <div key={index} className="flex gap-2 mb-2">
                                <input
                                    type="number"
                                    value={item.visits}
                                    onChange={(e) => handleDataChange(index, "visits", e.target.value, "chart")}
                                    className="bg-gray-700 text-white p-1 rounded w-24"
                                />
                                <span className="text-white">{item.name}</span>
                            </div>
                        ))}
                    </div>
                    <ResponsiveContainer width="100%" height={300}>
                        <AreaChart data={chartData}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                            <XAxis dataKey="name" stroke="#9CA3AF" />
                            <YAxis stroke="#9CA3AF" />
                            <Tooltip contentStyle={{ backgroundColor: "#1F2937" }} />
                            <Legend />
                            <Area type="monotone" dataKey="visits" fill="#F472B6" stroke="#EC4899" />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>

                {/* Scatter Chart */}
                <div className="bg-gray-800 p-4 rounded-lg">
                    <h2 className="text-xl font-semibold text-white mb-4">Data Correlation</h2>
                    <div className="mb-4 max-h-40 overflow-y-auto">
                        {scatterData.map((item, index) => (
                            <div key={index} className="flex gap-2 mb-2">
                                <input
                                    type="number"
                                    value={item.x}
                                    onChange={(e) => handleDataChange(index, "x", e.target.value, "scatter")}
                                    className="bg-gray-700 text-white p-1 rounded w-24"
                                    placeholder="X"
                                />
                                <input
                                    type="number"
                                    value={item.y}
                                    onChange={(e) => handleDataChange(index, "y", e.target.value, "scatter")}
                                    className="bg-gray-700 text-white p-1 rounded w-24"
                                    placeholder="Y"
                                />
                            </div>
                        ))}
                    </div>
                    <ResponsiveContainer width="100%" height={300}>
                        <ScatterChart>
                            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                            <XAxis type="number" dataKey="x" stroke="#9CA3AF" />
                            <YAxis type="number" dataKey="y" stroke="#9CA3AF" />
                            <Tooltip contentStyle={{ backgroundColor: "#1F2937" }} />
                            <Legend />
                            <Scatter name="Data Points" data={scatterData} fill="#F59E0B" />
                        </ScatterChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;