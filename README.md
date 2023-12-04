# Snap News - React News App

## Overview

Welcome to Snap News, a React-based news application that keeps you informed with the latest news articles. Snap News utilizes the News API to fetch real-time news data and provides a user-friendly interface for a seamless news browsing experience.

## Deployment

The project is live and can be accessed [here](https://snap-news.vercel.app/).

## Features

- **News Categories:** Explore news articles conveniently categorized for easy access.

- **Responsive Design:** Enjoy a seamless experience on various devices, thanks to the responsive design.

## Installation

To set up the project locally, follow these steps:

1. Clone the repository: `git clone https://github.com/sokebat/Snap-News.git`
2. Navigate to the project directory: `cd Snap-News`
3. Install dependencies: `npm install`

## Usage

1. Obtain an API key from [News API](https://newsapi.org/) and replace `YOUR_API_KEY` in the `App.js` file.

```javascript
const API_Key = "YOUR_API_KEY";
const API = `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=${API_Key}`;
