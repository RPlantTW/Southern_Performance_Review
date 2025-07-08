import React, { useState, useEffect } from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ComposedChart, Area } from 'recharts';

// Data from the provided images
const q1SalesNcData = [
  { cluster: 'S1-1-B', salesQ1: 73400.02, salesTargetQ1: 73100.00, salesVsTarget: 100.41, ncQ1: 692, ncTargetQ1: 593, ncVsTarget: 116.69 },
  { cluster: 'S1-1-G', salesQ1: 46707.39, salesTargetQ1: 47800.00, salesVsTarget: 97.71, ncQ1: 129, ncTargetQ1: 143, ncVsTarget: 90.21 },
  { cluster: 'S1-1-N', salesQ1: 37132.31, salesTargetQ1: 46600.00, salesVsTarget: 79.68, ncQ1: 261, ncTargetQ1: 309, ncVsTarget: 84.47 },
  { cluster: 'S1-1-R', salesQ1: 31153.59, salesTargetQ1: 32400.00, salesVsTarget: 96.15, ncQ1: 144, ncTargetQ1: 142, ncVsTarget: 101.41 },
  { cluster: 'S1-2-BE', salesQ1: 125136.32, salesTargetQ1: 136200.00, salesVsTarget: 91.88, ncQ1: 508, ncTargetQ1: 546, ncVsTarget: 93.04 },
  { cluster: 'S1-2-BT', salesQ1: 58581.96, salesTargetQ1: 68000.00, salesVsTarget: 86.15, ncQ1: 178, ncTargetQ1: 258, ncVsTarget: 68.99 },
  { cluster: 'S1-2-CP', salesQ1: 58975.73, salesTargetQ1: 59500.00, salesVsTarget: 99.12, ncQ1: 177, ncTargetQ1: 112, ncVsTarget: 158.04 },
  { cluster: 'S1-3-BMR', salesQ1: 164402.99, salesTargetQ1: 175200.00, salesVsTarget: 93.84, ncQ1: 599, ncTargetQ1: 503, ncVsTarget: 119.09 },
  { cluster: 'S1-3-MSW', salesQ1: 147860.15, salesTargetQ1: 150200.00, salesVsTarget: 98.44, ncQ1: 757, ncTargetQ1: 623, ncVsTarget: 121.51 },
];

const retentionData = [
  { cluster: 'S1-1-B', aprilRetention: 31.00, mayRetention: 32.10, juneRetention: 29.10 },
  { cluster: 'S1-1-G', aprilRetention: 52.40, mayRetention: 33.30, juneRetention: 50.00 },
  { cluster: 'S1-1-N', aprilRetention: 19.20, mayRetention: 38.90, juneRetention: 18.80 },
  { cluster: 'S1-1-R', aprilRetention: 25.90, mayRetention: 34.60, juneRetention: 36.50 },
  { cluster: 'S1-2-BE', aprilRetention: 32.00, mayRetention: 45.70, juneRetention: 33.90 },
  { cluster: 'S1-2-BT', aprilRetention: 29.10, mayRetention: 37.30, juneRetention: 34.50 },
  { cluster: 'S1-2-CP', aprilRetention: 44.10, mayRetention: 32.00, juneRetention: 46.40 },
  { cluster: 'S1-3-BMR', aprilRetention: 38.50, mayRetention: 47.80, juneRetention: 40.50 },
  { cluster: 'S1-3-MSW', aprilRetention: 40.20, mayRetention: 31.50, juneRetention: 37.80 },
];

