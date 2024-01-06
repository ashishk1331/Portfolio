import Link from "next/link";
import Image from "next/image";

import Icon from "@/components/icon_set";
import Header from "@/components/Header";
import GoBack from "@/components/GoBack";
import Footer from "@/components/Footer";

export default function (props) {
	return (
		<>
			<Header breadcrumbs={["Home", "Resume"]}>
				<GoBack href="/" />
			</Header>

			<h1 className="mt-16">Ashish Khare</h1>
			<p className="lead">
				Btech (in CSE), KNIT Sultanpur, Uttar Pradesh, India. 228118
			</p>
			<div className="flex flex-wrap items-center gap-4">
				<a href="https://twitter.com/AshishK1331">
					<Icon name="Twitter" />
				</a>
				<a href="https://github.com/ashishk1331">
					<Icon name="Github" />
				</a>
				<a href="https://www.linkedin.com/in/ashishk1331/">
					<Icon name="LinkedIn" />
				</a>
			</div>

			<hr />

			<Education />

			<hr />

			<Projects />

			<hr />

			<Skills />

			<hr />

			<Achievements />

			<hr />

			<Cocurricular />

			<hr />

			<Hobbies />

			<Footer />
		</>
	);
}

function Skills() {
	let skills = [
		"python",
		"flask",
		"HTML / CSS / JS",
		"Tailwind CSS",
		"NextJS",
		"NodeJS",
		"ExpressJS",
		"API",
		"Postman",
		"Git",
		"Github",
		"Inkscape",
		"DSA",
		"Linux",
		"Figma",
	];
	return (
		<>
			<h2>Skills</h2>
			<ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-2">
				{skills.map((skill) => (
					<li>{skill}</li>
				))}
			</ul>
		</>
	);
}

function Education() {
	return (
		<>
			<h2>Education</h2>
			<ul>
				<li>
					<div className="flex flex-col items-left gap-1">
						<h4>B.Tech in Computer Science and Engineering</h4>
						<span>
							Kamla Nehru Institute of Technology, Sultanpur
						</span>
						<span className="flex flex-col sm:flex-row items-left sm:items-center justify-between">
							<span>2021-2025(Ongoing)</span>
							<span>2nd Year CGPA: 8.4</span>
						</span>
					</div>
				</li>
				<li>
					<div className="flex flex-col items-left gap-1">
						<h4>Intermediate</h4>
						<span>Dr. Virendra Swarup Education Center (ISC)</span>
						<span className="flex items-center justify-between">
							<span>2020</span>
							<span>94.2%</span>
						</span>
					</div>
				</li>
				<li>
					<div className="flex flex-col items-left gap-1">
						<h4>High School</h4>
						<span>Dr. Virendra Swarup Education Center (ICSE)</span>
						<span className="flex items-center justify-between">
							<span>2018</span>
							<span>94.6%</span>
						</span>
					</div>
				</li>
			</ul>
		</>
	);
}

