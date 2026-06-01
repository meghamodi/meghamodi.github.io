import React from "react";

function article_1() {
	return {
		date: "2026",
		title: "How to Integrate an Application with an AI Agent",
		description:
			"A practical guide to integrating AI agents into applications, covering architecture, communication patterns, and implementation considerations.",
		keywords: [
			"AI Agents",
			"LLM",
			"Artificial Intelligence",
			"Software Engineering",
			"Megha Modi",
		],
		style: ``,
		body: (
			<React.Fragment>
				<div className="article-content">
					<p>
						This article explores how modern applications can integrate
						with AI agents to automate workflows, improve user
						experiences, and enable intelligent decision-making.
					</p>

					<p>
						It discusses architecture considerations, agent interaction
						patterns, and practical implementation strategies for
						developers building AI-powered systems.
					</p>

					<p>
						<a
							href="https://medium.com/@meghamodi007/how-to-integrate-application-with-ai-agent-41a7f78e5a8c"
							target="_blank"
							rel="noopener noreferrer"
						>
							Read the full article →
						</a>
					</p>
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "2026",
		title: "SadServers Series #2: Saint John – What Is Writing to This Log File?",
		description:
			"A walkthrough of solving the Saint John SadServers challenge using Linux troubleshooting, log analysis, and process investigation techniques.",
		keywords: [
			"SadServers",
			"Linux",
			"DevOps",
			"SRE",
			"Troubleshooting",
			"Megha Modi",
		],
		style: ``,
		body: (
			<React.Fragment>
				<div className="article-content">
					<p>
						A deep dive into diagnosing unexpected log activity in a Linux
						environment through systematic troubleshooting and process
						inspection.
					</p>

					<p>
						The article demonstrates practical debugging techniques that
						are useful for DevOps engineers, SREs, and backend developers.
					</p>

					<p>
						<a
							href="https://medium.com/@meghamodi007/sadservers-series-2-saint-john-what-is-writing-to-this-log-file-7cf72313015a"
							target="_blank"
							rel="noopener noreferrer"
						>
							Read the full article →
						</a>
					</p>
				</div>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2];

export default myArticles;