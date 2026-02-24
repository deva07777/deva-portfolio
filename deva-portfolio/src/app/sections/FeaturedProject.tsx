"use client";

import React from "react";
import { Carousel, Card } from "../components/projectcards";

export function FeaturedProject() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="flex flex-col items-center justify-center pt-28 lg:pt-34">
      <h1 className="font-bold text-[30px]">FEATURED PROJECTS</h1>
      <h2 className="font-semibold text-lg font-mono text-[#FF611D]">
        EXPLORE MY WORK
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const Project1Content = () => {
  return (
    <div className="bg-[#1a1a1a] p-8 md:p-14 rounded-3xl mb-4 text-white">
      <p className="text-xl font-semibold md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        A neuro-symbolic, multi-agent RAG framework designed to mitigate numerical hallucinations in financial auditing using deterministic verification.
      </p>

      <h3 className="text-2xl font-bold mb-4 text-[#FF611D]">EV×L FRAMEWORK: NEURO-SYMBOLIC AGENTIC RAG</h3>
      <p className="mb-4">
        A verification-driven Retrieval-Augmented Generation framework for mitigating numerical hallucinations in financial auditing.
      </p>
      <p className="mb-8 text-sm font-mono text-gray-400">
        Python • Large Language Models • Retrieval-Augmented Generation (RAG) • Knowledge Graphs • NetworkX • Multi-Agent Systems • Financial Analytics
      </p>

      <h4 className="text-xl font-bold mb-2">MOTIVATION</h4>
      <p className="mb-6">
        Large Language Models (LLMs) show strong reasoning capabilities but often suffer from numerical hallucinations, especially in high-stakes domains such as financial auditing and compliance. Even minor arithmetic or logical inconsistencies can lead to severe downstream consequences.
        <br /><br />
        To address this, we designed EV×L (Evidence × Logic) — a neuro-symbolic, agentic RAG framework that grounds LLM reasoning in explicit symbolic constraints and verifiable financial indicators, significantly reducing hallucinations while preserving reasoning flexibility.
      </p>

      <h4 className="text-xl font-bold mb-2">SYSTEM OVERVIEW</h4>
      <p className="mb-6">
        EV×L is a multi-agent verification framework that combines neural reasoning from LLMs, symbolic verification via knowledge graphs, and deterministic financial logic checks.
      </p>

      <h4 className="text-xl font-bold mb-2">TECHNOLOGIES USED</h4>
      <ul className="list-disc list-inside mb-6 space-y-2">
        <li><strong>Programming Language:</strong> Python</li>
        <li><strong>LLMs & RAG:</strong> Transformer-based LLMs, Retrieval-Augmented Generation pipelines</li>
        <li><strong>Symbolic Reasoning:</strong> NetworkX-based Knowledge Graphs</li>
        <li><strong>Agent Framework:</strong> Multi-agent task decomposition & verification</li>
        <li><strong>Data Handling:</strong> Pandas, NumPy</li>
      </ul>

      <h4 className="text-xl font-bold mb-2">KNOWLEDGE GRAPH AS SYMBOLIC WORLD MODEL</h4>
      <p className="mb-6">
        A symbolic financial knowledge graph encodes deterministic relationships such as revenue-expense consistency, balance sheet constraints, and cash-flow invariants.
      </p>

      <h4 className="text-xl font-bold mb-2">MULTI-AGENT VERIFICATION PIPELINE</h4>
      <ul className="list-disc list-inside mb-6 space-y-2">
        <li>Retriever Agent</li>
        <li>Reasoning Agent (LLM)</li>
        <li>Symbolic Validator Agent</li>
        <li>Consistency Arbiter Agent</li>
      </ul>

      <h4 className="text-xl font-bold mb-2">KEY RESULTS & INSIGHTS</h4>
      <ul className="list-disc list-inside mb-6 space-y-2">
        <li>Reduced numerical hallucinations through deterministic validation</li>
        <li>Improved trustworthiness of LLM outputs</li>
        <li>Demonstrated superiority over prompt-only safeguards</li>
      </ul>

      <h4 className="text-xl font-bold mb-2">CONCLUSION</h4>
      <p className="mb-4">
        EV×L demonstrates how neuro-symbolic agentic architectures can deliver accurate, interpretable, and reliable AI-driven financial reasoning.
      </p>

      <div className="md:h-[250px] w-full pt-5 mx-auto bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center mt-8">
        <span className="text-gray-500 font-mono text-sm">Project Visualization</span>
      </div>
    </div>
  );
};