const acbData = [
  { cluster: 'S1-1-B', aprilACB: 1039.00, mayACB: 1084.35, juneACB: 929.96 },
  { cluster: 'S1-1-G', aprilACB: 432.00, mayACB: 427.37, juneACB: 409.18 },
  { cluster: 'S1-1-N', aprilACB: 497.00, mayACB: 539.66, juneACB: 414.34 },
  { cluster: 'S1-1-R', aprilACB: 291.00, mayACB: 296.21, juneACB: 289.29 },
  { cluster: 'S1-2-BE', aprilACB: 1445.00, mayACB: 1480.34, juneACB: 1312.17 },
  { cluster: 'S1-2-BT', aprilACB: 612.00, mayACB: 616.19, juneACB: 527.88 },
  { cluster: 'S1-2-CP', aprilACB: 489.00, mayACB: 515.43, juneACB: 527.11 },
  { cluster: 'S1-3-BMR', aprilACB: 1380.00, mayACB: 1460.99, juneACB: 1342.09 },
  { cluster: 'S1-3-MSW', aprilACB: 1447.00, mayACB: 1552.40, juneACB: 1408.76 },
];

const additionalClusterData = [
  { cluster: 'S1-1-B', salesVsTargetJune: 93.30, ncVsTargetJune: 100.80, wrc: 64.60, emailCapture: 99.10, phoneCapture: 93.20, unregisteredTransaction: 9.80, ncsFromRAF: 20, percentNcsFromRAF: 9.10, tradeInVsKitSales: 3.50, vltz: 80.30 },
  { cluster: 'S1-1-G', salesVsTargetJune: 97.10, ncVsTargetJune: 71.00, wrc: 76.00, emailCapture: 97.50, phoneCapture: 100.00, unregisteredTransaction: 4.20, ncsFromRAF: 7, percentNcsFromRAF: 17.50, tradeInVsKitSales: 18.90, vltz: 78.00 },
  { cluster: 'S1-1-N', salesVsTargetJune: 71.40, ncVsTargetJune: 56.10, wrc: 56.80, emailCapture: 72.90, phoneCapture: 51.40, unregisteredTransaction: 13.10, ncsFromRAF: 2, percentNcsFromRAF: 2.90, tradeInVsKitSales: 12.00, vltz: 59.20 },
  { cluster: 'S1-1-R', salesVsTargetJune: 85.70, ncVsTargetJune: 82.80, wrc: 50.00, emailCapture: 92.50, phoneCapture: 82.80, unregisteredTransaction: 1.80, ncsFromRAF: 5, percentNcsFromRAF: 12.50, tradeInVsKitSales: 14.30, vltz: 64.60 },
  { cluster: 'S1-2-BE', salesVsTargetJune: 87.20, ncVsTargetJune: 80.00, wrc: 63.60, emailCapture: 96.00, phoneCapture: 91.30, unregisteredTransaction: 14.90, ncsFromRAF: 16, percentNcsFromRAF: 10.70, tradeInVsKitSales: 8.40, vltz: 58.90 },
  { cluster: 'S1-2-BT', salesVsTargetJune: 83.80, ncVsTargetJune: 59.70, wrc: 69.20, emailCapture: 77.40, phoneCapture: 77.40, unregisteredTransaction: 12.30, ncsFromRAF: 1, percentNcsFromRAF: 1.90, tradeInVsKitSales: 12.80, vltz: 50.50 },
  { cluster: 'S1-2-CP', salesVsTargetJune: 100.40, ncVsTargetJune: 154.90, wrc: 58.10, emailCapture: 79.30, phoneCapture: 72.40, unregisteredTransaction: 6.20, ncsFromRAF: 4, percentNcsFromRAF: 6.90, tradeInVsKitSales: 29.10, vltz: 65.60 },
  { cluster: 'S1-3-BMR', salesVsTargetJune: 88.70, ncVsTargetJune: 112.40, wrc: 60.10, emailCapture: 88.00, phoneCapture: 90.60, unregisteredTransaction: 4.50, ncsFromRAF: 26, percentNcsFromRAF: 13.60, tradeInVsKitSales: 9.30, vltz: 79.10 },
  { cluster: 'S1-3-MSW', salesVsTargetJune: 88.50, ncVsTargetJune: 103.80, wrc: 60.70, emailCapture: 89.80, phoneCapture: 76.40, unregisteredTransaction: 2.40, ncsFromRAF: 36, percentNcsFromRAF: 16.00, tradeInVsKitSales: 9.40, vltz: 80.80 },
];

