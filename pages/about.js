import React from 'react';
import Link from 'next/link';
import { track } from '@vercel/analytics';


function About() {
  return (
    <div className="about-page">
      <header className="header">
        <h1>Product Finder</h1>
      </header>

      <div className="container">
        <Link href="/" className="back-to-home">Back to Home</Link>

        <div className="step">
          <h2>How It Works</h2>
          <ol>
            <li>
				  Users search for products. API returns{' '}
				  <Link href="/products.json" target="_blank" rel="noopener noreferrer" onClick={() => {
        	track('JSON Log Viewed')
      	  }}>
					results
				  </Link>{' '}
				  and{' '}
				  <Link href="/cached" rel="noopener noreferrer">
					caches
				  </Link>{' '}
				  it. (Implemented)
			</li>

            <li>AI suggests personalized recommendations and sorts and filters results. (To-Do)</li>
            <li>Advanced filters refine results based on trends and past habits. (To-Do)</li>
          </ol>
        </div>

        <div className="step">
          <h2>
			  <a
				href="https://www.rainforestapi.com/pricing"
				target="_blank"
				rel="noopener noreferrer"
			  >
				RainForest Amazon API Pricing Plans
			  </a>
		  </h2>
			<ul>
            <li>Starter: $59/month, 10,000 requests.</li>
            <li>Production: $375/month, 250,000 requests.</li>
            <li>BigData: $1,000/month, 1,000,000 requests.</li>
          </ul>
        </div>

        <div className="step">
          <h2>Future Features</h2>
          <ul>
            <li>Caching for faster load times.</li>
            <li>Multiple data sources for a wider catalog.</li>
            <li>User preferences for tailored results.</li>
            <li>Auto-category selection and precise filters.</li>
            <li>Responsive design and top-notch performance.</li>
            <li>Data security and privacy.</li>
          </ul>
        </div>

        <div className="step">
          <h2>Next Steps</h2>
          <ul>
            <li>User feedback-driven improvements.</li>
            <li>Scalable architecture for growth.</li>
            <li>Analytics for insights.</li>
            <li>Comprehensive documentation and support.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
