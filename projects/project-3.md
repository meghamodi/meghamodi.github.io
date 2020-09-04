---
layout: project
type: project
image: images/newplot.png
title: COVID-19 Visualization
permalink: projects/covid
# All dates must be YYYY-MM-DD format!
date: 2020-08-25
labels:
  - Python
  - Pandas
  - Plotly
  - Jupyter Notebook
summary: Analysing and Visualization  of confirmed, recovered and deaths COVID-19 cases in states of India
---

<img class="ui image" src="{{ site.baseurl }}/images/newplot.png">

Covid-19 has shown the importance of dashboards and visualization for everyone. Various countries and even states/regions have created their own COVID-19 dashboards to educate people on the pandemic. Visualizing the data for data analysis or sharing the information is very much important while trying to grasp the whole model. The data collection will be from https://api.covid19india.org/csv/latest/state_wise_daily.csv which gives you a daily report of all the states of India.

The  raw data is in the csv format. I would be performing Exploratory Data Analysis or Data Cleaning by analyzing the data, which columns are important, the parts that need to be removed, checking for null values and more. The data is preprocessed and appropriate headings is turned in, redundant rows are dropped.

For the visualization for different states, we need the latitude, longitude of the regions, so to do that we will be getting the lat/long coordinates of the states using the function locate. The function will be iterating on all the rows and will be saving in a list.

Visualization was done with the help of Plotly. We use day as the animation frame so values will change based on the days to show the increase or decline in covid cases. The latitude, longitude are used to display on the states on the map. The number of confirmed cases will be displayed on the map.



Source: <a href="https://github.com/meghamodi/covid-dashboard"><i class="large github icon "></i>COVID-19 Visualization</a>

