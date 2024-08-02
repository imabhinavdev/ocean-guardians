import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import AwarenessCard from '../components/cards/AwarenessCard';

const Awareness = () => {
  const barChartRef = useRef(null);
  const pieChartRef = useRef(null);

  useEffect(() => {
    if (barChartRef.current && pieChartRef.current) {
      // Destroy any existing chart instances on these canvas elements
      if (barChartRef.current.chart) {
        barChartRef.current.chart.destroy();
      }
      if (pieChartRef.current.chart) {
        pieChartRef.current.chart.destroy();
      }

      // Bar Chart
      barChartRef.current.chart = new Chart(barChartRef.current, {
        type: 'bar',
        data: {
          labels: ['Plastic', 'Oil Spills', 'Industrial Waste', 'Sewage'],
          datasets: [{
            label: 'Pollution Levels (tons)',
            data: [8000000, 1300000, 6400000, 3200000],
            backgroundColor: [
              'rgba(75, 192, 192, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(255, 99, 132, 0.2)'
            ],
            borderColor: [
              'rgba(75, 192, 192, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(255, 99, 132, 1)'
            ],
            borderWidth: 5
          }]
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              display: false
            },
            title: {
              display: true,
              text: 'Pollution Levels (tons)',
              font: {
                size: 18
              }
            }
          },
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });

      // Pie Chart
      pieChartRef.current.chart = new Chart(pieChartRef.current, {
        type: 'pie',
        data: {
          labels: ['Fish', 'Coral', 'Algae', 'Mammals'],
          datasets: [{
            data: [33000, 6000, 72500, 1130],
            backgroundColor: ['#0077be', '#00aaff', '#00cccc', '#009999'],
            borderWidth: 3
          }]
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: 'Marine Life Composition',
              font: {
                size: 18
              }
            }
          }
        }
      });
    }

    // Cleanup function to destroy charts on component unmount
    return () => {
      if (barChartRef.current && barChartRef.current.chart) {
        barChartRef.current.chart.destroy();
      }
      if (pieChartRef.current && pieChartRef.current.chart) {
        pieChartRef.current.chart.destroy();
      }
    };
  }, []);

  return (
    <main className="p-5 max-w-screen-xl m-auto text-[#333] ">

      <section id="home" className="p-4 mt-20">
        <h2 className="text-2xl font-semibold mb-2">Take a Dive</h2>
        <p>The ocean is a vast and mysterious world that covers over 70% of the Earth's surface. It is home to a
          diverse range of life forms, from the tiniest plankton to the largest whales. Understanding and preserving this
          incredible biodiversity is crucial for the health of our planet. However, this delicate beauty is under threat due to various
          human activities that are causing unprecedented levels of pollution.</p>
      </section>

      <section id="about" className="p-4">
        <h2 className="text-2xl font-semibold mb-2">Impact Of Pollution on Marine Life</h2>
        <ul className="list-disc ml-5">
          <li>Millions of tons of plastic waste end up in the ocean each year, harming marine animals that ingest or
            become entangled in plastic debris.</li>
          <li>Industrial runoff, agricultural chemicals, and oil spills introduce toxic substances into marine
            environments, poisoning marine life and disrupting ecosystems.</li>
          <li>Rising sea temperatures and ocean acidification, caused by increased carbon dioxide levels, are
            bleaching coral reefs and altering the habitats of many marine species.</li>
        </ul>
      </section>

      <main className="flex justify-evenly p-4">
        <section id="awareness" className="text-center mb-12">
          <h1 className="text-2xl font-semibold mb-4">Marine Life Awareness</h1>
          <canvas ref={pieChartRef} className="mx-auto max-w-[600px] w-full h-[400px]"></canvas>
        </section>

        <section id="pollution" className="text-center mb-12">
          <h1 className="text-2xl font-semibold mb-4">Pollution Reports</h1>
          <canvas ref={barChartRef} className="mx-auto max-w-[600px] w-full h-[350px]"></canvas>
        </section>
      </main>

      <section id="facts" className="flex justify-around flex-wrap p-4">
        {data.map((item, index) => (
          <AwarenessCard key={index} title={item.title} desc={item.desc} />
        ))}
      </section>
    </main>
  );
};

export default Awareness;



const data = [
  {
    title: "Ocean Health is Critical for Human Survival",
    desc: "Oceans produce at least 50% of the planet's oxygen, which is essential for human life. They also absorb about 30% of the carbon dioxide produced by humans, buffering the impacts of global warming."
  },
  {
    title: "Coral Reefs are Vital and Vulnerable",
    desc: "Coral reefs support a vast number of marine species and provide critical ecosystem services, such as coastal protection and tourism revenue. They are highly sensitive to changes in temperature and acidity, making them particularly vulnerable to climate change."
  },
  {
    title: "Plastic Pollution is a Major Threat",
    desc: "Approximately 8 million tons of plastic enter the oceans each year, causing harm to marine life and ecosystems. This pollution can result in the ingestion and entanglement of marine animals, and microplastics can enter the human food chain through seafood."
  },
  {
    title: "Deep Sea Universe",
    desc: "More than 80% of the ocean remains unexplored. The deep sea holds potential for new scientific discoveries, including new species and medical compounds, but it is also vulnerable to human exploitation and pollution."
  }
]