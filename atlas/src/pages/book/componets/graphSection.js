import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { Bar, Line, Doughnut } from 'react-chartjs-2';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

/* ---------------------------- Chart Data --------------------------- */
const soldByCountry = {
  labels: ["United States", "United Kingdom", "Germany", "France", "Canada", "Australia", "Japan"],
  datasets: [{
    label: 'Books Sold',
    data: [15600, 8900, 6700, 5200, 4800, 4200, 3800],
    backgroundColor: '#6B4F4F',
    borderRadius: 6,
  }]
};

const soldByMonth = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  datasets: [{
    label: 'Books Sold',
    data: [3200, 4800, 5200, 6100, 7800, 9200, 10500, 9800, 8600, 7200, 5800, 4500],
    borderColor: '#6B4F4F',
    backgroundColor: 'rgba(107, 79, 79, 0.1)',
    tension: 0.4,
    fill: true,
  }]
};

const royaltiesThisMonth = {
  labels: ["Author Royalties", "Publisher Share", "Translator Fees", "Marketing Costs"],
  datasets: [{
    data: [28500, 15200, 8700, 6300],
    backgroundColor: ['#6B4F4F', '#3B5A5A', '#8A6C6C', '#A98B7B'],
    borderWidth: 0,
  }]
};

const printedByMonth = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
  datasets: [{
    label: 'Books Printed',
    data: [12500, 11800, 14200, 15600, 18900, 21500, 19800, 17600],
    borderColor: '#8A6C6C',
    backgroundColor: 'rgba(200, 167, 154, 0.3)',
    fill: true,
    tension: 0.4,
  }]
};

const topAuthors = {
  labels: ["Elena Vance", "Robert Bright", "Sarah Chen", "Marcus Thorne", "Amira Patel"],
  datasets: [{
    label: 'Sales (in thousands)',
    data: [156, 128, 98, 87, 76],
    backgroundColor: '#6B4F4F',
  }]
};

/* ------------------------------ Graph Section ------------------------------ */
export default function GraphSection({ role }) {
  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { 
      legend: { display: false },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: '#fff',
        bodyColor: '#fff'
      }
    },
    scales: { 
      y: { 
        beginAtZero: true,
        grid: {
          color: 'rgba(0, 0, 0, 0.1)'
        }
      },
      x: {
        grid: {
          color: 'rgba(0, 0, 0, 0.1)'
        }
      }
    }
  };

  const lineOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { 
      legend: { display: false },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: '#fff',
        bodyColor: '#fff'
      }
    },
    scales: { 
      y: { 
        beginAtZero: true,
        grid: {
          color: 'rgba(0, 0, 0, 0.1)'
        }
      },
      x: {
        grid: {
          color: 'rgba(0, 0, 0, 0.1)'
        }
      }
    }
  };

  const pieOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { 
      legend: { 
        position: 'bottom',
        labels: {
          usePointStyle: true,
          padding: 20
        }
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: '#fff',
        bodyColor: '#fff'
      }
    }
  };

  const horizontalBarOptions = {
    indexAxis: 'y',
    responsive: true,
    maintainAspectRatio: false,
    plugins: { 
      legend: { display: false },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: '#fff',
        bodyColor: '#fff'
      }
    },
    scales: {
      x: {
        beginAtZero: true,
        grid: {
          color: 'rgba(0, 0, 0, 0.1)'
        }
      }
    }
  };

  const isAdmin = role === "admin" || role === "publisher";
  const showRoyalties = isAdmin || role === "author";
  const showCountry = isAdmin || role === "publisher" || role === "editor";
  const showPrinted = isAdmin || role === "publisher";

  return (
    <section className="graphs">
      <div className="graphs-row">
        {showCountry && (
          <div className="graph-card">
            <h4>Books Sold per Country</h4>
            <div className="chart-container">
              <Bar data={soldByCountry} options={barOptions} />
            </div>
          </div>
        )}

        <div className="graph-card">
          <h4>Books Sold per Month</h4>
          <div className="chart-container">
            <Line data={soldByMonth} options={lineOptions} />
          </div>
        </div>
      </div>

      <div className="graphs-row">
        {showRoyalties && (
          <div className="graph-card small">
            <h4>Royalties Distribution</h4>
            <div className="chart-container">
              <Doughnut data={royaltiesThisMonth} options={pieOptions} />
            </div>
          </div>
        )}

        {showPrinted && (
          <div className="graph-card small">
            <h4>Books Printed per Month</h4>
            <div className="chart-container">
              <Line data={printedByMonth} options={lineOptions} />
            </div>
          </div>
        )}

        {isAdmin && (
          <div className="graph-card small">
            <h4>Top Authors by Sales</h4>
            <div className="chart-container">
              <Bar data={topAuthors} options={horizontalBarOptions} />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}