const Project3Content = () => {
  return (
    <div className="bg-[#1a1a1a] p-8 md:p-14 rounded-3xl mb-4 text-white">
      <p className="text-xl font-semibold md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        A SQL-driven analytical database for extracting insights from multi-year college placement data.
      </p>

      <h3 className="text-2xl font-bold mb-4 text-[#FF611D]">COLLEGE PLACEMENT ANALYTICS DATABASE</h3>
      <p className="mb-4">
        A SQL-driven analytical system for multi-year college placement insights.
      </p>
      <p className="mb-8 text-sm font-mono text-gray-400">
        Python • PostgreSQL • SQL • Relational Databases • Data Analytics • Jupyter Notebook
      </p>

      <h4 className="text-xl font-bold mb-2">MOTIVATION</h4>
      <p className="mb-6">
        College placement data is often scattered across spreadsheets and departmental records, making it difficult to extract meaningful insights about hiring trends, salary progression, and skill demand. Institutions require structured analytics to improve career guidance, curriculum planning, and recruiter engagement.
        <br /><br />
        This project was designed to transform raw placement records into a queryable, insight-driven analytical database, enabling data-backed decision-making for students and academic administrators.
      </p>

      <h4 className="text-xl font-bold mb-2">DATABASE DESIGN & SCHEMA</h4>
      <p className="mb-4">
        A normalized relational database schema was designed to ensure data integrity, scalability, and efficient querying. The schema models real-world placement dynamics using interconnected entities:
      </p>
      <ul className="list-disc list-inside mb-6 space-y-2">
        <li><strong>Students:</strong> demographic details, department, graduation year</li>
        <li><strong>Departments:</strong> academic programs and discipline-level grouping</li>
        <li><strong>Companies:</strong> recruiters, industry sectors, hiring frequency</li>
        <li><strong>Job Roles:</strong> designation, salary packages, required skills</li>
      </ul>
      <p className="mb-6">
        Primary and foreign keys were carefully defined to avoid redundancy and support complex joins across multiple tables.
      </p>

      <h4 className="text-xl font-bold mb-2">SQL ANALYTICS & QUERYING</h4>
      <p className="mb-4">To extract actionable insights, 15+ advanced SQL queries were implemented using:</p>
      <ul className="list-disc list-inside mb-4 space-y-2">
        <li>Multi-table joins</li>
        <li>Common Table Expressions (CTEs)</li>
        <li>Subqueries</li>
        <li>Aggregations and window functions</li>
      </ul>
      <p className="mb-4">Key analytical queries included:</p>
      <ul className="list-disc list-inside mb-6 space-y-2">
        <li>Identification of top recruiting sectors and companies</li>
        <li>Average salary analysis by department across years (2021–2025)</li>
        <li>Detection of most in-demand technical skills across job roles</li>
        <li>Year-over-year trends in placement outcomes</li>
      </ul>
      <p className="mb-6">
        These queries transformed raw data into structured insights suitable for reporting and strategic planning.
      </p>

      <h4 className="text-xl font-bold mb-2">KEY INSIGHTS</h4>
      <ul className="list-disc list-inside mb-6 space-y-2">
        <li>Certain departments consistently attracted higher-paying roles, highlighting skill-market alignment</li>
        <li>Recruiter concentration revealed industry-specific hiring patterns</li>
        <li>Skill demand analysis provided evidence for curriculum modernization</li>
      </ul>

      <h4 className="text-xl font-bold mb-2">CONCLUSION</h4>
      <p className="mb-4">
        This project demonstrates how relational databases and advanced SQL analytics can convert placement data into a powerful decision-support system. The approach is extensible to institutional analytics, workforce planning, and educational policy analysis.
      </p>

      <div className="md:h-[250px] w-full pt-5 mx-auto bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center mt-8">
        <span className="text-gray-500 font-mono text-sm">Dashboard Preview</span>
      </div>
    </div>
  );
};

