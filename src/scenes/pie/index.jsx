import { Box } from "@mui/material";
import Header from "../../components/Header";
import PieChart from "../../components/PieChart";

const pie = () => {
  return (
    <Box m="20px">
      <Header title="pieChart" subtitle="display data in a Pie chart" />
      <Box height="75vh">
        <PieChart />
      </Box>
    </Box>
  );
};

export default pie;
