window.weatherWidgetConfig = window.weatherWidgetConfig || [];
window.weatherWidgetConfig.push({
    selector: "#weatherWidget",
    apiKey: "RUFA9F2MTSJ3MXGEZ95NY5UNC", //Sign up for your personal key
    location: "GAZIPUR, DHAKA, BANGLADESH", //Enter an address
    unitGroup: "metric", //"us = Fahrenheit" or "metric = Degrees "
    forecastDays: 5, //how many days forecast to show
    title: "Gazipur, Dhaka", //optional title to show in the 
    showTitle: true,
    showConditions: true
});

(function () {
    var d = document, s = d.createElement('script');
    s.src = 'https://www.visualcrossing.com/widgets/forecast-simple/weather-forecast-widget-simple.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
})();