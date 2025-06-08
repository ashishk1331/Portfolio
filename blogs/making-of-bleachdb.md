---
title: Making of BleachDB
slug: making-of-bleachdb
pubDate: 2025-04-04
description: A breakdown of how I developed and deployed a database focused on the anime Bleach, from data scraping to hosting.
author: Ashish Khare
hasAudio: false
---

![banner](./assets/making-of-bleachdb/banner.webp)

## TL;DR

Here you go: [Bleach Database](https://github.com/ashishk1331/bleach-database)

This GitHub repository contains JSON files for all Bleach characters, with their avatars stored as PNG files in the `images` folder. Else if you're looking for the API: [BleachDB API](https://bleach-api-8v2r.onrender.com/). To understand more about the API and how to use it, [read here.](https://github.com/ashishk1331/bleach-api#README)

## The BleachDB

Approximately two years ago, during the summer, I developed a strong interest in Bleach. I was so enthusiastic that I wanted to compile a comprehensive database or dataset of all its characters. After searching online and finding existing resources lacking in completeness, I decided to create my own.

Therefore, I used Python to scrape data from the [Bleach fandom website](https://bleach.fandom.com/wiki/Bleach_Wiki). While I understand that scraping may not be permitted, my intention was to create a useful index for others and to demonstrate web scraping techniques with Python. I hope the fandom community will understand my purpose. Pretty please!

I used the straightforward approach of combining `requests` and `bs4` for scraping. The plan was to collect links to each character's individual page and then use a script to extract data from those pages. Subsequently, I organized the data into single JSON files and hosted them as an API using fastapi on Render.

In this post, I detail my data scraping process and how I utilize Python for this task.

## Process

I used the `requests` and `bs4` Python libraries to scrape the Fandom wiki. First, I created an index of all character races in the Bleach Universe: humans, Arrancar, Quincy, and Shinigami, totaling approximately 240 characters. Then, I wrote a series of if-else statements to process the data and store it as strings in a dictionary. The resulting script was 190 lines long. Kidding! There were for-loops as well. ;)

Initially, I left the avatar URLs as the original CDN links from Fandom. Later, someone contacted me on Twitter, reporting CORS errors with the hosted API, despite it using the same database. I immediately realized the cause: the Fandom CDN's server URL was different from my API's URL/IP address, hence the CORS issue.

Unfortunately, I left it unresolved for two years. I apologize for the inconvenience! I recently revisited the issue and decided to download all avatars and include them directly within the API's distribution. Furthermore, the images varied significantly in dimensions, with some being 240 pixels wide while others reached HD resolutions of 1124 pixels. Additionally, despite being avatars, which should ideally be square, they were all irregularly sized.

I used the Pillow library for image manipulation to center-crop and scale down the images, ensuring they were all uniform squares of 240 pixels.

## Future Enhancements

If I were to write a scraper now or in the future, I would definitely explore LLM-based scraping to accelerate the tabulation and data structuring process. This would significantly reduce the time spent writing complex if-statements to handle variations in webpage structures. The key advantage of LLM-based scraping is its ability to understand context and handle ambiguity. I would be keen to use LLM crawlers like Firecrawl or Crawl4ai.

Additionally, a useful technique involves converting relevant sections of the webpage into markdown format before feeding them to the LLM. This significantly reduces token usage, leading to cost savings with LLM providers. I would definitely consider using a tool like Jina Reader for this purpose.

## Conclusion

I would love to thank Fandom for the data, and please share about them whenever using the api or the data. _Big Shoutout to the Bleach Fandom Wiki!_
