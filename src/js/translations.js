module.exports = {
// table headings
	"(Sensor)": {
		"de": "Sensor",
		"bg": "Сензор",
	},
	"PM10 &micro;g/m&sup3;": {},
	"PM2.5 &micro;g/m&sup3;": {},
	"AQI US": {},
	"Temperature °C": {
		"de": "Temperatur °C",
		"bg": "Температура  °C",
	},
	"Humidity %": {
		"de": "Feuchtigkeit %",
		"bg": "Влажност %",
	},
	"Pressure hPa": {
		"de": "Luftdruck hPa",
		"bg": "Атмосферно налягане hPa",
	},
	"Noise dBA": {
		"de": "Lautstärke dBA",
		"bg": "Шум dBA",
	},

// select options
	" Temperature": {
		"de": " Temperatur",
		"bg": "Температура",
	},
	" rel. Humidity": {
		"de": " rel. Luftfeuchte",
		"bg": "пр. Влажност",
	},
	" Pressure": {
		"de": " Luftdruck",
		"bg": "Атмосферно налягане",
	},
	" Noise": {
		"de": " Lautstärke",
		"bg": "Шум",
	},

// sidebar
	"Hide explanation": {
		"de": "Erklärung ausblenden",
		"bg": "Скриване на обяснението",
	},
	"Show explanation": {
		"de": "Erklärung einblenden",
		"bg": "Показване на обяснението",
	},
	"(close)": {
		"de": "(schließen)",
		"bg": "(затвори)",
	},

// last update
	"Last update": {
		"de": "Letztes Update",
		"bg": "Последна актуализация",
	},

// explanation
	"<p>The hexagons represent the median of the current values of the sensors which are contained in the area, according to the option selected (PM10, PM2.5, temperature, relative humidity, pressure, AQI). You can refer to the scale on the left side of the map.</p> \
<p>By clicking on a hexagon, you can display a list of all the corresponding sensors as a table. The first column lists the sensor-IDs. In the first line, you can see the amount of sensor in the area and the median value.</p> \
<p>By clicking on the plus symbol next to a sensor ID, you can display two graphics: the individual measurements for the last 24 hours and the 24 hours floating mean for the last seven days. For technical reasons, the first of the 8 days displayed on the graphic has to stay empty.\
The values are refreshed every 5 minutes in order to fit with the measurement frequency of the Airrohr sensors.</p> \
<p>The Air Quality Index (AQI) is calculated according to the recommandations of the United States Environmental Protection Agency. Further information is available on the official page.(<a href='https://www.airnow.gov/index.cfm?action=aqibasics.aqi'>Link</a>). Hover over the AQI scale to display the levels of health concern.</p>": {
	"de": "<p>Die Kacheln zeigen aktuell den Durchschnitt der PM10-Werte aller in der Zelle befindlichen Sensoren. Diese werden nach der Skala unten links entsprechend eingefärbt.</p> \
<p>Die Zahlen in der ersten Spalte enthält die Sensor-IDs. Befinden sich mehrere Sensoren in der Kachel, so wird der Durchschnittswerte aller in der Zelle enthaltenen Sensoren berechnet.</p> \
<p><b>Achtung</b>: Wir zeigen auf der Karte die Werte der <b>letzten 5 Minuten</b> an. Die von den jeweiligen Landesbehörden veröffentlichen Werte werden als ein 24-Stunden-Mittelwert angegeben. Dadurch können die Werte deutlich vom 24-Stunden-Mittelwert abweichen.</p> \
<p>Ein Klick auf das Plus vor der Sensor-ID blendet zwei Grafiken ein. Die erste Grafik 'Last 24 hours' zeigt den Tagesverlauf für die letzten 24 Stunden an. \
Die zweite Grafik zeigt den '24 h floating average' (den gleitenden 24-Stunden-Mittelwert) der letzten 7 Tage.</p>",
	"bg": "<p>Шестоъгълниците представляват средната стойност на текущите стойности на сензорите, които се намират в областта, според избраната опция (PM10, PM2.5, температура, относителна влажност, атмосферно налягане, AQI). Можете да се сравните със скалата отляво на картата.</p> \
<p>Числата в първата колона съдържа идентификатори на сензора. Ако в шестоъгълника има няколко сензора, се изчисляват средните стойности на всички сензори, съдържащи се в клетката.</p> \
<p><b>Внимание</b>: Показваме стойностите на <b> последните 5 минути </b> на картата. Стойностите, публикувани от съответните държавни органи, се дават като средно за 24 часа. В резултат на това стойностите могат да се отклонят значително от средната за 24 часа.</p> \
<p>Щракването върху плюса пред идентификатора на сензора показва две графики. Първата графика „Последни 24 часа“ показва хода на деня за последните 24 часа. \
Втората графика показва '24-часовата плаваща средна стойност' (24-часовата подвижна средна стойност) за последните 7 дни.</p>",
	},

// AQI descriptions
	"Good<div class='tooltip-div'>Air quality is considered satisfactory, and air pollution poses little or no risk.</div>": {
		"de": "Gut<div class='tooltip-div'>Die Qualität der Luft ist zufriedenstellend. Die Luftverschmutzung stellt ein geringes oder kein Risiko dar.</div>",
		"bg": "Добро<div class='tooltip-div'> Качеството на въздуха се счита за задоволително, а замърсяването на въздуха представлява малък или никакъв риск.",
	},
	"Moderate<div class='tooltip-div'>Air quality is acceptable; however, for some pollutants there may be a moderate health concern for a very small number of people who are unusually sensitive to air pollution.</div>": {
		"de": "Mäßig<div class='tooltip-div'>Die Luftqualität ist insgesamt akzeptabel. Bei manchen Schadstoffen bestehen jedoch für einen sehr kleinen Personenkreis, der außergewöhnlich empfindlich auf Luftverschmutzung reagiert, eventuell Gesundheitsbedenken.</div>",
		"bg": "Умерено<div class='tooltip-div'>Качеството на въздуха е приемливо; Въпреки това, за някои замърсители обаче може да има опасения за здравето на много малка група от хора, които са изключително чувствителни към замърсяването на въздуха.</div>",	
	},
	"Unhealthy for Sensitive Groups<div class='tooltip-div'>Members of sensitive groups may experience health effects. The general public is not likely to be affected.</div>": {
		"de": "Ungesund für empfindliche Personen<div class='tooltip-div'>Bei empfindlichen Personengruppen können gesundheitliche Auswirkungen auftreten. Die allgemeine Öffentlichkeit ist höchstwahrscheinlich nicht betroffen.</div>",
		"bg": "Нездравословно за чувствителни хора <div class = 'tooltip-div'> Въздействието върху здравето може да възникне в чувствителни групи. Малко вероятно е да се засегне широката общественост.</div>",	
	},
	"Unhealthy<div class='tooltip-div'>Everyone may begin to experience health effects; members of sensitive groups may experience more serious health effects.</div>": {
		"de": "Ungesund<div class='tooltip-div'>Erste gesundheitliche Auswirkungen können sich bei allen Personengruppen einstellen. Bei empfindlichen Personengruppen können ernstere gesundheitliche Auswirkungen auftreten.</div>",
		"bg": "Нездравословно<div class='tooltip-div'>Първите ефекти върху здравето могат да се появят при всички групи хора. В чувствителни групи могат да се появят сериозни последици за здравето.</div>",	
	},
	"Very Unhealthy<div class='tooltip-div'>Health alert: everyone may experience more serious health effects.</div>": {
		"de": "Sehr ungesund<div class='tooltip-div'>Gesundheitswarnung aufgrund einer Notfallsituation. Die gesamte Bevölkerung ist voraussichtlich betroffen.</div>",
		"bg": "Много нездравословно<div class='tooltip-div'>Здравен сигнал: Всеки може да изпита по-сериозни последици за здравето.</div>",	
	},
	"Hazardous<div class='tooltip-div'>Health warnings of emergency conditions. The entire population is more likely to be affected.</div>": {
		"de": "Gefährlich<div class='tooltip-div'>Gesundheitsalarm: Jeder könnte ernstere Auswirkungen auf die Gesundheit verspüren</div>",
		"bg": "Опасно<div class='tooltip-div'>Здравни предупреждения за спешни състояния. Цялото население е много вероятно да бъде засегнато.</div>",
	},

// Betterplace
	"Donate for Luftdaten.info (Hardware, Software) now on Betterplace.org": {
		"de": "Jetzt spenden für 'Luftdaten.info' (Hardware, Software) auf betterplace.org!",
		"nl": "Doneer voor 'Luftdaten.info' op betterplace.org",
		"bg": "Дарете за 'Sensor.community' на betterplace.org",
	},
	"Donate for<br/>Luftdaten.info<br/>now on<br/><span>Betterplace.org</span>": {
		"de": "Jetzt für<br/>Luftdaten.info<br/>spenden auf<br/><span>Betterplace.org</span>",
		"nl": "Doneer vor<br/>Luftdaten.info<br/>op<br/><span>Betterplace.org</span>",
		"bg": "Дарете за 'Sensor.community' на betterplace.org",
	},
}
