import { Routes, Route} from "react-router-dom";

import Header from '../Header/Header';
import MapPage from "../Pages/MapPage/MapPage";
import TimelinePage from "../Pages/TimelinePage/TimelinePage";
import ComparePage from "../Pages/ComparePage/ComparePage";
import AlertsPage from "../Pages/AlertsPage/AlertsPage";
import ArchivePage from "../Pages/ArchivePage/ArchivePage";
import LearnPage from "../Pages/LearnPage/LearnPage";
import DataPage from "../Pages/DataPage/DataPage";
import EventPage from "../Pages/EventPage/EventPage";

import './App.css';

type QuakeData = { 
	id: number, 
	magnitude: number, 
	deep: number, 
	time: string,
	region: string
};

export type MapePageProps = {
	quake: QuakeData[]
};

export type EventPageProps = {
	quake: QuakeData[]
};

function App() {
	const quake: QuakeData[] = [
		{
			id: 1, 
			magnitude: 5.8,
			deep: 35,
			time: '12 хв',
			region: 'Японія'
		},
		{
			id: 2, 
			magnitude: 4.9,
			deep: 62,
			time: '36 хв',
			region: 'Чилі'
		},
		{
			id: 3, 
			magnitude: 6.1,
			deep: 28,
			time: '1 год',
			region: 'Індонезія'
		},
		{
			id: 4, 
			magnitude: 4.4,
			deep: 10,
			time: '2 год',
			region: 'Туреччина'
		},
		{
			id: 5, 
			magnitude: 5.2,
			deep: 48,
			time: '3 год',
			region: 'Нова Зеландія'
		},
		{
			id: 6, 
			magnitude: 4.7,
			deep: 20,
			time: '5 год',
			region: 'Аляска'
		},
		{
			id: 7, 
			magnitude: 5.5,
			deep: 70,
			time: '9 год',
			region: 'Японія'
		}
	];

	return (
		<>
			<Header/>
			<Routes>
				<Route path="/" element={<MapPage quake={quake}/>} />
				<Route path="/timeline" element={<TimelinePage/>} />
				<Route path="/compare" element={<ComparePage/>} />
				<Route path="/alerts" element={<AlertsPage/>} />
				<Route path="/archive" element={<ArchivePage/>} />
				<Route path="/learn" element={<LearnPage/>} />
				<Route path="/data" element={<DataPage/>} />
				<Route path="/event/:id" element={<EventPage quake={quake}/>} />
			</Routes>
		</>
	)
}

export default App
