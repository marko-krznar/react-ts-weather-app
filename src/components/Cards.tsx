import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faWind,
	faTemperatureArrowUp,
	faTemperatureArrowDown,
	faDroplet,
	faCircleUp,
	faCircleDown,
	faEye,
	faCloud,
} from "@fortawesome/free-solid-svg-icons";

import { currentWeather } from "../App";
import CardItem from "./CardItem";

function Cards() {
	const weatherArray = [
		{
			iconName: <FontAwesomeIcon icon={faWind} />,
			itemName: "Wind",
			value: currentWeather.wind.speed,
			measureUnit: "km/h",
		},
		{
			iconName: <FontAwesomeIcon icon={faTemperatureArrowUp} />,
			itemName: "Max Temperature",
			value: currentWeather.main.temp_max,
			measureUnit: "°C",
		},
		{
			iconName: <FontAwesomeIcon icon={faTemperatureArrowDown} />,
			itemName: "Min Temperature",
			value: currentWeather.main.temp_min,
			measureUnit: "°C",
		},
		{
			iconName: <FontAwesomeIcon icon={faDroplet} />,
			itemName: "Humidity",
			value: currentWeather.main.humidity,
			measureUnit: "%",
		},
		{
			iconName: <FontAwesomeIcon icon={faCircleUp} />,
			itemName: "Sunrise",
			value: currentWeather.sys.sunrise,
			measureUnit: "h",
		},
		{
			iconName: <FontAwesomeIcon icon={faCircleDown} />,
			itemName: "Sunrise",
			value: currentWeather.sys.sunset,
			measureUnit: "h",
		},
		{
			iconName: <FontAwesomeIcon icon={faEye} />,
			itemName: "Visibility",
			value: currentWeather.visibility,
			measureUnit: "km",
		},
		{
			iconName: <FontAwesomeIcon icon={faCloud} />,
			itemName: "Pressure",
			value: currentWeather.main.pressure,
			measureUnit: "hpa",
		},
	];

	return (
		<div className="wa-container wa-cards">
			<span className="wa-title">Today's Highlights</span>
			<div className="wa-cards-wrapper">
				{weatherArray.map((weatherItem) => (
					<CardItem
						icon={weatherItem.iconName}
						item={weatherItem.itemName}
						value={weatherItem.value}
						mesure={weatherItem.measureUnit}
					/>
				))}
			</div>
		</div>
	);
}

export default Cards;
