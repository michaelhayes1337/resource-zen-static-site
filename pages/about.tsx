import React from 'react'
import Head from 'next/head'
type Props = {}

const About = (props: Props) => {
  return (
    <div className="aboutPage">
      <Head>
          <title key="title">About</title>
        </Head>
        <h1>What is <span id='spanGreen'>Resource</span> <span id='spanBlue'>Zen</span>?</h1>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget nunc commodo facilisi diam. Justo mi ipsum pharetra nulla commodo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget nunc commodo facilisi diam. Justo mi ipsum pharetra nulla commodo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget nunc commodo facilisi diam. Justo mi ipsum pharetra nulla commodo. 
        </p>
    </div>
  )
}

export default About 