function Projects() {
	return (
		<>
			<h2>Projects</h2>
			<ul>
				<li>
					<div className="flex flex-col items-left gap-1">
						<h3>
							<a
								href="https://tetra-docs.vercel.app/"
								className="font-normal no-underline border-b-2"
							>
								Tetra Pack
							</a>
						</h3>
						<p>
							Notion API, React, Storybook, ESBuild and PropTypes.
						</p>
						<span>
							A fast, semantic and open source Notion API data
							renderer for reactJS.
						</span>
						<ul>
							<li>
								Configurable pure javascript, with reactJS,
								parser support for blocks and annotations.
							</li>
							<li>
								Used storybook to test component rendering in
								isolation.
							</li>
							<li>
								Used PropTypes to ensure correct React props are
								passed.
							</li>
							<li>
								Used ESBuild for faster bundling of source code
							</li>
						</ul>
					</div>
				</li>

				<li>
					<div className="flex flex-col items-left gap-1">
						<h3>
							<a
								href="https://urban-seven.vercel.app/"
								className="font-normal no-underline border-b-2"
							>
								Urban Player
							</a>
						</h3>
						<p>Next.js, Zustand, ytdl-core and tailwind css.</p>
						<span>
							An app that lets you listen to youtube videos
							instead of watching them.
						</span>
						<ul>
							<li>
								Scraped yt video links for audio using YTDL-core
								library
							</li>
							<li>
								Managed complete state of the app with Zustand
								library
							</li>
							<li>
								Established client-server communication bias
								with NextJS for minimal server actions flow
							</li>
							<li>
								Used Tailwind CSS to style components and build
								app UI.
							</li>
						</ul>
					</div>
				</li>

				<li>
					<div className="flex flex-col items-left gap-1">
						<h3>
							<a
								href="https://pint-blue.vercel.app/"
								className="font-normal no-underline border-b-2"
							>
								Pint
							</a>
						</h3>
						<p>
							Nextjs, Appwrite, zustand, tailwindcss and radix UI.
						</p>
						<span>
							An app that frames the screenshots inside a
							beautiful gradient pattern.
						</span>
						<ul>
							<li>
								Handled authentication and storage for the app
								with Appwrite Cloud services
							</li>
							<li>Managed user data and app data with Zustand</li>
							<li>
								Used Tailwind CSS and radix UI for accessible
								and configurable components.{" "}
							</li>
						</ul>
					</div>
				</li>
			</ul>
		</>
	);
}

function Achievements() {
	return (
		<>
			<h2>Achievements</h2>
			<ul>
				<li>
					<a
						href="https://leetcode.com/flangdev3000/"
						className="font-normal no-underline border-b-2"
					>
						Leetcode 190+ problems
					</a>
				</li>
				<li>
					<a
						href="https://www.codechef.com/users/ashuzon"
						className="font-normal no-underline border-b-2"
					>
						Codechef highest Rating 1514
					</a>
				</li>
				<li>
					<a
						href="https://www.hackerrank.com/ashuzon"
						className="font-normal no-underline border-b-2"
					>
						Hackerrank Python 5 star
					</a>
				</li>
				<li>
					<a
						href="https://github.com/ashishk1331"
						className="font-normal no-underline border-b-2"
					>
						Completed Hacktoberfest 2022
					</a>
				</li>
				<li>
					<a
						href="https://learn.gitkraken.com/certificates/ejdh01j7kb"
						className="font-normal no-underline border-b-2"
					>
						Completed Git Foundational Certification Course by Git
						Kraken
					</a>
				</li>
				<li>
					<a
						href="https://badgr.com/public/assertions/s9oX8LzvR9iqpMY4JuMw-A"
						className="font-normal no-underline border-b-2"
					>
						Postman Student Expert
					</a>
				</li>
				<li>
					<a
						href="https://googlecloud.qwiklabs.com/public_profiles/b12af922-7e81-4ce2-b1b4-7ee954b4f1aa"
						className="font-normal no-underline border-b-2"
					>
						Completed Google Cloud Ready Facilitator Program 2022
					</a>
				</li>
			</ul>
		</>
	);
}

function Cocurricular() {
	return (
		<>
			<h2>CO-CURRICULAR</h2>
			<ul>
				<li>
					Graphic Designer in Cultural Council of KNIT, Sultanpur.
					Also, designed their logo.
				</li>
				<li>
					Tag Moderator for ReactJS and Javascript at{" "}
					<a
						href="https://dev.to/"
						className="font-normal no-underline border-b-2"
					>
						@ThePracticalDev
					</a>
				</li>
			</ul>
		</>
	);
}

function Hobbies() {
	return (
		<>
			<h2>Hobbies</h2>
			<ul>
				<li>Video Games</li>
				<li>Reading Books</li>
				<li>Photography</li>
			</ul>
		</>
	);
}