const Project4Content = () => {
  return (
    <div className="bg-[#1a1a1a] p-8 md:p-14 rounded-3xl mb-4 text-white">
      <p className="text-xl font-semibold md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        An interactive Power BI dashboard for personal finance analysis and expense optimization.
      </p>

      <h3 className="text-2xl font-bold mb-4 text-[#FF611D]">PERSONAL SPENDING TRACKER DASHBOARD</h3>
      <p className="mb-4">
        An interactive financial analytics dashboard for personal expense optimization.
      </p>
      <p className="mb-8 text-sm font-mono text-gray-400">
        Excel • Power BI • Data Visualization • Financial Analytics
      </p>

      <h4 className="text-xl font-bold mb-2">MOTIVATION</h4>
      <p className="mb-6">
        Personal finance decisions are often driven by intuition rather than data. Without structured tracking, individuals struggle to understand where money is actually going and which expenses have the largest impact.
        <br /><br />
        This project aimed to create a visual, data-driven spending dashboard that enables clear financial awareness and informed budgeting decisions.
      </p>

      <h4 className="text-xl font-bold mb-2">DATA PIPELINE & MODELING</h4>
      <p className="mb-4">Daily expense data was recorded in Excel, categorized by:</p>
      <ul className="list-disc list-inside mb-4 space-y-2">
        <li>Date</li>
        <li>Expense category</li>
        <li>Payment mode</li>
        <li>Amount</li>
      </ul>
      <p className="mb-6">
        This dataset was ingested into Power BI, where a clean data model was created to support time-based and category-based analysis.
      </p>

      <h4 className="text-xl font-bold mb-2">DASHBOARD DESIGN & VISUALIZATION</h4>
      <p className="mb-4">The Power BI dashboard was designed with interactivity and clarity in mind, featuring:</p>
      <ul className="list-disc list-inside mb-6 space-y-2">
        <li>Time-series visualizations showing monthly and yearly spending trends</li>
        <li>Category-wise breakdowns for expense distribution</li>
        <li>Pareto analysis (80/20 rule) to identify the top 20% of expense categories contributing to the majority of spending</li>
        <li>Dynamic filters allowed users to drill down by time period and category.</li>
      </ul>

      <h4 className="text-xl font-bold mb-2">KEY INSIGHTS</h4>
      <ul className="list-disc list-inside mb-6 space-y-2">
        <li>A small number of categories accounted for a disproportionate share of total expenses</li>
        <li>Monthly trend analysis revealed predictable spending spikes</li>
        <li>Visualization-driven insights enabled targeted expense reduction strategies</li>
      </ul>

      <h4 className="text-xl font-bold mb-2">CONCLUSION</h4>
      <p className="mb-4">
        This project highlights the power of business intelligence tools in personal finance. By combining structured data modeling with interactive visualization, the dashboard transforms raw expense data into actionable financial intelligence.
      </p>

      <div className="md:h-[250px] w-full pt-5 mx-auto bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center mt-8">
        <span className="text-gray-500 font-mono text-sm">Analytics View</span>
      </div>
    </div>
  );
};

