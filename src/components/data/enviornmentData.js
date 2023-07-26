import LineChart from '../charts/LineChart';
const generateTemperatureData = (lowerBoundary, upperBoundary) => {
    const generateHour = (hour) => {
        return hour.toString().padStart(2, "0") + ":00";
    };

    const data = Array.from({ length: 24 }, (_, hour) => ({
        name: generateHour(hour),
        temp: lowerBoundary + Math.random() * (upperBoundary - lowerBoundary), // Generate random temperature values between 60 and 70
    }));

    return data;
};
export const EnviornmentFactors = [
    {
        title: "Temperature",
        description: "Both air and soil temperature affect plant growth. Different plants have specific temperature requirements for optimal growth, and extreme temperatures can cause stress or damage.",
        chart: <LineChart data={generateTemperatureData(60, 70)} lowerBoundary={60} upperBoundary={70} />
    },
    {
        title: "Humidity",
        description: "Humidity levels impact plant transpiration rates and water uptake. High humidity can lead to fungal diseases, while low humidity may cause water stress in plants.",
        chart: <LineChart data={generateTemperatureData(60, 70)} lowerBoundary={60} upperBoundary={70} />
    },
    {
        title: "Light",
        description: "The amount and intensity of light significantly influence photosynthesis, flowering, and fruiting in plants",
        chart: <LineChart data={generateTemperatureData(60, 70)} lowerBoundary={60} upperBoundary={70} />
    },
    {
        title: "Rainfall/Rainwater",
        description: "The quantity and frequency of rainfall or irrigation directly affect soil moisture levels and plant water availability.",
        chart: <LineChart data={generateTemperatureData(60, 70)} lowerBoundary={60} upperBoundary={70} />
    },
    {
        title: "Wind",
        description: "Strong winds can lead to excessive transpiration and physical damage to plants.",
        chart: <LineChart data={generateTemperatureData(60, 70)} lowerBoundary={60} upperBoundary={70} />
    },


];
export const SoilHealthNutrientsFactors = [
    {
        title: "Nitrogen (N)",
        description: "Both air and soil temperature affect plant growth. Different plants have specific temperature requirements for optimal growth, and extreme temperatures can cause stress or damage.",
        chart: <LineChart data={generateTemperatureData(60, 70)} lowerBoundary={60} upperBoundary={70} />
    },
    {
        title: "Phosphorous (P)",
        description: "Humidity levels impact plant transpiration rates and water uptake. High humidity can lead to fungal diseases, while low humidity may cause water stress in plants.",
        chart: <LineChart data={generateTemperatureData(60, 70)} lowerBoundary={60} upperBoundary={70} />
    },
    {
        title: "Potasium (K)",
        description: "The amount and intensity of light significantly influence photosynthesis, flowering, and fruiting in plants",
        chart: <LineChart data={generateTemperatureData(60, 70)} lowerBoundary={60} upperBoundary={70} />
    },
    {
        title: "Rainfall/Rainwater",
        description: "The quantity and frequency of rainfall or irrigation directly affect soil moisture levels and plant water availability.",
        chart: <LineChart data={generateTemperatureData(60, 70)} lowerBoundary={60} upperBoundary={70} />
    },
    {
        title: "Wind",
        description: "Strong winds can lead to excessive transpiration and physical damage to plants.",
        chart: <LineChart data={generateTemperatureData(60, 70)} lowerBoundary={60} upperBoundary={70} />
    },
];
export const PlantInfo = [
    {
        title: "Plant Height",
        description: "23 ft",
    },
    {
        title: "Leaf Health",
        description: "Monitoring the condition of leaves helps detect nutrient deficiencies, pests, or diseases"
    },
    {
        title: "Flowering/Fruiting",
        description: "Observing the occurrence and frequency of flowering and fruiting stages is essential for evaluating plant health and reproductive success."
    },
    {
        title: "Growth Rate",
        description: "Analyzing the rate at which plants grow can provide valuable information about their response to environmental conditions"
    }
];