"use client";

import React, { useEffect, useState } from "react";
import { ActivityCalendar } from "react-activity-calendar";

const LeetCodeCalendar = ({ username }: { username: string }) => {
    const [data, setData] = useState<Array<{ date: string; count: number; level: number }>>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://leetcode-stats-api.herokuapp.com/${username}`);
                const json = await response.json();

                if (json.status === "error") {
                    console.error("Error fetching LeetCode data:", json.message);
                    setLoading(false);
                    return;
                }

                const submissionCalendar = json.submissionCalendar; // Unix timestamp -> count
                const formattedData: Array<{ date: string; count: number; level: number }> = [];

                // Helper to formatting dates as YYYY-MM-DD
                const formatDate = (date: Date) => {
                    return date.toISOString().split('T')[0];
                };

                // Create a map of existing data
                const submissionMap = new Map<string, number>();
                Object.keys(submissionCalendar).forEach((timestamp) => {
                    const date = new Date(parseInt(timestamp) * 1000);
                    const dateString = formatDate(date);
                    submissionMap.set(dateString, submissionCalendar[timestamp]);
                });

                // Generate data for the last year (similar to GitHub calendar default)
                const today = new Date();
                const oneYearAgo = new Date();
                oneYearAgo.setFullYear(today.getFullYear() - 1);

                for (let d = oneYearAgo; d <= today; d.setDate(d.getDate() + 1)) {
                    const dateString = formatDate(d);
                    const count = submissionMap.get(dateString) || 0;

                    // Determine level (0-4) based on count, rough approximation
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
    );
};

export default LeetCodeCalendar;
