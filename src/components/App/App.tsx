import { Routes, Route} from "react-router-dom";

import Header from '../Header/Header';
import MapPage from "../Pages/MapPage/MapPage";
import TimelinePage from "../Pages/TimelinePage/TimelinePage";
import ComparePage from "../Pages/ComparePage/ComparePage";
import AlertsPage from "../Pages/AlertsPage/AlertsPage";
import ArchivePage from "../Pages/ArchivePage/ArchivePage";
import LearnPage from "../Pages/LearnPage/LearnPage";
import DataPage from "../Pages/DataPage/DataPage";

import './App.css';

function App() {
	return (
		<>
			<Header/>
			<Routes>
				<Route path="/" element={<MapPage/>} />
				<Route path="/timeline" element={<TimelinePage/>} />
				<Route path="/compare" element={<ComparePage/>} />
				<Route path="/alerts" element={<AlertsPage/>} />
				<Route path="/archive" element={<ArchivePage/>} />
				<Route path="/learn" element={<LearnPage/>} />
				<Route path="/data" element={<DataPage/>} />
			</Routes>
		</>
	)
}

export default App