const Project5Content = () => {
  return (
    <div className="bg-[#1a1a1a] p-8 md:p-14 rounded-3xl mb-4 text-white">
      <p className="text-xl font-semibold md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        An embedding-based recommendation system optimized using user interaction signals to improve engagement.
      </p>

      <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-8 bg-black border border-white/10 group">
        {/* Placeholder for video - User needs to replace src */}
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
          <p className="text-gray-500 font-mono">Demo Video Placeholder</p>
        </div>
        {/* Uncomment and use this when you have the video file */}
        {/* 
         <video 
            src="/videos/cinimatch-demo.mp4" 
            className="w-full h-full object-cover"
            controls
            autoPlay
            muted
            loop
         /> 
         */}
      </div>

      <h3 className="text-2xl font-bold mb-4 text-[#FF611D]">CINIMATCH – AI-POWERED RECOMMENDATION PROTOTYPE (2024)</h3>
      <p className="mb-4">
        A personalized recommendation system leveraging embeddings and similarity-based ranking.
      </p>
      <p className="mb-8 text-sm font-mono text-gray-400">
        Machine Learning • Recommendation Systems • Embeddings • Data Analytics
      </p>

      <h4 className="text-xl font-bold mb-2">MOTIVATION</h4>
      <p className="mb-6">
        Traditional recommendation systems often rely on coarse popularity metrics, leading to repetitive and generic suggestions. Modern personalization requires understanding user context, interaction behavior, and semantic similarity.
        <br /><br />
        CiniMatch was developed as an experimental prototype to explore AI-driven personalization using embeddings and ranking strategies.
      </p>

      <h4 className="text-xl font-bold mb-2">SYSTEM DESIGN</h4>
      <p className="mb-4">The recommendation pipeline was structured around three core components:</p>
      <ul className="list-disc list-inside mb-6 space-y-2">
        <li><strong>Item Embeddings:</strong> Content and metadata were embedded into a vector space to capture semantic similarity.</li>
        <li><strong>Contextual Signals:</strong> User interactions such as clicks, watch history, and feature usage were incorporated to refine recommendations.</li>
        <li><strong>Similarity-Based Ranking:</strong> Items were ranked using similarity scores adjusted by contextual relevance.</li>
      </ul>

      <h4 className="text-xl font-bold mb-2">USER INTERACTION ANALYSIS</h4>
      <p className="mb-4">User interaction logs were analyzed to:</p>
      <ul className="list-disc list-inside mb-6 space-y-2">
        <li>Identify high-engagement features</li>
        <li>Understand user preference drift</li>
        <li>Optimize ranking logic through iterative tuning</li>
      </ul>
      <p className="mb-6">
        Insights from interaction patterns were used to recalibrate similarity weights and ranking thresholds.
      </p>

      <h4 className="text-xl font-bold mb-2">RESULTS</h4>
      <ul className="list-disc list-inside mb-6 space-y-2">
        <li>Achieved a 28% improvement in engagement metrics during beta testing</li>
        <li>Increased relevance and diversity of recommendations</li>
        <li>Demonstrated the effectiveness of embedding-based personalization over popularity-driven methods</li>
      </ul>

      <h4 className="text-xl font-bold mb-2">CONCLUSION</h4>
      <p className="mb-4">
        CiniMatch showcases the practical application of recommendation system theory in a real-world prototype. The project highlights how embeddings and behavioral signals can significantly enhance personalization and user engagement.
      </p>

      <div className="md:h-[250px] w-full pt-5 mx-auto bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center mt-8">
        <span className="text-gray-500 font-mono text-sm">System Diagram</span>
      </div>
    </div>
  );
};

