module.exports = {
// main page
	"Loading data...": {
		"de": "Daten werden geladen ...",
		"ru": "Данные загружаются..."
	},
// table headings
	"(Sensor)": {
		"de": "Sensor",
		"bg": "Сензор",
		"ru": "Сенсор",
		"fr": "Détecteur"
	},
	"PM10 &micro;g/m&sup3;": {},
	"PM2.5 &micro;g/m&sup3;": {},
	"AQI US": {},
	"Temperature °C": {
		"de": "Temperatur °C",
		"bg": "Температура °C",
		"ru": "Температура °C",
		"fr": "Température °C"
	},
	"Humidity %": {
		"de": "Feuchtigkeit %",
		"bg": "Влажност %",
		"ru": "Влажность %",
		"fr": "Humidité %"
	},
	"Pressure hPa": {
		"de": "Luftdruck hPa",
		"bg": "Атмосферно налягане hPa",
		"ru": "Атмосферное давление hPa",
		"fr": "Pression hPa"
	},
	"Noise dBA": {
		"de": "Lautstärke dBA",
		"bg": "Шум dBA",
		"ru": "Шум dBA",
		"fr": "Niveau sonore dBA"
	},

// select options
	" Official AQI US": {
		"de": "Luftqualitäts-Index (US)",
		"ru": "Шкала AQI (США)"
	},
	" Temperature": {
		"de": " Temperatur",
		"bg": "Температура",
		"ru": "Температура",
		"fr": " Température"
	},
	" rel. Humidity": {
		"de": " rel. Luftfeuchte",
		"bg": "пр. Влажност",
		"ru": "Влажность",
		"fr": " Humidité rel."
	},
	" Pressure": {
		"de": " Luftdruck",
		"bg": "Атмосферно налягане",
		"ru": "Давление",
		"fr": " Pression"
	},
	" Noise": {
		"de": " Lautstärke",
		"bg": "Шум",
		"ru": "Шум",
		"fr": " Niveau sonore"
	},

// layer options
	"Local labs": {
		de: "Lokale Labs"
	},
	"Wind layer": {
		de: "Wind Layer"
	},

// sidebar
	"Hide explanation": {
		"de": "Erklärung ausblenden",
		"bg": "Скриване на обяснението",
		"ru": "Скрыть пояснения",
		"fr": "Cacher les explications"
	},
	"Show explanation": {
		"de": "Erklärung einblenden",
		"bg": "Показване на обяснението",
		"ru": "Показать пояснения",
		"fr": "Montrer les explications"
	},
	"(close)": {
		"de": "(schließen)",
		"bg": "(затвори)",
		"ru": "(закрыть)",
		"fr": "(Fermer)"
	},

// last update
	"Last update": {
		"de": "Letztes Update",
		"bg": "Последна актуализация",
		"ru": "Последнее обновление",
		"fr": "Dernière mise à jour"
	},

// explanation
	"<p>The hexagons represent the median of the current values of the sensors which are contained in the area, according to the option selected (PM10, PM2.5, temperature, relative humidity, pressure, AQI). You can refer to the scale on the left side of the map.</p> \
<p>By clicking on a hexagon, you can display a list of all the corresponding sensors as a table. The first column lists the sensor-IDs. In the first line, you can see the amount of sensor in the area and the median value.</p> \
<p>By clicking on the plus symbol next to a sensor ID, you can display two graphics: the individual measurements for the last 24 hours and the 24 hours floating mean for the last seven days. For technical reasons, the first of the 8 days displayed on the graphic has to stay empty.\
The values are refreshed every 5 minutes in order to fit with the measurement frequency of the Airrohr sensors.</p> \
<p>The Air Quality Index (AQI) is calculated according to the recommandations of the United States Environmental Protection Agency. Further information is available on the official page.(<a href='https://www.airnow.gov/aqi/aqi-basics/'>Link</a>). Hover over the AQI scale to display the levels of health concern.</p>": {
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
	"ru": "<p>Шестиугольники представляют медиану текущих значений датчиков, которые содержатся в области, согласно выбранной опции (PM10, PM2.5, температура, отн. влажность, давление, AQI и пр.). Шкала значений расположена в левом нижнем углу карты.</p> \
<p>Нажав на шестиугольник, вы можете отобразить список всех соответствующих датчиков в виде таблицы. В первом столбце перечислены идентификаторы датчиков. В первой строке вы можете увидеть количество датчиков в данной области и их среднее значение.</p> \
<p>Нажав на символ «плюс» рядом с идентификатором датчика, вы можете отобразить две графики: отдельные измерения за последние 24 часа и среднее значение за 24 часа за последние семь дней. По техническим причинам первый из 8 дней, отображаемых на графике, должен оставаться пустым. \
Значения обновляются каждые 5 минут, чтобы соответствовать частоте измерения датчиков.</p> \
<p>Индекс качества воздуха (AQI) рассчитывается в соответствии с рекомендациями агентства США по охране окружающей среды. Дополнительная информация доступна на <a href='https://www.airnow.gov/aqi/aqi-basics/'>официальной странице</a>). Наведите курсор на шкалу AQI, чтобы отобразить информацию по каждому из уровней индекса.</p>",
	"fr": "<p>Les hexagones représentent la médiane actuelle des valeurs PM10 ou PM25 des stations de mesures contenues dans ceux-ci. Ils sont colorés selon l'échelle en bas à gauche.</p> \
<p>Les nombres présents dans la première colonne du tableau correspondent aux identifiants SensorID. Si plusieurs stations de mesures sont contenues dans un hexagone, la médiane est calculée à partir des valeurs correspondantes.</p> \
<p><b>Attention</b> : Nous montrons sur la carte les valeurs des <b>5 dernières minutes</b>. Les valeurs publiées par les structures officielles de mesure de la qualité de l'air sont des moyennes sur 24 heures. C'est pourquoi, elles peuvent être différentes.</p> \
<p>Un click sur le signe 'plus' devant l'identifiant SensorID permet d'afficher deux graphiques. Le premier 'Last 24 hours' montre le déroulé des mesures sur les dernières 24 heures.  \
Le deuxième graphique montre la moyenne glissante des valeurs sur 24 heures pour les 7 derniers jours.</p>"
	},

// AQI descriptions
	"Good<div class='tooltip-div'>Air quality is considered satisfactory, and air pollution poses little or no risk.</div>": {
		"de": "Gut<div class='tooltip-div'>Die Qualität der Luft ist zufriedenstellend. Die Luftverschmutzung stellt ein geringes oder kein Risiko dar.</div>",
		"bg": "Добро<div class='tooltip-div'> Качеството на въздуха се счита за задоволително, а замърсяването на въздуха представлява малък или никакъв риск.</div>",
		"ru": "Хороший<div class='tooltip-div'>Качество воздуха удовлетворительное и загрезнее представляет мало или вовсе не представляет риска для здоровья.</div>",
		"fr": "Bon<div class='tooltip-div'>La qualité de l'air est satisfaisante. La pollution ne présente qu'un faible risque voire aucun risque.</div>"
	},
	"Moderate<div class='tooltip-div'>Air quality is acceptable; however, for some pollutants there may be a moderate health concern for a very small number of people who are unusually sensitive to air pollution.</div>": {
		"de": "Mäßig<div class='tooltip-div'>Die Luftqualität ist insgesamt akzeptabel. Bei manchen Schadstoffen bestehen jedoch für einen sehr kleinen Personenkreis, der außergewöhnlich empfindlich auf Luftverschmutzung reagiert, eventuell Gesundheitsbedenken.</div>",
		"bg": "Умерено<div class='tooltip-div'>Качеството на въздуха е приемливо; Въпреки това, за някои замърсители обаче може да има опасения за здравето на много малка група от хора, които са изключително чувствителни към замърсяването на въздуха.</div>",	
		"ru": "Умеренный<div class='tooltip-div'>Качество воздуха приемлемое, но отдельные загрязнители в воздухе могут представлять умеренный риск для небольшой группы людей, которые особенно чувствительны к данным видам загрязнения воздуха.</div>",
		"fr": "Modéré<div class='tooltip-div'>La qualité de l'air est acceptable dans l'ensemble. Certaines substances nocives peuvent toutefois entraîner des problèmes de santé chez de petits groupes de personnes particulièrement sensibles à la pollution atmosphérique.</div>"
	},
	"Unhealthy for Sensitive Groups<div class='tooltip-div'>Members of sensitive groups may experience health effects. The general public is not likely to be affected.</div>": {
		"de": "Ungesund für empfindliche Personen<div class='tooltip-div'>Bei empfindlichen Personengruppen können gesundheitliche Auswirkungen auftreten. Die allgemeine Öffentlichkeit ist höchstwahrscheinlich nicht betroffen.</div>",
		"bg": "Нездравословно за чувствителни хора <div class = 'tooltip-div'> Въздействието върху здравето може да възникне в чувствителни групи. Малко вероятно е да се засегне широката общественост.</div>",	
		"ru": "Нездоровый для чувствительных групп<div class='tooltip-div'>Чувствительные группы людей могут испытывать негативное воздействие на здоровье. Для остальных людей влияние будет не столь заметно.</div>",
		"fr": "Nocif pour les personnes sensibles<div class='tooltip-div'>Des effets sur la santé peuvent apparaître chez les personne les plus sensibles. La majorité de la population n'est normalement pas touchée.</div>"
	},
	"Unhealthy<div class='tooltip-div'>Everyone may begin to experience health effects; members of sensitive groups may experience more serious health effects.</div>": {
		"de": "Ungesund<div class='tooltip-div'>Erste gesundheitliche Auswirkungen können sich bei allen Personengruppen einstellen. Bei empfindlichen Personengruppen können ernstere gesundheitliche Auswirkungen auftreten.</div>",
		"bg": "Нездравословно<div class='tooltip-div'>Първите ефекти върху здравето могат да се появят при всички групи хора. В чувствителни групи могат да се появят сериозни последици за здравето.</div>",	
		"ru": "Нездоровый<div class='tooltip-div'>Все группы людей могут начать испытывать негативное влияние на здоровье. Наиболее чуствительные группы людей могут испытывать более серьезное влияние на здоровье.</div>",
		"fr": "Nocif<div class='tooltip-div'>Des effets sur la santé peuvent apparaître chez tous les groupes de personnes. Chez les groupes les plus sensibles, de serieuses conséquences sanitaires sont possibles.</div>"
	},
	"Very Unhealthy<div class='tooltip-div'>Health alert: everyone may experience more serious health effects.</div>": {
		"de": "Sehr ungesund<div class='tooltip-div'>Gesundheitswarnung aufgrund einer Notfallsituation. Die gesamte Bevölkerung ist voraussichtlich betroffen.</div>",
		"bg": "Много нездравословно<div class='tooltip-div'>Здравен сигнал: Всеки може да изпита по-сериозни последици за здравето.</div>",	
		"ru": "Очень нездоровый<div class='tooltip-div'>Сигнал опасности: все группы людей могут испытывать серьезное негативное влияние на здоровье.</div>",
		"fr": "Très nocif<div class='tooltip-div'>Alerte sanitaire grave en raison d'une situation d'urgence. Toute la population est touchée.</div>"
	},
	"Hazardous<div class='tooltip-div'>Health warnings of emergency conditions. The entire population is more likely to be affected.</div>": {
		"de": "Gefährlich<div class='tooltip-div'>Gesundheitsalarm: Jeder könnte ernstere Auswirkungen auf die Gesundheit verspüren</div>",
		"bg": "Опасно<div class='tooltip-div'>Здравни предупреждения за спешни състояния. Цялото население е много вероятно да бъде засегнато.</div>",
		"ru": "Опасный<div class='tooltip-div'>Предупреждения о вреде для здоровья. Весьма вероятно, что представляет опасность для всего населения.</div>",
		"fr": "Dangereux<div class='tooltip-div'>Alerte aux particules fines: Chacun peut sentir des effets nocifs pour la santé.</div>"
	},

// Betterplace
	"Donate for Sensor.Community (Hardware, Software) now on Betterplace.org": {
		"de": "Jetzt spenden für 'Sensor.Community' (Hardware, Software) auf betterplace.org!",
		"nl": "Doneer voor 'Sensor.Community' op betterplace.org",
		"bg": "Дарете за 'Sensor.community' на betterplace.org",
		"ru": "Поддержите проект 'Sensor.Community' на сервисе betterplace.org",
		"fr": "Faire un don pour 'Sensor.community' sur betterplace.org"
	},
	"Donate for<br/>Sensor.Community<br/>now on<br/><span>Betterplace.org</span>": {
		"de": "Jetzt für<br/>Sensor.Community<br/>spenden auf<br/><span>Betterplace.org</span>",
		"nl": "Doneer vor<br/>Sensor.Community<br/>op<br/><span>Betterplace.org</span>",
		"bg": "Дарете за<br/>Sensor.community<br/>на<br/><span>betterplace.org</span>",
		"ru": "Поддержите проект<br/>Sensor.Community<br/>на<br/><span>Betterplace.org</span>",
		"fr": "Faire un don pour<br/>Sensor.community<br/>sur<br/><span>Betterplace.org</span>"
	},
}