// New data for Audit Results
const mwwAuditData = [
  { cluster: 'S1-1-B', result: 95 },
  { cluster: 'S1-1-G', result: 91 },
  { cluster: 'S1-1-N', result: 95 },
  { cluster: 'S1-1-R', result: 91 },
  { cluster: 'S1-2-BE', result: 88 },
  { cluster: 'S1-2-BT', result: 92 },
  { cluster: 'S1-2-CP', result: 95 },
  { cluster: 'S1-3-BMR', result: 93 },
  { cluster: 'S1-3-MSW', result: 98 },
];

const complianceAuditData = [
  { cluster: 'S1-2-BT', result: 98 },
  { cluster: 'S1-3-BMR', result: 94 },
  { cluster: 'S1-1-R', result: 99 },
  { cluster: 'S1-1-N', result: 95 },
  { cluster: 'S1-1-G', result: 96 },
];

// New data for Google Reviews - "Totally Wicked" removed
const googleReviewsData = [
  { store: 'Barnstaple', reviews: 1 },
  { store: 'Birmingham', reviews: 0 },
  { store: 'Bridgend', reviews: 0 },
  { store: 'Bristol', reviews: 5 },
  { store: 'Exeter', reviews: -1 },
  { store: 'Gloucester', reviews: 2 },
  { store: 'Madeley', reviews: 4 },
  { store: 'Merthyr Tydfil', reviews: 2 },
  { store: 'Nottingham', reviews: 1 },
  { store: 'Rugby', reviews: 0 },
  { store: 'Rumney', reviews: 0 },
  { store: 'Shrewsbury', reviews: 1 },
  { store: 'Tyburn', reviews: 1 },
  { store: 'Wellington', reviews: 3 },
  { store: 'Wolves Chapel Ash', reviews: 0 },
  { store: 'Wolves Penn Road', reviews: 0 },
].map(item => ({ ...item, reviews: Math.max(0, item.reviews) }));

// New data for TW App Signups - "Totally Wicked" removed
const twAppSignupData = [
  { store: 'Bristol', cluster: 'S1-1-B', customers: 283, haveApp: 48, appNotifications: 26, percentHaveApp: 17.0, percentNotifications: 54.2 },
  { store: 'Gloucester', cluster: 'S1-1-G', customers: 147, haveApp: 25, appNotifications: 11, percentHaveApp: 17.0, percentNotifications: 44.0 },
  { store: 'Nottingham', cluster: 'S1-1-N', customers: 117, haveApp: 23, appNotifications: 12, percentHaveApp: 19.7, percentNotifications: 52.2 },
  { store: 'Rugby', cluster: 'S1-1-R', customers: 82, haveApp: 14, appNotifications: 7, percentHaveApp: 17.1, percentNotifications: 50.0 },
  { store: 'Barnstaple', cluster: 'S1-2-BE', customers: 145, haveApp: 11, appNotifications: 5, percentHaveApp: 7.6, percentNotifications: 45.5 },
  { store: 'Exeter', cluster: 'S1-2-BE', customers: 269, haveApp: 18, appNotifications: 10, percentHaveApp: 6.7, percentNotifications: 55.6 },
  { store: 'Birmingham', cluster: 'S1-2-BT', customers: 101, haveApp: 12, appNotifications: 6, percentHaveApp: 11.9, percentNotifications: 50.0 },
  { store: 'Tyburn', cluster: 'S1-2-BT', customers: 87, haveApp: 14, appNotifications: 7, percentHaveApp: 16.1, percentNotifications: 50.0 },
  { store: 'Wolves Chapel Ash', cluster: 'S1-2-CP', customers: 107, haveApp: 13, appNotifications: 12, percentHaveApp: 12.1, percentNotifications: 46.2 },
  { store: 'Wolves Penn Road', cluster: 'S1-2-CP', customers: 93, haveApp: 14, appNotifications: 10, percentHaveApp: 15.1, percentNotifications: 71.4 },
  { store: 'Bridgend', cluster: 'S1-3-BMR', customers: 167, haveApp: 32, appNotifications: 12, percentHaveApp: 19.2, percentNotifications: 37.5 },
  { store: 'Rumney', cluster: 'S1-3-BMR', customers: 231, haveApp: 24, appNotifications: 16, percentHaveApp: 10.4, percentNotifications: 66.7 },
  { store: 'Madeley', cluster: 'S1-3-MSW', customers: 261, haveApp: 27, appNotifications: 15, percentHaveApp: 10.3, percentNotifications: 55.6 },
  { store: 'Shrewsbury', cluster: 'S1-3-MSW', customers: 185, haveApp: 13, appNotifications: 6, percentHaveApp: 7.0, percentNotifications: 46.2 },
  { store: 'Wellington', cluster: 'S1-3-MSW', customers: 143, haveApp: 22, appNotifications: 13, percentHaveApp: 15.4, percentNotifications: 50.0 },
];