const Project6Content = () => {
  return (
    <div className="bg-[#1a1a1a] p-8 md:p-14 rounded-3xl mb-4 text-white">
      <p className="text-xl font-semibold md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        A machine learning framework for predicting football player performance using historical match data.
      </p>

      <h3 className="text-2xl font-bold mb-4 text-[#FF611D]">FOOTBALL PLAYER PERFORMANCE PREDICTION</h3>
      <p className="mb-4">
        A machine learning–driven framework for forecasting player performance using historical match data.
      </p>
      <p className="mb-8 text-sm font-mono text-gray-400">
        Python • Machine Learning • Sports Analytics • Data Analysis • Pandas • NumPy • Scikit-learn • Matplotlib • Seaborn
      </p>

      <h4 className="text-xl font-bold mb-2">MOTIVATION</h4>
      <p className="mb-6">
        Football performance analysis has traditionally relied on subjective scouting and basic statistics. However, modern football increasingly depends on data-driven decision-making for player selection, tactical planning, and performance optimization.
        <br /><br />
        This project aims to leverage machine learning and statistical analysis to predict a football player’s future performance based on historical match data, helping coaches, analysts, and teams make objective and informed decisions.
      </p>

      <h4 className="text-xl font-bold mb-2">DATA COLLECTION & UNDERSTANDING</h4>
      <p className="mb-4">The dataset consisted of structured player and match-level statistics, including:</p>
      <ul className="list-disc list-inside mb-6 space-y-2">
        <li>Player demographics and position</li>
        <li>Match appearances and minutes played</li>
        <li>Goals, assists, shots, and pass accuracy</li>
        <li>Defensive actions such as tackles and interceptions</li>
        <li>Discipline metrics (fouls, yellow/red cards)</li>
      </ul>
      <p className="mb-6">
        The data was aggregated across multiple matches to capture both short-term form and overall consistency.
      </p>

      <h4 className="text-xl font-bold mb-2">DATA PREPROCESSING & FEATURE ENGINEERING</h4>
      <p className="mb-4">To ensure high-quality model inputs, extensive preprocessing was performed:</p>
      <ul className="list-disc list-inside mb-4 space-y-2">
        <li>Handled missing and inconsistent match statistics</li>
        <li>Normalized performance metrics to account for differences in playing time</li>
        <li>Encoded categorical variables such as player position</li>
      </ul>
      <p className="mb-4">Engineered composite features such as:</p>
      <ul className="list-disc list-inside mb-6 space-y-2">
        <li>Goal contribution per 90 minutes</li>
        <li>Defensive involvement rate</li>
        <li>Discipline-adjusted performance score</li>
      </ul>
      <p className="mb-6">These engineered features helped capture nuanced aspects of player impact beyond raw totals.</p>

      <h4 className="text-xl font-bold mb-2">MODEL DEVELOPMENT</h4>
      <p className="mb-4">Several machine learning models were explored to predict player performance scores:</p>
      <ul className="list-disc list-inside mb-4 space-y-2">
        <li>Linear Regression</li>
        <li>Decision Trees</li>
        <li>Random Forest Regressor</li>
      </ul>
      <p className="mb-6">
        Model performance was evaluated using cross-validation to ensure robustness and generalization. Feature importance analysis was conducted to understand which factors most strongly influence player performance, improving interpretability.
      </p>

      <h4 className="text-xl font-bold mb-2">KEY INSIGHTS</h4>
      <ul className="list-disc list-inside mb-6 space-y-2">
        <li>Minutes played and consistency were stronger predictors than raw goal counts</li>
        <li>Midfielders showed higher performance variability compared to defenders</li>
        <li>Composite per-90 metrics outperformed absolute match totals in predictive accuracy</li>
        <li>Discipline-related features negatively correlated with overall performance scores</li>
      </ul>

      <h4 className="text-xl font-bold mb-2">VISUALIZATION & ANALYSIS</h4>
      <p className="mb-4">Data visualization played a key role in understanding trends and model behavior:</p>
      <ul className="list-disc list-inside mb-6 space-y-2">
        <li>Performance distribution across player positions</li>
        <li>Correlation heatmaps of performance indicators</li>
        <li>Comparison of predicted vs actual performance values</li>
        <li>Feature importance plots for model explainability</li>
      </ul>
      <p className="mb-6">These visual insights aided both model refinement and result interpretation.</p>

      <h4 className="text-xl font-bold mb-2">APPLICATIONS</h4>
      <ul className="list-disc list-inside mb-6 space-y-2">
        <li>Player scouting and recruitment analysis</li>
        <li>Matchday squad selection and rotation planning</li>
        <li>Long-term player development tracking</li>
        <li>Performance benchmarking across positions</li>
      </ul>

      <h4 className="text-xl font-bold mb-2">CONCLUSION</h4>
      <p className="mb-4">
        This project demonstrates how machine learning and sports analytics can transform football performance evaluation from intuition-based judgment to quantitative, evidence-driven analysis. By combining domain-specific feature engineering with predictive modeling, the system provides meaningful insights into player effectiveness and future potential.
      </p>

      <div className="md:h-[250px] w-full pt-5 mx-auto bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center mt-8">
        <span className="text-gray-500 font-mono text-sm">Model Analysis</span>
      </div>
    </div>
  );
};

const data = [
  {
    category: "Python, LLMs, RAG, Knowledge Graphs, NetworkX, Multi-Agent Systems",
    title: "EV×L Framework: Neuro-Symbolic Agentic RAG",
    src: "/sorting1.jpeg",
    content: <Project1Content />,
  },
  {
    category: "PostgreSQL, SQL, Python, Jupyter Notebook",
    title: "College Placement Analytics Database",
    src: "/sorting2.jpeg", // Reusing image
    content: <Project3Content />,
  },
  {
    category: "Power BI, Excel, Data Visualization",
    title: "Personal Spending Tracker Dashboard",
    src: "/mp1.png", // Reusing image
    content: <Project4Content />,
  },
  {
    category: "Machine Learning, Embeddings, Recommendation Systems",
    title: "CiniMatch – AI-Powered Recommendation Prototype",
    src: "/sorting1.jpeg", // Reusing image
    content: <Project5Content />,
    link: "https://cinimatch.vercel.app/",
  },
  {
    category: "Python, Machine Learning, Sports Analytics, Scikit-learn",
    title: "Football Player Performance Prediction",
    src: "/sorting2.jpeg", // Reusing image
    content: <Project6Content />,
  },
];
