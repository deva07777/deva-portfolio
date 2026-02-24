"use client";

import React, { useEffect, useState } from "react";
import { ActivityCalendar } from "react-activity-calendar";

const LeetCodeCalendar = ({ username }: { username: string }) => {
    const [data, setData] = useState<Array<{ date: string; count: number; level: number }>>([]);
    const [stats, setStats] = useState<{ totalSolved: number; ranking: number; acceptanceRate: number } | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch stats (solved, ranking)
                const statsResponse = await fetch(`https://alfa-leetcode-api.onrender.com/userProfile/${username}`);
                const statsJson = await statsResponse.json();

                // Fetch calendar data
                const calResponse = await fetch(`https://alfa-leetcode-api.onrender.com/${username}/calendar`);
                const calJson = await calResponse.json();

                if (statsJson) {
                    setStats({
                        totalSolved: statsJson.totalSolved || 0,
                        ranking: statsJson.ranking || statsJson.matchedUserStats?.ranking || 0,
                        acceptanceRate: statsJson.acceptanceRate || 0,
                    });
                }

                let submissionCalendar = calJson.submissionCalendar;

                if (typeof submissionCalendar === 'string') {
                    submissionCalendar = JSON.parse(submissionCalendar);
                }

                const formattedData: Array<{ date: string; count: number; level: number }> = [];

                const formatDate = (date: Date) => {
                    return date.toISOString().split('T')[0];
                };

                const submissionMap = new Map<string, number>();
                if (submissionCalendar) {
                    Object.keys(submissionCalendar).forEach((timestamp) => {
                        const date = new Date(parseInt(timestamp) * 1000);
                        const dateString = formatDate(date);
                        submissionMap.set(dateString, submissionCalendar[timestamp]);
                    });
                }

                const today = new Date();
                const oneYearAgo = new Date();
                oneYearAgo.setFullYear(today.getFullYear() - 1);

                for (let d = new Date(oneYearAgo); d <= today; d.setDate(d.getDate() + 1)) {
                    const dateString = formatDate(d);
                    const count = submissionMap.get(dateString) || 0;

                    let level = 0;
                    if (count > 0) level = 1;
                    if (count > 2) level = 2;
                    if (count > 5) level = 3;
                    if (count > 10) level = 4;

                    formattedData.push({
                        date: dateString,
                        count: count,
                        level: level,
                    });
                }

                setData(formattedData);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching LeetCode data:", error);
                setLoading(false);
            }
        };

        fetchData();
    }, [username]);

    if (loading) {
        return <div className="text-center p-4 font-mono text-sm text-gray-400">Loading LeetCode stats...</div>;
    }

    if (data.length === 0) {
        return <div className="text-center p-4 font-mono text-sm text-gray-400">No LeetCode data found.</div>;
    }

    return (
        <div className="flex flex-col items-center gap-6 w-full">
            {stats && (
                <div className="flex flex-wrap justify-center gap-4 md:gap-8 w-full">
                    <div className="bg-[#1a1a1a] border border-white/5 px-6 py-3 rounded-xl flex flex-col items-center min-w-[120px]">
                        <span className="text-2xl font-bold text-white">{stats.totalSolved}</span>
                        <span className="text-xs font-mono text-gray-500 uppercase tracking-wider">Total Solved</span>
                    </div>
                    <div className="bg-[#1a1a1a] border border-white/5 px-6 py-3 rounded-xl flex flex-col items-center min-w-[120px]">
                        <span className="text-2xl font-bold text-white">{stats.ranking.toLocaleString()}</span>
                        <span className="text-xs font-mono text-gray-500 uppercase tracking-wider">Ranking</span>
                    </div>
                    <div className="bg-[#1a1a1a] border border-white/5 px-6 py-3 rounded-xl flex flex-col items-center min-w-[120px]">
                        <span className="text-2xl font-bold text-white">{stats.acceptanceRate}%</span>
                        <span className="text-xs font-mono text-gray-500 uppercase tracking-wider">Acceptance</span>
                    </div>
                </div>
            )}

            <div className="w-full overflow-x-auto flex justify-center">
                <ActivityCalendar
                    data={data}
                    theme={{
                        dark: ["#333333", "#FF611D"],
                        light: ["#ebedf0", "#FF611D"],
                    }}
                    colorScheme="dark"
                    blockSize={12}
                    blockMargin={5}
                    fontSize={14}
                    style={{
                        fontFamily: '"JetBrains Mono", monospace',
                    }}
                    labels={{
                        legend: {
                            less: 'Less',
                            more: 'More',
                        },
                        months: [
                            'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
                        ],
                        weekdays: [
                            'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'
                        ],
                        totalCount: '{{count}} submissions in the last year'
                    }}
                />
            </div>
        </div>
    );
};

export default LeetCodeCalendar;