const App = () => {
  // Combine all relevant data for easier processing
  const combinedData = q1SalesNcData.map(q1 => {
    const retention = retentionData.find(r => r.cluster === q1.cluster);
    const acb = acbData.find(a => a.cluster === q1.cluster);
    const additional = additionalClusterData.find(ad => ad.cluster === q1.cluster);
    return { ...q1, ...retention, ...acb, ...additional };
  });

  // Calculate June highlights with new criteria and limit to 5
  const juneHighlights = combinedData
    .filter(d =>
      d.salesVsTargetJune > 100 ||
      d.ncVsTargetJune > 100 ||
      d.juneRetention > 40 ||
      d.vltz > 70 || // Highlight if VLTZ is greater than 70%
      d.wrc > 70 ||  // Highlight if WRC is greater than 70%
      d.unregisteredTransaction < 5 // Highlight if Unregistered Transaction is less than 5%
    )
    .sort((a, b) => {
      // Sort by combined performance for highlights
      let aScore = 0;
      if (a.salesVsTargetJune > 100) aScore += (a.salesVsTargetJune - 100);
      if (a.ncVsTargetJune > 100) aScore += (a.ncVsTargetJune - 100);
      if (a.juneRetention > 40) aScore += (a.juneRetention - 40);
      if (a.vltz > 70) aScore += (a.vltz - 70);
      if (a.wrc > 70) aScore += (a.wrc - 70);
      if (a.unregisteredTransaction < 5) aScore += (5 - a.unregisteredTransaction) * 10; // Scale to give more weight to low unregistered transactions

      let bScore = 0;
      if (b.salesVsTargetJune > 100) bScore += (b.salesVsTargetJune - 100);
      if (b.ncVsTargetJune > 100) bScore += (b.ncVsTargetJune - 100);
      if (b.juneRetention > 40) bScore += (b.juneRetention - 40);
      if (b.vltz > 70) bScore += (b.vltz - 70);
      if (b.wrc > 70) bScore += (b.wrc - 70);
      if (b.unregisteredTransaction < 5) bScore += (5 - b.unregisteredTransaction) * 10;

      return bScore - aScore;
    })
    .slice(0, 5); // Limit to a maximum of 5 shout-outs

  // Identify clusters with highest trade-in % and retention
  const tradeInRetentionCorrelation = combinedData
    .map(d => ({
      cluster: d.cluster,
      tradeInVsKitSales: d.tradeInVsKitSales,
      juneRetention: d.juneRetention,
    }))
    .sort((a, b) => b.tradeInVsKitSales - a.tradeInVsKitSales); // Sort by trade-in for analysis

  const topTradeInClusters = tradeInRetentionCorrelation.slice(0, 2); // Get top 2 for discussion

  // Colours for charts
  const barColors = ['#4A90E2', '#8BC34A', '#FFC107', '#E91E63', '#9C27B0', '#00BCD4', '#FF9800', '#795548', '#607D8B'];
  const lineColors = ['#FF5733', '#33FF57', '#3357FF']; // For ACB and Retention trends
  // New colours for Composed Chart
  const appBarColor = '#00CED1'; // Dark Turquoise for "Have App" bars
  const notificationLineColor = '#FF4500'; // Orange-Red for "Notifications Enabled" line


  return (
    <div className="min-h-screen bg-gray-100 p-6 font-inter text-gray-800">
      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-4xl font-extrabold text-center text-indigo-800 mb-10">Performance Overview: Q1 Deep Dive & June Highlights</h1>

        {/* Section 1: Q1 Performance Per Cluster */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-indigo-700 mb-6 border-b-2 border-indigo-200 pb-2">Q1 Performance: Detail Per Cluster</h2>

          {/* Sales vs Target */}
          <div className="mb-8 p-6 bg-blue-50 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold text-blue-800 mb-4">Sales vs Target (Q1)</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={q1SalesNcData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                <XAxis dataKey="cluster" tick={{ fill: '#4a5568' }} />
                <YAxis
                  tickFormatter={(value) => `${value}%`}
                  tick={{ fill: '#4a5568' }}
                  ticks={[0, 25, 50, 75, 100, 125, 150]} // Explicitly set ticks including 100%
                />
                <Tooltip formatter={(value) => `${value.toFixed(2)}%`} />
                <Legend />
                <Bar dataKey="salesVsTarget" name="Sales vs Target %" fill={barColors[0]} radius={[10, 10, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
            <p className="text-sm text-gray-600 mt-4">This chart clearly illustrates the percentage of Sales achieved against the target for each cluster in Q1. Aim for those figures above 100% – that's where success truly shines!</p>
          </div>

          {/* NC vs Target */}
          <div className="mb-8 p-6 bg-green-50 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold text-green-800 mb-4">New Customers (NC) vs Target (Q1)</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={q1SalesNcData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                <XAxis dataKey="cluster" tick={{ fill: '#4a5568' }} />
                <YAxis
                  tickFormatter={(value) => `${value}%`}
                  tick={{ fill: '#4a5568' }}
                  ticks={[0, 25, 50, 75, 100, 125, 150]} // Explicitly set ticks including 100%
                />
                <Tooltip formatter={(value) => `${value.toFixed(2)}%`} />
                <Legend />
                <Bar dataKey="ncVsTarget" name="NC vs Target %" fill={barColors[1]} radius={[10, 10, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
            <p className="text-sm text-gray-600 mt-4">This chart highlights our progress in acquiring New Customers against our Q1 targets. Every new customer is a step towards growth – let's keep that momentum strong!</p>
          </div>

          {/* ACB Trends */}
          <div className="mb-8 p-6 bg-purple-50 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold text-purple-800 mb-4">Active Customer Base (ACB) Trends (April - June)</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={acbData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                <XAxis dataKey="cluster" tick={{ fill: '#4a5568' }} />
                <YAxis tick={{ fill: '#4a5568' }} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="aprilACB" stroke={lineColors[0]} name="April ACB" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="mayACB" stroke={lineColors[1]} name="May ACB" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="juneACB" stroke={lineColors[2]} name="June ACB" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
            <p className="text-sm text-gray-600 mt-4">Observing our Active Customer Base trends from April to June provides crucial insights into customer engagement. A growing ACB signifies a healthy, thriving customer community!</p>
          </div>

          {/* Retention Trends */}
          <div className="mb-8 p-6 bg-red-50 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold text-red-800 mb-4">Retention Trends (April - June)</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={retentionData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                <XAxis dataKey="cluster" tick={{ fill: '#4a5568' }} />
                <YAxis tickFormatter={(value) => `${value}%`} tick={{ fill: '#4a5568' }} />
                <Tooltip formatter={(value) => `${value.toFixed(2)}%`} />
                <Legend />
                <Line type="monotone" dataKey="aprilRetention" stroke="#dc3545" name="April Retention" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="mayRetention" stroke="#ffc107" name="May Retention" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="juneRetention" stroke="#6f42c1" name="June Retention" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
            <p className="text-sm text-gray-600 mt-4">These trends in customer retention are vital. Retaining our valued customers is just as important as acquiring new ones – it's a testament to the quality of our service and products.</p>
          </div>
        </section>

        {/* Section 2: June Highlights */}
        <section className="mb-12 p-8 bg-yellow-50 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold text-yellow-800 mb-6 border-b-2 border-yellow-300 pb-2">June's Standout Performances: Celebrating Success!</h2>
          {juneHighlights.length > 0 ? (
            <ul className="list-disc list-inside text-lg text-gray-700 space-y-3">
              {juneHighlights.map((data, index) => (
                <li key={index} className="bg-yellow-100 p-3 rounded-md shadow-sm flex items-center flex-wrap">
                  <span className="text-yellow-600 font-semibold mr-2">&#9733;</span>
                  <span className="font-bold">{data.cluster}:</span>
                  {data.salesVsTargetJune > 100 && <span className="ml-2">Exceeded Sales Target ({data.salesVsTargetJune.toFixed(2)}%)</span>}
                  {data.ncVsTargetJune > 100 && <span className="ml-2">Exceeded NC Target ({data.ncVsTargetJune.toFixed(2)}%)</span>}
                  {data.juneRetention > 40 && <span className="ml-2">Strong June Retention ({data.juneRetention.toFixed(2)}%)</span>}
                  {data.vltz > 70 && <span className="ml-2">Achieved High VLTZ ({data.vltz.toFixed(2)}%)</span>}
                  {data.wrc > 70 && <span className="ml-2">Excellent WRC ({data.wrc.toFixed(2)}%)</span>}
                  {data.unregisteredTransaction < 5 && <span className="ml-2">Minimised Unregistered Transactions ({data.unregisteredTransaction.toFixed(2)}%)</span>}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-lg text-gray-600">No specific standout performances identified for June based on our current criteria. Let's work together to make next month's highlights section bursting with achievements!</p>
          )}
          <p className="text-sm text-gray-600 mt-4">This section proudly showcases the top 5 clusters that achieved exceptional performance in June across key metrics. Your hard work is truly making a difference!</p>
        </section>

        {/* Section 3: Retention Deep Dive & Incentives Strategy */}
        <section className="mb-12 p-8 bg-gray-50 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold text-gray-700 mb-6 border-b-2 border-gray-200 pb-2">Retention: Catching Up & Thinking Smarter</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            While our overall retention figures are consistently behind the company average, this presents a significant opportunity for growth. We must strategically rethink our approach to incentives with new customers.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Data clearly indicates that customers who receive more than one incentive demonstrate the highest retention rates. Consider scenarios like a trade-in combined with a Wicked Reward card, or a local retail discount paired with a Wicked Reward card. Even a "Refer a Friend" customer receiving a Wicked Reward shows enhanced loyalty.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            It's easy to stop the conversation once a customer accepts a single incentive. However, our goal isn't to overload transactions with discounts; that would be counterproductive.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6 font-bold text-indigo-600">
            Instead, let's refine our questioning to truly understand each new customer's needs, identifying opportunities to add value through *multiple relevant incentives*. This smarter approach is key to significantly improving our retention figures and closing the gap.
          </p>

          <div className="bg-blue-100 p-5 rounded-lg shadow-inner mt-8">
            <h3 className="text-2xl font-semibold text-blue-800 mb-3">Food for Thought: The Trade-in & Retention Link</h3>
            <p className="text-lg text-blue-700 leading-relaxed mb-4">
              Is it merely a coincidence that the two clusters with the highest trade-in percentages also boast the highest retention? This correlation warrants further exploration – perhaps trade-ins are a powerful, yet underutilised, retention tool.
            </p>
            <div className="flex justify-around items-center mt-4">
              {topTradeInClusters.length > 0 ? (
                topTradeInClusters.map((cluster, index) => (
                  <div key={index} className="text-center bg-blue-200 p-4 rounded-lg shadow-md">
                    <p className="text-xl font-bold text-blue-900">{cluster.cluster}</p>
                    <p className="text-lg text-blue-800">Trade-in %: {cluster.tradeInVsKitSales.toFixed(2)}%</p>
                    <p className="text-lg text-blue-800">June Retention: {cluster.juneRetention.toFixed(2)}%</p>
                  </div>
                ))
              ) : (
                <p className="text-lg text-blue-700">No specific trade-in data to highlight correlation.</p>
              )}
            </div>
          </div>
        </section>

        {/* Section 4: Audit Results */}
        <section className="mb-12 p-8 bg-indigo-50 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold text-indigo-700 mb-6 border-b-2 border-indigo-200 pb-2">Q1 Audit Results: Ensuring Excellence</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* MWW Audit Result */}
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-2xl font-semibold text-indigo-800 mb-4">MWW Audit Results</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={mwwAuditData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                  <XAxis dataKey="cluster" tick={{ fill: '#4a5568' }} />
                  <YAxis tickFormatter={(value) => `${value}%`} domain={[80, 100]} tick={{ fill: '#4a5568' }} /> {/* Set domain for better visibility of high percentages */}
                  <Tooltip formatter={(value) => `${value.toFixed(2)}%`} />
                  <Legend />
                  <Bar dataKey="result" name="Audit Result %" fill="#6a0dad" radius={[10, 10, 0, 0]} /> {/* Deep purple */}
                </BarChart>
              </ResponsiveContainer>
              <p className="text-sm text-gray-600 mt-4">Our MWW Audit results reflect our commitment to operational excellence. These scores highlight areas of strength and opportunities for continued improvement across clusters.</p>
              <h4 className="text-xl font-semibold text-indigo-700 mt-6 mb-3">Common Opportunities for Improvement:</h4>
              <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
                <li>Is the Comms hub sign-off up to date for all team members? Ensuring compliance here is paramount.</li>
                <li>Test two devices in each cabinet: Are they performing as expected? Pay particular attention to discoloured liquid in tanks – a quick check can prevent issues.</li>
                <li>Are skirting boards clean around the store? Small details reflect overall store standards and customer experience.</li>
              </ul>
            </div>

            {/* Compliance Results */}
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-2xl font-semibold text-indigo-800 mb-4">Compliance Audit Results</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={complianceAuditData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                  <XAxis dataKey="cluster" tick={{ fill: '#4a5568' }} />
                  <YAxis tickFormatter={(value) => `${value}%`} domain={[90, 100]} tick={{ fill: '#4a5568' }} /> {/* Set domain for better visibility */}
                  <Tooltip formatter={(value) => `${value.toFixed(2)}%`} />
                  <Legend />
                  <Bar dataKey="result" name="Audit Result %" fill="#FF4500" radius={[10, 10, 0, 0]} /> {/* Orange-Red */}
                </BarChart>
              </ResponsiveContainer>
              <p className="text-sm text-gray-600 mt-4">Our Compliance Audit results are a critical indicator of our adherence to operational standards. Striving for 100% compliance ensures we operate seamlessly and responsibly.</p>
              <h4 className="text-xl font-semibold text-indigo-700 mt-6 mb-3">Common Opportunities for Improvement:</h4>
              <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
                <li>Check five items from the POS transactional category: Deduct one point for each line in error. Precision here is key to accurate record-keeping.</li>
                <li>Count the Carrier Bag Stock: Does it match Epos? A tolerance of +/- 5 is allowed, but accuracy minimises discrepancies.</li>
                <li>Is there a working Note Checker for each Till? Essential for security and smooth transactions.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 5: Google Reviews & TW App Signups */}
        <section className="mb-12 p-8 bg-teal-50 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold text-teal-700 mb-6 border-b-2 border-teal-200 pb-2">Customer Engagement: Google Reviews & TW App Sign-ups</h2>

          {/* Google Reviews */}
          <div className="mb-8 p-6 bg-white rounded-lg shadow-sm">
            <h3 className="2xl font-semibold text-teal-800 mb-4">Google Reviews: Reviews Since Last Month</h3>
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={googleReviewsData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                <XAxis dataKey="store" angle={-45} textAnchor="end" height={100} interval={0} tick={{ fill: '#4a5568', fontSize: 12 }} />
                <YAxis allowDecimals={false} tick={{ fill: '#4a5568' }} />
                <Tooltip />
                <Legend />
                <Bar dataKey="reviews" name="Number of Reviews" fill="#008080" radius={[10, 10, 0, 0]} /> {/* Teal */}
              </BarChart>
            </ResponsiveContainer>
            <p className="text-sm text-gray-600 mt-4">Google reviews are our digital storefront! Each new review is a direct reflection of customer satisfaction and helps us build a stronger online presence. Let's encourage more positive feedback!</p>
          </div>

          {/* TW App Signups - Now a Composed Chart */}
          <div className="mb-8 p-6 bg-white rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold text-teal-800 mb-4">TW App Engagement: Have App & Notifications Enabled (%)</h3>
            <ResponsiveContainer width="100%" height={400}>
              <ComposedChart data={twAppSignupData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                <XAxis dataKey="store" angle={-45} textAnchor="end" height={100} interval={0} tick={{ fill: '#4a5568', fontSize: 12 }} />
                <YAxis tickFormatter={(value) => `${value}%`} tick={{ fill: '#4a5568' }} />
                <Tooltip formatter={(value) => `${value.toFixed(2)}%`} />
                <Legend />
                <Bar dataKey="percentHaveApp" name="% Customers with App" fill={appBarColor} radius={[10, 10, 0, 0]} /> {/* Bars for app ownership */}
                <Line type="monotone" dataKey="percentNotifications" name="% Notifications Enabled" stroke={notificationLineColor} strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 8 }} /> {/* Line for notifications */}
              </ComposedChart>
            </ResponsiveContainer>
            <p className="text-sm text-gray-600 mt-4">The TW App is a powerful tool for customer loyalty and engagement. This chart visualises our progress in getting customers to download the app (bars) and enable notifications (line) – crucial for direct communication and exclusive offers. A higher line indicates greater engagement potential!</p>
          </div>

          {/* Motivational Section for App */}
          <div className="bg-teal-100 p-5 rounded-lg shadow-inner mt-8">
            <h3 className="text-2xl font-semibold text-teal-800 mb-3">Be an App Advocate: Your Best Tool!</h3>
            <p className="text-lg text-teal-700 leading-relaxed mb-4">
              Having the TW App yourself is one of the most effective tools you possess. When you can personally demonstrate its benefits to a customer, it creates an immediate, tangible connection. Show them how easy it is to navigate, highlight exclusive offers, and explain how notifications keep them informed.
            </p>
            <p className="text-lg text-teal-700 leading-relaxed">
              Not only will you be able to showcase the app's value first-hand, but being familiar with the sign-up process yourself enables you to better guide customers through each step. Your confidence and expertise will make the difference.
            </p>
            <p className="text-lg text-teal-900 font-bold mt-4 text-center">
              "The best way to predict the future is to create it." – Peter Drucker.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;
