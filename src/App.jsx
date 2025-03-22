import "bootstrap/dist/css/bootstrap.min.css";
import Navibar from './components/Navibar';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Introduction from './pages/Введение в JavaScript 1.1'
import Reference from './pages/Справочники и спецификации 1.2'
import Editor from './pages/Редакторы кода 1.3'
import Console from './pages/Консоль разработчика 1.4'
import ScrollToTop from './components/ScrollToTop'
import HelloWorld from './pages/Hello World 2.1'
import StructureCode from './pages/StructureCode 2.2'
import UseStrict from './pages/UseStrict 2.3'
import Variables from './pages/Variables 2.4 '
import DataTypes from './pages/DataTypes 2.5'
import InteractionAlert from './pages/Interaction: alert, prompt, confirm 2.6'

export default function App() {
	return (
	<>
		<Router>
		<ScrollToTop /> 
			<Navibar />
			<Routes>
				<Route path="/" element={<Home />} />
				 <Route path="/Introduction" element={<Introduction /> } />{/* 1.1 */}
				<Route path="/Reference" element={<Reference /> } />{/* 1.2 */}
				<Route path="/Editor" element={<Editor /> } />{/* 1.3 */}
				<Route path="/Console" element={<Console /> } />{/* 1.4 */}
				<Route path="/HelloWorld" element={<HelloWorld /> } />{/* 2.1 */}
				<Route path="/StructureCode" element={<StructureCode /> } />{/* 2.2 */}
				<Route path="/UseStrict" element={<UseStrict /> } />{/* 2.3 */}
				<Route path="/Variables" element={<Variables /> } />{/* 2.4 */}
				<Route path="/DataTypes" element={<DataTypes /> } />{/* 2.5 */}
				<Route path="/InteractionAlert" element={<InteractionAlert /> } />{/* 2.6 */}
			</Routes>
		</Router> 
		</>
	);
}
