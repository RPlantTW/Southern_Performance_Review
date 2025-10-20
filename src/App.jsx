<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Strategic Risk Briefing: The Tree of Growth (UK Revision)</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    
    <!-- Chosen Palette: Earthy Harmony -->
    <style>
        body {
            font-family: 'Inter', sans-serif;
            background-color: #FDFBF8;
            color: #4A4A4A;
        }
        .chart-container {
            position: relative;
            width: 100%;
            max-width: 800px;
            margin-left: auto;
            margin-right: auto;
            height: 300px;
            max-height: 400px;
        }
        @media (min-width: 768px) {
            .chart-container {
                height: 400px;
            }
        }
        .nav-link {
            transition: all 0.3s ease;
            position: relative;
        }
        .nav-link::after {
            content: '';
            position: absolute;
            width: 0;
            height: 2px;
            bottom: -4px;
            left: 50%;
            transform: translateX(-50%);
            background-color: #D97706;
            transition: width 0.3s ease;
        }
        .nav-link.active::after,
        .nav-link:hover::after {
            width: 100%;
        }
        .kpi-card:hover .kpi-change-text {
            color: #16A34A;
        }
    </style>
</head>
<body class="antialiased">

    <header id="header" class="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
        <nav class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16">
                <div class="flex-shrink-0">
                    <span class="text-xl font-bold text-gray-800">🌳 Growth Strategy</span>
                </div>
                <div class="hidden md:block">
                    <div class="ml-10 flex items-baseline space-x-4">
                        <a href="#ecosystem" class="nav-link text-gray-600 hover:text-amber-600 px-3 py-2 rounded-md text-sm font-medium">The Ecosystem</a>
                        <a href="#foundation" class="nav-link text-gray-600 hover:text-amber-600 px-3 py-2 rounded-md text-sm font-medium">The Foundation</a>
                        <a href="#challenge" class="nav-link text-gray-600 hover:text-amber-600 px-3 py-2 rounded-md text-sm font-medium">The Challenge</a>
                        <a href="#strategy" class="nav-link text-gray-600 hover:text-amber-600 px-3 py-2 rounded-md text-sm font-medium">The Solution</a>
                        <a href="#harvest" class="nav-link text-gray-600 hover:text-amber-600 px-3 py-2 rounded-md text-sm font-medium">The Harvest</a>
                    </div>
                </div>
            </div>
        </nav>
    </header>

    <main>
        <section id="hero" class="py-20 md:py-28 bg-amber-50">
            <div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 class="text-4xl md:text-5xl font-extrabold text-gray-800 tracking-tight">Securing Our People Foundation for Future Growth</h1>
                <!-- Updated Executive Summary text based on the document -->
                <p class="mt-4 max-w-3xl mx-auto text-lg text-gray-600">When assessing our strategic landscape, our conclusion is clear: the single biggest risk is within our control—our people. An emergent **'Industry Knowledge Gap'**, driven by recent trends, now directly compromises our ability to capitalise on the market shift towards traditional vape kits. We must immediately address this deficit to ensure a successful harvest.</p>
            </div>
        </section>

        <section id="ecosystem" class="py-16 md:py-24">
            <div class="container mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-12">
                    <h2 class="text-3xl font-bold text-gray-800">The Ecosystem: External Threats (The Pests)</h2>
                    <p class="mt-2 text-lg text-gray-600 max-w-2xl mx-auto">Like any growing tree, our business faces external challenges. These uncontrollable "pests" demand constant monitoring and strategic adaptation to protect our growth and overall health.</p>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <!-- Updated text for Aggressive Competitors -->
                    <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                        <h3 class="text-lg font-semibold text-gray-800">🐛 Aggressive Competitors</h3>
                        <p class="mt-2 text-gray-600">Competitors' pricing and product offerings are often at a lower price, with some brands’ 'look and feel' now matching or exceeding our own.</p>
                    </div>
                    <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                        <h3 class="text-lg font-semibold text-gray-800">🦗 Tax on Vaping Products</h3>
                        <p class="mt-2 text-gray-600">Upcoming taxes will increase costs and shrink margins, demanding operational efficiency and a premium customer experience.</p>
                    </div>
                    <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                        <h3 class="text-lg font-semibold text-gray-800">🐌 Illicit Market</h3>
                        <p class="mt-2 text-gray-600">Poses a significant and enduring threat to legitimate sales and product safety standards across the industry.</p>
                    </div>
                    <!-- Updated text for Stock Security Risk -->
                    <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                        <h3 class="text-lg font-semibold text-gray-800">🐜 Stock Security Risk</h3>
                        <p class="mt-2 text-gray-600">The substantial value of holding up to 10 weeks of stock depth, compounded by potential taxation changes, makes us a more attractive target for break-ins.</p>
                    </div>
                </div>
            </div>
        </section>

        <section id="foundation" class="py-16 md:py-24 bg-green-50/50">
            <div class="container mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-12">
                    <h2 class="text-3xl font-bold text-gray-800">The Foundation: Our People, Our Strength (Trunk & Roots)</h2>
                    <p class="mt-2 text-lg text-gray-600 max-w-2xl mx-auto">The trunk and roots of our business are our people. We have already made significant investments to build a robust foundation through leadership development and improved team retention.</p>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    <div class="bg-white p-8 rounded-lg shadow-lg">
                        <h3 class="text-2xl font-semibold text-green-800 mb-4">A. The Branch Structure: Cluster Manager Development</h3>
                        <ul class="space-y-3 text-gray-700">
                            <!-- Using UK English 'programme' -->
                            <li class="flex items-start"><span class="text-green-500 mr-3 mt-1">▲</span><span>**Upskilling:** Delivering a dedicated development **programme** to enhance leadership and coaching capabilities.</span></li>
                            <!-- Updated Time Management detail -->
                            <li class="flex items-start"><span class="text-green-500 mr-3 mt-1">▲</span><span>**Time Management:** Providing tools to help CMs better manage their time and **identify where they can have the most impact** across their clusters.</span></li>
                            <li class="flex items-start"><span class="text-green-500 mr-3 mt-1">▲</span><span>**SRT Leading by Example:** The process of delivering this training is simultaneously improving the leadership capabilities of the SRT.</span></li>
                        </ul>
                    </div>
                    <div class="bg-white p-8 rounded-lg shadow-lg">
                        <h3 class="text-2xl font-semibold text-green-800 mb-4">B. Root Stability: Retail Team Consistency & Retention</h3>
                        <ul class="space-y-3 text-gray-700">
                            <!-- CRITICAL NAME CHANGE: Mr. Whitney Cares -> Mr. Wicked Cares -->
                            <li class="flex items-start"><span class="text-green-500 mr-3 mt-1">▲</span><span>**Customer Journey:** Reinforcing the **'Mr. Wicked Cares'** customer journey model to ensure consistent, high-quality interactions.</span></li>
                            <!-- Updated Recruitment detail -->
                            <li class="flex items-start"><span class="text-green-500 mr-3 mt-1">▲</span><span>**Recruitment:** A new, robust and intense recruitment model to attract higher-calibre candidates and **lower the churn rate** through clearer role expectations.</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <section id="challenge" class="py-16 md:py-24">
            <div class="container mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-12">
                    <h2 class="text-3xl font-bold text-red-800">The Critical Challenge: An Industry Knowledge Gap (The Weak Point)</h2>
                    <p class="mt-2 text-lg text-gray-600 max-w-3xl mx-auto">Despite our strong foundation, a critical weakness has emerged. A combination of staff turnover and the disposable product trend has created a profound knowledge gap in our front-line teams, just as the market pivots back to complex products.</p>
                </div>
                
                <!-- NEW CONTENT: Risk Component Breakdown -->
                <div class="max-w-4xl mx-auto mb-12">
                    <h3 class="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">Contributing Risk Components</h3>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div class="p-4 bg-white rounded-lg shadow-sm border-l-4 border-red-400">
                            <h4 class="font-bold text-gray-800">Legacy Staff Loss</h4>
                            <p class="text-sm text-gray-600">The loss of experienced, full-time employees removes historical industry expertise.</p>
                        </div>
                        <div class="p-4 bg-white rounded-lg shadow-sm border-l-4 border-red-400">
                            <h4 class="font-bold text-gray-800">Disposable Boom</h4>
                            <p class="text-sm text-gray-600">Market focus on simple, convenient disposable products led to an organic decline in expertise for traditional devices.</p>
                        </div>
                        <div class="p-4 bg-white rounded-lg shadow-sm border-l-4 border-red-400">
                            <h4 class="font-bold text-gray-800">High Part-Time Churn</h4>
                            <p class="text-sm text-gray-600">Increased reliance on part-time staff, who naturally experience higher turnover, makes retaining complex knowledge more challenging.</p>
                        </div>
                    </div>
                </div>
                <!-- END NEW CONTENT -->

                <div class="bg-white p-6 md:p-8 rounded-lg shadow-xl">
                    <h3 class="text-xl font-semibold text-center text-gray-800 mb-4">Urgency: The Market Pivot vs. Staff Expertise</h3>
                    <div class="chart-container">
                        <canvas id="marketPivotChart"></canvas>
                    </div>
                    <div class="mt-6 text-center text-sm text-gray-500">
                        This chart illustrates the critical divergence: as customer demand for traditional kits rises, our collective team knowledge for these products has declined, creating a significant service and sales risk.
                    </div>
                </div>
                <div class="mt-12">
                    <h3 class="text-xl font-semibold text-center text-gray-800 mb-6">Failure to Address This Gap Means:</h3>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                        <div class="bg-red-50 p-6 rounded-lg">
                            <h4 class="font-bold text-red-700">1. Inability to Guide</h4>
                            <p class="text-gray-600 mt-1">Lack of expert guidance on kit selection, troubleshooting, and device maintenance.</p>
                        </div>
                        <div class="bg-red-50 p-6 rounded-lg">
                            <h4 class="font-bold text-red-700">2. Damaged Reputation</h4>
                            <p class="text-gray-600 mt-1">Loss of our status as an expert-led retailer due to inconsistent information.</p>
                        </div>
                        <div class="bg-red-50 p-6 rounded-lg">
                            <h4 class="font-bold text-red-700">3. Lost Sales</h4>
                            <p class="text-gray-600 mt-1">Losing high-value sales to competitors who can provide the required technical knowledge.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="strategy" class="py-16 md:py-24 bg-blue-50/50">
            <div class="container mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-12">
                    <h2 class="text-3xl font-bold text-gray-800">The Solution: Nurturing Our Growth (Watering Can & Plant Food)</h2>
                    <p class="mt-2 text-lg text-gray-600 max-w-2xl mx-auto">Like providing a tree with water and nutrients, we must now invest in a targeted strategy to equip every team member with the knowledge to thrive. This is our essential 'Watering Can and Plant Food' for growth.</p>
                </div>
                <div class="max-w-4xl mx-auto">
                    <div id="tabs-container" class="bg-white rounded-lg shadow-lg overflow-hidden">
                        <div class="flex border-b border-gray-200">
                            <button data-tab="pillar1" class="tab-button flex-1 py-4 px-2 text-center font-semibold text-gray-700 bg-gray-100 border-b-4 border-blue-500">Pillar 1: Rebuilding Core Industry Knowledge</button>
                            <button data-tab="pillar2" class="tab-button flex-1 py-4 px-2 text-center font-semibold text-gray-500 bg-white">Pillar 2: Delivery Method & Engagement</button>
                        </div>
                        <div id="pillar1" class="tab-content p-8">
                            <p class="text-gray-600 mb-6">We propose the immediate development of a training strategy focused on re-establishing foundational product expertise.</p>
                            <ul class="space-y-4">
                                <li class="flex"><span class="text-blue-500 font-bold mr-3">💧</span><div><h4 class="font-semibold text-gray-800">Core Vaping Education</h4><p class="text-gray-600">Base knowledge on liquids, nicotine strengths, components (coils, batteries), maintenance, and running costs.</p></div></li>
                                <li class="flex"><span class="text-blue-500 font-bold mr-3">💧</span><div><h4 class="font-semibold text-gray-800">Jargon Breakdown</h4><p class="text-gray-600">Training on simplifying complex information to confidently compare devices (e.g., big-puff vs. traditional setups) for the customer.</p></div></li>
                                <li class="flex"><span class="text-blue-500 font-bold mr-3">💧</span><div><h4 class="font-semibold text-gray-800">Consultative Sales</h4><p class="text-gray-600">Equipping staff with the right questions to ask to determine the best kit for an individual customer's needs and vaping style.</p></div></li>
                            </ul>
                        </div>
                        <div id="pillar2" class="tab-content p-8 hidden">
                            <p class="text-gray-600 mb-6">To achieve buy-in and effectiveness, training must be engaging, consistent, and scalable across the entire retail network.</p>
                            <ul class="space-y-4">
                                <li class="flex"><span class="text-blue-500 font-bold mr-3">🌱</span><div><h4 class="font-semibold text-gray-800">Workshops & Seminars</h4><p class="text-gray-600">Engaging sessions to foster a culture of learning and commitment, reducing staff isolation.</p></div></li>
                                <!-- CRITICAL NAME CHANGE: Ubiquity -> Yoobic -->
                                <li class="flex"><span class="text-blue-500 font-bold mr-3">🌱</span><div><h4 class="font-semibold text-gray-800">Digital Integration</h4><p class="text-gray-600">Leverage **Yoobic** for mandatory learning modules to test, track, and formalise knowledge.</p></div></li>
                                <li class="flex"><span class="text-blue-500 font-bold mr-3">🌱</span><div><h4 class="font-semibold text-gray-800">Induction & Onboarding</h4><p class="text-gray-600">Integrate core training into the new recruitment induction process to standardise expertise from Day One.</p></div></li>
                                <li class="flex"><span class="text-blue-500 font-bold mr-3">🌱</span><div><h4 class="font-semibold text-gray-800">Technology Support</h4><p class="text-gray-600">Use in-store screens and the app to prompt knowledge-based conversations and offers.</p></div></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="harvest" class="py-16 md:py-24">
            <div class="container mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-12">
                    <h2 class="text-3xl font-bold text-gray-800">The Harvest: Success Metrics (The Fruit)</h2>
                    <p class="mt-2 text-lg text-gray-600 max-w-2xl mx-auto">Once approved and implemented, this strategy will be directly executed and measured against key performance indicators, demonstrating the tangible impact of closing the knowledge gap. These are the "fruit" we expect to yield.</p>
                </div>
                
                <div id="kpi-detail-box" class="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-xl border-l-4 border-amber-500 mb-12 min-h-[120px] transition-all duration-300 flex items-center justify-center">
                    <p class="text-gray-500 italic text-center">Hover over a metric below to see its detailed rationale and how it links to closing the knowledge gap.</p>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div data-metric="refund" class="kpi-card bg-white p-6 rounded-lg shadow-md border-t-4 border-amber-500 cursor-pointer hover:shadow-lg transition-shadow duration-200" onmouseover="showDetail(this)" onmouseout="hideDetail()">
                        <h4 class="font-bold text-lg text-gray-800">Kit-Based Refund Rate</h4>
                        <p class="text-3xl font-extrabold text-red-600 mt-2 kpi-change-text">Decrease</p>
                        <p class="mt-1 text-sm font-semibold text-gray-500">Category: Product Quality</p>
                    </div>
                    <div data-metric="return" class="kpi-card bg-white p-6 rounded-lg shadow-md border-t-4 border-amber-500 cursor-pointer hover:shadow-lg transition-shadow duration-200" onmouseover="showDetail(this)" onmouseout="hideDetail()">
                        <h4 class="font-bold text-lg text-gray-800">Faulty Product Return Rate (Warranty)</h4>
                        <p class="text-3xl font-extrabold text-red-600 mt-2 kpi-change-text">Decrease</p>
                        <p class="mt-1 text-sm font-semibold text-gray-500">Category: Operational Efficiency</p>
                    </div>
                    <div data-metric="atv" class="kpi-card bg-white p-6 rounded-lg shadow-md border-t-4 border-amber-500 cursor-pointer hover:shadow-lg transition-shadow duration-200" onmouseover="showDetail(this)" onmouseout="hideDetail()">
                        <h4 class="font-bold text-lg text-gray-800">Average Transaction Value (ATV)</h4>
                        <p class="text-3xl font-extrabold text-green-600 mt-2 kpi-change-text">Increase</p>
                        <p class="mt-1 text-sm font-semibold text-gray-500">Category: Financial Impact</p>
                    </div>
                    <div data-metric="retention" class="kpi-card bg-white p-6 rounded-lg shadow-md border-t-4 border-amber-500 cursor-pointer hover:shadow-lg transition-shadow duration-200" onmouseover="showDetail(this)" onmouseout="hideDetail()">
                        <h4 class="font-bold text-lg text-gray-800">Customer Retention Rate</h4>
                        <p class="text-3xl font-extrabold text-green-600 mt-2 kpi-change-text">Increase</p>
                        <p class="mt-1 text-sm font-semibold text-gray-500">Category: Customer Experience</p>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <footer class="bg-gray-800">
        <div class="container mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center text-gray-400 text-sm">
            <p>&copy; 2025 Strategic Retail Team. Internal Briefing Document.</p>
        </div>
    </footer>

    <script>
        // KPI Rationale Data (Matches document content)
        const metricData = {
            refund: {
                title: 'Kit-Based Refund Rate (Decrease)',
                rationale: 'Directly measures the reduction of initial sales errors and improved accuracy in selecting the right product/kit, closing the knowledge gap at the point of sale.',
                category: 'Product Quality'
            },
            return: {
                title: 'Faulty Product Return Rate (Decrease)',
                rationale: 'Indicates that staff advice is leading to the correct use, handling, and initial installation of products, reducing claims attributed to incorrect selection or application.',
                category: 'Operational Efficiency'
            },
            atv: {
                title: 'Average Transaction Value (Increase)',
                rationale: 'Demonstrates that improved product knowledge is enabling effective upselling and cross-selling of appropriate accessories and complementary products, maximising revenue per customer interaction.',
                category: 'Financial Impact'
            },
            retention: {
                title: 'Customer Retention Rate (Increase)',
                rationale: 'A long-term validation that receiving expert service and the right product the first time fosters loyalty and repeat business. Enhanced knowledge translates into a superior customer journey, encouraging repeat visits and brand advocacy.',
                category: 'Customer Experience'
            }
        };

        const detailBox = document.getElementById('kpi-detail-box');
        const defaultMessage = '<p class="text-gray-500 italic text-center">Hover over a metric below to see its detailed rationale and how it links to closing the knowledge gap.</p>';

        function showDetail(element) {
            const metricKey = element.getAttribute('data-metric');
            const data = metricData[metricKey];
            
            detailBox.innerHTML = `
                <div class="text-left w-full">
                    <h4 class="text-xl font-bold text-amber-700">${data.title}</h4>
                    <p class="text-sm font-semibold text-gray-600 mb-2">Category: ${data.category}</p>
                    <p class="text-gray-700">${data.rationale}</p>
                </div>
            `;
            detailBox.classList.remove('justify-center');
            detailBox.classList.add('justify-start');
        }

        function hideDetail() {
            detailBox.innerHTML = defaultMessage;
            detailBox.classList.remove('justify-start');
            detailBox.classList.add('justify-center');
        }

        document.addEventListener('DOMContentLoaded', function () {
            // Chart.js Configuration
            const chartCtx = document.getElementById('marketPivotChart').getContext('2d');
            const marketPivotChart = new Chart(chartCtx, {
                type: 'line',
                data: {
                    labels: ['Q1 2024', 'Q2 2024', 'Q3 2024', 'Q4 2024', 'Q1 2025', 'Q2 2025'],
                    datasets: [{
                        label: 'Disposable Product Sales',
                        data: [95, 85, 70, 60, 45, 30],
                        borderColor: 'rgb(239, 68, 68)',
                        backgroundColor: 'rgba(239, 68, 68, 0.1)',
                        fill: true,
                        tension: 0.4
                    }, {
                        label: 'Traditional Kit Sales',
                        data: [15, 25, 40, 55, 75, 90],
                        borderColor: 'rgb(34, 197, 94)',
                        backgroundColor: 'rgba(34, 197, 94, 0.1)',
                        fill: true,
                        tension: 0.4
                    }, {
                        label: 'Staff Knowledge Level (Conceptual)',
                        data: [80, 75, 60, 50, 40, 35],
                        borderColor: 'rgb(245, 158, 11)',
                        backgroundColor: 'rgba(245, 158, 11, 0.1)',
                        borderDash: [5, 5],
                        fill: false,
                        tension: 0.4
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'bottom',
                        },
                        title: {
                            display: false,
                        },
                        tooltip: {
                            mode: 'index',
                            intersect: false
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            title: {
                                display: true,
                                text: 'Relative Market Share / Knowledge Level'
                            }
                        }
                    }
                }
            });

            // Tab functionality
            const tabsContainer = document.getElementById('tabs-container');
            const tabButtons = tabsContainer.querySelectorAll('.tab-button');
            const tabContents = tabsContainer.querySelectorAll('.tab-content');

            tabButtons.forEach(button => {
                button.addEventListener('click', () => {
                    const tabId = button.getAttribute('data-tab');

                    tabButtons.forEach(btn => {
                        btn.classList.remove('bg-gray-100', 'border-blue-500', 'text-gray-700');
                        btn.classList.add('bg-white', 'text-gray-500');
                        btn.style.borderBottomWidth = '0';
                    });
                    
                    button.classList.add('bg-gray-100', 'border-blue-500', 'text-gray-700');
                    button.classList.remove('bg-white', 'text-gray-500');
                    button.style.borderBottomWidth = '4px';

                    tabContents.forEach(content => {
                        if (content.id === tabId) {
                            content.classList.remove('hidden');
                        } else {
                            content.classList.add('hidden');
                        }
                    });
                });
            });
            
            // Section scroll observation for navigation highlighting
            const navLinks = document.querySelectorAll('.nav-link');
            const sections = document.querySelectorAll('main section:not(#hero)'); // Exclude hero
            const headerHeight = document.getElementById('header').offsetHeight;

            const observerOptions = {
                root: null,
                // Adjust root margin to trigger intersection before the section reaches the top of the viewport due to fixed header
                rootMargin: `-${headerHeight}px 0px -50% 0px`, 
                threshold: 0
            };

            const sectionObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const id = entry.target.getAttribute('id');
                        navLinks.forEach(link => {
                            link.classList.remove('active');
                            if (link.getAttribute('href') === `#${id}`) {
                                link.classList.add('active');
                            }
                        });
                    }
                });
            }, observerOptions);
            
            sections.forEach(section => {
                sectionObserver.observe(section);
            });
            
            // Set initial active state for the first section if visible
            if (sections.length > 0) {
                const firstSectionId = sections[0].id;
                const firstLink = document.querySelector(`.nav-link[href="#${firstSectionId}"]`);
                if (firstLink) {
                    firstLink.classList.add('active');
                }
            }
        });
    </script>
</body>
</html>
