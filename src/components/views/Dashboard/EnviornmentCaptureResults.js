import React, { useEffect, useRef, useState } from 'react';
import './EnviornmentCaptureResults.css';
import ChartContainer from '../../common/ChartContainer';

const Table = ({ heading, body }) => {
  return (
    <div className="table-section">
      <h2 className="table-title">Hourly Forecast of Blueberry Grow Pod</h2>
      <table className="table">
        <thead>
          <tr>
            {heading.map((head, headID) => <th key={headID}>{head}</th>)}
          </tr>
        </thead>
        <tbody>
          {body.map((rowContent, rowID) => (
            <TableRow rowContent={rowContent} key={rowID} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

const TableRow = ({ rowContent }) => {
  return (
    <tr>
      {Object.values(rowContent).map((val, rowID) => (
        <td key={rowID}>{val}</td>
      ))}
    </tr>
  );
};

const EnviornmentCaptureResults = () => {
  const [activeElement, setActiveElement] = useState('graph1'); // Initial active element

  // Function to handle element selection
  const handleElementSelect = (element) => {
    setActiveElement(element);
  };
  const heading = ['CaptureTime', 'Temperature', 'Humidity', 'CO2', 'Lighting', 'pH', 'EC'];
  const mockData = [
    {
      CaptureTime: formatDate(new Date().setHours(7, 0, 0)),
      Temperature: '25°C',
      Humidity: '60%', // Add appropriate value
      CO2: '300ppm', // Add appropriate value
      Lighting: '3500 lux',
      pH: '6.2',
      EC: '1.8 mS/cm',
    },
    {
      CaptureTime: formatDate(new Date().setHours(8, 0, 0)),
      Temperature: '27°C',
      Humidity: '50%', // Add appropriate value
      CO2: '200ppm', // Add appropriate value
      Lighting: '4000 lux',
      pH: '5.8',
      EC: '1.5 mS/cm',
    },
    {
      CaptureTime: formatDate(new Date().setHours(9, 0, 0)),
      Temperature: '23°C',
      Humidity: '40%', // Add appropriate value
      CO2: '250ppm', // Add appropriate value
      Lighting: '3000 lux',
      pH: '6.0',
      EC: '2.0 mS/cm',
    },
    {
      CaptureTime: formatDate(new Date().setHours(10, 0, 0)),
      Temperature: '26°C',
      Humidity: '40%', // Add appropriate value
      CO2: '200ppm', // Add appropriate value
      Lighting: '3000 lux',
      pH: '6.4',
      EC: '2.0 mS/cm',
    },
    {
      CaptureTime: formatDate(new Date().setHours(11, 0, 0)),
      Temperature: '24°C',
      Humidity: '40%', // Add appropriate value
      CO2: '300ppm', // Add appropriate value
      Lighting: '3800 lux',
      pH: '6.2',
      EC: '1.7 mS/cm',
    },
    {
      CaptureTime: formatDate(new Date().setHours(12, 0, 0)),
      Temperature: '24°C',
      Humidity: '40%', // Add appropriate value
      CO2: '500ppm', // Add appropriate value
      Lighting: '3800 lux',
      pH: '6.2',
      EC: '1.7 mS/cm',
    },
    {
      CaptureTime: formatDate(new Date().setHours(13, 0, 0)),
      Temperature: '24°C',
      Humidity: '40%', // Add appropriate value
      CO2: '430ppm', // Add appropriate value
      Lighting: '3800 lux',
      pH: '6.2',
      EC: '1.7 mS/cm',
    },
    {
      CaptureTime: formatDate(new Date().setHours(14, 0, 0)),
      Temperature: '24°C',
      Humidity: '40%', // Add appropriate value
      CO2: '320ppm', // Add appropriate value
      Lighting: '3800 lux',
      pH: '6.2',
      EC: '1.7 mS/cm',
    },
    {
      CaptureTime: formatDate(new Date().setHours(15, 0, 0)),
      Temperature: '24°C',
      Humidity: '40%', // Add appropriate value
      CO2: '432ppm', // Add appropriate value
      Lighting: '3800 lux',
      pH: '6.2',
      EC: '1.7 mS/cm',
    },
  ];
  function formatDate(date) {
    const options = { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(date).toLocaleString('en-US', options);
  }

  //Temp, humidity, co2, light, pH, Electrical Conductivity, oxygen
  return (
    <div className="container">
      <div className="section">
        <h2 className="section-title">Garden Monitoring System</h2>
        
        <div className="graph-section">
        <h3>Vital Graphs</h3>
          <button onClick={() => handleElementSelect('graph1')}>Vital Graphs</button>
          <button onClick={() => handleElementSelect('graph2')}>Graph 2</button>
          <button onClick={() => handleElementSelect('graph3')}>Graph 3</button>

          {activeElement === 'graph1' && <ChartContainer />}
          {activeElement === 'graph2' && <div>Render Graph 2 here</div>}

        </div>
      </div>
      <div className="section">
        <h2 className="section-title">Air Quality Monitor (AQI Sensor)</h2>
        <Table heading={heading} body={mockData} />
      </div>
    </div>
  );
};

export default EnviornmentCaptureResults;



// Simulated function to fetch datasets from an API
    // const fetchDatasetsFromAPI = () => {
    //     return new Promise((resolve) => {
    //         setTimeout(() => {
    //             const newDatasets = [
    //                 {
    //                     label: 'First dataset',
    //                     data: [33, 53, 85, 41, 44, 65],
    //                     fill: true,
    //                     backgroundColor: 'rgba(75,192,192,0.2)',
    //                     borderColor: 'rgba(75,192,192,1)',
    //                     showLine: true, // Set showLine to true

    //                 },
    //                 {
    //                     label: 'Second dataset',
    //                     data: [33, 25, 35, 51, 54, 76],
    //                     fill: false,
    //                     borderColor: '#742774',
    //                 },
    //             ];

    //             resolve(newDatasets);
    //         }, 2000); // Simulate a 2-second delay for the API call
    //     });
    // };

    // useEffect(() => {
    //     // Simulating an asynchronous data fetching process
    //     const fetchData = async () => {
    //         // Simulate fetching new datasets from an API
    //         //const newDatasets = await fetchDatasetsFromAPI(); // Replace with your actual API call
    //         const newDatasets = [
    //             {
    //                 label: 'First dataset',
    //                 data: [33, 53, 85, 41, 44, 65],
    //                 fill: true,
    //                 backgroundColor: 'rgba(75,192,192,0.2)',
    //                 borderColor: 'rgba(75,192,192,1)',
    //                 showLine: true, // Set showLine to true

    //             },
    //             {
    //                 label: 'Second dataset',
    //                 data: [33, 25, 35, 51, 54, 76],
    //                 fill: false,
    //                 borderColor: '#742774',
    //             },
    //         ];
    //         // Update the datasets state with the new data
    //         setDatasets(newDatasets);
    //         // console.log("updateing datasets" + newDataset.Promise);

    //     };

    //     fetchData();
    // }, []);


    // const chartRef = useRef(null);
    // const [datasets, setDatasets] = useState([]);

    // useEffect(() => {
    //     if (chartRef.current && chartRef.current.chartInstance) {
    //       chartRef.current.chartInstance.destroy();
    //     }

    //     if (chartRef.current && datasets.length > 0) {
    //       const data = {
    //         labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    //         datasets: [...datasets],
    //       };

    //       const options = {
    //         responsive: true,
    //         // Add additional chart options here
    //         plugins: [Filler], // Add the Filler plugin to the plugins option
    //         scales: {
    //             y: {
    //               beginAtZero: true
    //             }
    //           }
    //       };
    //       chartRef.current.chartInstance = new ChartJS("chart", {

    //         type: "line",
    //         data: data,
    //         options: options,

    //       });
    //       console.log("chart instance " +  chartRef.current.chartInstance);
    //     }
    //   }, [datasets]);