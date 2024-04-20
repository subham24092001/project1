import React from "react";
import dataset from "../../data/Wine-Data.json";
import "./Stats.css";
import { calculateFlavanoidsStats, calculateGammaStats } from "../../utils";
import Table from "../Table/Table";

// Define the Stats component
function Stats() {
  // Get unique class numbers from the dataset
  const classNumbers = Array.from(new Set(dataset.map((item) => item.Alcohol)));

  // Calculate flavanoids statistics for each class
  const flavanoidsClassStats = classNumbers.map((classNumber) => {
    const FlavanoidclassData = dataset.filter((item) => item.Alcohol === classNumber);
    return calculateFlavanoidsStats(FlavanoidclassData);
  });

  // Calculate gamma statistics for each class
  const gammaStatsByClass = classNumbers.map((gammaClass) => {
    const gammaClassData = dataset.filter((item) => item.Alcohol === gammaClass);
    return calculateGammaStats(gammaClassData);
  });

  // Define measure names for the tables
  const measureNames = ["Mean", "Median", "Mode"];

  // Render the component
  return (
    <div className="stats-container">
      {/* Flavanoids Table */}
      <Table title="Flavanoids Stats" classNumbers={classNumbers} classStats={flavanoidsClassStats} measureNames={measureNames} type={"Flavanoids"} />

      {/* Gamma Tables */}
      <Table classNumbers={classNumbers} classStats={gammaStatsByClass} measureNames={measureNames} type={"Gamma"} />
    </div>
  );
}

// Export the Stats component as the default export
export default Stats;
